import { Check, AlertCircle } from 'lucide-react';
import { PRICING, VENUE_INFO, ASSETS } from '@shared/constants';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-cool">
      {/* Hero */}
      <section
        className="section-padding border-b border-amber-100 relative overflow-hidden"
        style={{
          backgroundImage: `url(${ASSETS.pricingHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="container text-center animate-fadeInUp relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Pricing
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Skip the sky-high rental fees. Our goal is to make hosting easy, stylish, and affordable.
          </p>
        </div>
      </section>

      {/* The Space Pricing */}
      <section className="section-padding">
        <div className="container px-12 sm:px-16 lg:px-20">
          <div className="mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-foreground mb-2">Rates For The Space</h2>
            <p className="text-lg text-muted-foreground">Bright, open, and adaptable</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Weekend Rates */}
            <div className="glass p-8 rounded-2xl animate-slideInLeft">
              <h3 className="text-2xl font-bold text-foreground mb-6">Weekend Rates</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-baseline justify-between pb-4 border-b border-white/20">
                  <span className="text-lg text-foreground font-semibold">Saturday & Sunday</span>
                  <span className="text-3xl font-bold text-accent">${PRICING.theSpace.weekend.rate}</span>
                  <span className="text-muted-foreground">/hour</span>
                </div>
                <div className="flex items-baseline justify-between pb-4 border-b border-white/20">
                  <span className="text-lg text-foreground font-semibold">Friday</span>
                  <span className="text-3xl font-bold text-accent">${PRICING.theSpace.friday.rate}</span>
                  <span className="text-muted-foreground">/hour</span>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm text-foreground">
                    <span className="font-bold">10-Hour Day Rate:</span> ${PRICING.theSpace.weekend.dayRate} (Sat/Sun) or ${PRICING.theSpace.friday.dayRate} (Fri)
                  </p>
                </div>
              </div>
            </div>

            {/* Weekday Rates */}
            <div className="glass p-8 rounded-2xl animate-slideInRight">
              <h3 className="text-2xl font-bold text-foreground mb-6">Weekday Rates</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-baseline justify-between pb-4 border-b border-white/20">
                  <span className="text-lg text-foreground font-semibold">Mon - Thurs after 5PM</span>
                  <span className="text-3xl font-bold text-accent">${PRICING.theSpace.weekdayAfter5pm.rate}</span>
                  <span className="text-muted-foreground">/hour</span>
                </div>
                <div className="flex items-baseline justify-between pb-4 border-b border-white/20">
                  <span className="text-lg text-foreground font-semibold">Mon - Thurs before 5PM</span>
                  <span className="text-3xl font-bold text-accent">${PRICING.theSpace.weekdayBefore5pm.rate}</span>
                  <span className="text-muted-foreground">/hour</span>
                </div>
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <p className="text-sm text-foreground">
                    <span className="font-bold">Perfect for:</span> Daytime workshops, corporate events, and team gatherings
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hour Minimums */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-elegant">
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                Hour Minimums
              </h4>
              <ul className="space-y-2 text-foreground">
                <li>• 4-hour minimum on Fri, Sat, and Sun</li>
                <li>• 2-hour minimum Mon - Thurs</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-elegant">
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-secondary" />
                Special Discounts Available
              </h4>
              <p className="text-foreground">
                Ask us about special discounts for recurring projects and full weekday rentals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Space Below Pricing */}
      <section className="section-padding bg-white border-t border-amber-100">
        <div className="container px-12 sm:px-16 lg:px-20">
          <div className="mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-foreground mb-2">Rates For The Space Below</h2>
            <p className="text-lg text-muted-foreground">A warm, speakeasy-inspired setting</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Weekend Rates */}
            <div className="glass p-8 rounded-2xl animate-slideInLeft">
              <h3 className="text-2xl font-bold text-foreground mb-6">Weekend Rates</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-baseline justify-between pb-4 border-b border-white/20">
                  <span className="text-lg text-foreground font-semibold">Saturday & Sunday</span>
                  <span className="text-3xl font-bold text-accent">${PRICING.theSpaceBelow.weekend.rate}</span>
                  <span className="text-muted-foreground">/hour</span>
                </div>
                <div className="flex items-baseline justify-between pb-4 border-b border-white/20">
                  <span className="text-lg text-foreground font-semibold">Friday</span>
                  <span className="text-3xl font-bold text-accent">${PRICING.theSpaceBelow.friday.rate}</span>
                  <span className="text-muted-foreground">/hour</span>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm text-foreground">
                    <span className="font-bold">10-Hour Day Rate:</span> ${PRICING.theSpaceBelow.weekend.dayRate} (Sat/Sun) or ${PRICING.theSpaceBelow.friday.dayRate} (Fri)
                  </p>
                </div>
              </div>
            </div>

            {/* Weekday Rates */}
            <div className="glass p-8 rounded-2xl animate-slideInRight">
              <h3 className="text-2xl font-bold text-foreground mb-6">Weekday Rates</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-baseline justify-between pb-4 border-b border-white/20">
                  <span className="text-lg text-foreground font-semibold">Mon - Thurs after 5PM</span>
                  <span className="text-3xl font-bold text-accent">${PRICING.theSpaceBelow.weekdayAfter5pm.rate}</span>
                  <span className="text-muted-foreground">/hour</span>
                </div>
                <div className="flex items-baseline justify-between pb-4 border-b border-white/20">
                  <span className="text-lg text-foreground font-semibold">Mon - Thurs before 5PM</span>
                  <span className="text-3xl font-bold text-accent">${PRICING.theSpaceBelow.weekdayBefore5pm.rate}</span>
                  <span className="text-muted-foreground">/hour</span>
                </div>
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <p className="text-sm text-foreground font-bold text-accent">
                    {PRICING.theSpaceBelow.discount}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hour Minimums */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-warm p-6 rounded-xl shadow-elegant">
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                Hour Minimums
              </h4>
              <ul className="space-y-2 text-foreground">
                <li>• 4-hour minimum on Fri, Sat, and Sun</li>
                <li>• 2-hour minimum Mon - Thurs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Discounts Section */}
      <section className="section-padding bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container px-12 sm:px-16 lg:px-20">
          <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
            <h2 className="text-4xl font-bold text-foreground mb-8">Special Discounts</h2>
            <div className="bg-white p-8 rounded-2xl shadow-elegant-lg">
              <p className="text-lg text-muted-foreground mb-6">
                We are happy to offer a <span className="font-bold text-accent">15% discount</span> to:
              </p>
              <ul className="space-y-3 text-foreground font-semibold mb-8">
                <li className="flex items-center justify-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  Military members (active duty and veterans)
                </li>
                <li className="flex items-center justify-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  First responders
                </li>
                <li className="flex items-center justify-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  Teachers
                </li>
                <li className="flex items-center justify-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  Not-for-profits
                </li>
              </ul>
              <a href={`tel:${VENUE_INFO.phone}`} className="btn-primary inline-block">
                Get Your Discount
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container text-center animate-fadeInUp">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to book your event?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today to check availability and discuss your event needs.
          </p>
          <a href={`tel:${VENUE_INFO.phone}`} className="btn-primary">
            Call Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
