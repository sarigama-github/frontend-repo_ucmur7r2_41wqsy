import { motion } from 'framer-motion'

export default function FeatureCard({ title, items }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_6px_14px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.12)] hover:border-cyan-400/50 transition"
      role="article"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition" style={{ background: 'radial-gradient(circle at top left, rgba(6,182,212,0.06), transparent 60%)' }} />
      <h2 className="text-xl font-bold text-slate-900 mb-2">{title}</h2>
      <ul className="list-disc pl-5 space-y-1 text-slate-700">
        {items.map((it, idx) => (
          <li key={idx} dangerouslySetInnerHTML={{ __html: it }} />
        ))}
      </ul>
    </motion.article>
  )
}
