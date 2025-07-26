// components/SkillsSection.tsx
'use client';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  const skills = [
    { name: 'Sayang', level: 100, gradient: 'from-yellow-400 to-orange-500' },
    { name: 'Cantik', level: 100, gradient: 'from-blue-400 to-cyan-500' },
    { name: 'Perhatian', level: 100, gradient: 'from-green-400 to-emerald-500' },
    { name: 'Baik dan support system', level: 100, gradient: 'from-purple-400 to-violet-500' },
    { name: 'Bahagia', level: 100, gradient: 'from-indigo-400 to-purple-500' },
    { name: 'Sempurna', level: 100, gradient: 'from-pink-400 to-rose-500' },
  ];

  const tools = [
    'Cantik', 'Sayangku', 'Perhatian', '24/7 always ready', 'Future', 'One n Only'
  ];

  const certifications = [
    {
      title: 'Menjadi Pasanganku',
      organization: 'Pasanganku yang paling sempurna',
      year: 'Forever',
      gradient: 'from-blue-500/10 to-purple-500/10',
      borderColor: 'border-blue-400'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Tentang Sayangku 
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Tentang kamu
            </h3>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-white text-lg">
                      {skill.name}
                    </span>
                    <span className="text-gray-300 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-white/10 backdrop-blur-sm rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5, 
                          delay: index * 0.1,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                      </motion.div>
                    </div>
                    {/* Glow effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      className={`absolute top-0 left-0 h-3 bg-gradient-to-r ${skill.gradient} rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              It's You
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-12">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  <span className="font-medium text-white text-center block group-hover:text-blue-300 transition-colors duration-300">
                    {tool}
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Certifications</h4>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`relative p-6 rounded-xl bg-gradient-to-r ${cert.gradient} backdrop-blur-sm border-l-4 ${cert.borderColor} border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105`}
                  >
                    <h5 className="font-bold text-white text-lg mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {cert.title}
                    </h5>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {cert.organization} - {cert.year}
                    </p>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '909+', label: 'Hari Bersama dan akan lebih' },
            { number: '21816+', label: 'Jam Bersama dan akan lebih' },
            { number: '1308960+', label: 'Menit bersama dan akan lebih' },
            { number: '78537600+', label: 'Detik bersama dan akan lebih' }
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}