import { motion } from 'motion/react';
import { Rocket, Bot, Cloud, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: "De idea a producto en días, no en meses.",
    category: "Software de Nueva Generación",
    description: "Implementamos metodologías de Vibe Coding que integran LLMs para el prototipado y despliegue rápido de aplicaciones personalizadas. Minimizamos la fricción técnica para que tu negocio pueda probar, validar y escalar sin perder tiempo ni dinero."
  },
  {
    icon: Bot,
    title: "Automatizá lo que te quita tiempo.",
    category: "Optimización de Procesos con IA",
    description: "Diseñamos e integramos soluciones de automatización SaaS que conectan tus operaciones actuales con herramientas de IA. El resultado: equipos más productivos, menos errores y procesos que funcionan solos."
  },
  {
    icon: Cloud,
    title: "Infraestructura que crece con tu negocio.",
    category: "Arquitecturas Modernas & Cloud",
    description: "Consultoría en migración y gestión de infraestructura cloud. Garantizamos entornos seguros, robustos y preparados para escalar bajo demanda. Tu tecnología lista para el siguiente nivel."
  },
  {
    icon: GraduationCap,
    title: "Tecnología que tu equipo entiende y usa.",
    category: "Mentoría Ejecutiva en TI",
    description: "Capacitamos a cuadros directivos y técnicos en el uso estratégico de herramientas emergentes. No solo explicamos qué son — diseñamos la experiencia de aprendizaje para que los resultados sean medibles y sostenibles."
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#111113] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-[56px] font-black tracking-tighter uppercase leading-[0.9] text-white mb-6">
            Soluciones estratégicas para empresas que quieren resultados reales.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0A0A0B] p-10 border border-white/10 hover:bg-white/5 transition-all group"
              >
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-primary-500/50 transition-colors">
                  <Icon className="w-5 h-5 text-white/50 group-hover:text-primary-500 transition-colors" />
                </div>
                <div className="mb-4">
                  <span className="text-[10px] bg-white/5 px-2 py-1 text-white/40 font-mono uppercase tracking-widest inline-block mb-4">
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
