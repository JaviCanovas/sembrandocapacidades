import React from 'react';
import { ArrowRight, Sparkles, HeartHandshake, Music, ShieldCheck } from 'lucide-react';

export default function WelcomeScreen({ onStartQuestionnaire, onSkipToHome }) {
  return (
    <div className="min-h-full flex flex-col justify-between p-6 bg-gradient-to-b from-sage-50 via-cream-50 to-cream-100 text-slateWarm-800">
      
      {/* Cabecera / Pill de contexto */}
      <div className="pt-2 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 border border-sage-200/80 rounded-full shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[11px] font-semibold text-sage-800 tracking-wide">
            Región de Murcia · Inclusión con sentido
          </span>
        </div>
      </div>

      {/* Ilustración botánica central: Semilla germinando y floreciendo */}
      <div className="my-auto py-6 flex flex-col items-center text-center">
        <div className="relative mb-6">
          {/* Círculos concéntricos de luz suave */}
          <div className="w-44 h-44 rounded-full bg-gradient-to-tr from-mint-100/70 via-sage-100/80 to-amberWarm-100/80 flex items-center justify-center shadow-soft">
            <div className="w-32 h-32 rounded-full bg-white/90 shadow-sm flex items-center justify-center p-4">
              {/* Ilustración SVG de brote que germina con hojas y raíces */}
              <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-sm text-sage-600 animate-soft-pulse">
                {/* Tierra nutritiva */}
                <ellipse cx="50" cy="85" rx="34" ry="7" fill="#E8E2D8" opacity="0.8" />
                <ellipse cx="50" cy="83" rx="26" ry="5" fill="#CADACD" opacity="0.9" />
                
                {/* Raíces suaves y profundas */}
                <path d="M50 82 Q46 88 40 92" stroke="#A6C1AB" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M50 82 Q53 89 60 93" stroke="#A6C1AB" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M50 82 Q50 90 49 96" stroke="#7FA486" strokeWidth="2" strokeLinecap="round" fill="none" />
                
                {/* Tallo que brota */}
                <path d="M50 82 C48 68 53 52 48 32" stroke="#3D6846" strokeWidth="4" strokeLinecap="round" fill="none" />
                
                {/* Hoja izquierda verde menta */}
                <path d="M49 54 C35 52 26 40 32 30 C42 30 48 45 49 54 Z" fill="#56BB90" />
                <path d="M49 54 C40 45 36 38 33 32" stroke="#228157" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                
                {/* Hoja derecha verde salvia cálido */}
                <path d="M49 42 C62 38 72 26 66 16 C55 17 50 32 49 42 Z" fill="#4E8058" />
                <path d="M49 42 C57 32 60 25 64 18" stroke="#1F3425" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                
                {/* Pequeño brote superior amarillo sol */}
                <circle cx="48" cy="28" r="4.5" fill="#FACD4F" />
                <circle cx="53" cy="22" r="3" fill="#FCB59A" />
              </svg>
            </div>
          </div>
          {/* Pequeña insignia flotante */}
          <div className="absolute -bottom-2 -right-1 bg-white border border-sage-200 px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
            <Sparkles size={12} className="text-amberWarm-500 fill-amberWarm-400" />
            <span className="text-[10px] font-bold text-sage-800">Match con IA</span>
          </div>
        </div>

        {/* Nombre de la aplicación y Tagline */}
        <h1 className="text-2xl font-extrabold text-sage-900 tracking-tight leading-tight">
          Sembrando <span className="text-sage-600">Capacidades</span>
        </h1>
        <p className="mt-2 text-sm font-medium text-stone-600 max-w-[280px]">
          “Todas las personas tienen algo que aportar.”
        </p>

        {/* Tres pilares de valor */}
        <div className="mt-6 w-full space-y-2.5 text-left">
          <div className="flex items-center gap-3 p-2.5 bg-white/75 backdrop-blur-xs rounded-2xl border border-cream-200 shadow-2xs">
            <div className="w-8 h-8 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-800 leading-none">A tu ritmo y sin exigencias</p>
              <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">La oferta se adapta a ti, no tú a una oferta imposible.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 bg-white/75 backdrop-blur-xs rounded-2xl border border-cream-200 shadow-2xs">
            <div className="w-8 h-8 rounded-xl bg-peach-100 text-peach-500 flex items-center justify-center shrink-0">
              <Music size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-800 leading-none">Pon en valor tus talentos</p>
              <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">Música, arte, escritura, orden o aquello que te hace brillar.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 bg-white/75 backdrop-blur-xs rounded-2xl border border-cream-200 shadow-2xs">
            <div className="w-8 h-8 rounded-xl bg-mint-100 text-mint-600 flex items-center justify-center shrink-0">
              <HeartHandshake size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-800 leading-none">Comunidad cercana en Murcia</p>
              <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">Personas e iniciativas que comprenden tus ciclos.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="space-y-2.5 pt-4 pb-2">
        <button
          onClick={onStartQuestionnaire}
          className="w-full py-3.5 px-5 bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white font-bold rounded-2xl shadow-soft flex items-center justify-center gap-2 text-sm transition-all transform active:scale-[0.98]"
        >
          <span>Crear mi perfil y responder cuestionario</span>
          <ArrowRight size={16} />
        </button>

        <button
          onClick={onSkipToHome}
          className="w-full py-3 px-5 bg-white/80 hover:bg-white text-stone-700 font-semibold rounded-2xl border border-cream-300 text-xs shadow-2xs transition-colors"
        >
          Ya tengo cuenta (Acceder como Lucía)
        </button>
      </div>

    </div>
  );
}
