import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, BarChart3, ShieldCheck } from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

const Hero = () => (
  <section className="flex flex-col items-center text-center py-24 px-6 bg-radial-gradient">
    <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 mb-6">
      Now in Beta: MogTok ERP system
    </div>
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl mb-6">
      Engineering the next generation of{' '}
      <span className="text-blue-600">SaaS excellence.</span>
    </h1>
    <p className="text-lg text-slate-600 max-w-2xl mb-10">
      RoyBrains, founded by Shourov Roy, specializes in building robust,
      scalable, and intuitive software solutions for the modern enterprise.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href="https://mogtok.roybrains.com"
        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
      >
        Try MogTok ERP
      </a>
    </div>
  </section>
)

const MogTokPreview = () => (
  <section id="product" className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden grid lg:grid-cols-2">
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">
            Featured Product
          </h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6 text-balance">
            MogTok ERP: The Operating System for Your Business.
          </h3>
          <p className="text-slate-600 text-lg mb-8">
            Manage your entire workflow from a single dashboard. MogTok is the
            first major release from the RoyBrains laboratory, focusing on
            seamless resource planning.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Analytics</h4>
                <p className="text-xs text-slate-500">Real-time data</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Secure</h4>
                <p className="text-xs text-slate-500">Enterprise grade</p>
              </div>
            </div>
          </div>
          <a
            href="https://mogtok.roybrains.com"
            className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
          >
            Visit mogtok.roybrains.com <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="bg-slate-900 min-h-100 relative flex items-center justify-center overflow-hidden">
          {/* Replace with your actual dashboard screenshot */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
          <div className="relative p-10">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl p-4 shadow-2xl w-full max-w-md">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-slate-700 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-slate-700 rounded w-full animate-pulse"></div>
                <div className="h-20 bg-blue-600/20 rounded border border-blue-500/30"></div>
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
    <>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <Hero />
        <MogTokPreview />
        <footer className="py-12 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-sm">
            Built with precision by{' '}
            <span className="font-semibold text-slate-900">Shourov Roy</span>
          </p>
          <p className="text-slate-400 text-xs mt-2 uppercase tracking-widest font-medium">
            © {new Date().getFullYear()} RoyBrains SaaS Co.
          </p>
        </footer>
      </div>
    </>
  )
}
