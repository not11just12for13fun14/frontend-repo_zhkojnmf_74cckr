import Spline from '@splinetool/react-spline'
import { Rocket, Shield, Clock } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(59,130,246,0.25),transparent),radial-gradient(900px_400px_at_90%_20%,rgba(168,85,247,0.2),transparent),radial-gradient(1200px_600px_at_50%_120%,rgba(15,23,42,1),rgba(15,23,42,1))]" />
        <div className="absolute inset-0 mix-blend-overlay opacity-[0.35] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center relative">
        {/* Left: Copy */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-400/20 px-3 py-1 text-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Live Discord bot hosting
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Go Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400"> — Discord bot hosting</span>
          </h1>

          <p className="text-lg sm:text-xl text-blue-100/80 max-w-xl">
            Spin up, scale, and monitor your Discord bots with zero DevOps. Fast nodes, 24/7 uptime, and one‑click deployments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 transition-colors">
              Get started free
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 border border-white/10 transition-colors">
              Explore features
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-6">
            <div className="flex items-center gap-3 text-blue-100/90">
              <div className="p-2 rounded-md bg-blue-500/15 border border-blue-400/20">
                <Clock className="w-5 h-5 text-blue-300" />
              </div>
              <span>24/7 uptime</span>
            </div>
            <div className="flex items-center gap-3 text-blue-100/90">
              <div className="p-2 rounded-md bg-blue-500/15 border border-blue-400/20">
                <Rocket className="w-5 h-5 text-blue-300" />
              </div>
              <span>One‑click deploy</span>
            </div>
            <div className="flex items-center gap-3 text-blue-100/90">
              <div className="p-2 rounded-md bg-blue-500/15 border border-blue-400/20">
                <Shield className="w-5 h-5 text-blue-300" />
              </div>
              <span>DDoS protected</span>
            </div>
          </div>
        </div>

        {/* Right: Spline */}
        <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] rounded-2xl border border-white/10 bg-gradient-to-b from-indigo-900/20 to-slate-900/40">
          <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Soft glow */}
          <div className="pointer-events-none absolute -inset-6 blur-3xl rounded-[2rem] bg-gradient-to-r from-blue-600/15 via-indigo-500/10 to-sky-400/10" />
        </div>
      </div>
    </section>
  )
}

export default Hero
