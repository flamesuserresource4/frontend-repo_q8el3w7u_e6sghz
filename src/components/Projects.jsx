import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Aquatic Robot for Water Hyacinth Removal',
    org: 'Eichhornia Tech',
    role: 'Embedded Systems & Control Engineer',
    timeline: '06/2025 - 07/2025',
    summary:
      'Aquatic robot using FS-CT6B RF remote with Arduino/Raspberry Pi to control four DC motors via L298N. Stable RF link and efficient operation for plant collection.',
    tags: ['Arduino', 'Raspberry Pi', 'RF Control', 'L298N', 'Robotics'],
  },
  {
    title: 'IoT Monitoring for AC Exhaust Energy Recovery',
    org: 'Wind Tech',
    role: 'IoT Systems Engineer',
    timeline: '—',
    summary:
      'Real-time IoT monitoring for energy recovery prototype. Sensor integration, predictive maintenance and data visualization for efficient operation.',
    tags: ['IoT', 'Sensors', 'Data Viz', 'Predictive'],
  },
  {
    title: 'Non-invasive Glucose Monitoring',
    org: 'Glucosense',
    role: 'Embedded Systems Engineer',
    timeline: '—',
    summary:
      'MAX30102-based optical sensing with signal filtering and calibration on Arduino for estimating blood glucose levels in real-time.',
    tags: ['MAX30102', 'Signal Processing', 'Arduino'],
  },
  {
    title: 'Mobile Audiometry App',
    org: 'Medgo',
    role: 'Lead Engineer',
    timeline: '—',
    summary:
      'Android-based sound calibration and threshold detection with automated recording. Portable, accurate hearing screening.',
    tags: ['Android', 'DSP', 'Health Tech'],
  },
  {
    title: 'AR Assets for Mobile App',
    org: 'NEOCONN',
    role: 'AR & 3D Modeling Engineer',
    timeline: '—',
    summary:
      'Optimized Blender models and interactive assets for real-time AR deployment.',
    tags: ['Blender', 'AR', '3D'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-2xl bg-slate-900/60 border border-white/10 p-6 hover:border-emerald-400/40 hover:shadow-emerald-500/10 hover:shadow-xl transition"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <span className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">{p.timeline}</span>
              </div>
              <p className="mt-2 text-slate-300 text-sm">{p.role} • {p.org}</p>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-800/60 text-slate-200 border border-white/10">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
