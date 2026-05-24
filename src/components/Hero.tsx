import { motion } from 'motion/react';
import { ArrowRight, Bot, Cpu, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#0A0A0B] text-white border-b border-white/10">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/50 to-slate-950"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 border border-primary-500/30 text-primary-500 text-[10px] uppercase tracking-widest rounded-full mb-6"
          >
            Consultora de IA & Desarrollo Ágil
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-[72px] font-black tracking-tighter uppercase leading-[0.9] mb-8"
          >
            Tecnología que se <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">implementa</span>, se <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">aprende</span> y se <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">adopta</span>.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed"
          >
            DevTech es una consultora de IA y desarrollo ágil fundada por una docente especialista en tecnología educativa y un desarrollador con formación en counseling organizacional. No solo construimos soluciones — diseñamos la experiencia para que tu equipo realmente las use.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contacto" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-primary-500 transition-colors">
              Iniciá tu proyecto <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
