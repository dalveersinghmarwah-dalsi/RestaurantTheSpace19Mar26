'use client';

import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { ASSETS, CAPACITY, VENUE_INFO } from '@shared/constants';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ScrollRevealSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const HoverCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -8, transition: { duration: 0.3, type: 'spring', stiffness: 300 } }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${ASSETS.heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: heroOpacity,
          scale: heroScale,
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <motion.div
          className="relative z-10 container text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Welcome to The Space
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A Private Space to Make Your Own
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We know hosting at home or in the office can be a challenge. The Space offers an easier alternative with two flexible, private spaces you can shape into an unforgettable gathering, without the stress or the high cost.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href={`tel:${VENUE_INFO.phone}`}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/pricing" className="btn-outline inline-block">
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Venue Showcase */}
      <section className="section-padding bg-white">
        <div className="container">
          <ScrollRevealSection>
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                Choose Your <span className="text-gradient">Space</span>
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: false }}
              >
                Two flexible, private spaces designed to transform your vision into reality
              </motion.p>
            </div>
          </ScrollRevealSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* The Space */}
            <ScrollRevealSection delay={0.1}>
              <HoverCard className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-elegant-lg transition-all duration-500">
                  <motion.img
                    src={ASSETS.theSpaceMain}
                    alt="The Space"
                    className="w-full h-96 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-3xl font-bold text-foreground mb-2">The Space</h3>
                  <p className="text-lg text-accent font-semibold mb-4">
                    Bright, open, and adaptable
                  </p>
                  <p className="text-muted-foreground mb-6">
                    A light-filled room with an open layout that easily transforms for celebrations, gatherings, workshops, and more.
                  </p>
                  <motion.div
                    className="space-y-3 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                    viewport={{ once: false }}
                  >
                    <motion.div
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                    >
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground font-semibold">{CAPACITY.theSpace.standing} standing</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: false }}
                    >
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground font-semibold">{CAPACITY.theSpace.seated} fully seated</span>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Link href="/whats-included" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all duration-300">
                      Learn More <ArrowRight className="w-5 h-5" />
                    </Link>
                  </motion.div>
                </div>
              </HoverCard>
            </ScrollRevealSection>

            {/* The Space Below */}
            <ScrollRevealSection delay={0.2}>
              <HoverCard className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-elegant-lg transition-all duration-500">
                  <motion.img
                    src={ASSETS.theSpaceBelowMain}
                    alt="The Space Below"
                    className="w-full h-96 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-3xl font-bold text-foreground mb-2">The Space Below</h3>
                  <p className="text-lg text-accent font-semibold mb-4">
                    A warm, speakeasy-inspired setting
                  </p>
                  <p className="text-muted-foreground mb-6">
                    An intimate space with layered lighting and comfortable seating. Perfect for relaxed gatherings or as an add-on to The Space.
                  </p>
                  <motion.div
                    className="space-y-3 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                    viewport={{ once: false }}
                  >
                    <motion.div
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                    >
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground font-semibold">{CAPACITY.theSpaceBelow.standing} standing</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: false }}
                    >
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground font-semibold">{CAPACITY.theSpaceBelow.seated} fully seated</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: false }}
                    >
                      <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground font-semibold">25% off when rented with The Space</span>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Link href="/whats-included" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all duration-300">
                      Learn More <ArrowRight className="w-5 h-5" />
                    </Link>
                  </motion.div>
                </div>
              </HoverCard>
            </ScrollRevealSection>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gradient-warm">
        <div className="container">
          <ScrollRevealSection>
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                How It Works
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: false }}
              >
                Four simple steps to your perfect event
              </motion.p>
            </div>
          </ScrollRevealSection>

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
              <ScrollRevealSection key={index} delay={index * 0.1}>
                <HoverCard>
                  <div className="glass p-8 rounded-2xl text-center h-full">
                    <motion.div
                      className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      {item.step}
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </HoverCard>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <ScrollRevealSection>
          <div className="container text-center">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              Gatherings should feel joyful, not stressful
            </motion.h2>
            <motion.p
              className="text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
            >
              Let <span className="text-gradient font-bold">The Space</span> be your happy place
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <motion.a
                href={`tel:${VENUE_INFO.phone}`}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Tour
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="btn-outline inline-block">
                  Ask a Question
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </ScrollRevealSection>
      </section>
    </div>
  );
}
