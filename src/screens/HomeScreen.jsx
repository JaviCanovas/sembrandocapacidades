import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Bus, 
  Clock, 
  Users, 
  Bookmark, 
  ChevronRight, 
  ArrowUpRight, 
  Heart, 
  Compass, 
  Smile, 
  Zap, 
  Coffee,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { MOCK_RECOMMENDATIONS, MOCK_USER } from '../data/mock';

export default function HomeScreen({ onSelectOffer, onNavigateTab }) {
  // Estado para el selector de ánimo "¿Cómo estás hoy?"
  const [currentMood, setCurrentMood] = useState('tranquila');
  // Estado local para elementos guardados
  const [savedItems, setSavedItems] = useState({ 'rec-empleo-archivo': true });

  const toggleSave = (e, id) => {
    e.stopPropagation();
    setSavedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const moods = [
    { id: 'energia', label: 'Con energía', icon: Zap, bg: 'hover:bg-amberWarm-50', activeBg: 'bg-amberWarm-100 border-amberWarm-400 text-amberWarm-900', note: 'Oportunidades con mayor reto y dinamismo.' },
    { id: 'tranquila', label: 'Tranquila', icon: Smile, bg: 'hover:bg-sage-50', activeBg: 'bg-sage-100 border-sage-500 text-sage-900', note: 'Ritmo equilibrado, tareas ordenadas y sin estrés.' },
    { id: 'calma', label: 'Necesito calma', icon: Coffee, bg: 'hover:bg-peach-50', activeBg: 'bg-peach-100 border-peach-400 text-peach-900', note: 'Propuestas de bajo estímulo, descanso o talleres artísticos.' },
  ];

  return (
    <div className="min-h-full bg-cream-50 text-slateWarm-800 pb-16">
      
      {/* Cabecera de bienvenida con degradado suave de huerto */}
      <div className="bg-gradient-to-b from-sage-100/90 via-sage-50/60 to-cream-50 px-5 pt-4 pb-4 border-b border-cream-200">
        
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="flex items-center gap-1.5 text-stone-500 text-[11px] font-medium">
              <MapPin size={12} className="text-sage-600" />
              <span>Murcia capital · Barrio del Carmen</span>
            </div>
            <h1 className="text-xl font-black text-stone-900 tracking-tight flex items-center gap-1.5 mt-0.5">
              Hola, Lucía <span className="text-lg">🌱</span>
            </h1>
          </div>

          {/* Avatar con iniciales LM */}
          <button 
            onClick={() => onNavigateTab('profile')}
            className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sage-600 to-mint-600 text-white font-black text-sm flex items-center justify-center shadow-soft border-2 border-white transition-transform hover:scale-105"
            aria-label="Ver mi perfil"
          >
            LM
          </button>
        </div>

        {/* Banner "Tu huerto personal": metáfora sembrar y brotar */}
        <div className="bg-white/95 rounded-2xl p-3 border border-sage-200/80 shadow-2xs flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center shrink-0">
              <Sparkles size={17} className="text-sage-600 fill-sage-400/40" />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-800 leading-tight">
                Algoritmo de afinidad activo
              </p>
              <p className="text-[11px] text-stone-500 mt-0.5">
                4 propuestas con más del 85% de compatibilidad
              </p>
            </div>
          </div>
          <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-2 py-1 rounded-lg">
            90% Match medio
          </span>
        </div>

      </div>

      <div className="px-5 py-4 space-y-4">
        
        {/* Selector suave: "¿Cómo estás hoy?" */}
        <div className="bg-white rounded-2xl p-3.5 border border-cream-200/90 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-extrabold text-stone-900 tracking-wide uppercase">
              ¿Cómo estás hoy?
            </h2>
            <span className="text-[10px] text-stone-500 font-medium">Adapta tus sugerencias</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            {moods.map((mood) => {
              const Icon = mood.icon;
              const isCurrent = currentMood === mood.id;
              return (
                <button
                  key={mood.id}
                  onClick={() => setCurrentMood(mood.id)}
                  type="button"
                  className={`py-2 px-1.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                    isCurrent
                      ? `${mood.activeBg} font-bold shadow-2xs ring-1`
                      : 'bg-stone-50/70 border-cream-200 text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <Icon size={16} />
                  <span className="text-[11px] leading-none">{mood.label}</span>
                </button>
              );
            })}
          </div>

          <p className="text-[10px] text-stone-500 leading-tight text-center pt-0.5">
            {moods.find(m => m.id === currentMood)?.note}
          </p>
        </div>

        {/* Sección de Tarjetas de Match con IA */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-extrabold text-stone-900">
                Recomendaciones para ti
              </h2>
              <p className="text-[11px] text-stone-500">
                Basadas en tus ritmos, 10h/sem y entorno sereno
              </p>
            </div>
            <button 
              onClick={() => onNavigateTab('explore')}
              className="text-xs font-bold text-sage-700 hover:text-sage-800 flex items-center gap-0.5"
            >
              <span>Ver todas</span>
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Listado de tarjetas de recomendación */}
          <div className="space-y-3">
            {MOCK_RECOMMENDATIONS.map((item) => {
              const isSaved = !!savedItems[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectOffer(item)}
                  className="bg-white rounded-3xl p-4 border border-cream-200/90 shadow-soft hover:shadow-soft-lg transition-all cursor-pointer relative group hover:border-sage-300"
                >
                  {/* Fila superior: Tipo, Porcentaje de match y botón guardar */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.typeBadgeColor}`}>
                        {item.type}
                      </span>
                      <span className="text-[11px] font-bold text-stone-500">
                        {item.transitLine}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Porcentaje de compatibilidad en píldora destacada */}
                      <div className="inline-flex items-center gap-1 bg-sage-50 text-sage-800 border border-sage-200/80 px-2 py-0.5 rounded-full text-xs font-extrabold shadow-2xs">
                        <Sparkles size={11} className="text-amberWarm-500 fill-amberWarm-400" />
                        <span>{item.matchPercentage}% match</span>
                      </div>

                      <button
                        onClick={(e) => toggleSave(e, item.id)}
                        className={`p-1.5 rounded-full transition-colors ${
                          isSaved ? 'text-sage-700 bg-sage-100' : 'text-stone-400 hover:text-stone-700'
                        }`}
                        aria-label="Guardar oferta"
                      >
                        <Bookmark size={15} fill={isSaved ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  </div>

                  {/* Título de la propuesta */}
                  <h3 className="text-sm font-extrabold text-stone-900 group-hover:text-sage-800 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Entidad ficticia murciana */}
                  <p className="text-xs font-semibold text-stone-600 mt-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage-500"></span>
                    {item.entity}
                  </p>

                  {/* Descripción breve */}
                  <p className="text-[11px] text-stone-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {item.shortDescription}
                  </p>

                  {/* Chips de adaptaciones clave solicitadas por Lucía */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.chips.map((chip, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[10px] font-semibold bg-cream-100 text-stone-700 px-2 py-0.5 rounded-md border border-cream-200"
                      >
                        <CheckCircle2 size={10} className="text-sage-600" />
                        {chip}
                      </span>
                    ))}
                  </div>

                  {/* Pie de tarjeta con indicador de ver detalle */}
                  <div className="mt-3 pt-2.5 border-t border-cream-100 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2 text-stone-500">
                      <span className="flex items-center gap-1">
                        <Clock size={12} className="text-stone-400" />
                        {item.hours}
                      </span>
                    </div>

                    <span className="font-bold text-sage-700 group-hover:text-sage-900 inline-flex items-center gap-0.5">
                      Ver detalle adaptado
                      <ArrowUpRight size={13} />
                    </span>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Tarjeta de recordatorio del talento de Lucía */}
        <div 
          onClick={() => onNavigateTab('talents')}
          className="bg-gradient-to-r from-peach-100/90 via-amberWarm-50 to-cream-100 rounded-3xl p-4 border border-peach-200/90 shadow-soft cursor-pointer hover:border-peach-300 transition-all flex items-center justify-between"
        >
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-peach-700 bg-white/80 px-2 py-0.5 rounded-md">
              Tu rincón artístico
            </span>
            <h4 className="text-xs font-black text-stone-900">
              Tu canción "Despertar a mi compás" tiene 3 nuevos comentarios
            </h4>
            <p className="text-[11px] text-stone-600">
              Personas de Murcia y Cartagena han dejado mensajes de cariño.
            </p>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-white shadow-2xs flex items-center justify-center text-peach-600 shrink-0 ml-2">
            <ChevronRight size={18} />
          </div>
        </div>

      </div>

    </div>
  );
}
