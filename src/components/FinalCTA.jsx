import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 px-6 py-12 text-center">
      <div className="pointer-events-none absolute -top-20 -left-16 w-56 h-56 rounded-full bg-blue-500/20 blur-2xl animate-[float-orb_11s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 w-56 h-56 rounded-full bg-blue-500/20 blur-2xl animate-[float-orb_11s_ease-in-out_infinite]" style={{ animationDelay: '-5s' }} />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-extrabold">
          Ready to Give It a Try? Secure Your Spot.
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="mt-2 text-slate-300">
          Give your child 8 weeks to explore three exciting sports in one program. Enrollment is quick and easy!
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }} className="mt-6">
          <a href="https://portal.iclasspro.com/empirecheerleading" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_12px_28px_rgba(59,130,246,0.45)] hover:shadow-[0_18px_40px_rgba(59,130,246,0.6)] transition-transform hover:-translate-y-0.5" aria-label="Register Now for FUNdamentals Program">
            Register for FUNdamentals
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <p className="mt-3 text-slate-400 text-sm">Empire Kids FUNdamentals – where trying something new is actually fun. 🩵</p>
        </motion.div>
      </div>
    </section>
  )
}
