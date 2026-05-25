import { motion } from 'motion/react';
import { Lightbulb, Linkedin } from 'lucide-react';

export default function About() {
  return (
    <section id="nosotros" className="py-32 bg-[#0A0A0B] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="lg:w-2/3 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-[64px] font-black tracking-tighter uppercase leading-[0.9] text-white mb-8">
              Construido por personas que saben enseñar tecnología.
            </h2>
            <div className="space-y-6 text-xl text-white/60 leading-relaxed max-w-2xl font-light mb-12">
              <p>
                Juntos fundamos Play Code (2017) y DevTech (2026). Más de 8 años formando personas con tecnología en Santa Fe, Argentina.
              </p>
              <p>
                En ese camino aprendimos algo que pocos consultores tech pueden decir: entendemos cómo las personas <strong className="text-white font-medium">aprenden, resisten y finalmente adoptan la tecnología.</strong>
              </p>
              <p>
                Eso es lo que llevamos a DevTech.
              </p>
            </div>

            <div className="p-8 bg-primary-500 text-black max-w-3xl">
              <Lightbulb className="w-8 h-8 mb-4 opacity-50" />
              <blockquote className="text-xl md:text-2xl font-black tracking-tighter uppercase leading-[1.1]">
                "La mayoría de las implementaciones de IA fracasan. No por la tecnología. Por las personas que tienen que usarla. Nosotros resolvemos los dos lados."
              </blockquote>
            </div>
          </motion.div>
        </div>

        {/* TEAM SECTION */}
        <div className="border-t border-white/10 pt-24">
          <div className="mb-16">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/40"
            >
              Equipo Fundador — DevTech
            </motion.h3>
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Erica Díaz */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col group"
            >
              <div className="w-full aspect-square md:aspect-[4/3] bg-[#111113] overflow-hidden mb-8 border border-white/10">
                <img 
                  src="/eri.jpg" 
                  alt="Erica Díaz" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out scale-100 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-3xl font-black tracking-tight uppercase text-white">Erica Díaz</h3>
                <a href="#" className="p-2 border border-white/10 hover:bg-white/10 transition-colors text-white mt-1">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <p className="text-[11px] uppercase tracking-widest text-primary-500 font-bold mb-8">
                Co-fundadora · Tecnología Educativa & Diseño de Experiencias
              </p>
              <div className="space-y-4 text-white/60 font-light text-[15px] leading-relaxed flex-grow">
                <p>Docente, diseñadora de experiencias educativas y especialista en adopción tecnológica. Lleva más de 8 años enseñando programación y robótica a niños y jóvenes, primero desde Play Code —la plataforma que co-fundó en 2017— y hoy desde el aula de La Salle y el Centro Cristiano Académico en Santa Fe.</p>
                <p>Tiene formación en Tecnología Educativa (UTN), Diploma Superior en Educación y Nuevas Tecnologías (FLACSO) y fue reconocida como emprendedora destacada por la Secretaría de Ambiente y Desarrollo Sustentable de la Nación.</p>
                <p>En DevTech lidera el diseño de las experiencias de capacitación: cómo se enseña la tecnología importa tanto como la tecnología misma.</p>
              </div>
              <blockquote className="mt-8 border-l-2 border-primary-500 pl-4 text-white/80 font-medium italic">
                "No basta con implementar una herramienta. Hay que diseñar la experiencia para que las personas quieran y puedan usarla."
              </blockquote>
            </motion.div>

            {/* Juan Pacheco */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col group"
            >
              <div className="w-full aspect-square md:aspect-[4/3] bg-[#111113] overflow-hidden mb-8 border border-white/10">
                <img 
                  src="/juan.jpg" 
                  alt="Juan Pacheco" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out scale-100 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-3xl font-black tracking-tight uppercase text-white">Juan Pacheco</h3>
                <a href="#" className="p-2 border border-white/10 hover:bg-white/10 transition-colors text-white mt-1">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <p className="text-[11px] uppercase tracking-widest text-primary-500 font-bold mb-8">
                Co-fundador · Desarrollo de Software & Estrategia en IA
              </p>
              <div className="space-y-4 text-white/60 font-light text-[15px] leading-relaxed flex-grow">
                <p>Desarrollador con más de 20 años de experiencia en tecnología y una formación poco común: Experto Universitario en Counseling y Diplomado en Gestión Educativa con mención en IA y Análisis de Datos (UTN). También certificado en Azure AI por Microsoft y en IA aplicada por la Universidad de Maryland.</p>
                <p>Co-fundó Play Code en 2017, donde acompañó a más de 600 familias en el desarrollo de habilidades digitales. Hoy en DevTech diseña e implementa las soluciones técnicas — desde arquitecturas de software hasta sistemas de automatización con IA — con foco en que el cambio tecnológico funcione de verdad para las personas que tienen que adoptarlo.</p>
              </div>
              <blockquote className="mt-8 border-l-2 border-primary-500 pl-4 text-white/80 font-medium italic">
                "Construir la solución técnica es solo la mitad del trabajo. La otra mitad es acompañar a las personas que tienen que usarla."
              </blockquote>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
