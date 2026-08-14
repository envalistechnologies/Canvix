import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, LayoutDashboard, Settings, Info, Mail, ShieldAlert, FileText } from 'lucide-react';
import { useState } from 'react';
import appLogo from '../assets/app_logo.png';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: LayoutDashboard },
    { name: 'Tools', href: '/tools', icon: Settings },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Privacy', href: '/privacy-policy', icon: ShieldAlert },
    { name: 'Terms', href: '/terms-of-use', icon: FileText },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-bg-main text-text-main font-sans">
      {/* Navigation */}
      <nav className="border-b border-border-main bg-bg-card/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <img src={appLogo} alt="Canvix Pro Logo" className="w-10 h-10 rounded-lg object-contain shadow-sm" />
                <span className="text-xl font-bold tracking-tight text-text-main">Canvix <span className="text-brand">Pro</span></span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-brand ${
                    isActive(item.href) ? 'text-brand' : 'text-text-muted'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="#download"
                className="bg-brand hover:bg-brand-dark text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-brand/20 ml-2"
              >
                Get App
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-text-muted hover:text-brand p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border-main bg-bg-card absolute w-full shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? 'bg-brand/10 text-brand'
                      : 'text-text-muted hover:bg-slate-50 hover:text-brand'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <item.icon size={18} />
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border-main bg-bg-card py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src={appLogo} alt="Canvix Pro Logo" className="w-6 h-6 rounded object-contain" />
                <span className="text-lg font-bold tracking-tight text-text-main">Canvix Pro</span>
              </Link>
              <p className="text-text-muted text-sm max-w-xs">
                Your Ultimate All-in-One Image Studio. Powerful offline image and PDF tools right in your pocket.
              </p>
            </div>
            
            <div>
              <h3 className="text-text-main font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="text-text-muted hover:text-brand text-sm transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-use" className="text-text-muted hover:text-brand text-sm transition-colors">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-text-main font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-text-muted hover:text-brand text-sm transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-text-muted hover:text-brand text-sm transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border-main mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm">
              &copy; {new Date().getFullYear()} Envalis Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
