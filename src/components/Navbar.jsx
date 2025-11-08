import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-slate-950/50 border-b border-white/10"
    >
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#home" className="font-extrabold tracking-tight text-white">BD</a>
        <div className="hidden sm:flex items-center gap-6 text-slate-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#videos" className="hover:text-white transition">Videos</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <a href="#contact" className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-900 font-semibold text-sm">Hire Me</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
