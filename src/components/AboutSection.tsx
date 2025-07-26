// components/AboutSection.tsx
'use client';
import { motion } from 'framer-motion';

export default function AboutSection() {
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
            Happy Birtday✨
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                Ucapanku untuk<br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Ulang tahun sayangkuu
                </span>
              </h3>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
                  Selamat ulang tahun yaa sayangkuu, selamat ulang tahun cintaku, selamat ulang tahun masa depanku,
                  selamat ulang tahun cantikku, selamat ulang tahun calon istriku. Selamat untuk umur barunya yang ke-22. Ngga terasa yaa aku
                  udah nemenin ulang tahunmu sejak kamu menyambut umur dengan kepala 2. Doa terbaik untuk kamu, semakin deres rezekinya, semakin 
                  bahagia kedepan, dilancarkan untuk semua mulai dari pendidikan maupun semua yang kamu lalui, dan yang paling utama semua mimpimu 
                  bakal terwujud semua mulai dari kebahagiaan untuk kita dan juga semua mimpimu untuk membahagiakan orang tua.
                </p>
                
                <p className="text-lg">
                  Sekali lagi selamat ulang tahun yaa sayangku cintakuuuuu. Selamatt untuk hari yang paling spesial ini, kamu bahagia terus dengan keluarga dan dengan aku
                  sampai kapanpun apapun yang kita lalui aku bakal berada buat kamu, besar kecil buruk ngga aku, aku selalu ada buat kamu. Aku selalu sayang buanget
                  ke kamu meskipun dengan semua buruk jahat salahku tapi kamu juga harus tau aku sayang lebih dari yang kamu tau. Semoga semua impianmu dan kita terwujud di umur yang baru ini.
                  Lancar sukses terus yaaa di umur yang baru ini, dan juga jangan pendam semuanya inget aku ada juga buat kamu yaa sayang. aku sayang kamu, sayang bangetttt ke kamu.
                  HAPPY BIRTHDAYYYYY CINTAAKUUU CANTIKKUUUUUUUUUUU✨✨💗💗💗
                </p>
              </div>
            </div>

            {/* Skills Tags */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'UI/UX Design'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Right Column - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {[
              {
                icon: '🎯',
                title: 'Focus Kita',
                description: 'Focus untuk meraih semua yang kita usahakan',
                gradient: 'from-blue-500/20 to-purple-500/20'
              },
              {
                icon: '🌟',
                title: 'Impian kita',
                description: 'Kita meraih semua kebahagiaan, sukses bareng, selalu ada untuk selamanya',
                gradient: 'from-purple-500/20 to-pink-500/20'
              },
              {
                icon: '📍',
                title: 'Tujuan kita ',
                description: 'Kita terus bersama sampe tua, kita bahagiakan orang tua dan kita juga',
                gradient: 'from-pink-500/20 to-orange-500/20'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`relative group p-6 rounded-2xl bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105`}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2 text-lg">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: 'Unlimited', label: 'Sayang kita' },
            { number: '3+', label: 'Tahun menemani ultahmu dan bakal lebih' },
            { number: '100%', label: 'Pasangan sempurna' },
            { number: '24/7', label: 'Support system' }
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