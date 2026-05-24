import { motion } from 'motion/react';
import { Mail, Instagram, Linkedin, ArrowUpRight, Cpu, PlusSquare, GraduationCap } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-[#0A0A0B] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-px bg-white/10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[56px] md:text-[72px] leading-[0.9] font-black tracking-tighter uppercase mb-6">
              ¿Listo para liderar <br/>con IA?
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-lg">
              La primera charla es gratuita y sin compromiso. Nos contás tu situación, nosotros te mostramos cómo podemos ayudarte.
            </p>

            <a 
              href="mailto:hola@devtech.com.ar" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-500 text-black font-black uppercase tracking-widest text-sm hover:bg-white transition-colors mb-12"
            >
              <Mail className="w-5 h-5" />
              Iniciá tu proyecto → hola@devtech.com.ar
            </a>

            <div className="space-y-4">
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] block">Conectá con nosotros</p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/company/devtechar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-white bg-white/5 border border-white/10 px-4 py-2 hover:bg-white/10 transition-colors uppercase text-[10px] font-bold tracking-widest">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://instagram.com/devtech.ar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-white bg-white/5 border border-white/10 px-4 py-2 hover:bg-white/10 transition-colors uppercase text-[10px] font-bold tracking-widest">
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-[#111113] border border-white/10 p-10">
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-8">¿Por dónde querés empezar?</h3>
              
              <div className="space-y-4">
                <a href="#servicios" className="group flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#0A0A0B] border border-white/10 text-primary-500">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-tight text-white group-hover:text-primary-500 transition-colors">DevTech Core</h4>
                      <p className="text-xs text-white/50">Implementar IA o un producto digital</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
                </a>

                <a href="#mediflex" className="group flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#0A0A0B] border border-white/10 text-primary-500">
                      <PlusSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-tight text-white group-hover:text-primary-500 transition-colors">MediFlex AI</h4>
                      <p className="text-xs text-white/50">Automatizar tu clínica o consultorio</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
                </a>

                <a href="#workshop" className="group flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#0A0A0B] border border-white/10 text-accent-500">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-tight text-white group-hover:text-accent-500 transition-colors">Workshop VibeCoding</h4>
                      <p className="text-xs text-white/50">Capacitar a tu equipo en IA</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
