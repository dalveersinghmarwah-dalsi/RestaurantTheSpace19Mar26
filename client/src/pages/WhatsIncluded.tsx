import { Check } from 'lucide-react';
import { WHATS_INCLUDED, CAPACITY, VENUE_INFO } from '@shared/constants';

export default function WhatsIncluded() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="section-padding bg-gradient-cool border-b border-amber-100">
        <div className="container text-center animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            What's Included
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to host an amazing event
          </p>
        </div>
      </section>

      {/* The Space */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-foreground mb-2">The Space</h2>
            <p className="text-lg text-muted-foreground">{CAPACITY.theSpace.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Capacity */}
            <div className="animate-slideInLeft">
              <h3 className="text-2xl font-bold text-foreground mb-6">Capacity</h3>
              <div className="space-y-4">
                <div className="glass p-6 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-2">Standing Capacity</p>
                  <p className="text-2xl font-bold text-accent">{CAPACITY.theSpace.standing}</p>
                </div>
                <div className="glass p-6 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-2">Seated Capacity</p>
                  <p className="text-2xl font-bold text-accent">{CAPACITY.theSpace.seated}</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="animate-slideInRight">
              <h3 className="text-2xl font-bold text-foreground mb-6">Amenities & Features</h3>
              <ul className="space-y-3">
                {WHATS_INCLUDED.theSpace.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Furniture */}
          <div className="mt-12 animate-fadeInUp">
            <h3 className="text-2xl font-bold text-foreground mb-6">Furniture & Setup</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {WHATS_INCLUDED.theSpace.furniture.map((item, index) => (
                <div key={index} className="bg-gradient-warm p-4 rounded-lg flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Space Below */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-foreground mb-2">The Space Below</h2>
            <p className="text-lg text-muted-foreground">{CAPACITY.theSpaceBelow.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Capacity */}
            <div className="animate-slideInLeft">
              <h3 className="text-2xl font-bold text-foreground mb-6">Capacity</h3>
              <div className="space-y-4">
                <div className="glass p-6 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-2">Standing Capacity</p>
                  <p className="text-2xl font-bold text-accent">{CAPACITY.theSpaceBelow.standing}</p>
                </div>
                <div className="glass p-6 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-2">Seated Capacity</p>
                  <p className="text-2xl font-bold text-accent">{CAPACITY.theSpaceBelow.seated}</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="animate-slideInRight">
              <h3 className="text-2xl font-bold text-foreground mb-6">Amenities & Features</h3>
              <ul className="space-y-3">
                {WHATS_INCLUDED.theSpaceBelow.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Furniture */}
          <div className="mt-12 animate-fadeInUp">
            <h3 className="text-2xl font-bold text-foreground mb-6">Furniture & Setup</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {WHATS_INCLUDED.theSpaceBelow.furniture.map((item, index) => (
                <div key={index} className="bg-gradient-warm p-4 rounded-lg flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center animate-fadeInUp">
            Space Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-amber-100">
                  <th className="text-left py-4 px-4 font-bold text-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">The Space</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">The Space Below</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-amber-50 hover:bg-gradient-warm transition-colors">
                  <td className="py-4 px-4 font-semibold text-foreground">Standing Capacity</td>
                  <td className="text-center py-4 px-4 text-accent font-bold">60-70</td>
                  <td className="text-center py-4 px-4 text-accent font-bold">40</td>
                </tr>
                <tr className="border-b border-amber-50 hover:bg-gradient-warm transition-colors">
                  <td className="py-4 px-4 font-semibold text-foreground">Seated Capacity</td>
                  <td className="text-center py-4 px-4 text-accent font-bold">40</td>
                  <td className="text-center py-4 px-4 text-accent font-bold">30</td>
                </tr>
                <tr className="border-b border-amber-50 hover:bg-gradient-warm transition-colors">
                  <td className="py-4 px-4 font-semibold text-foreground">Patio Access</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                </tr>
                <tr className="border-b border-amber-50 hover:bg-gradient-warm transition-colors">
                  <td className="py-4 px-4 font-semibold text-foreground">Video Projector</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center py-4 px-4">-</td>
                </tr>
                <tr className="border-b border-amber-50 hover:bg-gradient-warm transition-colors">
                  <td className="py-4 px-4 font-semibold text-foreground">Soundsystem</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gradient-warm transition-colors">
                  <td className="py-4 px-4 font-semibold text-foreground">Lighting Scenarios</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-warm">
        <div className="container text-center animate-fadeInUp">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to see it in person?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a tour and experience the spaces firsthand.
          </p>
          <a href={`tel:${VENUE_INFO.phone}`} className="btn-primary">
            Schedule a Tour
          </a>
        </div>
      </section>
    </div>
  );
}
