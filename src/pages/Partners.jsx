import { Link } from 'react-router-dom'
import { Globe, TrendingUp, Building2, Lightbulb, Mail, Users } from 'lucide-react'
import './Partners.css'

export default function Partners() {
  return (
    <main>
      <section className="par-hero section" style={{background:'linear-gradient(to bottom right, rgba(23,130,68,0.05), #ffffff, rgba(230,219,203,0.2))'}}>
        <div className="container text-center">
          <h1><span className="text-green">Collaborate</span> with Us for a<br/>Greener Supply Chain</h1>
          <p>EkayaGreen is constantly seeking cutting-edge material innovators and reliable sustainable product manufacturers. We provide a global platform to showcase your innovations to eager markets in the US and beyond.</p>
          <Link to="/contact" className="btn-primary" style={{marginTop:'28px',display:'inline-flex'}}>Join Our Network →</Link>
        </div>
      </section>

      <section className="par-why section">
        <div className="container">
          <div className="text-center" style={{marginBottom:'52px'}}>
            <h2>Why Partner with EkayaGreen?</h2>
            <p style={{color:'var(--text-muted)',fontSize:'17px',maxWidth:'640px',margin:'0 auto'}}>Join a trusted network that's transforming global supply chains and making sustainability accessible to businesses worldwide.</p>
          </div>
          <div className="par-why__grid">
            {[
              { icon:<Globe size={24}/>, title:'Access New Markets', desc:'EkayaGreen connects international suppliers to large U.S. enterprise clients, expanding your business reach globally.' },
              { icon:<TrendingUp size={24}/>, title:'Growth & Scale', desc:'We help scale innovative materials by providing demand aggregation and logistics support for sustainable growth.' },
              { icon:<Building2 size={24}/>, title:'Credibility & Support', desc:'Join a vetted network known for quality and sustainability, increasing trust with buyers and enhancing your reputation.' },
              { icon:<Lightbulb size={24}/>, title:'Collaborative Innovation', desc:'Opportunities to co-develop or pilot new sustainable products with feedback from global clients and industry insight.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="par-why-card">
                <div className="par-why-card__inner">
                  <div className="par-why-card__icon">{icon}</div>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="par-who section" style={{background:'rgba(196,238,196,0.3)'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom:'52px'}}>
            <h2>Who We Partner With</h2>
            <p style={{color:'var(--text-muted)',fontSize:'17px'}}>We collaborate with various types of organizations in the sustainability ecosystem.</p>
          </div>
          <div className="par-who__grid">
            {[
              { img:'/material-innovators-clean.jpg', title:'Material Innovators', desc:'Pioneering seaweed-based materials, bioplastics, and agricultural waste reuse' },
              { img:'/sustainable-manufacturing-clean.jpg', title:'Sustainable Manufacturers', desc:'Producing FDA-approved biodegradable packaging and eco-friendly products at scale' },
              { img:'/certification-bodies.png', title:'Certification Bodies', desc:'Providing FDA, renewable, biodegradable, and sustainability certifications' },
            ].map(({ img, title, desc }) => (
              <div key={title} className="par-who-card">
                <div className="par-who-card__img">
                  <img src={img} alt={title} />
                </div>
                <div className="par-who-card__content">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="par-how section">
        <div className="container">
          <div className="text-center" style={{marginBottom:'52px'}}>
            <h2>How to Join Our Network</h2>
            <p style={{color:'var(--text-muted)',fontSize:'17px'}}>Our simple three-step process makes it easy to become part of the EkayaGreen family.</p>
          </div>
          <div className="par-steps">
            {[
              { n:'1', title:'Contact Us', desc:'Fill out the inquiry form or email us with your product details and company information.' },
              { n:'2', title:'Evaluation', desc:"EkayaGreen's team will review sustainability certifications, quality standards, and market fit." },
              { n:'3', title:'Onboarding', desc:'Approved partners get listed in our network and gain access to client requests and opportunities.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="par-step">
                <div className="par-step__num">{n}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="par-quote-section section" style={{background:'rgb(238,235,232)'}}>
        <div className="container">
          <div className="par-quote">
            <p>"EkayaGreen is more than a platform – it's a partnership. We believe in growing together with our suppliers to replace plastics worldwide."</p>
            <span>— EkayaGreen Team</span>
          </div>
        </div>
      </section>

      <section className="par-cta section" style={{background:'rgb(23,130,68)'}}>
        <div className="container par-cta__grid">
          <div className="par-cta__left">
            <h2>Ready to Partner with EkayaGreen?</h2>
            <p>Join our network of innovative suppliers and be part of the solution to plastic pollution. Whether you're a small innovator or large manufacturer, we welcome partners who share our vision.</p>
            <div className="par-cta__btns">
              <Link to="/contact" className="par-cta-btn"><Mail size={16}/>Contact Partnership Team</Link>
              <Link to="/contact" className="par-cta-btn">Download Partnership Guide</Link>
            </div>
          </div>
          <div className="par-cta__card">
            <Users size={48} />
            <h3>Partnership Inquiry</h3>
            <p>Ready to explore partnership opportunities? Let's start the conversation.</p>
            <Link to="/contact" className="par-cta-btn par-cta-btn--outline">Submit Partnership Form →</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
