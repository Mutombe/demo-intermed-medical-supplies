import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowDown,
  Phone,
  Clock,
  WhatsappLogo,
  Star,
  Quotes,
  CaretLeft,
  CaretRight,
  ShieldCheck,
  FirstAid,
  Eye,
  Briefcase,
  Buildings,
  Wrench,
  CheckCircle,
  Trophy,
  Users,
  MapPin,
  Heart,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import siteData from '../data/siteData';

const BLUE = '#3B82F6';
const BLUE_DARK = '#2563EB';
const RED = '#DC2626';
const BLUE_GLOW = '#3B82F630';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1920&q=80',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80',
  'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1920&q=80',
];

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
  'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80',
  'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80',
  'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
];

const PROJECT_IMAGES = [
  'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80',
  'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80',
  'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80',
];

const SERVICE_ICONS = [FirstAid, Eye, Briefcase, Buildings, ShieldCheck, Wrench];

const PRODUCT_CATEGORIES = [
  { name: 'Surgical Theatre', image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&q=80', count: '200+ Products' },
  { name: 'Diagnostics', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80', count: '150+ Devices' },
  { name: 'Laboratory', image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&q=80', count: '300+ Items' },
  { name: 'Hospital Furniture', image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=600&q=80', count: '100+ Solutions' },
];


/* ================================================================
   ANIMATED COUNTER
   ================================================================ */
function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = numericTarget / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) { setCount(numericTarget); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, numericTarget, duration]);

  return <span ref={ref}>{inView ? count.toLocaleString() : '0'}{suffix}</span>;
}


/* ================================================================
   1. HERO — Clean Blue/White with Medical Cross Accent
   ================================================================ */
function HeroSection() {
  const { business, hero } = siteData;
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % HERO_IMAGES.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden" style={{ backgroundColor: '#020617' }}>
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <AnimatePresence mode="sync">
          <motion.img key={currentSlide} src={HERO_IMAGES[currentSlide]} alt="Medical equipment" className="absolute inset-0 w-full h-[130%] object-cover object-center" initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5, ease: 'easeInOut' }} loading="eager" />
        </AnimatePresence>
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to bottom, rgba(2,6,23,0.85), rgba(2,6,23,0.50), rgba(2,6,23,0.92))' }} />
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to right, rgba(2,6,23,0.75), transparent, rgba(2,6,23,0.4))' }} />
      </motion.div>

      {/* Medical cross accent — top right */}
      <div className="absolute top-[12%] right-[8%] z-[5] opacity-[0.06]">
        <div className="relative w-32 h-32 sm:w-48 sm:h-48">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-full" style={{ backgroundColor: RED }} />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-1/3" style={{ backgroundColor: RED }} />
        </div>
      </div>

      {/* Blue accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] z-30" style={{ background: `linear-gradient(90deg, transparent, ${BLUE}, transparent)` }} />
      <div className="absolute top-[20%] left-0 w-20 sm:w-32 h-[2px] z-20" style={{ backgroundColor: BLUE }} />

      {/* Slide indicators */}
      <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
        {HERO_IMAGES.map((_, i) => (
          <button key={i} onClick={() => setCurrentSlide(i)} className="w-[3px] transition-all duration-500" style={{ height: i === currentSlide ? '2rem' : '1rem', backgroundColor: i === currentSlide ? BLUE : 'rgba(255,255,255,0.2)' }} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none z-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat', backgroundSize: '128px 128px',
      }} />

      {/* Content */}
      <motion.div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-36" style={{ y: textY, opacity }}>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="w-12 h-[3px] mb-6 origin-left" style={{ backgroundColor: BLUE }} />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex items-center gap-3 mb-6 sm:mb-8">
          <FirstAid size={16} weight="fill" style={{ color: RED }} />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em]" style={{ color: BLUE }}>{hero.badge}</span>
        </motion.div>

        <div className="overflow-hidden">
          {['MEDICAL', 'EXCELLENCE', 'DELIVERED.'].map((word, i) => (
            <motion.div key={word} initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}>
              <h1 className="font-heading font-bold leading-[0.88] tracking-tight" style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)', color: word === 'DELIVERED.' ? BLUE : '#ffffff' }}>
                {word}
              </h1>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.1 }} className="text-white/50 text-sm sm:text-base lg:text-lg max-w-lg mt-8 leading-relaxed font-light">
          {hero.subtitle}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.3 }} className="flex flex-wrap gap-4 mt-8 sm:mt-10">
          <Link to="/contact" className="group inline-flex items-center gap-3 text-white px-7 py-3.5 sm:py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:shadow-xl" style={{ backgroundColor: BLUE_DARK, boxShadow: `0 0 25px ${BLUE_GLOW}` }}>
            {hero.ctaPrimary}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/services" className="group inline-flex items-center gap-3 border text-white px-7 py-3.5 sm:py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-white/5" style={{ borderColor: `${BLUE}40` }}>
            {hero.ctaSecondary}
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="flex items-center gap-2 mt-6">
          <ShieldCheck size={14} style={{ color: BLUE }} />
          <span className="text-white/40 text-xs uppercase tracking-wider">{hero.trustBadge}</span>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-heading">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}><ArrowDown size={16} className="text-white/30" /></motion.div>
      </motion.div>

      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <span className="text-white/10 text-[10px] uppercase tracking-[0.4em] font-heading" style={{ writingMode: 'vertical-rl' }}>Intermed Medical &mdash; Harare, Zimbabwe</span>
      </div>
    </section>
  );
}


