import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-3 text-white">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg" />
          <span className="font-semibold tracking-tight">Go Digital</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-blue-100/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline-flex text-sm px-4 py-2 rounded-md bg-white/10 hover:bg-white/15 border border-white/10 text-white transition-colors">Log in</a>
          <a href="#" className="text-sm px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-400 text-white transition-colors">Start free</a>
          <button className="md:hidden p-2 text-white/80 hover:text-white"><Menu className="w-5 h-5" /></button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
