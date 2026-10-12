import { useEffect, useRef } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, ChartNoAxesCombined, Check, CircleHelp, Compass, GraduationCap, HeartHandshake, Layers3, ShieldCheck, Sparkles, Target, Users, Waypoints, BookOpenCheck, TrendingUp } from 'lucide-react'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/layout/Footer'
import AnalyticsPreview from '../components/analytics/AnalyticsPreview'
import { Link } from 'react-router-dom'

const features = [
  { icon: ChartNoAxesCombined, title: 'Student Success Score', text: 'Understand student progress through a structured set of indicators—not a single unexplained number.', tint: 'tint-blue' },
  { icon: CircleHelp, title: 'Early Risk Identification', text: 'Help authorized staff spot signals that a student may benefit from timely, human support.', tint: 'tint-peach' },
  { icon: Layers3, title: 'Student Segmentation', text: 'Discover groups with different learning needs, strengths, and placement-readiness gaps.', tint: 'tint-lavender' },
  { icon: BrainCircuit, title: 'Explainable Analytics', text: 'See which factors contribute to an indicator and understand where information is incomplete.', tint: 'tint-ice' },
  { icon: Target, title: 'Placement Readiness', text: 'Identify skill gaps and create a more focused path toward practical career preparation.', tint: 'tint-green' },
]
const steps = [
  { no: '01', title: 'Integrate data', text: 'Bring together approved academic, attendance, learning, skills, and placement information.', icon: Waypoints },
  { no: '02', title: 'Understand progress', text: 'Transform records into useful indicators, patterns, and trends.', icon: ChartNoAxesCombined },
  { no: '03', title: 'Identify support needs', text: 'Highlight areas where students may benefit from additional attention.', icon: HeartHandshake },
  { no: '04', title: 'Improve outcomes', text: 'Help authorized teams plan interventions and monitor progress thoughtfully.', icon: TrendingUp },
]
const roles = [
  { title: 'Students', text: 'Understand your progress, strengths, and areas to improve.', icon: GraduationCap, color: 'role-blue' },
  { title: 'Faculty & mentors', text: 'Monitor assigned students and coordinate timely support.', icon: Users, color: 'role-peach' },
  { title: 'College administrators', text: 'Understand institution-wide trends and data quality.', icon: Layers3, color: 'role-lavender' },
  { title: 'Placement officers', text: 'Evaluate readiness and coordinate career preparation.', icon: Compass, color: 'role-green' },
]
const principles = ['Explainable indicators, not black-box judgments', 'Role-based access as a core design principle', 'Responsible handling of student information', 'Human review for important support decisions', 'Transparent treatment of incomplete data']

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const items = node.querySelectorAll<HTMLElement>('[data-reveal]')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(item => item.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function LandingPage() {
  const revealRef = useReveal()
  return (
    <div ref={revealRef}>
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-glow glow-a" /><div className="hero-glow glow-b" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> Intelligence that moves students forward</div>
              <h1>Turn Student Potential Into <em>Career Success.</em></h1>
              <p className="hero-lead">Bring academic performance, attendance, learning engagement, skills, and placement readiness together in one intelligent platform—so every student gets a clearer path forward.</p>
              <div className="hero-actions">
                <Link to="/register" className="button button-light">Get started <ArrowUpRight size={17} /></Link>
                <a href="#product-preview" className="button button-outline-light">Explore the platform <ArrowDown size={16} /></a>
              </div>
              <div className="hero-footnote"><span className="avatar-stack"><i>S</i><i>F</i><i>P</i></span><span>Designed for students, faculty, academic leaders, and placement teams.</span></div>
              <div className="hero-trust"><span><Check size={14} /> Explainable by design</span><span><Check size={14} /> Human-centered support</span></div>
            </div>
            <AnalyticsPreview />
          </div>
          <div className="hero-bottom container"><span>STUDENT PROGRESS</span><i /><span>INSTITUTIONAL INSIGHT</span><i /><span>CAREER READINESS</span></div>
        </section>

        <section className="section product-section" id="product-preview">
          <div className="container">
            <div className="section-heading center-heading" data-reveal>
              <span className="section-kicker">A clearer picture</span>
              <h2>Many signals. <span>One student story.</span></h2>
              <p>Ascendiq is designed to connect the dots between learning today and opportunities tomorrow.</p>
            </div>
            <div className="product-preview" data-reveal>
              <div className="preview-sidebar">
                <div className="preview-brand"><span className="preview-brand-mark"><TrendingUp size={15} /></span><b>ascendiq</b></div>
                <span className="sidebar-label">WORKSPACE PREVIEW</span>
                <div className="sidebar-item active"><ChartNoAxesCombined size={16} /> Overview</div>
                <div className="sidebar-item"><GraduationCap size={16} /> Academic progress</div>
                <div className="sidebar-item"><BookOpenCheck size={16} /> Skills</div>
                <div className="sidebar-item"><Target size={16} /> Career readiness</div>
                <div className="sidebar-bottom"><span className="sidebar-avatar">AD</span><span><b>Demo workspace</b><small>Illustrative only</small></span></div>
              </div>
              <div className="preview-main">
                <div className="preview-top"><div><span className="preview-eyebrow">OVERVIEW / SAMPLE</span><h3>Student progress at a glance</h3><p>Illustrative demo data · No student records connected</p></div><span className="preview-tag"><Sparkles size={14} /> Concept preview</span></div>
                <div className="metric-grid">
                  <div className="metric-card"><span>Success score</span><div className="metric-main">82 <small>/ 100</small></div><div className="metric-foot"><span className="metric-dot blue-dot" /> Sample indicator</div><div className="metric-spark"><i /><i /><i /><i /><i /><i /><i /></div></div>
                  <div className="metric-card"><span>Attendance trend</span><div className="metric-main">Steady <small>sample</small></div><div className="metric-foot"><span className="metric-dot peach-dot" /> Illustrative pattern</div><div className="trend-line"><svg viewBox="0 0 150 35" role="img" aria-label="Illustrative trend line"><path d="M2 28 C18 22 19 25 33 17 S54 23 67 14 S84 19 99 10 S123 17 148 3" /></svg></div></div>
                  <div className="metric-card"><span>Skill development</span><div className="metric-main">3 <small>focus areas</small></div><div className="metric-foot"><span className="metric-dot lavender-dot" /> Learning priorities</div><div className="skill-mini-bars"><i /><i /><i /></div></div>
                  <div className="metric-card"><span>Placement readiness</span><div className="metric-main">In progress</div><div className="metric-foot"><span className="metric-dot green-dot" /> Sample pathway</div><div className="readiness-track"><i /></div></div>
                </div>
                <div className="preview-lower">
                  <div className="preview-chart-card"><div className="chart-card-title"><div><b>Learning progress</b><small>Illustrative sample pattern</small></div><span>CONCEPT</span></div><div className="large-chart"><div className="chart-y-labels"><span>High</span><span>Mid</span><span>Low</span></div><svg viewBox="0 0 520 120" preserveAspectRatio="none" role="img" aria-label="Illustrative learning progress chart"><defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#244FC3" stopOpacity=".18" /><stop offset="100%" stopColor="#244FC3" stopOpacity="0" /></linearGradient></defs><path className="chart-area" d="M0 100 C45 94 47 72 90 78 S140 58 180 68 S225 30 265 45 S320 52 350 29 S400 44 430 22 S480 20 520 6 L520 120 L0 120Z" /><path className="chart-path" d="M0 100 C45 94 47 72 90 78 S140 58 180 68 S225 30 265 45 S320 52 350 29 S400 44 430 22 S480 20 520 6" /></svg></div><div className="chart-x-labels"><span>Beginning</span><span>Learning journey</span><span>Next milestone</span></div></div>
                  <div className="insight-card"><div className="insight-icon"><Sparkles size={18} /></div><span className="insight-label">EXPLAINABLE INSIGHT</span><h4>Progress needs context.</h4><p>Future insights should show the indicators behind them and note when information is incomplete.</p><span className="insight-foot">Design principle · Not a live analysis</span></div>
                </div>
              </div>
            </div>
            <p className="preview-disclaimer"><ShieldCheck size={15} /> Every number and chart above is illustrative demo data, not a real student record or connected system.</p>
          </div>
        </section>

        <section className="section features-section" id="features">
          <div className="container">
            <div className="section-heading" data-reveal><span className="section-kicker">What Ascendiq brings together</span><h2>Insight that helps turn <span>effort into progress.</span></h2><p>A thoughtful foundation for understanding student journeys without reducing people to numbers.</p></div>
            <div className="features-grid">
              {features.map((feature, index) => { const Icon = feature.icon; return <article className="feature-card" data-reveal key={feature.title} style={{ transitionDelay: `${index * 70}ms` }}><div className={`feature-icon ${feature.tint}`}><Icon size={21} strokeWidth={1.8} /></div><span className="feature-number">0{index + 1}</span><h3>{feature.title}</h3><p>{feature.text}</p><a href="#how-it-works" aria-label={`Learn how ${feature.title} fits into the process`}><ArrowUpRight size={17} /></a></article> })}
            </div>
          </div>
        </section>

        <section className="section process-section" id="how-it-works">
          <div className="container process-layout">
            <div className="section-heading process-intro" data-reveal><span className="section-kicker">How it works</span><h2>From scattered signals to <span>clearer next steps.</span></h2><p>The concept is simple: connect approved information, understand patterns, and help people act with care.</p><a href="#principles" className="text-link">Our approach to responsible insight <ArrowRight size={16} /></a></div>
            <div className="steps-list">
              {steps.map((step, index) => { const Icon = step.icon; return <article className="step-item" data-reveal key={step.no} style={{ transitionDelay: `${index * 90}ms` }}><div className="step-number">{step.no}</div><div className="step-icon"><Icon size={20} /></div><div className="step-copy"><h3>{step.title}</h3><p>{step.text}</p></div><ArrowUpRight className="step-arrow" size={17} /></article> })}
            </div>
          </div>
        </section>

        <section className="section roles-section" id="roles">
          <div className="container">
            <div className="section-heading center-heading" data-reveal><span className="section-kicker">Built around people</span><h2>One shared mission. <span>Every role matters.</span></h2><p>Student success is a team effort. Ascendiq is designed to help each group see how they can contribute.</p></div>
            <div className="roles-grid">{roles.map((role, i) => { const Icon = role.icon; return <article className="role-card" data-reveal key={role.title} style={{ transitionDelay: `${i * 70}ms` }}><div className={`role-illustration ${role.color}`}><Icon size={26} strokeWidth={1.6} /><span className="role-spark">✦</span></div><h3>{role.title}</h3><p>{role.text}</p></article> })}</div>
          </div>
        </section>

        <section className="section principles-section" id="principles">
          <div className="container principles-layout">
            <div className="principles-visual" data-reveal><div className="principle-orbit orbit-large" /><div className="principle-orbit orbit-small" /><div className="principle-center"><ShieldCheck size={35} /><span>People first</span></div><div className="principle-node node-one"><Check size={15} /></div><div className="principle-node node-two"><BrainCircuit size={15} /></div><div className="principle-node node-three"><HeartHandshake size={15} /></div></div>
            <div className="principles-copy" data-reveal><span className="section-kicker">Responsible by design</span><h2>Useful insight should earn <span>people’s trust.</span></h2><p>Student analytics can influence real opportunities. The platform is being designed around clarity, responsible access, and human judgment.</p><ul>{principles.map(item => <li key={item}><span><Check size={14} /></span>{item}</li>)}</ul><div className="principles-disclaimer"><ShieldCheck size={16} /><span>These are design principles, not claims of completed security certification or deployed controls.</span></div></div>
          </div>
        </section>

        <section className="closing-cta" id="institutions">
          <div className="cta-lighting" /><div className="container cta-content" data-reveal><div className="cta-emblem"><Sparkles size={21} /></div><span className="section-kicker">A clearer path starts here</span><h2>Every Student Deserves a <span>Clearer Path Forward.</span></h2><p>Bring student progress, institutional insight, and career readiness into one connected experience.</p><Link to="/register" className="button button-light">Get started with Ascendiq <ArrowUpRight size={17} /></Link><small>Phase 1 concept preview · No account is created yet</small></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}