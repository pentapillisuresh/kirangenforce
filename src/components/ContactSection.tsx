import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { Mail, Phone, MapPin, Send, Clock, Building2, Globe, Award } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().optional(),
  mobile: z.string().min(10, 'Please enter a valid mobile number'),
  email: z.string().email('Please enter a valid email'),
  state: z.string().min(1, 'Please select a state'),
  segment: z.string().min(1, 'Please select a segment'),
  city: z.string().min(1, 'Please select a city'),
  productRange: z.string().min(1, 'Please select a product range'),
  existingUser: z.string().min(1, 'Please select an option'),
});

type FormData = z.infer<typeof schema>;

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('https://formsubmit.co/sales@kirangenforce.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          company: data.company,
          mobile: data.mobile,
          email: data.email,
          state: data.state,
          segment: data.segment,
          city: data.city,
          productRange: data.productRange,
          existingUser: data.existingUser,
          _captcha: 'false',
          _template: 'table',
          _subject: 'New Business Enquiry from KiranGenforce Website',
        }),
      });

      if (response.ok) {
        toast.success('✨ Enquiry sent successfully! We\'ll get back to you within 24 hours.');
        reset();
      } else {
        toast.error('❌ Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('❌ Network error. Please check your connection.');
    }
  };

  return (
    <section ref={ref} className="relative py-24 bg-black overflow-hidden mt-20" id="contact">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EB0133' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Animated Light Orbs */}
        <motion.div
          className="absolute top-1/3 -left-48 w-96 h-96 rounded-full bg-[#EB0133]/5 blur-[120px]"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-48 w-96 h-96 rounded-full bg-[#EB0133]/5 blur-[120px]"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section - Same style as other sections */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#EB0133] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5">
            Get In Touch
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Let's Power Your Business
          </h2>
          
          <p className="text-white/50 text-base leading-relaxed font-sans">
            Have a project in mind? Contact us today to discuss your power solutions needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Company Info */}
            <div className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#EB0133]/40 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EB0133]/10 border border-[#EB0133]/20 flex items-center justify-center shrink-0 group-hover:bg-[#EB0133]/20 transition-all duration-300">
                  <Award className="w-4 h-4 text-[#EB0133]" />
                </div>
                <div className="flex-1">
                  <div className="text-[#EB0133] text-[10px] font-mono tracking-wider uppercase mb-1">KIRANGENFORCE</div>
                  <div className="text-white/60 text-xs leading-relaxed">
                    Authorized dealer for Mahindra Powerol, offering reliable, efficient, and innovative power solutions with over 24 years of experience.
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="group p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#EB0133]/40 transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EB0133]/10 border border-[#EB0133]/20 flex items-center justify-center shrink-0 group-hover:bg-[#EB0133]/20 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-[#EB0133]" />
                </div>
                <div>
                  <div className="text-white/40 text-[10px] font-mono tracking-wider uppercase mb-1">Location</div>
                  <div className="text-white text-sm whitespace-pre-line">
                    1-8-32/5, Bapu Bagh Colony
                    Ramgopalpet, Hyderabad
                    Telangana 500003
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info Cards */}
            {[
              { icon: Phone, label: 'Phone Number', value: '+91-9959548064' },
              { icon: Mail, label: 'Email Us', value: 'sales@kirangenforce.com\nkirankumar.g@kirangenforce.com' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="group flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#EB0133]/40 transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-xl bg-[#EB0133]/10 border border-[#EB0133]/20 flex items-center justify-center shrink-0 group-hover:bg-[#EB0133]/20 transition-all duration-300">
                  <Icon className="w-4 h-4 text-[#EB0133]" />
                </div>
                <div>
                  <div className="text-white/40 text-[10px] font-mono tracking-wider uppercase mb-1">{label}</div>
                  <div className="text-white text-sm whitespace-pre-line">{value}</div>
                </div>
              </div>
            ))}

           
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] space-y-6">
              {/* Form Header */}
              <div className="text-center pb-4 border-b border-white/10">
                <h3 className="font-serif text-2xl font-bold text-white mb-1">Business Enquiry</h3>
                <p className="text-white/40 text-xs font-sans">We're happy to answer any questions you have about Mahindra Powerol</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-white/60 text-xs font-mono tracking-wider uppercase mb-2">Full Name *</label>
                  <input
                    id="name"
                    {...register('name')}
                    placeholder="Full Name"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#EB0133]/50 focus:border-[#EB0133]/50 transition-all duration-200"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="block text-white/60 text-xs font-mono tracking-wider uppercase mb-2">Company</label>
                  <input
                    id="company"
                    {...register('company')}
                    placeholder="Company"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#EB0133]/50 focus:border-[#EB0133]/50 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="mobile" className="block text-white/60 text-xs font-mono tracking-wider uppercase mb-2">Mobile No *</label>
                  <input
                    id="mobile"
                    type="tel"
                    {...register('mobile')}
                    placeholder="Mobile No"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#EB0133]/50 focus:border-[#EB0133]/50 transition-all duration-200"
                  />
                  {errors.mobile && <p className="text-red-400 text-xs mt-1">{errors.mobile.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/60 text-xs font-mono tracking-wider uppercase mb-2">Email ID *</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="Email ID"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#EB0133]/50 focus:border-[#EB0133]/50 transition-all duration-200"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="state" className="block text-white/60 text-xs font-mono tracking-wider uppercase mb-2">State *</label>
                  <select
                    id="state"
                    {...register('state')}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 text-white text-sm transition-all duration-200"
                    style={{ backgroundColor: '#000000', color: '#ffffff' }}
                  >
                    <option value="" style={{ backgroundColor: '#000000', color: 'rgba(255,255,255,0.6)' }}>Select a State</option>
                    <option value="andhra-pradesh" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Andhra Pradesh</option>
                    <option value="telangana" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Telangana</option>
                    <option value="karnataka" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Karnataka</option>
                    <option value="tamil-nadu" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Tamil Nadu</option>
                    <option value="maharastra" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Maharashtra</option>
                    <option value="delhi" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Delhi</option>
                    <option value="others" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Others</option>
                  </select>
                  {errors.state && <p className="text-red-400 text-xs mt-1">{errors.state.message}</p>}
                </div>
                <div>
                  <label htmlFor="segment" className="block text-white/60 text-xs font-mono tracking-wider uppercase mb-2">Segment *</label>
                  <select
                    id="segment"
                    {...register('segment')}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 text-white text-sm transition-all duration-200"
                    style={{ backgroundColor: '#000000', color: '#ffffff' }}
                  >
                    <option value="" style={{ backgroundColor: '#000000', color: 'rgba(255,255,255,0.6)' }}>Select Segment</option>
                    <option value="residential" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Residential</option>
                    <option value="commercial" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Commercial</option>
                    <option value="industrial" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Industrial</option>
                    <option value="agriculture" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Agriculture</option>
                    <option value="healthcare" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Healthcare</option>
                    <option value="education" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Education</option>
                  </select>
                  {errors.segment && <p className="text-red-400 text-xs mt-1">{errors.segment.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="city" className="block text-white/60 text-xs font-mono tracking-wider uppercase mb-2">City *</label>
                  <select
                    id="city"
                    {...register('city')}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 text-white text-sm transition-all duration-200"
                    style={{ backgroundColor: '#000000', color: '#ffffff' }}
                  >
                    <option value="" style={{ backgroundColor: '#000000', color: 'rgba(255,255,255,0.6)' }}>Select a City</option>
                    <option value="hyderabad" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Hyderabad</option>
                    <option value="secunderabad" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Secunderabad</option>
                    <option value="vijayawada" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Vijayawada</option>
                    <option value="visakhapatnam" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Visakhapatnam</option>
                    <option value="amalapuram" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Amalapuram</option>
                    <option value="others" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Others</option>
                  </select>
                  {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city.message}</p>}
                </div>
                <div>
                  <label htmlFor="productRange" className="block text-white/60 text-xs font-mono tracking-wider uppercase mb-2">Product Range *</label>
                  <select
                    id="productRange"
                    {...register('productRange')}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 text-white text-sm transition-all duration-200"
                    style={{ backgroundColor: '#000000', color: '#ffffff' }}
                  >
                    <option value="" style={{ backgroundColor: '#000000', color: 'rgba(255,255,255,0.6)' }}>Select a Product Range</option>
                    <option value="5-25kva" style={{ backgroundColor: '#000000', color: '#ffffff' }}>5 KVA - 25 KVA</option>
                    <option value="30-100kva" style={{ backgroundColor: '#000000', color: '#ffffff' }}>30 KVA - 100 KVA</option>
                    <option value="101-300kva" style={{ backgroundColor: '#000000', color: '#ffffff' }}>101 KVA - 300 KVA</option>
                    <option value="301-650kva" style={{ backgroundColor: '#000000', color: '#ffffff' }}>301 KVA - 650 KVA</option>
                    <option value="panels" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Electrical Panels</option>
                    <option value="exhaust" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Exhaust Systems</option>
                  </select>
                  {errors.productRange && <p className="text-red-400 text-xs mt-1">{errors.productRange.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="existingUser" className="block text-white/60 text-xs font-mono tracking-wider uppercase mb-2">Existing DG Set User? *</label>
                <select
                  id="existingUser"
                  {...register('existingUser')}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 text-white text-sm transition-all duration-200"
                  style={{ backgroundColor: '#000000', color: '#ffffff' }}
                >
                  <option value="" style={{ backgroundColor: '#000000', color: 'rgba(255,255,255,0.6)' }}>Select an option</option>
                  <option value="yes" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Yes</option>
                  <option value="no" style={{ backgroundColor: '#000000', color: '#ffffff' }}>No</option>
                </select>
                {errors.existingUser && <p className="text-red-400 text-xs mt-1">{errors.existingUser.message}</p>}
              </div>

              <style>{`
                select:focus {
                  outline: none !important;
                  ring: 2px solid #EB0133 !important;
                  border-color: #EB0133 !important;
                  box-shadow: 0 0 0 2px rgba(235, 1, 51, 0.5) !important;
                }
                select option {
                  background-color: #000000 !important;
                  color: #ffffff !important;
                }
                select option:checked {
                  background-color: #EB0133 !important;
                  color: #ffffff !important;
                }
                select:hover {
                  border-color: rgba(235, 1, 51, 0.5) !important;
                }
              `}</style>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#EB0133] text-white font-mono text-sm font-semibold hover:bg-[#CC0022] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#EB0133]/50"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </div>
                ) : (
                  <>
                    Submit Enquiry
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

      
      </div>
    </section>
  );
};

export default ContactSection;