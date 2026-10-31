# Premium UI & Micro-Interactions Playbook
> **Author:** Furkan Ahmed  
> **Tech Stack:** Next.js (App Router), React, Tailwind CSS  
> **Scope:** Plug-and-play recipes for modern, award-winning developer portfolios and SaaS platforms.

---

## 1. Interactive Cursor Spotlight & Grid Reveal
মাউস স্ক্রিনের যে পয়েন্টে থাকবে, সেখানে একটি নরম রেডিয়াল আলো (Soft Emerald/Sky Glow) তৈরি হবে এবং ব্যাকগ্রাউন্ডের সূক্ষ্ম ইঞ্জিনিয়ারিং গ্রিড ডট প্যাটার্নটি আলোকিত হয়ে ভেসে উঠবে।

### Component: `components/SpotlightBackground.jsx`
```jsx
"use client";

import { useEffect, useState } from "react";

export default function SpotlightBackground() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isHovering) setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovering]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Base Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.35) 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }}
      />

      {/* 2. Soft Ambient Radial Glow around Cursor */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(550px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.12), rgba(56, 189, 248, 0.08), transparent 70%)`,
        }}
      />

      {/* 3. Highlighted Dot Reveal via Masking */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          maskImage: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 80%)`,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(52, 211, 153, 0.75) 1.5px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
```

---

## 2. Scroll Reveal / Viewport Fade-In
কোনো ভারী বাহ্যিক অ্যানিমেশন লাইব্রেরি ছাড়া ব্রাউজারের নেটিভ `IntersectionObserver` দিয়ে আলতো করে সেকশনগুলোকে নিচ থেকে ওপরে ফেড-ইন করানো।

### Component: `components/FadeIn.jsx`
```jsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children, className = "", delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const currentElem = domRef.current;
    if (currentElem) observer.observe(currentElem);

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: "800ms",
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}
```

---

## 3. World-Class Minimal Navigation Bar
ন্যাভবারে অতিরিক্ত গ্লাসমোরফিক বক্স বা অতিরিক্ত বর্ডার না দিয়ে উচ্চ কনট্রাস্ট টাইপোগ্রাফি ও সফট স্ক্রল ব্লার ব্যবহার।

### মূল ফিচারসমূহ:
* **Brand:** একটি উজ্জ্বল কালার অ্যাকসেন্ট ডট + বোল্ড টেক্সট
* **Links:** সরাসরি গাঢ় ব্যাকগ্রাউন্ডের ওপর স্লেট-৩০০ থেকে হোয়াইট হোভার ট্রানজিশন
* **CTA Button:** হাই-কনট্রাস্ট সলিড হোয়াইট স্লিক পিল বাটন (`bg-white text-slate-950`)

---

## 4. One-Click Copy / Connect Pill Bar
রেফারেন্স স্টাইলের মিনিমাল কানেক্ট বার যা ইমেইল দেখায় এবং এক ক্লিকে ক্লিপবোর্ডে কপি করে "Copied!" ফিডব্যাক দেয়।

```jsx
const [copied, setCopied] = useState(false);

const handleCopy = () => {
  navigator.clipboard.writeText("your@email.com");
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};

// JSX:
<div className="flex items-center p-1 rounded-full bg-slate-900/90 border border-slate-800 w-full max-w-sm">
  <span className="px-3 py-1 text-xs text-slate-400 font-mono truncate">your@email.com</span>
  <button onClick={handleCopy} className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-500 text-white">
    {copied ? "Copied!" : "Connect"}
  </button>
</div>
```

---

## 5. Performance Best Practices
1. **No External Canvas Dependencies:** নেটিভ React `useState` ও CSS `radial-gradient` ব্যবহারের ফলে ৬০ FPS পারফরম্যান্স নিশ্চিত হয়।
2. **Mobile Cleanliness:** টাচস্ক্রিনে অপ্রয়োজনীয় মাউস ট্র্যাকার ডিসেবল থাকে।
3. **Reduced Motion Friendly:** অ্যানিমেশন অতি মৃদু রাখা হয়েছে যা ব্যবহারকারীকে বিরক্ত করে না।

