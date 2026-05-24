export default function Footer() {
  return (
    <footer className="bg-[#0A0A0B] border-t border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-12 text-[10px] text-white/40 uppercase tracking-widest font-black">
            <p>EST. 2016 — ARGENTINA</p>
            <p>ERICA DÍAZ — JUAN PACHECO</p>
          </div>
          
          <div className="flex gap-4 text-[10px] font-bold text-white/60">
            <span className="hover:text-primary-500 cursor-pointer transition-colors uppercase tracking-widest">LINKEDIN</span>
            <span className="hover:text-primary-500 cursor-pointer transition-colors uppercase tracking-widest">INSTAGRAM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
