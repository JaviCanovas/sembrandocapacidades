import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Bookmark, 
  Share2, 
  Sparkles, 
  Users, 
  ShieldCheck, 
  Clock, 
  HeartHandshake, 
  Bus, 
  Footprints, 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Check, 
  AlertCircle,
  Headphones,
  SunMedium
} from 'lucide-react';
import { MOCK_RECOMMENDATIONS } from '../data/mock';

export default function OfferDetailScreen({ offer, onBack }) {
  // Oferta por defecto: Empleo de 10h de archivo
  const data = offer || MOCK_RECOMMENDATIONS[0];

  const [isSaved, setIsSaved] = useState(true);
  const [isInterested, setIsInterested] = useState(false);
  const [feedbackToast, setFeedbackToast] = useState(null);

  const handleToggleInterested = () => {
    const nextState = !isInterested;
    setIsInterested(nextState);
    setFeedbackToast(
      nextState
        ? "¡Genial! Hemos avisado a la mediadora de la Fundación. Nadie te llamará por sorpresa; te contactarán con delicadeza por la app."
        : "Has retirado tu interés. La oferta sigue guardada para cuando quieras."
    );
    setTimeout(() => {
      setFeedbackToast(null);
    }, 4500);
  };

  const handleToggleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="min-h-full bg-cream-50 text-slateWarm-800 pb-24">
      
      {/* Barra superior de navegación */}
      <div className="sticky top-0 z-20 bg-cream-50/95 backdrop-blur-sm px-5 py-3 border-b border-cream-200 flex items-center justify-between">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-full bg-white border border-cream-200 flex items-center justify-center text-stone-700 hover:text-stone-900 transition-colors shadow-2xs"
          aria-label="Volver"
        >
          <ChevronLeft size={20} />
        </button>

        <span className="text-xs font-bold text-stone-700">Detalle de oportunidad</span>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handleToggleSave}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
              isSaved 
                ? 'bg-sage-100 border-sage-300 text-sage-800' 
                : 'bg-white border-cream-200 text-stone-500'
            }`}
            aria-label="Guardar oferta"
          >
            <Bookmark size={17} fill={isSaved ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Notificación Toast flotante de confirmación */}
      {feedbackToast && (
        <div className="mx-4 mt-3 p-3 bg-sage-800 text-white text-xs rounded-2xl shadow-soft-lg flex items-start gap-2.5 animate-bounce-in">
          <Sparkles size={16} className="text-amberWarm-400 shrink-0 mt-0.5" />
          <p className="leading-snug">{feedbackToast}</p>
        </div>
      )}

      {/* Contenido principal */}
      <div className="p-5 space-y-5">
        
        {/* Cabecera de la oferta */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              {data.type || "Empleo adaptado"}
            </span>

            <div className="inline-flex items-center gap-1.5 bg-sage-600 text-white px-3 py-1 rounded-full text-xs font-extrabold shadow-2xs">
              <Sparkles size={12} className="text-amberWarm-300 fill-amberWarm-300" />
              <span>{data.matchPercentage}% de afinidad</span>
            </div>
          </div>

          <h1 className="text-lg font-black text-stone-900 leading-snug">
            {data.title}
          </h1>

          <p className="text-xs font-bold text-sage-800 mt-1.5 flex items-center gap-1.5">
            <Building2 size={14} className="text-sage-600" />
            <span>{data.entity}</span>
          </p>

          <p className="text-xs text-stone-500 mt-0.5 flex items-center gap-1.5">
            <MapPin size={13} className="text-stone-400" />
            <span>{data.location}</span>
          </p>
        </div>

        {/* 4 Píldoras de resumen clave */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-white p-2.5 rounded-2xl border border-cream-200 shadow-2xs">
            <span className="text-[10px] text-stone-400 font-semibold block uppercase">Dedicación</span>
            <span className="font-extrabold text-stone-800 flex items-center gap-1 mt-0.5">
              <Clock size={13} className="text-sage-600" />
              {data.hours || "10 h/semana"}
            </span>
          </div>

          <div className="bg-white p-2.5 rounded-2xl border border-cream-200 shadow-2xs">
            <span className="text-[10px] text-stone-400 font-semibold block uppercase">Entorno</span>
            <span className="font-extrabold text-stone-800 flex items-center gap-1 mt-0.5">
              <Users size={13} className="text-sage-600" />
              Equipo de 3 personas
            </span>
          </div>

          <div className="bg-white p-2.5 rounded-2xl border border-cream-200 shadow-2xs">
            <span className="text-[10px] text-stone-400 font-semibold block uppercase">Trayecto Bus</span>
            <span className="font-extrabold text-stone-800 flex items-center gap-1 mt-0.5">
              <Bus size={13} className="text-sage-600" />
              22 min (Línea 9)
            </span>
          </div>

          <div className="bg-white p-2.5 rounded-2xl border border-cream-200 shadow-2xs">
            <span className="text-[10px] text-stone-400 font-semibold block uppercase">Atención cliente</span>
            <span className="font-extrabold text-emerald-700 flex items-center gap-1 mt-0.5">
              <ShieldCheck size={13} />
              Cero público directo
            </span>
          </div>
        </div>

        {/* SECCIÓN ESTRELLA: ¿Por qué te encaja? (Enlace directo con su cuestionario) */}
        <div className="bg-gradient-to-br from-sage-50 via-cream-50 to-mint-50/50 rounded-3xl p-4 border border-sage-200 shadow-soft space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-sage-600 text-white flex items-center justify-center">
              <Sparkles size={15} />
            </div>
            <div>
              <h2 className="text-xs font-black uppercase tracking-wider text-sage-900">
                ¿Por qué te encaja a ti, Lucía?
              </h2>
              <p className="text-[10px] text-stone-500">Cruces validados con tus respuestas del cuestionario</p>
            </div>
          </div>

          <div className="space-y-2.5 pt-1">
            {(data.whyItFits || [
              { icon: 'Users', title: 'Espacio con poca gente', desc: 'Trabajarás en una sala de digitalización tranquila con solo 2 compañeras y un tutor de apoyo.' },
              { icon: 'ShieldCheck', title: 'Cero atención al público', desc: 'Sin llamadas imprevistas ni atención en mostrador. La tarea es minuciosa y focalizada en los documentos.' },
              { icon: 'Clock', title: '10 horas semanales a tu ritmo', desc: 'Distribución en 2 o 3 mañanas (ej. martes y jueves de 9:30 a 13:30) acordadas contigo previamente.' },
              { icon: 'HeartHandshake', title: 'Protocolo de flexibilidad en bajones', desc: 'Si atraviesas una semana difícil, la entidad cuenta con banco de horas recuperables y adaptación de ritmo sin penalizaciones.' },
              { icon: 'Bus', title: 'Transporte público directo (22 min)', desc: 'Salida desde Plaza Camachos (El Carmen) en Línea 9 directa hasta la puerta de la sede.' },
            ]).map((fit, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-white/80 p-2.5 rounded-2xl border border-cream-200/80">
                <span className="w-5 h-5 rounded-full bg-sage-100 text-sage-800 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h3 className="text-xs font-bold text-stone-900 leading-tight">{fit.title}</h3>
                  <p className="text-[11px] text-stone-600 leading-snug mt-0.5">{fit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MAPA Y RUTA ESQUEMÁTICA EN TRANSPORTE PÚBLICO (SVG ilustrativo) */}
        <div className="bg-white rounded-3xl p-4 border border-cream-200 shadow-soft space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bus size={17} className="text-sage-700" />
              <h2 className="text-xs font-black uppercase tracking-wider text-stone-900">
                Ruta en Transporte Público (Murcia)
              </h2>
            </div>
            <span className="text-[11px] font-extrabold text-sage-800 bg-sage-100 px-2 py-0.5 rounded-md">
              22 minutos en total
            </span>
          </div>

          <p className="text-[11px] text-stone-500">
            Trayecto directo y cómodo sin transbordos desde el Barrio del Carmen.
          </p>

          {/* Gráfico esquemático SVG de la línea 9 de autobús */}
          <div className="bg-cream-50 p-3 rounded-2xl border border-cream-200">
            <svg viewBox="0 0 320 80" className="w-full h-auto">
              {/* Línea de ruta */}
              <line x1="30" y1="40" x2="290" y2="40" stroke="#CADACD" strokeWidth="6" strokeLinecap="round" />
              <line x1="75" y1="40" x2="245" y2="40" stroke="#3D6846" strokeWidth="6" strokeLinecap="round" strokeDasharray="3 3" />
              
              {/* Punto 1: Casa de Lucía */}
              <circle cx="30" cy="40" r="10" fill="#FAF8F5" stroke="#3D6846" strokeWidth="3" />
              <circle cx="30" cy="40" r="4" fill="#3D6846" />
              <text x="30" y="62" fontSize="9" textAnchor="middle" fontWeight="bold" fill="#2A323A">Tu casa</text>
              <text x="30" y="72" fontSize="8" textAnchor="middle" fill="#8C9398">El Carmen</text>

              {/* Punto 2: Parada Bus Plaza Camachos */}
              <circle cx="95" cy="40" r="8" fill="#56BB90" />
              <text x="95" y="24" fontSize="8.5" textAnchor="middle" fontWeight="bold" fill="#2D6A4F">Plaza Camachos</text>
              <text x="95" y="62" fontSize="8" textAnchor="middle" fill="#52585B">Bus Línea 9</text>

              {/* Icono de bus animado */}
              <g transform="translate(155, 28)">
                <rect x="0" y="0" width="22" height="15" rx="3" fill="#2E9F6E" />
                <rect x="2" y="2" width="7" height="6" rx="1" fill="#FFFFFF" />
                <rect x="11" y="2" width="8" height="6" rx="1" fill="#FFFFFF" />
                <circle cx="5" cy="15" r="2.5" fill="#1F3425" />
                <circle cx="16" cy="15" r="2.5" fill="#1F3425" />
              </g>

              {/* Punto 3: Parada Ronda Sur */}
              <circle cx="235" cy="40" r="8" fill="#56BB90" />
              <text x="235" y="24" fontSize="8.5" textAnchor="middle" fontWeight="bold" fill="#2D6A4F">Parada Ronda Sur</text>
              <text x="235" y="62" fontSize="8" textAnchor="middle" fill="#52585B">Caminar 3 min</text>

              {/* Punto 4: Llegada Fundación */}
              <circle cx="290" cy="40" r="12" fill="#3D6846" />
              <polygon points="290,34 294,42 286,42" fill="#FACD4F" />
              <text x="290" y="62" fontSize="9" textAnchor="middle" fontWeight="bold" fill="#1F3425">Archivo</text>
              <text x="290" y="72" fontSize="8" textAnchor="middle" fill="#52585B">Destino</text>
            </svg>
          </div>

          <div className="text-[11px] text-stone-600 bg-sage-50/70 p-2.5 rounded-xl border border-sage-200/60 flex items-center gap-2">
            <Bus size={14} className="text-sage-600 shrink-0" />
            <span>Frecuencia Línea 9 de Transportes de Murcia: cada 12 minutos en mañanas laborables.</span>
          </div>
        </div>

        {/* ADAPTACIONES PREVISTAS & AMBIENTE */}
        <div className="bg-white rounded-3xl p-4 border border-cream-200 shadow-soft space-y-2.5">
          <h2 className="text-xs font-black uppercase tracking-wider text-stone-900">
            Adaptaciones del Puesto de Trabajo
          </h2>
          <div className="space-y-2">
            {[
              { icon: Headphones, title: "Auriculares permitidos", desc: "Puedes escuchar tus listas de música acústica mientras digitalizas." },
              { icon: SunMedium, title: "Puesto ergonómico con luz suave", desc: "Mesa regulable y pantalla antirreflejos en espacio sin destellos molestos." },
              { icon: Clock, title: "Pausas sensoriales libres", desc: "15 min cada hora para descansar la vista en el patio ajardinado." },
            ].map((ad, i) => {
              const Icon = ad.icon;
              return (
                <div key={i} className="flex items-start gap-2.5 p-2 rounded-xl bg-cream-50/60 border border-cream-200">
                  <Icon size={16} className="text-sage-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-stone-800">{ad.title}</h3>
                    <p className="text-[11px] text-stone-500 leading-snug">{ad.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* POLÍTICA EN ÉPOCAS DE BAJÓN (Punto clave exigido por el usuario) */}
        <div className="p-4 bg-gradient-to-br from-peach-50 via-cream-50 to-amberWarm-50 rounded-3xl border border-peach-200 shadow-soft space-y-2">
          <div className="flex items-center gap-2 text-peach-900">
            <HeartHandshake size={18} className="text-peach-600 shrink-0" />
            <h2 className="text-xs font-black uppercase tracking-wider">
              Compromiso en Épocas de Bajón
            </h2>
          </div>

          <p className="text-xs text-stone-700 leading-relaxed font-medium">
            La Fundación dispone de certificación en inclusión y empleo con apoyo. Si atraviesas un episodio depresivo o de baja energía, se activa un protocolo de pausa acordado:
          </p>

          <ul className="text-[11px] text-stone-600 space-y-1.5 list-disc pl-4 font-normal">
            <li>Banco de horas para compensar tus mañanas cuando recuperes energía.</li>
            <li>Sin necesidad de dar explicaciones invasivas; basta con avisar por la app a tu mediadora asignada.</li>
            <li>Seguridad total: tu puesto queda reservado y respetado.</li>
          </ul>
        </div>

        {/* Requisitos mínimos */}
        <div className="bg-white rounded-3xl p-4 border border-cream-200 shadow-soft space-y-2">
          <h2 className="text-xs font-black uppercase tracking-wider text-stone-900">
            Requisitos sencillos
          </h2>
          <div className="space-y-1 text-xs text-stone-600">
            <p className="flex items-center gap-1.5">
              <Check size={14} className="text-sage-600" />
              Grado Medio Administrativo o nociones de archivo básico.
            </p>
            <p className="flex items-center gap-1.5">
              <Check size={14} className="text-sage-600" />
              Gusto por el orden, la catalogación y el trabajo meticuloso.
            </p>
          </div>
        </div>

      </div>

      {/* Barra de acción inferior fija (Me interesa / Guardar) */}
      <div className="sticky bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-cream-200 p-4 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] flex items-center gap-3">
        <button
          onClick={handleToggleSave}
          className={`py-3 px-4 rounded-2xl border font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
            isSaved 
              ? 'bg-sage-100 border-sage-300 text-sage-800' 
              : 'bg-white border-cream-300 text-stone-600 hover:bg-stone-50'
          }`}
        >
          <Bookmark size={16} fill={isSaved ? 'currentColor' : 'none'} />
          <span>{isSaved ? 'Guardada' : 'Guardar'}</span>
        </button>

        <button
          onClick={handleToggleInterested}
          className={`flex-1 py-3 px-5 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-soft transition-all transform active:scale-[0.98] ${
            isInterested
              ? 'bg-emerald-700 text-white shadow-emerald-700/20'
              : 'bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white'
          }`}
        >
          {isInterested ? (
            <>
              <CheckCircle2 size={18} className="text-amberWarm-300" />
              <span>✓ Me interesa enviado</span>
            </>
          ) : (
            <>
              <Sparkles size={16} className="text-amberWarm-300" />
              <span>Me interesa esta propuesta</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}
