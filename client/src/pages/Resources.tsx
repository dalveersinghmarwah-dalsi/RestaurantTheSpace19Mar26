import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA, VENUE_INFO } from '@shared/constants';

export default function Resources() {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="section-padding bg-gradient-cool border-b border-amber-100">
        <div className="container text-center animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Resources & FAQ
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about hosting your event at The Space
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {FAQ_DATA.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="mb-6 animate-fadeInUp"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div
                  onClick={() => toggleCategory(category.category)}
                  className="glass p-6 rounded-xl cursor-pointer hover:shadow-elegant-lg transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {category.category}
                    </h3>
                    <ChevronDown
                      className={`w-6 h-6 text-accent transition-transform duration-300 ${
                        openCategories.includes(category.category) ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Category Items */}
                {openCategories.includes(category.category) && (
                  <div className="mt-2 space-y-2 animate-slideInDown">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="bg-gradient-warm p-6 rounded-xl border-l-4 border-accent"
                      >
                        <h4 className="text-lg font-bold text-foreground mb-3">
                          {item.question}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center animate-fadeInUp">
            Helpful Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Pricing & Rates',
                description: 'View our hourly rates, day rates, and special discounts',
                link: '/pricing',
              },
              {
                title: 'What\'s Included',
                description: 'See what furniture, amenities, and features are included',
                link: '/whats-included',
              },
              {
                title: 'Add-ons & Décor',
                description: 'Browse our selection of add-ons and décor packages',
                link: '/add-ons',
              },
            ].map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="group glass p-8 rounded-2xl hover:shadow-elegant-lg transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors mb-3">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Information */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto animate-fadeInUp">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
              Recommended Vendors
            </h2>
            <div className="bg-gradient-warm p-8 rounded-2xl">
              <p className="text-lg text-muted-foreground mb-6">
                We've partnered with a carefully selected group of vendors who understand our space and deliver exceptional service. While you're welcome to use any vendor you prefer, these recommendations are based on quality and reliability.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-foreground mb-2">Catering & Food Services</h4>
                  <p className="text-muted-foreground">We work with local caterers who can deliver exceptional food and beverage service for your event.</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Florists & Decorators</h4>
                  <p className="text-muted-foreground">Our recommended florists and decorators have experience working in our spaces and know how to maximize the venue's beauty.</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Photography & Videography</h4>
                  <p className="text-muted-foreground">Professional photographers and videographers familiar with our lighting and layout can capture your event beautifully.</p>
                </div>
              </div>
              <button className="btn-primary mt-8">
                View Full Vendor List
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Parking Information */}
      <section className="section-padding bg-gradient-cool">
        <div className="container">
          <div className="max-w-3xl mx-auto animate-fadeInUp">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
              Parking Information
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-elegant">
                <h3 className="text-lg font-bold text-foreground mb-3">No Time Limit Lots</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Canal Street lot</li>
                  <li>• YMCA lot (across the street)</li>
                  <li>• High Street lot (right of Pizza Place)</li>
                  <li>• High Street lot (left of the bank)</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-elegant">
                <h3 className="text-lg font-bold text-foreground mb-3">Timed Parking</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• High Street street parking (3-hour limit)</li>
                  <li>• Canal Street street parking (3-hour limit)</li>
                  <li>• Loading zone in front (weekdays 9am-4pm no limit, after 4pm open, weekends 3-hour limit)</li>
                </ul>
              </div>
              <p className="text-foreground font-semibold text-center">
                We recommend using the no time limit lots for the easiest parking experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container text-center animate-fadeInUp">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Still have questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our team is here to help. Reach out anytime!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${VENUE_INFO.phone}`} className="btn-primary">
              Call Us
            </a>
            <a href={`mailto:${VENUE_INFO.email}`} className="btn-outline">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
