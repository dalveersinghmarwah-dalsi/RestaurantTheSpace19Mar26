import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { VENUE_INFO } from '@shared/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}\n      <section className="section-padding bg-gradient-cool border-b border-amber-100">
        <div className="container text-center animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out and let's start planning your perfect event.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8 animate-slideInLeft">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  Reach out to us via phone, email, or visit us in person. We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${VENUE_INFO.phone}`}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gradient-warm transition-colors group"
                >
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">{VENUE_INFO.phone}</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${VENUE_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gradient-warm transition-colors group"
                >
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">{VENUE_INFO.email}</p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-warm">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">{VENUE_INFO.address}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href={VENUE_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Instagram
                  </a>
                  <a
                    href={VENUE_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slideInRight">
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="pricing">Pricing Question</option>
                      <option value="event">Event Planning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                      placeholder="Tell us about your event..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>

                  {submitted && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg animate-fadeInUp">
                      <p className="text-green-700 font-semibold">
                        Thank you! We'll get back to you soon.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gradient-warm">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center animate-fadeInUp">
            <h2 className="text-4xl font-bold text-foreground mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for special offers, event updates, and insider tips on hosting the perfect gathering.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Handle newsletter subscription
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Hours & Availability */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
            <h2 className="text-4xl font-bold text-foreground mb-8">Hours & Availability</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-cool p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Office Hours</h3>
                <p className="text-muted-foreground mb-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-muted-foreground">Saturday - Sunday: By appointment</p>
              </div>
              <div className="bg-gradient-cool p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">Event Hours</h3>
                <p className="text-muted-foreground mb-2">Weekdays: 9:00 AM - 10:00 PM</p>
                <p className="text-muted-foreground">Weekends: 10:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
