import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { ASSETS, VENUE_INFO } from '@shared/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Pricing & Add-ons', href: '/pricing' },
    { label: 'What\'s Included', href: '/whats-included' },
    { label: 'Resources', href: '/resources' },
    { label: 'The Space Happenings', href: '/happenings' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-elegant">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src={ASSETS.logo}
              alt="The Space"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActive(item.href)
                    ? 'bg-accent text-accent-foreground shadow-lg'
                    : 'text-foreground hover:bg-amber-50 hover:text-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${VENUE_INFO.phone}`}
              className="btn-primary text-sm"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-amber-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-accent" />
            ) : (
              <Menu className="w-6 h-6 text-accent" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 animate-slideInDown">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-all duration-300 font-medium block ${
                    isActive(item.href)
                      ? 'bg-accent text-accent-foreground'
                      : 'text-foreground hover:bg-amber-50 hover:text-accent'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`tel:${VENUE_INFO.phone}`}
                className="btn-primary text-center mt-2"
              >
                Book Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
