import Hero from './components/Hero'
import FeatureCard from './components/FeatureCard'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-[1] bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(59,130,246,0.15),transparent_60%)]" />

      {/* Hero with Spline cover */}
      <Hero />

      {/* Content sections */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-10">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <FeatureCard
            title="How FUNdamentals Works"
            items={[
              '8-week, high-energy session focused on progressive skill introduction.',
              'Athletes try a rotation of <strong>ninja, gymnastics, and tumbling</strong> fundamentals.',
              'Designed specifically for ages <strong>5–12</strong> (Beginner to Intermediate levels).',
              'Perfect for beginners and current athletes who want extra time in the gym.'
            ]}
          />
          <FeatureCard
            title="Sessions Offered All Year"
            items={[
              '<strong>Winter New Year Session:</strong> January – February',
              '<strong>Spring Session:</strong> April – May',
              '<strong>Summer Session:</strong> July – August',
              '<strong>Fall Session:</strong> October – November'
            ]}
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <FeatureCard
            title="Is This Right for My Child?"
            items={[
              'They have lots of energy, love to move, and need an outlet.',
              'They want to try <strong>ninja, gymnastics, and tumbling</strong> before committing to one class.',
              'They’re already in a class and want a fun skills boost in complementary disciplines.',
              'Parents are looking for a <b>low-commitment</b> way to test multiple sports.'
            ]}
          />
          <FeatureCard
            title="What to Expect Each Week"
            items={[
              'Coach-led warm-up with a clear weekly focus (Ninja, Gymnastics, or Tumbling rotation).',
              'High-rep, station-based training so kids stay moving and fully engaged.',
              'Positive coaching that builds confidence and celebrates effort and progress.',
              'A clear pathway recommendation for next steps after the 8-week program.'
            ]}
          />
        </section>

        {/* Interactive FAQ */}
        <FAQ />

        {/* Final CTA */}
        <div className="mt-10">
          <FinalCTA />
        </div>
      </main>
    </div>
  )
}

export default App
