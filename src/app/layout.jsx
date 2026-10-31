import "./globals.css";

export const metadata = {
  title: "Furkan Ahmed | Full-Stack Developer & IT Instructor",
  description: "Official portfolio of Furkan Ahmed — Full-Stack Web Developer, IT Instructor, and Co-Founder at Dremoy IT. Specializing in Next.js, React, Laravel, and modern web systems.",
  keywords: ["Furkan Ahmed", "Full-Stack Developer", "Next.js", "React", "Laravel", "Dremoy IT", "Web Developer Bangladesh"],
  authors: [{ name: "Furkan Ahmed" }],
  creator: "Furkan Ahmed",
  openGraph: {
    title: "Furkan Ahmed | Full-Stack Developer & IT Instructor",
    description: "Building scalable web solutions and empowering future developers with modern architectures.",
    url: "https://furkanahmed.vercel.app",
    siteName: "Furkan Ahmed Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const removeNetlifyElements = function() {
                  const selectors = [
                    '#netlify-badge',
                    '[data-netlify-badge]',
                    '.netlify-badge',
                    '[class*="netlify-badge"]',
                    '[id*="netlify-feedback"]',
                    '[class*="netlify-feedback"]',
                    'div[data-netlify-drawer]'
                  ];
                  selectors.forEach(sel => {
                    document.querySelectorAll(sel).forEach(el => el.remove());
                  });
                  // Scan for injected floating links/containers containing "Netlify"
                  document.querySelectorAll('a[href*="netlify.com"], button, div').forEach(el => {
                    if (el.innerText && el.innerText.toLowerCase().includes('powered by netlify')) {
                      let current = el;
                      while (current && current.parentElement && current.parentElement !== document.body) {
                        current = current.parentElement;
                      }
                      if (current) current.remove();
                    }
                  });
                };
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', removeNetlifyElements);
                } else {
                  removeNetlifyElements();
                }
                const observer = new MutationObserver(removeNetlifyElements);
                observer.observe(document.documentElement, { childList: true, subtree: true });
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#0B0F19] text-slate-100 antialiased selection:bg-sky-500/20 selection:text-sky-300">
        {children}
      </body>
    </html>
  );
}

