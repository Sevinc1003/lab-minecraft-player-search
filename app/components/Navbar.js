import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Başlıq */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-wider text-green-500 flex items-center gap-2">
              ⛏️ MC-Explorer
            </span>
          </div>
          
          {/* Naviqasiya Linkləri (Next.js Link komponenti ilə səhifə reload olmur) */}
          <div className="flex space-x-6 text-sm font-medium">
            <Link href="/" className="hover:text-green-400 transition-colors">
              Home
            </Link>
            <Link href="/search" className="hover:text-green-400 transition-colors">
              Search
            </Link>
            <Link href="/about" className="hover:text-green-400 transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}