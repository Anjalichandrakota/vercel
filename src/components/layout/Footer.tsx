import { ArrowUpRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import Brand from '../ui/Brand'

export default function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <Brand />
          <p>Every student has potential. We’re building a clearer way to discover it, nurture it, and turn it into meaningful outcomes.</p>
          <span className="demo-note">A product concept · Demo data only</span>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <a href="/#features">Features</a>
          <a href="/#how-it-works">How it works</a>
          <a href="/#institutions">For institutions</a>
        </div>
        <div className="footer-column">
          <h3>For your role</h3>
          <a href="/#roles">Students</a>
          <a href="/#roles">Faculty & mentors</a>
          <a href="/#roles">Placement teams</a>
        </div>
        <div className="footer-column">
          <h3>Get in touch</h3>
          <p className="footer-placeholder"><Mail size={15} /> Contact details coming soon</p>
          <Link to="/register" className="footer-link">Explore Ascendiq <ArrowUpRight size={15} /></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Ascendiq. All rights reserved.</span>
        <div><a href="#privacy">Privacy placeholder</a><a href="#terms">Terms placeholder</a></div>
      </div>
    </footer>
  )
}