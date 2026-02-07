export default function Header() {
  return (
    <>
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-bold tracking-tighter text-slate-900">
          roy<span className="text-blue-600">brains</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#product" className="hover:text-blue-600 transition-colors">
            Products
          </a>

          <a
            href="https://mogtok.roybrains.com"
            className="hover:text-blue-600 transition-colors"
          >
            MogTok ERP
          </a>
        </div>
        <button className="bg-slate-900 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-all shadow-sm">
          Get Started
        </button>
      </nav>
    </>
  )
}
