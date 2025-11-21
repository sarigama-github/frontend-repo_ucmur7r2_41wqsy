import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-slate-200 bg-white/90 backdrop-blur-sm p-4 mb-3 hover:border-indigo-300 transition">
      <button
        className="w-full text-left flex items-center justify-between gap-4"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <strong className="text-cyan-600 text-base">{q}</strong>
        <span className="text-slate-500">{open ? '−' : '+'}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pl-3 border-l-4 border-sky-100 text-slate-700 text-sm py-2" dangerouslySetInnerHTML={{ __html: a }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const items = [
    {
      q: 'Is the 8-week commitment too short? Will my child actually learn anything?',
      a: '<b>FUNdamentals is designed for high-impact learning.</b> Over 8 weeks, coaches use a clear, progressive curriculum to introduce core skills in ninja, gymnastics, and tumbling. It\'s the perfect amount of time to build <b>basic competency and confidence</b> without the pressure of a year-long commitment.'
    },
    {
      q: 'What happens if my child misses a class due to illness or vacation?',
      a: 'We understand life happens! While FUNdamentals is a session-based class, we offer a <b>Make-Up Class token</b> for one missed class per session, which can be redeemed for an open gym time or specific make-up day, based on availability. Please inquire at the front desk.'
    },
    {
      q: 'What is the next step after the 8-week program ends?',
      a: 'At the end of the 8 weeks, your coach will provide an assessment and recommend the best path forward based on your child\'s interest and skill level. This smoothly transitions them into one of our dedicated <b>Ninja Academy, Tumble Club, or Gymnastics</b> classes, ready for the next level!'
    },
    {
      q: 'Is this safe for absolute beginners with no experience?',
      a: 'Absolutely. Safety is our top priority. FUNdamentals is <b>designed specifically for beginners (ages 5-12)</b>. We focus heavily on proper technique, body control, and injury prevention in a fun, controlled environment with certified coaches.'
    }
  ]

  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Addressing Your Top Concerns</h2>
      {items.map((it, idx) => (
        <Item key={idx} q={it.q} a={it.a} />
      ))}
    </section>
  )
}
