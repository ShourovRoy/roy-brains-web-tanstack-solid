import { useState } from 'react'
import { Menu, X, Cpu, ExternalLink } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 border-b border-slate-800/50 bg-slate-950/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <div className="text-2xl font-black tracking-tighter text-white">
            roy<span className="text-blue-500">brains</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-semibold tracking-wide">
          <a
            href="https://mogtok.roybrains.com"
            target="_blank"
            className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 uppercase tracking-widest"
          >
            MogTok ERP <ExternalLink className="w-3 h-3" />
          </a>
          
          <div className="h-6 w-px bg-slate-800" />

          <a 
            href="https://mogtok.roybrains.com/signup/"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-900/20 active:scale-95"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 animate-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col p-6 space-y-6 bg-slate-950/95 backdrop-blur-lg">
            <a 
              href="#product" 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-blue-400"
            >
              Products
            </a>
            <a 
              href="https://mogtok.roybrains.com" 
              className="text-lg font-medium text-slate-300 hover:text-blue-400 flex items-center gap-2"
            >
              MogTok ERP <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href="https://mogtok.roybrains.com/signup/"
              className="w-full bg-blue-600 text-white text-center py-4 rounded-2xl font-bold shadow-lg shadow-blue-900/40"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}