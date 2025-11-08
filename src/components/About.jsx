import React from 'react';
import { motion } from 'framer-motion';

const aboutPoints = [
  'Embedded Systems, IoT, and PCB design',
  'Experienced with C, C++, and Python',
  'Microcontroller programming & sensor integration',
  'Real-time data processing and firmware development',
  'Hardware prototyping for automation and control',
];

const About = () => {
  return (
    <section id="about" className="relative w-full py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          About
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 text-slate-300"
          >
            <p>
              ECE student skilled in Embedded Systems, IoT, and PCB design with experience in C, C++, and Python.
              Proficient in microcontroller programming, sensor integration, and real-time data processing. Experienced
              in developing firmware and hardware prototypes for automation and control applications. Focused on
              building efficient, reliable embedded solutions that bridge electronics and intelligent systems.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {aboutPoints.map((p) => (
                <div key={p} className="flex items-start gap-3 text-slate-200">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-2xl bg-slate-900/60 border border-white/10"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                ['Internet of Things', 'Python'],
                ['3D Modeling', 'Machine Learning'],
                ['UI/UX Design', 'PCB Designing'],
                ['Ansys', 'MATLAB'],
              ].map(([a, b]) => (
                <div key={a} className="rounded-xl p-4 bg-slate-800/50 border border-white/10">
                  <p className="text-slate-300 text-sm">{a}</p>
                  <p className="text-white font-semibold">{b}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl p-4 bg-slate-800/50 border border-white/10">
                <p className="text-slate-300 text-sm">Languages</p>
                <p className="text-white font-semibold">English (Proficient)</p>
              </div>
              <div className="rounded-xl p-4 bg-slate-800/50 border border-white/10">
                <p className="text-slate-300 text-sm">Languages</p>
                <p className="text-white font-semibold">Tamil (Native)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
