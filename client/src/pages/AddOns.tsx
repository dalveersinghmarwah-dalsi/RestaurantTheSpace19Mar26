import { ADDONS, VENUE_INFO, ASSETS } from '@shared/constants';

export default function AddOns() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="section-padding border-b border-amber-100 relative overflow-hidden"
        style={{
          backgroundImage: `url(${ASSETS.addOnsHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="container text-center animate-fadeInUp relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Add-ons & Decor Packages
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Elevate your event with our curated selection of add-ons, décor packages, and services
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container px-12 sm:px-16 lg:px-20">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center animate-fadeInUp">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ADDONS.services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-cool p-8 rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{service.name}</h3>
                  <span className="text-3xl font-bold text-accent">${service.price}</span>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorations */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container px-12 sm:px-16 lg:px-20">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center animate-fadeInUp">
            Decorations & Décor Items
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDONS.decor.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl hover:shadow-elegant-lg transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${(index % 6) * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground flex-1">{item.name}</h3>
                  <span className="text-2xl font-bold text-accent ml-2">${item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Furniture */}
      <section className="section-padding">
        <div className="container px-12 sm:px-16 lg:px-20">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center animate-fadeInUp">
            Additional Furniture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ADDONS.furniture.map((item, index) => (
              <div
                key={index}
                className="bg-white border-2 border-amber-100 p-8 rounded-2xl hover:border-accent transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{item.name}</h3>
                  {item.price && <span className="text-3xl font-bold text-accent">${item.price}</span>}
                  {!item.price && <span className="text-lg text-secondary font-semibold">Inquire</span>}
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-gradient-warm">
        <div className="container px-12 sm:px-16 lg:px-20">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center animate-fadeInUp">
            Décor Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {ADDONS.packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-elegant-lg hover:shadow-elegant-lg transition-all duration-300 animate-slideInLeft"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">{pkg.name}</h3>
                <p className="text-muted-foreground mb-6">{pkg.description}</p>
                <div className="text-3xl font-bold text-accent">${pkg.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container text-center animate-fadeInUp">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to personalize your event?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Mix and match our add-ons to create the perfect atmosphere for your gathering.
          </p>
          <a href={`tel:${VENUE_INFO.phone}`} className="btn-primary">
            Let's Plan Together
          </a>
        </div>
      </section>
    </div>
  );
}
