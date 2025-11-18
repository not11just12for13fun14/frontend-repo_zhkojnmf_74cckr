import { Cpu, Server, Activity, Terminal } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'Optimized runtimes',
    desc: 'Node.js and Python environments tuned for low latency and stability, perfect for Discord bot frameworks.'
  },
  {
    icon: Server,
    title: 'Global nodes',
    desc: 'Deploy close to your users on our global edge, minimizing gateway ping and improving command response times.'
  },
  {
    icon: Activity,
    title: 'Smart scaling',
    desc: 'Auto‑restart, health checks, and metrics out of the box. Scale vertically or horizontally with one click.'
  },
  {
    icon: Terminal,
    title: '1‑click templates',
    desc: 'Start from proven bot templates for moderation, music, and slash commands—no setup headaches.'
  }
]

function Features() {
  return (
    <section id="features" className="relative bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">Everything you need to host bots</h2>
          <p className="text-blue-100/80 mt-3">Built for performance, reliability, and ease of use.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-400/40 transition-colors">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/15 border border-blue-400/20 mb-4">
                <f.icon className="w-5 h-5 text-blue-300" />
              </div>
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-blue-100/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
