import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'wouter';
import { ASSETS, CAPACITY, VENUE_INFO } from '@shared/constants';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${ASSETS.heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="relative z-10 container text-center text-white animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome to The Space
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            A Private Space to Make Your Own
          </p>
          <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto text-gray-100">
            We know hosting at home or in the office can be a challenge. The Space offers an easier alternative with two flexible, private spaces you can shape into an unforgettable gathering, without the stress or the high cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${VENUE_INFO.phone}`} className="btn-primary">
              Book Now
            </a>
            <Link href="/pricing" className="btn-outline">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Venue Showcase */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Choose Your <span className="text-gradient">Space</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Two flexible, private spaces designed to transform your vision into reality
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* The Space */}
            <div className="group animate-slideInLeft">
              <div className="relative overflow-hidden rounded-2xl shadow-elegant-lg transition-all duration-500 hover:shadow-elegant-lg">
                <img
                  src={ASSETS.theSpaceMain}
                  alt="The Space"
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-6">
                <h3 className="text-3xl font-bold text-foreground mb-2">The Space</h3>
                <p className="text-lg text-accent font-semibold mb-4">
                  Bright, open, and adaptable
                </p>
                <p className="text-muted-foreground mb-6">
                  A light-filled room with an open layout that easily transforms for celebrations, gatherings, workshops, and more.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-semibold">{CAPACITY.theSpace.standing} standing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-semibold">{CAPACITY.theSpace.seated} fully seated</span>
                  </div>
                </div>
                <Link href="/whats-included" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all duration-300">
                  Learn More <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* The Space Below */}
            <div className="group animate-slideInRight">
              <div className="relative overflow-hidden rounded-2xl shadow-elegant-lg transition-all duration-500 hover:shadow-elegant-lg">
                <img
                  src={ASSETS.theSpaceBelowMain}
                  alt="The Space Below"
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-6">
                <h3 className="text-3xl font-bold text-foreground mb-2">The Space Below</h3>
                <p className="text-lg text-accent font-semibold mb-4">
                  A warm, speakeasy-inspired setting
                </p>
                <p className="text-muted-foreground mb-6">
                  An intimate space with layered lighting and comfortable seating. Perfect for relaxed gatherings or as an add-on to The Space.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-semibold">{CAPACITY.theSpaceBelow.standing} standing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-semibold">{CAPACITY.theSpaceBelow.seated} fully seated</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground font-semibold">25% off when rented with The Space</span>
                  </div>
                </div>
                <Link href="/whats-included" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all duration-300">
                  Learn More <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gradient-warm">
        <div className="container">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Four simple steps to your perfect event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Choose Your Date',
                description: 'Reach out to check availability or schedule a quick tour.',
              },
              {
                step: '2',
                title: 'Reserve Your Time',
                description: 'Once you\'re ready, we\'ll hold your date with a signed agreement and deposit.',
              },
              {
                step: '3',
                title: 'Plan It Your Way',
                description: 'Bring your own food, drinks, and décor, or work with your favorite vendors.',
              },
              {
                step: '4',
                title: 'Show Up & Enjoy',
                description: 'Use your personal door code and settle in to enjoy the space.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass p-8 rounded-2xl text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container text-center animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Gatherings should feel joyful, not stressful
          </h2>
          <p className="text-2xl text-muted-foreground mb-8">
            Let <span className="text-gradient font-bold">The Space</span> be your happy place
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${VENUE_INFO.phone}`} className="btn-primary">
              Book a Tour
            </a>
            <Link href="/contact" className="btn-outline">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
