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
      <body className="min-h-screen bg-[#0B0F19] text-slate-100 antialiased selection:bg-sky-500/20 selection:text-sky-300">
        {children}
      </body>
    </html>
  );
}

