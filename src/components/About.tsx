import { motion } from 'motion/react';
import { Lightbulb, Users, Code, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-[#0A0A0B] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-[56px] font-black tracking-tighter uppercase leading-[0.9] text-white mb-6">
              Construido por personas que saben enseñar tecnología.
            </h2>
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <p>
                Durante 8 años fundamos y dirigimos PlayCode, una plataforma donde más de 200 chicos y chicas aprendieron a programar. Ganamos convocatorias, tuvimos espacio físico, nos reinventamos en pandemia y volvimos a la presencialidad.
              </p>
              <p>
                En ese camino aprendimos algo que pocos consultores tech pueden decir: entendemos cómo las personas <strong className="text-white font-medium">aprenden, resisten y finalmente adoptan la tecnología.</strong>
              </p>
              <p>
                Eso es lo que llevamos a DevTech.
              </p>
            </div>

            <div className="mt-10 p-8 bg-primary-500 text-black">
              <Lightbulb className="w-8 h-8 mb-4 opacity-50" />
              <blockquote className="text-2xl font-black tracking-tighter uppercase leading-tight">
                "La mayoría de las implementaciones de IA fracasan. No por la tecnología. Por las personas que tienen que usarla. Nosotros resolvemos los dos lados."
              </blockquote>
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#111113] border border-white/10 p-8 hover:bg-[#161619] transition-colors"
            >
              <h3 className="text-2xl font-black tracking-tight uppercase text-white mb-2">Erica Díaz</h3>
              <p className="text-[10px] uppercase tracking-widest text-primary-500 mb-6">Co-fundadora</p>
              <ul className="space-y-4 text-xs text-white/50 uppercase tracking-wider">
                <li className="flex items-start gap-4">
                  <BookOpen className="w-4 h-4 text-white/30 shrink-0" />
                  <span>Docente · Lic. en Tecnología Educativa (en curso)</span>
                </li>
                <li className="flex items-start gap-4">
                  <Users className="w-4 h-4 text-white/30 shrink-0" />
                  <span>Diseño de experiencias educativas</span>
                </li>
                <li className="flex items-start gap-4">
                  <Code className="w-4 h-4 text-white/30 shrink-0" />
                  <span>Investigadora en chatbots aplicados a procesos internos</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#111113] border border-white/10 p-8 hover:bg-[#161619] transition-colors"
            >
              <h3 className="text-2xl font-black tracking-tight uppercase text-white mb-2">Juan Pacheco</h3>
              <p className="text-[10px] uppercase tracking-widest text-primary-500 mb-6">Co-fundador & CTO</p>
              <ul className="space-y-4 text-xs text-white/50 uppercase tracking-wider">
                <li className="flex items-start gap-4">
                  <Code className="w-4 h-4 text-white/30 shrink-0" />
                  <span>Desarrollador full-stack · Arquitecturas de IA</span>
                </li>
                <li className="flex items-start gap-4">
                  <Users className="w-4 h-4 text-white/30 shrink-0" />
                  <span>Experto Universitario en Counseling</span>
                </li>
                <li className="flex items-start gap-4">
                  <Lightbulb className="w-4 h-4 text-white/30 shrink-0" />
                  <span>Especialista en acompañamiento al cambio organizacional</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
