import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] w-full flex items-center justify-center overflow-hidden">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Gradient and vignette overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900" />
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.25),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-[11px] tracking-[0.16em] font-semibold uppercase"
          aria-label="Limited 8-Week Session Program"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-300" />
          <span>EMPIRE KIDS • FUNdamentals</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white"
        >
          Try Ninja, Gymnastics & Tumbling in One Fun Program
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto"
        >
          <strong className="text-white/95">The ultimate 8-week experience</strong> where kids ages 5–12 can sample
          <strong> ninja, gymnastics, and tumbling</strong>—no pressure to pick a favorite yet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6"
        >
          <a
            href="https://portal.iclasspro.com/empirecheerleading"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_12px_28px_rgba(34,197,235,0.45)] hover:shadow-[0_18px_40px_rgba(34,197,235,0.6)] transition transform hover:-translate-y-0.5"
            aria-label="Register Now for FUNdamentals Program"
          >
            <span>Register Now</span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <div className="mt-2 text-slate-200/80 text-sm">Spots are limited each session. Secure your child's place today.</div>
        </motion.div>
      </div>
    </section>
  )
}
