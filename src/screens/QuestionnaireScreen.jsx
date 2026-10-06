import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Sparkles, 
  Users, 
  Smile, 
  ShieldCheck, 
  Clock, 
  Bus, 
  Footprints, 
  MapPin, 
  HeartHandshake, 
  Check, 
  ArrowRight,
  Info
} from 'lucide-react';
import { MOCK_QUESTIONNAIRE } from '../data/mock';

export default function QuestionnaireScreen({ onComplete, onBack }) {
  // Estado local para permitir seleccionar / deseleccionar chips
  const [selectedChips, setSelectedChips] = useState({
    opt_poca_gente: true,
    opt_equipo_peq: true,
    opt_sin_publico: true,
    opt_individual: true,
    opt_gran_equipo: false,
    opt_atencion: false,
    opt_public_trans: true,
    opt_sin_coche: true,
    opt_tiempo: true,
    opt_coche: false,
    opt_10h: true,
    opt_flexible: true,
    opt_20h: false,
    opt_jornada_completa: false,
    opt_apoyo_si: true,
    opt_apoyo_no: false,
  });

  const [intensity, setIntensity] = useState(3); // 1 a 4

  const toggleChip = (id) => {
    setSelectedChips((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getIntensityLabel = (val) => {
    switch(val) {
      case 1: return "Pausas puntuales y aviso previo";
      case 2: return "Flexibilidad horaria regular";
      case 3: return "Adaptación profunda en bajones (banco de horas)";
      case 4: return "Pausa temporal garantizada sin penalización";
      default: return "Adaptación flexible";
    }
  };

  return (
    <div className="min-h-full flex flex-col justify-between bg-cream-50 text-slateWarm-800 pb-6">
      
      {/* Barra superior con botón volver y barra de progreso al 70% */}
      <div className="sticky top-0 z-20 bg-cream-50/95 backdrop-blur-sm px-5 pt-3 pb-3 border-b border-cream-200">
        <div className="flex items-center justify-between mb-2.5">
          <button 
            onClick={onBack}
            className="w-8 h-8 rounded-full bg-white border border-cream-200 flex items-center justify-center text-stone-600 hover:text-stone-900 transition-colors shadow-2xs"
            aria-label="Volver"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sage-700">
              Paso 4 de 6
            </span>
            <h2 className="text-xs font-bold text-stone-700">Entorno y bienestar personal</h2>
          </div>
          <span className="text-xs font-extrabold text-sage-700 bg-sage-100 px-2 py-0.5 rounded-full">
            70 %
          </span>
        </div>

        {/* Barra visual de progreso al 70% */}
        <div className="w-full h-2 bg-stone-200/70 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-sage-500 to-mint-500 rounded-full transition-all duration-500 ease-out" 
            style={{ width: '70%' }}
          />
        </div>
      </div>

      {/* Contenido scrolleable del cuestionario */}
      <div className="px-5 py-4 space-y-5 flex-1 overflow-y-auto">
        
        {/* Mensaje amable sin juicios */}
        <div className="bg-sage-50/90 border border-sage-200/90 rounded-2xl p-3.5 flex items-start gap-2.5 shadow-2xs">
          <span className="text-xl shrink-0">🌱</span>
          <div className="text-xs text-stone-700 leading-relaxed">
            <span className="font-bold text-sage-900 block mb-0.5">No hay respuestas correctas ni incorrectas</span>
            Esto nos ayuda a encontrar entornos, horarios y proyectos donde puedas florecer a tu propio compás.
          </div>
        </div>

        {/* Pregunta 1: Entorno laboral */}
        <div className="space-y-2.5">
          <div>
            <span className="text-[11px] font-bold text-sage-600 uppercase tracking-wider">Pregunta 1</span>
            <h3 className="text-sm font-extrabold text-stone-900">
              ¿Dónde y con quién te sientes más cómoda?
            </h3>
            <p className="text-[11px] text-stone-500">Selecciona todos los que te aporten tranquilidad.</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'opt_poca_gente', label: 'Poca gente', sub: 'Espacios silenciosos', icon: Users },
              { id: 'opt_equipo_peq', label: 'Equipos pequeños', sub: '2 a 4 personas', icon: Smile },
              { id: 'opt_sin_publico', label: 'Sin atender público', sub: 'Cero mostrador/teléfono', icon: ShieldCheck },
              { id: 'opt_individual', label: 'Tareas autónomas', sub: 'A mi propio ritmo', icon: Clock },
              { id: 'opt_gran_equipo', label: 'Equipos grandes', sub: 'Dinámicos y activos', icon: Users },
              { id: 'opt_atencion', label: 'Atención a visitas', sub: 'Contacto continuo', icon: Info },
            ].map((item) => {
              const Icon = item.icon;
              const isSelected = selectedChips[item.id];
              return (
                <button
                  key={item.id}
                  onClick={() => toggleChip(item.id)}
                  type="button"
                  className={`p-2.5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-sage-50 border-sage-500/80 text-sage-900 shadow-2xs ring-1 ring-sage-400'
                      : 'bg-white border-cream-200 text-stone-500 hover:border-cream-300'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-sage-200 text-sage-800' : 'bg-stone-100 text-stone-400'
                    }`}>
                      <Icon size={14} />
                    </div>
                    {isSelected && (
                      <span className="w-4 h-4 rounded-full bg-sage-600 text-white flex items-center justify-center text-[10px]">
                        ✓
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-bold block leading-tight">{item.label}</span>
                    <span className="text-[10px] text-stone-400 leading-none">{item.sub}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pregunta 2: Desplazamiento y Movilidad */}
        <div className="space-y-2.5 pt-1">
          <div>
            <span className="text-[11px] font-bold text-sage-600 uppercase tracking-wider">Pregunta 2</span>
            <h3 className="text-sm font-extrabold text-stone-900">
              ¿Cómo te desplazas habitualmente?
            </h3>
            <p className="text-[11px] text-stone-500">Para priorizar opciones con rutas accesibles para ti.</p>
          </div>

          <div className="space-y-1.5">
            {[
              { id: 'opt_public_trans', label: 'Transporte público (Bus / Tranvía de Murcia)', icon: Bus },
              { id: 'opt_sin_coche', label: 'No dispongo de vehículo propio actualmente', icon: Footprints },
              { id: 'opt_tiempo', label: 'Trayectos de máximo 30 minutos desde casa', icon: MapPin },
            ].map((item) => {
              const Icon = item.icon;
              const isSelected = selectedChips[item.id];
              return (
                <button
                  key={item.id}
                  onClick={() => toggleChip(item.id)}
                  type="button"
                  className={`w-full p-2.5 rounded-xl text-left border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-sage-50 border-sage-500 text-sage-900 shadow-2xs font-semibold'
                      : 'bg-white border-cream-200 text-stone-600'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-sage-200 text-sage-800' : 'bg-stone-100 text-stone-400'
                    }`}>
                      <Icon size={14} />
                    </div>
                    <span className="text-xs">{item.label}</span>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                    isSelected ? 'bg-sage-600 border-sage-600 text-white' : 'border-stone-300'
                  }`}>
                    {isSelected && '✓'}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pregunta 3: Dedicación semanal */}
        <div className="space-y-2.5 pt-1">
          <div>
            <span className="text-[11px] font-bold text-sage-600 uppercase tracking-wider">Pregunta 3</span>
            <h3 className="text-sm font-extrabold text-stone-900">
              ¿Cuánto tiempo puedes dedicar?
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'opt_10h', label: '10 horas / semana' },
              { id: 'opt_flexible', label: 'Horarios flexibles' },
              { id: 'opt_20h', label: 'Media jornada (20h)' },
              { id: 'opt_jornada_completa', label: 'Jornada completa' },
            ].map((item) => {
              const isSelected = selectedChips[item.id];
              return (
                <button
                  key={item.id}
                  onClick={() => toggleChip(item.id)}
                  type="button"
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    isSelected
                      ? 'bg-sage-700 text-white border-sage-700 shadow-2xs'
                      : 'bg-white text-stone-600 border-cream-300 hover:border-stone-400'
                  }`}
                >
                  {isSelected ? `✓ ${item.label}` : item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pregunta 4: Épocas y necesidad de apoyo (Pregunta sensible tratada con delicadeza) */}
        <div className="p-3.5 bg-gradient-to-br from-peach-50/70 to-cream-100 border border-peach-200/90 rounded-2xl space-y-3">
          <div className="flex items-center gap-1.5">
            <HeartHandshake size={16} className="text-peach-500" />
            <span className="text-xs font-extrabold text-stone-800">
              ¿Tienes épocas en las que necesitas más tranquilidad o apoyo?
            </span>
          </div>

          <p className="text-[11px] text-stone-600 leading-snug">
            Esta información es estrictamente privada y permite a nuestro algoritmo filtrar únicamente organizaciones con protocolos de flexibilidad reales.
          </p>

          <div className="space-y-2">
            <button
              onClick={() => toggleChip('opt_apoyo_si')}
              type="button"
              className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between text-xs font-semibold ${
                selectedChips.opt_apoyo_si
                  ? 'bg-white border-sage-500 text-sage-900 shadow-2xs'
                  : 'bg-white/60 border-cream-200 text-stone-600'
              }`}
            >
              <span>Sí, paso por épocas de bajón donde requiero pausa</span>
              <span className="w-4 h-4 rounded-full bg-sage-600 text-white flex items-center justify-center text-[10px]">✓</span>
            </button>

            {/* Selector de nivel de adaptación */}
            {selectedChips.opt_apoyo_si && (
              <div className="pt-2 px-1 space-y-1.5">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-stone-500 font-medium">Margen de adaptación:</span>
                  <span className="font-bold text-sage-800 bg-sage-100 px-2 py-0.5 rounded-md">
                    {getIntensityLabel(intensity)}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  value={intensity}
                  onChange={(e) => setIntensity(Number(e.target.value))}
                  className="w-full accent-sage-600 h-1.5 bg-stone-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[9px] text-stone-400 font-medium">
                  <span>Pausas breves</span>
                  <span>Banco de horas</span>
                  <span>Pausa temporal</span>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Botón flotante de guardar y continuar */}
      <div className="px-5 pt-2">
        <button
          onClick={onComplete}
          className="w-full py-3 px-4 bg-sage-600 hover:bg-sage-700 text-white font-bold rounded-2xl shadow-soft flex items-center justify-center gap-2 text-sm transition-all active:scale-[0.98]"
        >
          <Sparkles size={16} className="text-amberWarm-300" />
          <span>Guardar y ver recomendaciones (Match IA)</span>
          <ArrowRight size={16} />
        </button>
      </div>

    </div>
  );
}
