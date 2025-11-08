import React from 'react';
import { motion } from 'framer-motion';

const sampleVideos = [
  {
    title: 'Aquatic Robot Demo',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'IoT Monitoring Overview',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'MAX30102 Signal Processing',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

const Videos = () => {
  return (
    <section id="videos" className="w-full py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Videos
        </motion.h2>

        <p className="text-center text-slate-300 mt-4">Add your project demos here. These are placeholders.</p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleVideos.map((v, idx) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl bg-slate-900/60 border border-white/10 overflow-hidden"
            >
              <div className="aspect-video w-full bg-black/50">
                <iframe
                  className="w-full h-full"
                  src={v.url}
                  title={v.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <p className="text-white font-medium">{v.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
