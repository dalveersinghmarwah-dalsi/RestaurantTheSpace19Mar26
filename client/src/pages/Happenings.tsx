import { Calendar, Clock, Users, Ticket } from 'lucide-react';
import { EVENTS, VENUE_INFO } from '@shared/constants';

export default function Happenings() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="section-padding bg-gradient-warm border-b border-amber-100">
        <div className="container text-center animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            The Space Happenings
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for exciting events and unforgettable experiences
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENTS.map((event, index) => (
              <div
                key={event.id}
                className="group glass p-8 rounded-2xl hover:shadow-elegant-lg transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${(index % 4) * 0.1}s` }}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-foreground flex-1 group-hover:text-accent transition-colors">
                      {event.title}
                    </h3>
                    {event.ageRestriction && (
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold flex-shrink-0 ml-2">
                        {event.ageRestriction}
                      </span>
                    )}
                  </div>
                </div>

                {/* Date & Time */}
                <div className="space-y-3 mb-6 pb-6 border-b border-white/20">
                  <div className="flex items-center gap-3 text-foreground">
                    <Calendar className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-semibold">{event.time}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{event.description}</p>

                {/* Includes */}
                <div className="bg-white/20 p-4 rounded-lg mb-6">
                  <p className="text-sm text-foreground">
                    <span className="font-bold">Includes:</span> {event.includes}
                  </p>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Ticket className="w-5 h-5 text-accent" />
                    <span className="text-2xl font-bold text-accent">${event.price}</span>
                  </div>
                  <a
                    href={`tel:${VENUE_INFO.phone}`}
                    className="btn-primary text-sm"
                  >
                    Get Tickets
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Notice */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
            <div className="bg-white p-8 rounded-2xl shadow-elegant-lg border-2 border-amber-100">
              <h2 className="text-3xl font-bold text-foreground mb-4">More Events Coming Soon</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're constantly planning new and exciting events. Subscribe to our newsletter to stay updated on upcoming happenings at The Space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent flex-1"
                />
                <button className="btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Host Your Event */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Host Your Own Event at The Space
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're planning a birthday celebration, corporate gathering, or intimate dinner party, The Space provides the perfect setting for your event.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Flexible hourly rates',
                  'Customizable setup and décor',
                  'Full kitchen facilities',
                  'Professional lighting and sound',
                  'Riverside patio access',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground font-semibold">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={`tel:${VENUE_INFO.phone}`} className="btn-primary">
                Book Your Event
              </a>
            </div>
            <div className="animate-slideInRight">
              <div className="bg-gradient-warm p-8 rounded-2xl shadow-elegant-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6">Event Planning Made Easy</h3>
                <div className="space-y-4">
                  {[
                    { step: '1', label: 'Choose your date and time' },
                    { step: '2', label: 'Select your space (or both!)' },
                    { step: '3', label: 'Add décor and services' },
                    { step: '4', label: 'Enjoy your celebration' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <span className="text-foreground font-semibold">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-warm">
        <div className="container text-center animate-fadeInUp">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Don't miss out on the fun
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Check back regularly for new events and special happenings at The Space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${VENUE_INFO.phone}`} className="btn-primary">
              Get in Touch
            </a>
            <a href="/contact" className="btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
