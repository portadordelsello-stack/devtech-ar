import { motion } from 'motion/react';
import { CalendarCheck, FileText, LineChart, Smile, ArrowRight, Stethoscope } from 'lucide-react';

const features = [
  {
    icon: CalendarCheck,
    title: "Tu agenda organizada. Sin llamados, sin olvidos.",
    description: "Automatización completa de reservas, recordatorios y confirmaciones. Reducimos el no-show y liberamos a tu equipo de la gestión manual de la agenda."
  },
  {
    icon: FileText,
    title: "Menos papeleo. Más atención.",
    description: "Eliminamos las tareas repetitivas: carga de datos, formularios, respuestas frecuentes y procesos internos. Tu equipo recupera horas reales de trabajo cada día."
  },
  {
    icon: LineChart,
    title: "Decisiones basadas en datos reales.",
    description: "Información en tiempo real sobre demanda, horas pico y patrones clínicos. Tomás decisiones operativas con datos, no con intuición."
  },
  {
    icon: Smile,
    title: "Pacientes que vuelven porque se sintieron bien atendidos.",
    description: "Comunicación optimizada, tiempos de espera reducidos y atención personalizada. La tecnología al servicio de la relación médico-paciente."
  }
];

export default function MediFlex() {
  return (
    <section id="mediflex" className="py-24 bg-[#0A0A0B] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary-500/30 text-primary-500 text-[10px] uppercase tracking-widest rounded-full mb-6">
                <Stethoscope className="w-4 h-4" />
                División Salud
              </div>
              
              <h2 className="text-4xl md:text-[56px] font-black tracking-tighter uppercase leading-[0.9] text-white mb-6">
                MediFlex AI — Inteligencia artificial para el sector salud.
              </h2>
              <p className="text-lg text-white/60 mb-10 leading-relaxed">
                Una división desarrollada por DevTech dedicada exclusivamente a transformar la gestión de clínicas y consultorios. Combinamos IA generativa y desarrollo ágil para que los profesionales de la salud puedan enfocarse en lo que importa: <strong className="text-white font-medium">sus pacientes.</strong>
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="bg-[#111113] p-6 border border-white/10 hover:bg-[#161619] transition-colors">
                      <div className="w-10 h-10 bg-white/5 border border-white/10 text-primary-500 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 opacity-50" />
                      </div>
                      <h4 className="text-lg font-black uppercase tracking-tight text-white mb-2 leading-tight">{feature.title}</h4>
                      <p className="text-sm text-white/50">{feature.description}</p>
                    </div>
                  );
                })}
              </div>

              <a href="#contacto" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-primary-500 transition-colors">
                Conocé MediFlex AI <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative hidden lg:block">
            {/* Visual Abstract Representation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square bg-[#111113] border border-white/5 rounded-full flex items-center justify-center p-12"
            >
              <div className="absolute inset-0 bg-primary-500/5 rounded-full mix-blend-screen"></div>
              <div className="w-full h-full bg-[#0A0A0B] border border-primary-500/20 rounded-full overflow-hidden relative flex flex-col justify-center items-center">
                 <div className="absolute top-10 left-10 p-4 bg-white/5 border border-white/10 rounded-sm shadow-sm animate-pulse">
                    <CalendarCheck className="w-6 h-6 text-primary-500 opacity-50" />
                 </div>
                 <div className="absolute bottom-12 right-12 p-4 bg-white/5 border border-white/10 rounded-sm shadow-sm">
                    <LineChart className="w-6 h-6 text-primary-500 opacity-50" />
                 </div>
                 <div className="text-center">
                    <div className="w-20 h-20 bg-primary-500/10 border border-primary-500/20 text-primary-500 flex items-center justify-center mx-auto mb-4">
                      <Stethoscope className="w-10 h-10" />
                    </div>
                    <div className="text-2xl font-black uppercase tracking-tight text-white">MediFlex AI</div>
                    <div className="text-[10px] text-white/50 uppercase tracking-widest font-mono mt-2">Smart Health System</div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
