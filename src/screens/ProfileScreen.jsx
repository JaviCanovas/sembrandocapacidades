import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  Music, 
  FileText, 
  PenTool, 
  HeartHandshake, 
  Phone, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  ExternalLink, 
  ShieldCheck, 
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  AlertCircle
} from 'lucide-react';
import { MOCK_USER } from '../data/mock';

export default function ProfileScreen({ onNavigateToTalents }) {
  const [showHealthDetails, setShowHealthDetails] = useState(true);
  const [showSupportModal, setShowSupportModal] = useState(false);

  return (
    <div className="min-h-full bg-cream-50 text-slateWarm-800 pb-20">
      
      {/* Cabecera del Perfil con degradado y Avatar */}
      <div className="bg-gradient-to-b from-sage-100/90 via-sage-50 to-cream-50 px-5 pt-4 pb-4 border-b border-cream-200">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-extrabold uppercase tracking-wider text-sage-800">
            Mi Perfil de Capacidades
          </span>
          <span className="text-[10px] font-bold bg-white text-stone-600 px-2.5 py-1 rounded-full border border-cream-200 shadow-2xs">
            Perfil activo
          </span>
        </div>

        <div className="flex items-center gap-3.5">
          {/* Avatar con iniciales LM */}
          <div className="relative">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-sage-600 to-mint-600 text-white font-black text-xl flex items-center justify-center shadow-soft border-2 border-white">
              {MOCK_USER.avatarInitials}
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amberWarm-400 border-2 border-white flex items-center justify-center text-[10px]">
              🌱
            </div>
          </div>

          <div>
            <h1 className="text-lg font-black text-stone-900 leading-tight">
              {MOCK_USER.name}
            </h1>
            <p className="text-xs font-semibold text-stone-600 mt-0.5 flex items-center gap-1">
              <span>{MOCK_USER.age} años</span>
              <span>•</span>
              <span className="flex items-center gap-0.5">
                <MapPin size={11} className="text-sage-600" />
                {MOCK_USER.city} ({MOCK_USER.neighborhood})
              </span>
            </p>
            <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">
              {MOCK_USER.bio}
            </p>
          </div>
        </div>

        {/* Estudios y Formación */}
        <div className="mt-3.5 bg-white/90 p-3 rounded-2xl border border-cream-200/90 shadow-2xs space-y-1.5">
          <div className="flex items-center gap-1.5 text-stone-700">
            <GraduationCap size={15} className="text-sage-600 shrink-0" />
            <span className="text-xs font-bold">Estudios y formación</span>
          </div>
          <div className="space-y-1 pl-5 text-[11px] text-stone-600">
            <p><strong className="text-stone-800">Grado Medio:</strong> Técnico en Gestión Administrativa (2022)</p>
            <p><strong className="text-stone-800">Secundaria:</strong> ESO — IES Floridablanca, Murcia</p>
          </div>
        </div>
      </div>

      <div className="p-5 space-y-4">
        
        {/* BLOQUE SENSIBLE CON CANDADO: Situación de salud mental compartida con delicadeza */}
        <div className="bg-gradient-to-br from-amberWarm-50/70 via-cream-50 to-sage-50/50 rounded-3xl p-4 border border-amberWarm-200/80 shadow-soft space-y-2.5">
          
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-amberWarm-100 text-amberWarm-800 flex items-center justify-center shrink-0">
                <Lock size={14} className="text-amberWarm-900" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-amberWarm-900 block">
                  Información protegida para recomendaciones
                </span>
                <h3 className="text-xs font-black text-stone-900">
                  {MOCK_USER.healthStatus.condition} (Opcional y confidencial)
                </h3>
              </div>
            </div>

            <button
              onClick={() => setShowHealthDetails(!showHealthDetails)}
              className="text-stone-400 hover:text-stone-700 p-1"
            >
              {showHealthDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          {/* Texto exacto exigido */}
          <div className="bg-white/90 p-2.5 rounded-2xl border border-amberWarm-200/80 flex items-start gap-2 shadow-2xs">
            <ShieldCheck size={16} className="text-sage-700 shrink-0 mt-0.5" />
            <p className="text-[11px] font-semibold text-stone-700 leading-snug">
              “{MOCK_USER.healthStatus.visibility}”
            </p>
          </div>

          {/* Desglose de sus épocas */}
          {showHealthDetails && (
            <div className="space-y-2 pt-1 text-[11px]">
              <div className="bg-white/80 p-2.5 rounded-xl border border-cream-200">
                <span className="font-extrabold text-stone-900 flex items-center gap-1 mb-1">
                  <span className="w-2 h-2 rounded-full bg-peach-400"></span>
                  Épocas de bajón
                </span>
                <p className="text-stone-600 leading-relaxed font-normal">
                  {MOCK_USER.healthStatus.seasons.low}
                </p>
              </div>

              <div className="bg-white/80 p-2.5 rounded-xl border border-cream-200">
                <span className="font-extrabold text-stone-900 flex items-center gap-1 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Épocas buenas
                </span>
                <p className="text-stone-600 leading-relaxed font-normal">
                  {MOCK_USER.healthStatus.seasons.good}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* BLOQUE: Mi forma de trabajar (Lo que me ayuda / Lo que me cuesta) */}
        <div className="bg-white rounded-3xl p-4 border border-cream-200 shadow-soft space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-black uppercase tracking-wider text-stone-900">
              Mi forma de trabajar y ritmos
            </h2>
            <span className="text-[10px] text-stone-400 font-semibold">10h/sem · Bus máx 30m</span>
          </div>

          {/* Lo que me ayuda */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1 text-[11px] font-bold text-sage-800">
              <CheckCircle2 size={13} className="text-sage-600" />
              <span>Lo que me ayuda a florecer:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {MOCK_USER.workPreferences.whatHelps.map((item, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-bold bg-sage-50 text-sage-900 border border-sage-200 px-2 py-0.5 rounded-lg"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>

          {/* Lo que me cuesta */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center gap-1 text-[11px] font-bold text-stone-700">
              <XCircle size={13} className="text-peach-500" />
              <span>Entornos que me cuestan o me saturan:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {MOCK_USER.workPreferences.whatIsHard.map((item, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-semibold bg-peach-50 text-stone-700 border border-peach-200 px-2 py-0.5 rounded-lg"
                >
                  ✕ {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* BLOQUE: Mis talentos y acceso al espacio creativo */}
        <div className="bg-white rounded-3xl p-4 border border-cream-200 shadow-soft space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-black uppercase tracking-wider text-stone-900">
              Mis talentos y pasiones
            </h2>
            <button
              onClick={onNavigateToTalents}
              className="text-xs font-bold text-sage-700 hover:text-sage-900 flex items-center gap-0.5"
            >
              <span>Ver mi espacio</span>
              <ChevronRight size={14} />
            </button>
          </div>

          <div className="space-y-2">
            {MOCK_USER.talents.map((t, idx) => (
              <div 
                key={idx}
                onClick={onNavigateToTalents}
                className="p-2.5 rounded-2xl bg-cream-50/80 border border-cream-200 hover:border-sage-300 transition-colors cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center shrink-0">
                    {t.name.includes('Música') ? <Music size={16} /> : t.name.includes('Letras') ? <PenTool size={16} /> : <FileText size={16} />}
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-stone-900">{t.name}</h3>
                    <p className="text-[10px] text-stone-500 leading-tight">{t.desc}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-stone-600 bg-white px-2 py-0.5 rounded-md border border-cream-200 shrink-0 ml-2">
                  {t.level}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={onNavigateToTalents}
            className="w-full py-2.5 bg-gradient-to-r from-sage-50 to-mint-50 hover:from-sage-100 hover:to-mint-100 text-sage-800 border border-sage-200 font-bold rounded-2xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
          >
            <Music size={14} />
            <span>Explorar mi espacio musical y cuaderno de letras</span>
          </button>
        </div>

        {/* ACCESO DISCRETO Y DIGNO: Recursos de apoyo y bienestar */}
        <div className="pt-1">
          <button
            onClick={() => setShowSupportModal(true)}
            className="w-full p-3.5 bg-white hover:bg-stone-50 rounded-2xl border border-cream-300 shadow-2xs text-left flex items-center justify-between group transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-peach-100 text-peach-600 flex items-center justify-center shrink-0">
                <HeartHandshake size={17} />
              </div>
              <div>
                <span className="text-xs font-bold text-stone-800 block group-hover:text-sage-800">
                  Recursos de apoyo y bienestar
                </span>
                <span className="text-[10px] text-stone-500">
                  Línea 024, Teléfono de la Esperanza Murcia y centros de salud
                </span>
              </div>
            </div>
            <ChevronRight size={16} className="text-stone-400 group-hover:text-stone-700" />
          </button>
        </div>

      </div>

      {/* MODAL O TARJETA DESPLEGADA DE RECURSOS DE APOYO (Incluye 024) */}
      {showSupportModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-end justify-center p-3 animate-fade-in">
          <div className="bg-white w-full max-w-sm rounded-3xl p-5 shadow-2xl border border-cream-200 space-y-4 max-h-[85vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-cream-200 pb-3">
              <div className="flex items-center gap-2 text-stone-900">
                <HeartHandshake size={20} className="text-peach-600" />
                <h3 className="text-sm font-black">Recursos de Apoyo en Murcia</h3>
              </div>
              <button
                onClick={() => setShowSupportModal(false)}
                className="w-7 h-7 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center hover:bg-stone-200 text-xs font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-stone-600 leading-snug">
              Si estás pasando por un momento muy difícil o sientes que no puedes más, recuerda que no estás sola. Hay profesionales y personas dispuestas a escucharte con calidez y sin juicios.
            </p>

            <div className="space-y-2.5">
              {MOCK_USER.supportResources.map((res, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-2xl border transition-all ${
                    res.highlight
                      ? 'bg-peach-50/80 border-peach-300 ring-1 ring-peach-300'
                      : 'bg-cream-50/60 border-cream-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-black text-stone-900">
                      {res.title}
                    </span>
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                      res.highlight ? 'bg-peach-200 text-peach-900' : 'bg-stone-200 text-stone-700'
                    }`}>
                      {res.badge}
                    </span>
                  </div>

                  <p className="text-[11px] text-stone-600 leading-snug mb-2">
                    {res.desc}
                  </p>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-sm font-black text-sage-800 flex items-center gap-1.5">
                      <Phone size={14} className="text-sage-600" />
                      {res.number}
                    </span>
                    <a
                      href={`tel:${res.number.replace(/\s+/g, '')}`}
                      className="px-3 py-1 bg-sage-600 hover:bg-sage-700 text-white text-[11px] font-bold rounded-xl shadow-2xs"
                    >
                      Llamar ahora
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowSupportModal(false)}
              className="w-full py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold rounded-xl text-xs transition-colors"
            >
              Cerrar
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
