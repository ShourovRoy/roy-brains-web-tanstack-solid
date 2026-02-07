import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Zap,
  Layers,
  Globe,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

const Hero = () => (
  <section className="relative flex flex-col items-center text-center pt-32 pb-20 px-6 overflow-hidden">
    {/* Animated Background Glow for Dark Mode */}
    <div className="absolute top-0 -z-10 h-full w-full bg-slate-950">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-125 w-125 -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(29,78,216,0.15)] opacity-50 blur-[80px]"></div>
    </div>

    <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-400 mb-8 animate-fade-in backdrop-blur-sm">
      <span className="relative flex h-2 w-2 mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
      </span>
      Now in Beta: MogTok ERP system
    </div>

    <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight text-white max-w-5xl mb-8 leading-[1.1]">
      Engineering the next gen of{' '}
      <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 bg-clip-text text-transparent">
        SaaS excellence.
      </span>
    </h1>

    <p className="text-base md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
      RoyBrains, founded by{' '}
      <span className="text-white font-medium">Shourov Roy</span>, specializes
      in building robust, scalable software for the modern enterprise.
    </p>

    <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto px-4">
      <a
        href="http://mogtok.roybrains.com/signup/"
        className="group px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-2"
      >
        Try MogTok ERP
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </section>
)

const MogTokPreview = () => (
  <section id="product" className="py-24 bg-slate-950 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="relative group bg-slate-900/50 rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden grid lg:grid-cols-2">
        {/* Text Side */}
        <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-800/50">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">
            <Layers className="w-4 h-4" /> Featured Product
          </div>

          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            MogTok ERP: The OS for Your Business.
          </h3>

          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Manage your entire workflow from a single dashboard. MogTok is the
            first major release from RoyBrains, focusing on seamless resource
            planning.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            {[
              { icon: BarChart3, title: 'Analytics', desc: 'Real-time data' },
              { icon: ShieldCheck, title: 'Secure', desc: 'Enterprise grade' },
              { icon: Zap, title: 'Fast', desc: 'Zero-latency UI' },
              { icon: Globe, title: 'Global', desc: 'Cloud synced' },
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <feature.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-slate-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="http://mogtok.roybrains.com"
            className="group text-blue-400 font-bold flex items-center gap-2 text-lg hover:text-blue-300 transition-colors"
          >
            Visit mogtok.roybrains.com
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        {/* Visual Side */}
        <div className="bg-slate-900 min-h-100 relative flex items-center justify-center p-6 lg:p-12 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>

          {/* The "Dashboard" Mockup */}
          <div className="relative w-full max-w-md bg-slate-950/80 backdrop-blur-2xl border border-slate-700/50 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform lg:rotate-2 group-hover:rotate-0 transition-transform duration-500">
            <div className="flex gap-1.5 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
            </div>
            <div className="space-y-4">
              <div className="h-2 bg-slate-800 rounded-full w-1/2"></div>
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="h-16 bg-blue-600/10 border border-blue-500/20 rounded-lg"></div>
                <div className="h-16 bg-slate-800/50 rounded-lg"></div>
                <div className="h-16 bg-slate-800/50 rounded-lg"></div>
              </div>
              <div className="h-32 bg-slate-800/30 rounded-xl flex items-center justify-center">
                <BarChart3 className="text-slate-700 w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-blue-500/30">
      <main>
        <Hero />
        <MogTokPreview />
      </main>

      <footer className="py-20 border-t border-slate-900 bg-slate-950 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 font-bold text-xl tracking-tighter">
            roy<span className="text-blue-500">brains</span>
          </div>
          <p className="text-slate-500 text-sm max-w-sm mx-auto mb-6 leading-relaxed">
            Crafting the digital future, one line of code at a time. Designed
            and built by{' '}
            <span className="text-slate-300 font-medium">Shourov Roy</span>.
          </p>
          <div className="h-px w-12 bg-slate-800 mx-auto mb-6"></div>
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-semibold">
            © {new Date().getFullYear()} RoyBrains SaaS Co. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