/* ================================================================
   2. MARQUEE TICKER
   ================================================================ */
function MarqueeTicker() {
  const items = ['SURGICAL EQUIPMENT', 'DIAGNOSTICS', 'LABORATORY', 'HOSPITAL FURNITURE', 'PPE & SAFETY', 'PHARMACEUTICAL', 'WHO CERTIFIED', 'ISO COMPLIANT'];
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <section className="border-y py-4 sm:py-5 overflow-hidden" style={{ backgroundColor: '#020617', borderColor: `${BLUE}10` }}>
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-4 sm:gap-6 mx-4 sm:mx-6">
            <span className="font-heading text-lg sm:text-2xl font-bold uppercase tracking-wider" style={{ color: BLUE }}>{item}</span>
            <span style={{ color: `${BLUE}40` }} className="text-lg">&bull;</span>
          </span>
        ))}
      </div>
    </section>
  );
}


/* ================================================================
   3. STATS
   ================================================================ */
function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const statIcons = [Buildings, Star, Clock, Users];
  const stats = siteData.stats;

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ backgroundColor: '#020617' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${BLUE}30, transparent)` }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${BLUE}30, transparent)` }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }} className="text-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 opacity-15 blur-2xl" style={{ backgroundColor: BLUE }} />
                <Icon size={28} weight="fill" style={{ color: BLUE }} className="mx-auto mb-3" />
                <div className="font-heading font-bold text-white leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                  <AnimatedCounter target={stat.number} duration={2} />
                  {stat.number.includes('+') && <span style={{ color: BLUE }}>+</span>}
                </div>
                <div className="text-white/30 text-xs sm:text-sm uppercase tracking-[0.2em] font-heading mt-2 sm:mt-3">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   4. PRODUCT CATEGORIES — Image Grid (Unique Section)
   ================================================================ */
function ProductCategories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-20 sm:py-28 lg:py-32" style={{ backgroundColor: '#0a0f1a' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-12 sm:mb-16">
          <div className="w-10 h-[3px] mb-6" style={{ backgroundColor: BLUE }} />
          <h2 className="font-heading font-bold text-white leading-[0.92]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
            PRODUCT <span style={{ color: BLUE }}>CATEGORIES</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base mt-4 max-w-lg">
            Comprehensive medical equipment across every healthcare category. WHO and ISO certified products.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {PRODUCT_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group relative overflow-hidden aspect-[16/10]"
            >
              <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(2,6,23,0.85), rgba(2,6,23,0.4))' }} />

              {/* Red cross accent */}
              <div className="absolute top-4 right-4 z-10 opacity-20">
                <FirstAid size={28} weight="fill" style={{ color: RED }} />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                <div className="text-[10px] uppercase tracking-wider font-heading mb-1" style={{ color: BLUE }}>{cat.count}</div>
                <h3 className="font-heading text-white text-xl sm:text-2xl font-bold uppercase tracking-wide">{cat.name}</h3>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" style={{ backgroundColor: BLUE }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   5. SERVICES GRID
   ================================================================ */
