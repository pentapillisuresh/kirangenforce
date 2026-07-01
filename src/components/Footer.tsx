import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin, Clock, Building2, ChevronLeft, ChevronRight, Globe, Award } from 'lucide-react';

const Footer = () => {
  const [officeIndex, setOfficeIndex] = useState(0);

  const offices = [
    {
      type: 'Head Office',
      icon: Building2,
      address: '1-8-32/5, Bapu Bagh Colony, Ramgopalpet',
      city: 'Hyderabad - 500003',
      state: 'Telangana'
    }
  ];

  const nextOffice = () => {
    setOfficeIndex((prev) => (prev + 1) % offices.length);
  };

  const prevOffice = () => {
    setOfficeIndex((prev) => (prev - 1 + offices.length) % offices.length);
  };

  const CurrentIcon = offices[officeIndex].icon;

  return (
    <footer className="relative bg-black border-t border-[#EB0133]/10 overflow-hidden mt-20">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EB0133' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-20 h-20">
                <img
                  src="/images/genlogo.png"
                  alt="KiranGenforce Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white uppercase">KIRAN</span>
                <span className="block text-[#EB0133] text-[10px] tracking-wider">GENFORCE PVT LTD</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 font-sans">
              Authorized dealer for Mahindra Powerol, offering reliable, efficient, and innovative power solutions with over 24 years of experience.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#EB0133] hover:border-[#EB0133]/40 hover:bg-[#EB0133]/10 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#EB0133] hover:border-[#EB0133]/40 hover:bg-[#EB0133]/10 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="font-serif text-white font-semibold mb-5 text-sm tracking-widest uppercase">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/#" className="text-white/50 text-sm hover:text-[#EB0133] transition-colors duration-200 font-sans">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-white/50 text-sm hover:text-[#EB0133] transition-colors duration-200 font-sans">
                  Powerol Solutions
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-white/50 text-sm hover:text-[#EB0133] transition-colors duration-200 font-sans">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-white/50 text-sm hover:text-[#EB0133] transition-colors duration-200 font-sans">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-white/50 text-sm hover:text-[#EB0133] transition-colors duration-200 font-sans">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-serif text-white font-semibold mb-5 text-sm tracking-widest uppercase">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/#" className="text-white/50 text-sm hover:text-[#EB0133] transition-colors duration-200 font-sans">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-white/50 text-sm hover:text-[#EB0133] transition-colors duration-200 font-sans">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-white/50 text-sm hover:text-[#EB0133] transition-colors duration-200 font-sans">
                  Business Enquiry
                </Link>
              </li>
            </ul>

            <h3 className="font-serif text-white font-semibold mb-5 mt-8 text-sm tracking-widest uppercase">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/#" className="text-white/50 text-sm hover:text-[#EB0133] transition-colors duration-200 font-sans">
                  About KiranGenforce
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-white/50 text-sm hover:text-[#EB0133] transition-colors duration-200 font-sans">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section with Office Carousel */}
          <div>
            <h3 className="font-serif text-white font-semibold mb-5 text-sm tracking-widest uppercase">Our Office</h3>
            
            {/* Office Carousel */}
            <div className="bg-white/[0.03] rounded-xl border border-white/10 p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <CurrentIcon className="w-4 h-4 text-[#EB0133]" />
                  <span className="text-[#EB0133] text-[10px] font-mono tracking-wider uppercase">
                    {offices[officeIndex].type}
                  </span>
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-white/50 text-xs leading-relaxed">
                  {offices[officeIndex].address}
                </p>
                <p className="text-white/50 text-xs">
                  {offices[officeIndex].city}
                </p>
                <p className="text-white/40 text-[10px]">
                  {offices[officeIndex].state}
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#EB0133] shrink-0" />
                <a href="tel:+919959548064" className="text-white/50 text-sm hover:text-[#EB0133] transition-colors font-sans">+91-9959548064</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#EB0133] shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:sales@kirangenforce.com" className="text-white/50 text-sm hover:text-[#EB0133] transition-colors font-sans">sales@kirangenforce.com</a>
                  <a href="mailto:kirankumar.g@kirangenforce.com" className="text-white/40 text-xs hover:text-[#EB0133] transition-colors font-sans">kirankumar.g@kirangenforce.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#EB0133] mt-0.5 shrink-0" />
                <div>
                  <span className="text-white/60 text-[10px] font-mono block mb-0.5">Location</span>
                  <span className="text-white/50 text-xs">1-8-32/5, Bapu Bagh Colony<br />Ramgopalpet, Hyderabad<br />Telangana 500003</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-sans">Copyright © 2026 Kirangenforce. All Rights Reserved</p>
          {/* <p className="text-white/20 text-[10px] font-sans">
            Powered by Rashmita Infinity Opc Pvt Ltd - Hyderabad (Website Designing & Digital Marketing Services)
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;