import { Link } from 'react-router-dom';
import { Building2, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => (
  <footer className="relative bg-black border-t border-[#D9AF58]/10 overflow-hidden">
    {/* Premium Background Elements */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D9AF58' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }} />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-4 group">
            <div className="w-10 h-10">
              <img src='/images/logo2.png' alt="Archaidplus Logo" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold text-white uppercase">archaidplus</span>
            </div>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed mb-6 font-sans">
            Crafting spaces that inspire. Where architecture meets artistry and every detail tells a story.
          </p>
          <div className="flex items-center gap-3">
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/archaidplus/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#D9AF58] hover:border-[#D9AF58]/40 hover:bg-[#D9AF58]/10 transition-all duration-200"
            >
              <Instagram className="w-4 h-4" />
            </a>
            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/niharika-bhagat-3b466a1ab/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#D9AF58] hover:border-[#D9AF58]/40 hover:bg-[#D9AF58]/10 transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="font-serif text-white font-semibold mb-5 text-sm tracking-widest uppercase">Services</h3>
          <ul className="space-y-3">
            {['Architecture Design', 'Interior Design', 'Renovation', 'Consulting'].map((item) => (
              <li key={item}>
                <Link to="/services" className="text-white/50 text-sm hover:text-[#D9AF58] transition-colors duration-200 font-sans">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-serif text-white font-semibold mb-5 text-sm tracking-widest uppercase">Company</h3>
          <ul className="space-y-3">
            {[
              { label: 'About Us', path: '/about' },
              { label: 'Portfolio', path: '/portfolio-architecture' },
              { label: 'Interior Design', path: '/portfolio-interior' },
              { label: 'Blog', path: '/blog' },
              { label: 'Contact', path: '/contact' },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.path} className="text-white/50 text-sm hover:text-[#D9AF58] transition-colors duration-200 font-sans">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-serif text-white font-semibold mb-5 text-sm tracking-widest uppercase">Contact</h3>
          <ul className="space-y-4">
            {/* Kolkata Office Address */}
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#D9AF58] mt-0.5 shrink-0" />
              <div>
                <span className="text-white/60 text-xs font-mono block mb-0.5">Main Office</span>
                <span className="text-white/50 text-sm">Kolkata 700019, West Bengal<br />India</span>
              </div>
            </li>
            {/* Vizag Office Address */}
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#D9AF58] mt-0.5 shrink-0" />
              <div>
                <span className="text-white/60 text-xs font-mono block mb-0.5">Sub Office</span>
                <span className="text-white/50 text-sm">Vizag, Andhra Pradesh<br />India</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#D9AF58] shrink-0" />
              <a href="tel:+919073651933" className="text-white/50 text-sm hover:text-[#D9AF58] transition-colors font-sans">+91 90736 51933</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#D9AF58] shrink-0" />
              <a href="mailto:Archaidplus@gmail.com" className="text-white/50 text-sm hover:text-[#D9AF58] transition-colors font-sans">Archaidplus@gmail.com</a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#D9AF58] mt-0.5 shrink-0" />
              <div>
                <span className="text-white/60 text-xs font-mono block mb-0.5">Working Hours</span>
                <span className="text-white/50 text-sm">Mon-Fri: 9AM - 6PM<br />Sat: 10AM - 2PM</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-xs font-sans">© 2026 Archaidplus Architects. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
            <Link key={item} to="/" className="text-white/30 text-xs hover:text-[#D9AF58] transition-colors duration-200 font-sans">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;