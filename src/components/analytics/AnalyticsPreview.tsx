import { Activity, BookOpen, BriefcaseBusiness, GraduationCap, Sparkles } from 'lucide-react'

const bars = [34, 48, 43, 60, 55, 72, 64, 84, 75, 92, 82, 100]

export default function AnalyticsPreview() {
  return (
    <div className="analytics-scene" aria-label="Illustrative Ascendiq dashboard preview">
      <div className="scene-orbit orbit-one" />
      <div className="scene-orbit orbit-two" />
      <div className="floating-chip chip-top"><span className="chip-icon lavender"><Sparkles size={15} /></span><span><b>Growth signals</b><small>Illustrative demo data</small></span></div>
      <div className="floating-chip chip-side"><span className="chip-icon peach"><BriefcaseBusiness size={15} /></span><span><b>Career pathway</b><small>Illustrative demo data</small></span></div>
      <div className="dashboard-card main-dashboard">
        <div className="dash-topline"><div className="dash-heading"><span className="tiny-orb" /><span>STUDENT OVERVIEW</span></div><span className="demo-pill">DEMO DATA</span></div>
        <div className="score-area">
          <div>
            <p className="metric-label">Student success score</p>
            <div className="score-number">82<span>/100</span></div>
            <div className="score-change"><Activity size={13} /> Illustrative progress indicator</div>
          </div>
          <div className="score-ring" role="img" aria-label="Illustrative score ring showing 82 out of 100"><div className="score-ring-inner"><strong>82</strong><span>score</span></div></div>
        </div>
        <div className="dash-divider" />
        <div className="chart-heading"><div><strong>Academic progress</strong><span>Illustrative demo data</span></div><span className="chart-period">Sample trend</span></div>
        <div className="bar-chart" aria-label="Illustrative academic progress chart">{bars.map((h, i) => <div key={i} className={`bar ${i > 8 ? 'bar-active' : ''}`} style={{ height: `${h}%` }} />)}</div>
        <div className="chart-axis"><span>START</span><span>PROGRESS</span><span>GOAL</span></div>
      </div>
      <div className="mini-card placement-card">
        <div className="mini-card-icon blue"><BriefcaseBusiness size={16} /></div>
        <div className="mini-card-copy"><span>Placement readiness</span><strong>On a learning path</strong><small>Illustrative demo data</small></div>
        <div className="mini-progress"><span /></div>
      </div>
      <div className="mini-card skill-card">
        <div className="mini-card-icon peach"><BookOpen size={16} /></div>
        <div className="mini-card-copy"><span>Skill development</span><strong>3 focus areas</strong><small>Illustrative demo data</small></div>
        <div className="skill-dots"><i /><i /><i /><i /></div>
      </div>
      <div className="scene-caption"><GraduationCap size={15} /> A connected view of student growth <span>·</span> concept preview</div>
    </div>
  )
}
