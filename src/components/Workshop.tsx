import { motion } from 'motion/react';
import { Sparkles, Target, Users, Settings, Briefcase, ArrowRight } from 'lucide-react';

export default function Workshop() {
  return (
    <section id="workshop" className="py-24 bg-[#111113] relative overflow-hidden border-b border-white/10">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent-500/30 text-accent-500 text-[10px] uppercase tracking-widest rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              Capacitación
            </div>
            
            <h2 className="text-4xl md:text-[56px] font-black tracking-tighter uppercase leading-[0.9] text-white mb-6">
              Workshop CCA VibeCoding — Tu equipo creando con IA.
            </h2>
            <p className="text-lg text-white mb-6 font-medium leading-relaxed">
              Un workshop intensivo de 2 encuentros diseñado para equipos y profesionales que quieren empezar a usar inteligencia artificial de forma práctica, sin necesidad de saber programar.
            </p>
            <p className="text-white/60 mb-8 leading-relaxed">
              Descubrí cómo personas sin experiencia técnica están creando páginas web, automatizaciones y herramientas digitales usando lenguaje natural e IA. Traé un problema real de tu negocio. Salí con una solución funcionando.
            </p>

            <a href="#contacto" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-accent-500 hover:text-white transition-colors mb-12">
              Reservá tu lugar <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0A0A0B] border border-white/10 p-8 mb-8 hover:bg-[#161619] transition-colors"
            >
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-6">¿Para quién es?</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                <li className="flex gap-3">
                  <Users className="w-5 h-5 text-accent-500 shrink-0" />
                  <span className="text-sm text-white/60">Equipos que necesitan adoptar herramientas de IA</span>
                </li>
                <li className="flex gap-3">
                  <Target className="w-5 h-5 text-accent-500 shrink-0" />
                  <span className="text-sm text-white/60">Directivos que quieren entender el potencial real de la tecnología</span>
                </li>
                <li className="flex gap-3">
                  <Settings className="w-5 h-5 text-accent-500 shrink-0" />
                  <span className="text-sm text-white/60">Profesionales independientes que quieren digitalizar sus procesos</span>
                </li>
                <li className="flex gap-3">
                  <Briefcase className="w-5 h-5 text-accent-500 shrink-0" />
                  <span className="text-sm text-white/60">Empresas que buscan resultados medibles en capacitación tecnológica</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#0A0A0B] border border-white/10 p-8 shadow-sm"
            >
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-6">Estructura del Workshop</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 text-accent-500 flex items-center justify-center font-black">01</div>
                  <div>
                    <h4 className="font-bold uppercase tracking-tight text-white">Encuentro 1 (90 min): Diagnóstico y posibilidades.</h4>
                    <p className="text-sm text-white/50 mt-1">Herramientas accesibles, análisis de tareas repetitivas y cómo escribir instrucciones efectivas para IA.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 text-accent-500 flex items-center justify-center font-black">02</div>
                  <div>
                    <h4 className="font-bold uppercase tracking-tight text-white">Encuentro 2 (90 min): Creación en vivo.</h4>
                    <p className="text-sm text-white/50 mt-1">Interactuamos con agentes de IA y construimos soluciones funcionales en tiempo real.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white/5 border border-white/10">
                <p className="text-sm text-white/60 font-medium">
                  <strong className="text-white font-black uppercase tracking-tight block mb-2">Resultado esperado:</strong> Que tu equipo descubra que sí puede crear. La meta no es memorizar teoría — es experimentar cómo una idea se transforma en una herramienta útil para el negocio.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
