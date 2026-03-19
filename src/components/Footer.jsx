import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">

        {/* Brand + Newsletter */}
        <div className="footer__brand">
          <div className="footer__logo">
            <img src="/logot.png" alt="EkayaGreen" className="footer__logo-icon" />
          </div>
          <p>Making sustainability a lifestyle by connecting businesses with innovative eco-friendly materials and manufacturers worldwide. Together, we're building a greener future.</p>
          <div className="footer__newsletter">
            <h4>Stay Updated</h4>
            <form className="footer__form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
            <small>Get sustainability insights and product updates</small>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/solutions">Our Solutions</Link></li>
            <li><Link to="/partners">Become a Partner</Link></li>
            <li><Link to="/sustainability">Sustainability</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <span>sales@ekayagreen.com</span>
            </li>
            <li>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <span>+1 (609) 608-5499</span>
            </li>
            <li>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
              <span>Global Operations</span>
            </li>
            <li>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Coming soon: Multi-language support</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© 2024 EkayaGreen. All rights reserved.</span>
          <div className="footer__bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/sustainability">Our Impact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