function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { servicesPreview } = siteData;

  return (
    <section ref={ref} className="py-20 sm:py-28 lg:py-32" style={{ backgroundColor: '#020617' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-12 sm:mb-16">
          <div className="w-10 h-[3px] mb-6" style={{ backgroundColor: BLUE }} />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="font-heading font-bold text-white leading-[0.92]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
                WHAT WE <span style={{ color: BLUE }}>SUPPLY</span>
              </h2>
              <p className="text-white/40 text-sm sm:text-base mt-4 max-w-lg">Six core product categories covering every medical equipment need.</p>
            </div>
            <Link to="/services" className="group text-white/40 text-sm uppercase tracking-wider font-heading flex items-center gap-2 hover:text-white transition-colors">
              All Products <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {servicesPreview.map((service, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 * i }}>
                <Link to={`/services/${siteData.services?.items?.[i]?.slug || '#'}`} className="group relative block overflow-hidden aspect-[4/5] sm:aspect-[3/4]">
                  <img src={SERVICE_IMAGES[i]} alt={service.title} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(2,6,23,0.95), rgba(2,6,23,0.4), transparent)' }} />

                  <div className="absolute top-4 right-4 z-10">
                    <span className="font-heading text-5xl sm:text-6xl font-bold leading-none" style={{ color: `${BLUE}18` }}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="absolute top-4 left-4 z-10 w-10 h-10 flex items-center justify-center" style={{ backgroundColor: BLUE_DARK, boxShadow: `0 0 12px ${BLUE_GLOW}` }}>
                    <Icon size={20} weight="bold" className="text-white" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                    <h3 className="font-heading text-white text-lg sm:text-xl font-bold uppercase tracking-wide mb-2">{service.title}</h3>
                    <p className="text-white/0 group-hover:text-white/60 text-sm leading-relaxed transition-all duration-500 max-h-0 group-hover:max-h-24 overflow-hidden">{service.desc}</p>
                    <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500" style={{ color: BLUE }}>
                      <span className="text-xs uppercase tracking-wider font-heading font-semibold">Learn More</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" style={{ backgroundColor: BLUE }} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   6. WHY CHOOSE US
   ================================================================ */
function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { whyChooseUs, business } = siteData;
  const pointIcons = [ShieldCheck, Heart, Buildings, Trophy];

  return (
    <section ref={ref} className="py-20 sm:py-28 lg:py-32 overflow-hidden" style={{ backgroundColor: '#0a0f1a' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <div className="w-10 h-[3px] mb-6" style={{ backgroundColor: BLUE }} />
            <h2 className="font-heading font-bold text-white leading-[0.92] mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              PRECISION IN EVERY{' '}<span style={{ color: BLUE }}>INSTRUMENT</span>{' '}WE SUPPLY
            </h2>

            <div className="space-y-6">
              {whyChooseUs.points.map((point, i) => {
                const Icon = pointIcons[i];
                return (
                  <div key={point.title} className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center border" style={{ borderColor: `${BLUE}30` }}>
                      <Icon size={20} style={{ color: BLUE }} />
                    </div>
                    <div>
                      <h4 className="text-white font-heading text-sm uppercase tracking-wider font-bold mb-1">{point.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-full h-px bg-white/10 my-8" />
            <div className="flex gap-8 sm:gap-12">
              <div>
                <div className="font-heading text-3xl sm:text-4xl font-bold" style={{ color: BLUE }}>{business.yearsExperience}</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Years</div>
              </div>
              <div>
                <div className="font-heading text-3xl sm:text-4xl font-bold" style={{ color: BLUE }}>{business.projectsCompleted}</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Facilities</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="relative">
              <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80" alt="Medical equipment" className="w-full aspect-[4/5] object-cover object-center" loading="lazy" />
              </div>
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-[45%] overflow-hidden border-4 shadow-2xl" style={{ borderColor: '#0a0f1a' }}>
                <img src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=600&q=80" alt="Lab equipment" className="w-full aspect-square object-cover object-center" loading="lazy" />
              </div>
              <div className="absolute -top-4 -right-4 sm:-right-6 p-4 sm:p-6 shadow-2xl" style={{ backgroundColor: BLUE_DARK, boxShadow: `0 0 25px ${BLUE_GLOW}` }}>
                <div className="text-center text-white">
                  <div className="font-heading text-2xl sm:text-3xl font-bold leading-none">{business.projectsCompleted}</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold mt-1 text-white/80">Facilities<br />Equipped</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   7. PROJECTS GALLERY
   ================================================================ */
function ProjectsGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { featuredProjects } = siteData;

  return (
    <section ref={ref} className="py-20 sm:py-28 lg:py-32" style={{ backgroundColor: '#020617' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-12 sm:mb-16">
          <div className="w-10 h-[3px] mb-6" style={{ backgroundColor: BLUE }} />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-heading font-bold text-white leading-[0.92]" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              FACILITIES <span style={{ color: BLUE }}>EQUIPPED</span>
            </h2>
            <Link to="/projects" className="group text-white/40 text-sm uppercase tracking-wider font-heading flex items-center gap-2 hover:text-white transition-colors">
              View All <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-3 sm:gap-4">
          {featuredProjects.map((project, i) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 * i }} className="group relative overflow-hidden aspect-[4/5]">
              <img src={PROJECT_IMAGES[i]} alt={project.title} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(2,6,23,0.95), rgba(2,6,23,0.3), transparent)' }} />

              <div className="absolute top-4 left-4 z-10"><span className="text-white text-[10px] uppercase tracking-wider font-heading font-bold px-3 py-1.5" style={{ backgroundColor: BLUE_DARK }}>{project.category}</span></div>
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1"><MapPin size={12} className="text-white/50" /><span className="text-white/50 text-[10px] uppercase tracking-wider">Harare</span></div>

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-heading text-white text-lg font-bold uppercase tracking-wide mb-2">{project.title}</h3>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ color: BLUE }}>
                  <span className="text-xs uppercase tracking-wider font-heading font-semibold">View Details</span><ArrowRight size={14} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" style={{ backgroundColor: BLUE }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   8. TESTIMONIALS
   ================================================================ */
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { homeTestimonials } = siteData;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const next = useCallback(() => setActive((p) => (p + 1) % homeTestimonials.length), [homeTestimonials.length]);
  const prev = useCallback(() => setActive((p) => (p - 1 + homeTestimonials.length) % homeTestimonials.length), [homeTestimonials.length]);
  useEffect(() => { const t = setInterval(next, 6000); return () => clearInterval(t); }, [next]);

  const t = homeTestimonials[active];
  const avatars = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  ];

  return (
    <section ref={ref} className="py-20 sm:py-28 lg:py-32 overflow-hidden" style={{ backgroundColor: '#0a0f1a' }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center">
          <Quotes size={40} weight="fill" className="mx-auto mb-8" style={{ color: `${BLUE}25` }} />
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
              <blockquote className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed font-light italic mb-8">&ldquo;{t.text}&rdquo;</blockquote>
              <div className="flex flex-col items-center gap-3">
                <img src={avatars[active % avatars.length]} alt={t.name} className="w-12 h-12 object-cover object-center border-2" style={{ borderColor: BLUE }} />
                <div className="w-8 h-[2px]" style={{ backgroundColor: BLUE }} />
                <div className="text-white font-heading text-sm uppercase tracking-wider font-bold">{t.name}</div>
                <div className="text-white/40 text-xs uppercase tracking-wider">{t.role}</div>
                <div className="flex items-center gap-0.5 mt-1">{[...Array(t.rating)].map((_, i) => (<Star key={i} size={12} weight="fill" style={{ color: BLUE }} />))}</div>
                <span className="text-[10px] uppercase tracking-wider font-heading px-3 py-1 border mt-2" style={{ color: `${BLUE}80`, borderColor: `${BLUE}30` }}>Healthcare Client</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button onClick={prev} className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors" aria-label="Previous"><CaretLeft size={16} /></button>
            <div className="flex gap-2">{homeTestimonials.map((_, i) => (<button key={i} onClick={() => setActive(i)} className="h-[3px] transition-all duration-300" style={{ width: i === active ? '2rem' : '0.75rem', backgroundColor: i === active ? BLUE : 'rgba(255,255,255,0.15)' }} aria-label={`Go to ${i + 1}`} />))}</div>
            <button onClick={next} className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors" aria-label="Next"><CaretRight size={16} /></button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   9. CTA
   ================================================================ */
function CTASection() {
  const { business, homeCta } = siteData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative py-28 sm:py-36 lg:py-44 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1920&q=80" alt="Medical facility" className="w-full h-[130%] object-cover object-center" loading="lazy" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(2,6,23,0.8)' }} />
      </motion.div>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat', backgroundSize: '128px 128px',
      }} />

      <div className="absolute top-0 left-0 right-0 h-[3px] z-20" style={{ background: `linear-gradient(90deg, transparent, ${BLUE}, transparent)` }} />

      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}>
          <h2 className="font-heading font-bold text-white leading-[0.88] mb-8" style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}>
            READY TO EQUIP YOUR<br /><span style={{ color: BLUE }}>FACILITY?</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base lg:text-lg max-w-lg mx-auto mb-10 leading-relaxed">{homeCta.subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="group inline-flex items-center gap-3 text-white px-8 py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:shadow-xl" style={{ backgroundColor: BLUE_DARK, boxShadow: `0 0 30px ${BLUE_GLOW}` }}>
              {homeCta.ctaPrimary}<ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(homeCta.whatsappText)}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 border border-green-500/40 text-green-400 px-8 py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-green-500/10 hover:border-green-500/60">
              <WhatsappLogo size={20} weight="fill" />WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   HOME
   ================================================================ */
function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <MarqueeTicker />
      <StatsSection />
      <ProductCategories />
      <ServicesGrid />
      <WhyChooseUs />
      <ProjectsGallery />
      <TestimonialsSection />
      <CTASection />
    </PageTransition>
  );
}

export default Home;
