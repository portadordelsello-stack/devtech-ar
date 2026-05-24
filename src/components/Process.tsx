import { motion } from 'motion/react';
import { Search, FastForward, RefreshCw, Zap } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Estrategia",
    description: "Analizamos tus procesos actuales e identificamos dónde la tecnología o la IA pueden generar el mayor impacto. Sin tecnicismos: te decimos exactamente qué tiene sentido para tu negocio y qué no."
  },
  {
    number: "02",
    icon: FastForward,
    title: "Prototipado Rápido",
    description: "Usamos Vibe Coding e IA generativa para lanzar una versión funcional de tu solución en tiempo récord. Probás antes de invertir todo."
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "Iteración Ágil",
    description: "Probamos en entornos reales, recopilamos feedback de usuarios reales y refinamos mediante ciclos cortos. La solución mejora con cada iteración."
  },
  {
    number: "04",
    icon: Zap,
    title: "Escalabilidad",
    description: "Una vez validada la solución, robustecemos la arquitectura y migramos a infraestructura cloud preparada para crecer de forma sostenida."
  }
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-[#0A0A0B] text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-3xl mb-16 relative z-10">
          <h2 className="text-4xl md:text-[56px] font-black tracking-tighter uppercase leading-[0.9] mb-6">
            Un proceso probado. <br/>Resultados desde el día uno.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connecting Line */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-12 right-0 h-px bg-white/10 w-[calc(100%-1rem)]" />
                )}
                
                <div className="w-12 h-12 bg-white/5 border border-white/10 text-primary-500 flex items-center justify-center font-black text-lg mb-6 relative z-10">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 flex items-center gap-2 text-white">
                  <Icon className="w-5 h-5 text-accent-500" />
                  {step.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-xs">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      </div>
    </section>
  );
}
