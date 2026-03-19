import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Send, ChevronDown } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', company:'', phone:'', type:'General Inquiry', message:'' })
  const set = k => e => setForm(f => ({...f, [k]: e.target.value}))

  return (
    <main>
      <section className="con-hero section" style={{background:'linear-gradient(to bottom right, rgba(23,130,68,0.05), #ffffff, rgba(230,219,203,0.2))'}}>
        <div className="container text-center">
          <h1>Let's Start the <span className="text-green">Conversation</span></h1>
          <p>Have questions or want to collaborate? We'd love to hear from you. Whether you're a business seeking solutions or a supplier driving innovation, let's connect.</p>
        </div>
      </section>

      <section className="con-body section">
        <div className="container con-body__grid">
          <div className="card con-form-card">
            <div className="con-form-header">
              <MessageCircle size={22} color="var(--green-dark)" />
              <h2>Send us a Message</h2>
            </div>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            <form className="con-form" onSubmit={e => e.preventDefault()}>
              <div className="con-form__row">
                <div className="con-field">
                  <label>Name *</label>
                  <input type="text" placeholder="Your full name" value={form.name} onChange={set('name')} required />
                </div>
                <div className="con-field">
                  <label>Email *</label>
                  <input type="email" placeholder="your.email@company.com" value={form.email} onChange={set('email')} required />
                </div>
              </div>
              <div className="con-form__row">
                <div className="con-field">
                  <label>Company</label>
                  <input type="text" placeholder="Your company name" value={form.company} onChange={set('company')} />
                </div>
                <div className="con-field">
                  <label>Phone</label>
                  <input type="tel" placeholder="+1 (555) 123-4567" value={form.phone} onChange={set('phone')} />
                </div>
              </div>
              <div className="con-field">
                <label>Inquiry Type</label>
                <select value={form.type} onChange={set('type')}>
                  <option>General Inquiry</option>
                  <option>Business Partnership</option>
                  <option>Supplier Application</option>
                  <option>Press & Media</option>
                  <option>Technical Support</option>
                </select>
              </div>
              <div className="con-field">
                <label>Message *</label>
                <textarea rows="5" placeholder="Tell us about your needs..." value={form.message} onChange={set('message')} required></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{width:'100%',justifyContent:'center',padding:'14px'}}><Send size={16}/>Send Message</button>
              <p className="con-form__note">We'll never share your information and we typically respond within 24 hours.</p>
            </form>
          </div>

          <div className="con-info">
            <h2>Get in Touch</h2>
            <p>We're here to help you find the perfect sustainable solutions for your business. Our team of experts is ready to discuss your needs and explore partnership opportunities.</p>
            <div className="con-info__cards">
              {[
                { icon:<Mail size={20}/>, title:'Email Us', val:'sales@ekayagreen.com', sub:'Send us an email anytime' },
                { icon:<Phone size={20}/>, title:'Call Us', val:'+1 (609) 608-5499', sub:'Mon-Fri from 8am to 6pm EST' },
                { icon:<MapPin size={20}/>, title:'Global Operations', val:'Serving worldwide', sub:'US, India & beyond' },
              ].map(({ icon, title, val, sub }) => (
                <div key={title} className="card con-info-card">
                  <div className="icon-circle icon-circle--sm">{icon}</div>
                  <div>
                    <h4>{title}</h4>
                    <p className="con-info-val">{val}</p>
                    <p>{sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="card con-languages">
              <h4>Inquiries Welcome in Multiple Languages</h4>
              <p>While our website is currently in English, we welcome inquiries in other languages as we work toward our multi-language future.</p>
              <div className="con-lang-list">
                <span className="con-lang active">English</span>
                <span className="con-lang">Español (Coming Soon)</span>
                <span className="con-lang">हिंदी (Coming Soon)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="con-faq section" style={{background:'rgba(196,238,196,0.3)'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom:'48px'}}>
            <h2>Frequently Asked Questions</h2>
            <p style={{color:'var(--text-muted)',fontSize:'17px'}}>Quick answers to common questions about our services and partnerships.</p>
          </div>
          <div className="con-faq__grid">
            {[
              { q:'How quickly can you source sustainable materials?', a:'Depending on the product and quantity, we typically provide quotes within 48 hours and can arrange shipping within 2-4 weeks for most standard products.' },
              { q:'What certifications do your products have?', a:'All our products meet FDA, BPI, ASTM, and other relevant international standards. We provide full certification documentation with every shipment.' },
              { q:'Do you offer custom packaging solutions?', a:'Yes! We work with manufacturers to create custom-branded sustainable packaging solutions tailored to your specific needs and branding requirements.' },
              { q:'How do I become a supplier partner?', a:"Visit our Partners page or contact us directly. We evaluate potential partners based on sustainability certifications, quality standards, and production capacity." },
            ].map(({ q, a }) => (
              <div key={q} className="card con-faq-item">
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
