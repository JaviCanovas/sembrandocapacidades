import React from 'react';
import { 
  Smartphone, 
  Sparkles, 
  Camera, 
  RotateCcw, 
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  Layers
} from 'lucide-react';

export default function PresentationToolbar({ 
  currentScreen, 
  onSelectScreen, 
  showFrame, 
  onToggleFrame,
  onResetState 
}) {
  const screens = [
    { id: 'welcome', num: '1', name: 'Bienvenida', caption: 'Captura 1: Pantalla de Bienvenida con Logo, Metáfora y Pilares' },
    { id: 'questionnaire', num: '2', name: 'Cuestionario (70%)', caption: 'Captura 2: Cuestionario Personalizado con Respuestas y Respeto a Ritmos' },
    { id: 'home', num: '3', name: 'Inicio (Match IA)', caption: 'Captura 3: Pantalla Principal con Selector "¿Cómo estás hoy?" y Tarjetas de Afinidad' },
    { id: 'offer-detail', num: '4', name: 'Detalle Oferta (10h)', caption: 'Captura 4: Detalle del Empleo Adaptado, Ruta Bus y Flexibilidad en Bajones' },
    { id: 'explore', num: '5', name: 'Explorar', caption: 'Captura 5: Explorador de Oportunidades con Filtros de Distancia y Tipo' },
    { id: 'profile', num: '6', name: 'Mi Perfil', caption: 'Captura 6: Perfil de Lucía con Salud Mental Protegida y Línea 024' },
    { id: 'talents', num: '7', name: 'Espacio Talentos', caption: 'Captura 7: Espacio Musical con Canción, Cuaderno y Apoyo Comunitario' },
    { id: 'community', num: '8', name: 'Comunidad', caption: 'Captura 8: Red de Personas Afines en Murcia y Muro de Brotes' },
  ];

  const currentScreenObj = screens.find((s) => s.id === currentScreen) || screens[0];

  return (
    <aside aria-label="Control del prototipo" className="sticky top-0 z-50 w-full bg-slateWarm-900 text-stone-100 border-b border-stone-700/60 shadow-lg px-4 py-2.5 select-none print:hidden backdrop-blur-md bg-slateWarm-900/95">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Identificador del Proyecto Universitario */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-sage-600 flex items-center justify-center text-white font-black text-sm shadow-sm">
            🌱
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm tracking-tight text-white">
                Sembrando Capacidades
              </span>
              <span className="text-[10px] bg-sage-800 text-sage-200 border border-sage-600/50 px-2 py-0.5 rounded-full font-semibold">
                Prototipo Mockup Universitario
              </span>
            </div>
            <p className="text-[11px] text-stone-400 font-medium">
              Listo para capturas de pantalla (Toca cualquier botón para saltar de pantalla)
            </p>
          </div>
        </div>

        {/* Selector rápido de las 8 Pantallas */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 bg-stone-800/90 p-1 rounded-2xl border border-stone-700/80">
          {screens.map((screen) => {
            const isSelected = currentScreen === screen.id;
            return (
              <button
                key={screen.id}
                onClick={() => onSelectScreen(screen.id)}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-sage-600 text-white shadow-md scale-102'
                    : 'text-stone-300 hover:text-white hover:bg-stone-700/70'
                }`}
                title={screen.caption}
              >
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black ${
                  isSelected ? 'bg-white text-sage-800' : 'bg-stone-700 text-stone-300'
                }`}>
                  {screen.num}
                </span>
                <span>{screen.name}</span>
              </button>
            );
          })}
        </div>

        {/* Opciones del visor: Marco Móvil on/off y atajo para capturas */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleFrame}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1.5 ${
              showFrame 
                ? 'bg-stone-800 border-stone-600 text-stone-200' 
                : 'bg-stone-700 border-stone-500 text-amberWarm-300'
            }`}
            title="Alternar bisel del marco del smartphone"
          >
            <Smartphone size={14} />
            <span>{showFrame ? 'Marco iPhone' : 'Sin marco'}</span>
          </button>

          <div className="hidden lg:flex items-center gap-1 text-[11px] text-stone-400 bg-stone-800/80 px-2.5 py-1.5 rounded-xl border border-stone-700">
            <Camera size={13} className="text-sage-400" />
            <span>Captura Windows: <kbd className="px-1.5 py-0.5 bg-stone-700 rounded text-stone-200 font-mono text-[10px]">Win+Shift+S</kbd></span>
          </div>
        </div>

      </div>

      {/* Franja con el pie de captura sugerido para la pantalla actual */}
      <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-semibold text-stone-300">Pantalla actual:</span>
          <span className="text-amberWarm-300 font-medium">{currentScreenObj.caption}</span>
        </div>
        <span className="text-stone-400 hidden sm:inline">
          Persona ficticia: Lucía M. (23 años, Murcia) · 100% Offline y seguro
        </span>
      </div>
    </aside>
  );
}
