import React from 'react';
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Shield, 
  Users, 
  Calendar,
  Activity,
  Download,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white mt-auto">
      {/* Main Footer Content */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center mb-6 group">
              <div className="bg-white rounded-xl p-2 mr-3 group-hover:scale-105 transition-transform">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <span className="text-xl font-bold text-white block leading-tight">
                  Baby Care System
                </span>
                <span className="text-blue-200 text-sm">
                  Ministry of Health
                </span>
              </div>
            </a>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Supporting the health and wellbeing of babies across Sri Lanka through comprehensive vaccination tracking, growth monitoring, and expert healthcare guidance.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-blue-100">
                <Phone className="h-4 w-4 mr-3 text-blue-300" />
                <span>Emergency: 1990 | Hotline: 071-123-4567</span>
              </div>
              <div className="flex items-center text-sm text-blue-100">
                <Mail className="h-4 w-4 mr-3 text-blue-300" />
                <span>info@babycaresl.gov.lk</span>
              </div>
              <div className="flex items-start text-sm text-blue-100">
                <MapPin className="h-4 w-4 mr-3 text-blue-300 mt-0.5 flex-shrink-0" />
                <span>Ministry of Health<br />Suwasiripaya, Colombo 10</span>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Activity className="h-5 w-5 mr-2 text-blue-300" />
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Vaccination Schedule', href: '/vaccinations' },
                { name: 'Growth Monitoring', href: '/growth' },
                { name: 'Health Checkups', href: '/checkups' },
                { name: 'Nutrition Guidelines', href: '/nutrition' },
                { name: 'Development Milestones', href: '/milestones' },
                { name: 'Parent Education', href: '/education' },
                { name: 'Emergency Care', href: '/emergency' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Access Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-300" />
              Quick Access
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Parent Portal', href: '/portal' },
                { name: 'Find a Clinic', href: '/clinics' },
                { name: 'Book Appointment', href: '/appointment' },
                { name: 'Vaccination Records', href: '/records' },
                { name: 'Health Reports', href: '/reports' },
                { name: 'Resource Library', href: '/resources' },
                { name: 'Support Center', href: '/support' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-blue-300" />
              Legal & Support
            </h3>
            <ul className="space-y-3 mb-6">
              {[
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Data Protection', href: '/data-protection' },
                { name: 'Accessibility', href: '/accessibility' },
                { name: 'Help Center', href: '/help' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'FAQs', href: '/faqs' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-blue-100 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media Links */}
            <div>
              <h4 className="text-sm font-medium text-white mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: 'https://facebook.com/babycaresl' },
                  { icon: Twitter, href: 'https://twitter.com/babycaresl' },
                  { icon: Instagram, href: 'https://instagram.com/babycaresl' },
                  { icon: Youtube, href: 'https://youtube.com/babycaresl' },
                  { icon: Linkedin, href: 'https://linkedin.com/company/babycaresl' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-800 hover:bg-blue-700 p-2 rounded-lg transition-colors group"
                  >
                    <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile App Download Section */}
      <div className="bg-blue-800/50 backdrop-blur-sm border-t border-blue-700/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center lg:justify-start">
                <Download className="h-6 w-6 mr-2 text-blue-300" />
                Download Baby Care App
              </h3>
              <p className="text-blue-100 max-w-md">
                Get vaccination reminders, track your baby's health, access expert advice, and connect with healthcare providers on the go.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href="#" 
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl flex items-center transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
              
              <a 
                href="#" 
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl flex items-center transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-blue-900/80 backdrop-blur-sm border-t border-blue-700/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-blue-200">
                © {currentYear} Baby Care System. Ministry of Health, Sri Lanka. All Rights Reserved.
              </p>
              <p className="text-xs text-blue-300 mt-1">
                Developed with ❤️ for the health of Sri Lankan children
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <div className="flex items-center text-blue-200">
                <Calendar className="h-4 w-4 mr-2 text-blue-300" />
                <span>24/7 Health Support</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Shield className="h-4 w-4 mr-2 text-blue-300" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;