function Pricing() {
  return (
    <section id="pricing" className="relative bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Simple, scalable pricing</h2>
          <p className="text-blue-100/80 mt-3">Start for free. Upgrade when you need more power.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Starter', price: '$0', desc: 'Perfect for testing and small bots', features: ['512MB RAM', 'Shared CPU', '1 project', 'Community support'] },
            { name: 'Pro', price: '$9', highlight: true, desc: 'For growing bots with active communities', features: ['2GB RAM', '2 vCPU', '5 projects', 'Priority support'] },
            { name: 'Scale', price: '$29', desc: 'Serious power for serious bots', features: ['8GB RAM', '4 vCPU', 'Unlimited projects', 'SLA support'] }
          ].map((plan) => (
            <div key={plan.name} className={`relative rounded-2xl p-6 bg-white/[0.04] border ${plan.highlight ? 'border-blue-400/50 shadow-[0_0_0_1px_rgba(59,130,246,0.1)]' : 'border-white/10'}`}>
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-full bg-blue-500 text-white">Most popular</div>
              )}
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-3xl font-extrabold mt-2">{plan.price}<span className="text-base font-medium text-blue-100/80">/mo</span></p>
              <p className="text-blue-100/80 mt-2 mb-4">{plan.desc}</p>
              <ul className="space-y-2 text-sm text-blue-100/90">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-semibold transition-colors ${plan.highlight ? 'bg-blue-500 hover:bg-blue-400 text-white' : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'}`}>Choose {plan.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
