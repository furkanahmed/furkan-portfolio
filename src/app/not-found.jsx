import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "404 — Page Not Found | Furkan Ahmed",
  description: "The page or project study you are looking for does not exist or has been relocated.",
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-black text-[#E8DFD8] flex flex-col justify-between selection:bg-amber-400/20 selection:text-amber-200">
      <Navbar />

      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-xl w-full text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-amber-400 bg-amber-950/40 border border-amber-500/30">
            <Compass className="w-3.5 h-3.5 animate-spin" />
            <span>ERROR 404 &bull; ROUTE NOT FOUND</span>
          </div>

          {/* Massive 404 Headline */}
          <div className="space-y-3">
            <h1 className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-300 to-slate-700 tracking-tight">
              404
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Page or Project Not Found
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto leading-relaxed">
              The page you are looking for might have been moved, renamed, or is currently unavailable.
            </p>
          </div>

          {/* Action Links */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#D4AF37] hover:bg-[#F3E5AB] text-black transition-all duration-300 shadow-md hover:shadow-amber-500/20"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>

            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium bg-[#0B1120] hover:bg-[#151D30] text-slate-200 hover:text-white border border-white/10 hover:border-amber-400/40 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 text-amber-400" />
              <span>View Verified Projects</span>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

