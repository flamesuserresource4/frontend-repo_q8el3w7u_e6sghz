import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Embedded Engineer
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            BHARANI DHARAN K P
          </h1>
          <p className="mt-4 text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto">
            Building reliable embedded systems that connect electronics with intelligent, real-time software.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow hover:shadow-lg transition">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#videos" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/70 text-white border border-white/10 hover:bg-slate-800 transition font-semibold">
              Watch Videos
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-slate-300">
            <a href="mailto:bharanidharan.tech12@gmail.com" className="inline-flex items-center gap-2 hover:text-white transition">
              <Mail className="w-4 h-4" />
              bharanidharan.tech12@gmail.com
            </a>
            <span className="opacity-40">|</span>
            <a href="tel:+918610365402" className="inline-flex items-center gap-2 hover:text-white transition">
              <Phone className="w-4 h-4" />
              +91 8610365402
            </a>
            <span className="opacity-40">|</span>
            <a href="https://www.linkedin.com/in/bharanidharan12" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition">
              <Linkedin className="w-4 h-4" />
              linkedin.com/in/bharanidharan12
            </a>
            <span className="opacity-40">|</span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              India
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
