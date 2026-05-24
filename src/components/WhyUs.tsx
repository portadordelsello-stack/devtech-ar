import { motion } from 'motion/react';
import { Gauge, HeartHandshake, Brain } from 'lucide-react';

const reasons = [
  {
    icon: Gauge,
    title: "Velocidad",
    description: "Reducción drástica de tiempos de desarrollo gracias a IA generativa y metodologías ágiles. De idea a prototipo funcional en días."
  },
  {
    icon: Brain,
    title: "Adopción real",
    description: "No alcanza con implementar. Diseñamos la experiencia para que tu equipo aprenda y use la tecnología. Formación en tecnología educativa aplicada al mundo empresarial."
  },
  {
    icon: HeartHandshake,
    title: "Factor humano",
    description: "El cambio tecnológico genera resistencia. Con formación en counseling organizacional, acompañamos el proceso humano para que la transformación funcione de verdad."
  }
];

export default function WhyUs() {
  return (
    <section id="por-que-devtech" className="py-24 bg-[#111113] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-[56px] font-black tracking-tighter uppercase leading-[0.9] text-white mb-6">
            La ventaja de tener tecnología, pedagogía y factor humano en un solo equipo.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0A0A0B] p-10 border border-white/10 text-center hover:bg-white/5 transition-colors"
              >
                <div className="mx-auto w-16 h-16 bg-white/5 flex items-center justify-center mb-6 text-primary-500 border border-white/10">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">{reason.title}</h3>
                <p className="text-white/50 text-sm">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary-500 text-black p-10 md:p-14 text-center relative overflow-hidden"
        >
          <p className="text-2xl md:text-4xl font-black uppercase tracking-tighter relative z-10 leading-tight">
            "En DevTech no solo construimos herramientas. Diseñamos la ventaja competitiva para liderar en un mercado que no se detiene — y nos aseguramos de que tu equipo sepa usarla."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
