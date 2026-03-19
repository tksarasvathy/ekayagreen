import { Link } from 'react-router-dom'
import { Leaf, Users, Award, Recycle, Factory } from 'lucide-react'
import './Sustainability.css'

export default function Sustainability() {
  return (
    <main>
      <section className="sus-hero section" style={{background:'rgba(196,238,196,0.3)'}}>
        <div className="container text-center">
          <h1><span className="text-green">Sustainability</span> as a <span className="text-green">Lifestyle</span></h1>
          <p>For us, sustainability isn't a box to check – it's a lifestyle and a guiding principle in every decision. We aim to make sustainable choices the default for businesses worldwide.</p>
          <Link to="/sustainability" className="btn-primary" style={{marginTop:'28px',display:'inline-flex'}}>View Our Impact Report</Link>
        </div>
      </section>

      <section className="sus-philosophy section">
        <div className="container sus-philosophy__grid">
          <div>
            <h2>Our Sustainability Philosophy</h2>
            <p>Every partnership we forge is intended to reduce carbon emissions and plastic waste. We believe that making sustainable materials accessible creates a ripple effect that transforms entire industries.</p>
            <p style={{marginTop:'16px'}}>Our approach goes beyond just replacing materials – we're building an ecosystem where sustainability becomes the natural, obvious choice for businesses of all sizes.</p>
            <div className="sus-pledge card" style={{marginTop:'28px'}}>
              <h3>Our Pledge</h3>
              <p><strong className="text-green">Every choice counts.</strong> We invite businesses, suppliers, and individuals to join us in making sustainable living the norm. Together, we're not just sourcing products; we're changing mindsets and healing the planet.</p>
            </div>
          </div>
          <div className="sus-circular" style={{background:'var(--green-light-bg)',borderRadius:'20px',padding:'48px 40px'}}>
            <div className="sus-circular__icon"><Recycle size={64}/></div>
            <h3>Circular Economy</h3>
            <p style={{color:'var(--text-muted)',fontSize:'15px',lineHeight:'1.7'}}>We promote materials that can be safely returned to nature, creating a truly circular supply chain.</p>
          </div>
        </div>
      </section>

      <section className="sus-pillars section" style={{background:'rgb(238,235,232)'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom:'52px'}}>
            <h2>Our Sustainability Pillars</h2>
            <p style={{color:'var(--text-muted)',fontSize:'17px'}}>Three core principles guide our approach to creating a sustainable future.</p>
          </div>
          <div className="sus-pillars__grid">
            {[
              { icon:<Leaf size={24}/>, title:'Planet & Materials', bullets:['100% biodegradable products','Zero plastic waste','Carbon neutral shipping'], desc:'We only promote renewable, compostable, or recycled materials that leave no permanent environmental footprint.' },
              { icon:<Users size={24}/>, title:'People & Communities', bullets:['Fair wage guarantee','Community development','Local job creation'], desc:'Ensuring fair trade and supporting the communities where our manufacturing partners operate.' },
              { icon:<Award size={24}/>, title:'Transparency & Education', bullets:['Full supply chain visibility','Third-party certifications','Impact reporting'], desc:'Fighting greenwashing by sharing credible data and educating partners on sustainable practices.' },
            ].map(({ icon, title, bullets, desc }) => (
              <div key={title} className="card sus-pillar">
                <div className="sus-pillar__icon">{icon}</div>
                <h3>{title}</h3>
                <p style={{color:'var(--text-muted)',fontSize:'14px',marginBottom:'16px'}}>{desc}</p>
                <ul>
                  {bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sus-goals section">
        <div className="container">
          <div className="text-center" style={{marginBottom:'52px'}}>
            <h2>Our Impact Goals</h2>
            <p style={{color:'var(--text-muted)',fontSize:'17px'}}>Measurable commitments to environmental and social impact.</p>
          </div>
          <div className="sus-goals__grid">
            {[
              { num:'1 Billion', label:'Units of plastic eliminated', sub:'by 2030', pct:15 },
              { num:'100+', label:'Sustainable manufacturers', sub:'in our network', pct:25 },
              { num:'50+', label:'Enterprise clients', sub:'served globally', pct:10 },
              { num:'10,000', label:'Jobs supported', sub:'in partner communities', pct:8 },
            ].map(({ num, label, sub, pct }) => (
              <div key={num} className="card sus-goal">
                <div className="sus-goal__num">{num}</div>
                <div className="sus-goal__label">{label}</div>
                <div className="sus-goal__sub">{sub}</div>
                <div className="sus-goal__bar">
                  <div className="sus-goal__fill" style={{width:`${pct}%`}}></div>
                </div>
                <div className="sus-goal__pct">{pct}% towards goal</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sus-stats section" style={{background:'rgba(239,68,68,0.05)'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom:'52px'}}>
            <h2>Why This Matters</h2>
            <p style={{color:'var(--text-muted)',fontSize:'17px'}}>The urgency of sustainable packaging has never been clearer.</p>
          </div>
          <div className="sus-stats__grid">
            {[
              { num:'10B+', label:'Tons of Plastic', sub:'Produced since the 1960s, yet only 9% is recycled' },
              { num:'44%', label:'Ocean Trash', sub:'Of marine pollution is packaging waste' },
              { num:'85%', label:'Consumer Preference', sub:'Of US consumers prefer eco-friendly packaging' },
            ].map(({ num, label, sub }) => (
              <div key={num} className="card sus-stat text-center">
                <div className="sus-stat__num">{num}</div>
                <div className="sus-stat__label">{label}</div>
                <p>{sub}</p>
              </div>
            ))}
          </div>
          <p className="sus-stats__note">These statistics reinforce why EkayaGreen's work is critical. We're here to change these numbers by making sustainable alternatives accessible to every business.</p>
        </div>
      </section>

      <section className="sus-certs section" style={{background:'rgba(196,238,196,0.3)'}}>
        <div className="container text-center">
          <h2>Our Standards & Certifications</h2>
          <p style={{color:'var(--text-muted)',fontSize:'17px',marginBottom:'40px'}}>We only work with materials and partners that meet the highest sustainability standards.</p>
          <div className="sus-certs__badges">
            {['FDA Approved','BPI Certified','ASTM Standards','ISO 14001','FSC Certified','USDA BioPreferred'].map(c => (
              <span key={c} className="sus-cert-badge">{c}</span>
            ))}
          </div>
          <div className="card sus-verification">
            <div className="sus-verification__icon"><Factory size={32}/></div>
            <h3>Supplier Verification Process</h3>
            <p>Every manufacturer in our network undergoes rigorous evaluation for sustainability certifications, quality standards, production capacity, and ethical practices. We believe transparency and verification are essential to preventing greenwashing and ensuring authentic environmental impact.</p>
          </div>
        </div>
      </section>

      <section className="sus-cta section" style={{background:'rgb(23,130,68)'}}>
        <div className="container text-center">
          <h2 style={{color:'#fff'}}>Join the Lifestyle Revolution</h2>
          <p style={{color:'rgba(255,255,255,0.85)',fontSize:'17px',maxWidth:'620px',margin:'0 auto 36px'}}>Sustainability as a lifestyle means every choice counts. Whether you're a business seeking solutions or a supplier driving innovation, let's collaborate to make sustainable living the norm.</p>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
            <Link to="/sustainability" className="btn-cta">Read Our Impact Report</Link>
            <Link to="/contact" className="btn-outline-white">Contact Our Team</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
