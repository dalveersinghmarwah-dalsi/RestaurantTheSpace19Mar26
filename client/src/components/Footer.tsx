import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { VENUE_INFO } from '@shared/constants';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 border-t border-amber-100">
      <div className="container py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="animate-fadeInUp">
            <h3 className="text-xl font-bold text-foreground mb-4">The Space</h3>
            <p className="text-muted-foreground mb-4">
              A private event venue in downtown Westerly, RI. Perfect for celebrations, gatherings, and unforgettable moments.
            </p>
            <div className="flex gap-3">
              <a
                href={VENUE_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-elegant"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={VENUE_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-elegant"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={VENUE_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-elegant"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-bold text-foreground mb-4">Contact</h3>
            <div className="space-y-3 text-muted-foreground">
              <a
                href={`tel:${VENUE_INFO.phone}`}
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                {VENUE_INFO.phone}
              </a>
              <a
                href={`mailto:${VENUE_INFO.email}`}
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                {VENUE_INFO.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>{VENUE_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/pricing" className="hover:text-accent transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/whats-included" className="hover:text-accent transition-colors">
                  What's Included
                </a>
              </li>
              <li>
                <a href="/happenings" className="hover:text-accent transition-colors">
                  Happenings
                </a>
              </li>
              <li>
                <a href="/resources" className="hover:text-accent transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-bold text-foreground mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get updates on special offers and upcoming events.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="w-full btn-primary text-sm"
              >
                Subscribe
              </button>
              {subscribed && (
                <p className="text-sm text-green-600 animate-fadeInUp">
                  Thanks for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-100 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left text-sm text-muted-foreground">
            <p>&copy; 2026 The Space. All rights reserved.</p>
            <div className="flex justify-center md:justify-end gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
