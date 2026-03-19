import { Link } from 'react-router-dom'
import { Search, Users, CircleCheckBig, Truck, Award, DollarSign, Shield } from 'lucide-react'
import './Solutions.css'

export default function Solutions() {
  return (
    <main>
      <section className="sol-hero section" style={{background:'linear-gradient(to bottom right, rgba(23,130,68,0.05), #ffffff, rgba(230,219,203,0.2))'}}>
        <div className="container text-center">
          <h1>Eco-innovations <span className="text-green">Delivered</span></h1>
          <p>EkayaGreen is a B2B platform connecting businesses to sustainable product manufacturers, streamlining the sourcing and supply of eco-friendly packaging and materials.</p>
          <p className="sol-hero__tag">Making it easy to adopt sustainable materials at scale.</p>
        </div>
      </section>

      <section className="sol-how section">
        <div className="container">
          <div className="text-center" style={{marginBottom:'52px'}}>
            <h2>How It Works</h2>
            <p style={{color:'var(--text-muted)',fontSize:'17px'}}>Our streamlined process makes sustainable sourcing simple and efficient.</p>
          </div>
          <div className="sol-how__steps">
            {[
              { n:'1', title:'Discover', desc:'US business finds needed sustainable product via EkayaGreen network', icon: <Search size={36}/> },
              { n:'2', title:'Connect', desc:'EkayaGreen connects them with vetted manufacturer in India or globally', icon: <Users size={36}/> },
              { n:'3', title:'Verify & Order', desc:'Compliance and quality checks in place, order is placed securely', icon: <CircleCheckBig size={36}/> },
              { n:'4', title:'Logistics & Delivery', desc:'Streamlined bulk shipping and delivery to the client', icon: <Truck size={36}/> },
            ].map(({ n, title, desc, icon }) => (
              <div key={n} className="sol-step">
                <div className="sol-step__icon-wrap">
                  <div className="sol-step__icon">{icon}</div>
                  <div className="sol-step__num">{n}</div>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sol-products section" style={{background:'var(--green-light-bg2)'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom:'52px'}}>
            <h2>Our Product Categories</h2>
            <p style={{color:'var(--text-muted)',fontSize:'17px'}}>Comprehensive range of sustainable materials available through our global network.</p>
          </div>
          <div className="sol-products__grid">
            {[
              { img:'/sustainable-food-packaging.jpg', title:'Food Packaging', desc:'Made from bagasse, these containers are sturdy, food-safe, and 100% compostable.', bullets:['Biodegradable plates','Containers & cups','Food-safe certified'] },
              { img:'/compostable-bags-wraps.jpg', title:'Bags & Wraps', desc:'Seaweed-based films and compostable bags for sustainable packaging solutions.', bullets:['Compostable bags','Bio-based films','Custom branding'] },
              { img:'/bamboo-cutlery-straws.jpg', title:'Cutlery & Straws', desc:'Plant-based utensils made from bamboo and wheat straw, completely plastic-free.', bullets:['Bamboo cutlery','Wheat straw products','Durable design'] },
              { img:'/custom-branded-seaweed-packaging.jpg', title:'Custom Solutions', desc:'Private labeling and custom sustainable packaging tailored to your brand needs.', bullets:['Tailored materials','Brand integration','Scalable production'] },
            ].map(({ img, title, desc, bullets }) => (
              <div key={title} className="sol-product-card">
                <div className="sol-product-card__img">
                  <img src={img} alt={title} />
                </div>
                <div className="sol-product-card__content">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <ul>
                    {bullets.map(b => (
                      <li key={b}>
                        <CircleCheckBig size={16} className="sol-check-icon" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="sol-product-card__btn">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sol-why section">
        <div className="container">
          <div className="text-center" style={{marginBottom:'52px'}}>
            <h2>Why Choose EkayaGreen?</h2>
            <p style={{color:'var(--text-muted)',fontSize:'17px'}}>We solve the key pain points of sustainable procurement while delivering exceptional value.</p>
          </div>
          <div className="sol-why__grid">
            {[
              { icon:<Award size={24}/>, title:'Sustainable & Certified', desc:'All materials are eco-friendly and meet international standards (FDA, BPI, ASTM).' },
              { icon:<DollarSign size={24}/>, title:'Cost Savings', desc:'Direct sourcing from manufacturers provides 30-50% lower production costs.' },
              { icon:<Shield size={24}/>, title:'Quality Assurance', desc:'Vetted suppliers and internal quality checks ensure reliability and consistency.' },
              { icon:<Truck size={24}/>, title:'End-to-End Logistics', desc:'Support with shipping, customs, and warehousing for hassle-free procurement.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="sol-why-card">
                <div className="sol-why-card__inner">
                  <div className="sol-why-card__icon">{icon}</div>
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

      <section className="sol-cta section" style={{background:'rgb(23,130,68)'}}>
        <div className="container text-center">
          <h2 style={{color:'#fff'}}>Ready to Source Sustainable Materials?</h2>
          <p style={{color:'rgba(255,255,255,0.85)'}}>Transform your supply chain with certified eco-friendly materials. Let's discuss how EkayaGreen can meet your sustainability goals.</p>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap',marginTop:'32px'}}>
            <Link to="/contact" className="btn-cta">Contact Our Team</Link>
            <Link to="/contact" className="btn-cta">Request a Consultation</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
