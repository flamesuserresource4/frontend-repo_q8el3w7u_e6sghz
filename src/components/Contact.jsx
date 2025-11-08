import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Contact
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a href="mailto:bharanidharan.tech12@gmail.com" className="rounded-2xl p-6 bg-slate-900/60 border border-white/10 hover:border-emerald-400/40 transition">
            <div className="flex items-center gap-3 text-white"><Mail className="w-5 h-5" /> Email</div>
            <p className="mt-2 text-slate-300 text-sm">bharanidharan.tech12@gmail.com</p>
          </a>
          <a href="tel:+918610365402" className="rounded-2xl p-6 bg-slate-900/60 border border-white/10 hover:border-emerald-400/40 transition">
            <div className="flex items-center gap-3 text-white"><Phone className="w-5 h-5" /> Phone</div>
            <p className="mt-2 text-slate-300 text-sm">+91 8610365402</p>
          </a>
          <a href="https://www.linkedin.com/in/bharanidharan12" target="_blank" rel="noreferrer" className="rounded-2xl p-6 bg-slate-900/60 border border-white/10 hover:border-emerald-400/40 transition">
            <div className="flex items-center gap-3 text-white"><Linkedin className="w-5 h-5" /> LinkedIn</div>
            <p className="mt-2 text-slate-300 text-sm">linkedin.com/in/bharanidharan12</p>
          </a>
        </div>

        <p className="text-center text-slate-400 mt-8 flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4" /> India
        </p>

        <p className="text-center text-slate-500 text-sm mt-10">© {new Date().getFullYear()} Bharani Dharan K P • All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
