import React, { useEffect, useRef } from 'react';
import TopStatusBar from './TopStatusBar';
import BottomNav from './BottomNav';

export default function MobileFrame({ 
  children, 
  currentScreen, 
  onNavigate, 
  showFrame = true 
}) {
  const mainRef = useRef(null);

  // Las pantallas principales muestran la barra de navegación inferior
  const showBottomNav = ['home', 'explore', 'talents', 'community', 'profile'].includes(currentScreen);

  // Reiniciar scroll al cambiar de pantalla para capturas perfectas
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [currentScreen]);

  return (
    <div className="flex-1 flex items-center justify-center py-6 px-4 select-none">
      
      {/* Contenedor del dispositivo móvil */}
      <div 
        className={`relative w-full max-w-[392px] h-[844px] transition-all duration-300 flex flex-col bg-cream-50 overflow-hidden ${
          showFrame
            ? 'rounded-[50px] ring-[12px] ring-stone-900 shadow-phone border-4 border-stone-800'
            : 'rounded-3xl shadow-soft-lg border border-cream-300'
        }`}
      >
        
        {/* Barra superior de estado (Hora 09:41, Dynamic Island, Batería, 5G) */}
        <TopStatusBar />

        {/* Área scrolleable de pantalla */}
        <main ref={mainRef} className="flex-1 overflow-y-auto relative no-scrollbar flex flex-col">
          {children}
        </main>

        {/* Barra de navegación inferior persistente para pantallas principales */}
        {showBottomNav && (
          <BottomNav currentScreen={currentScreen} onNavigate={onNavigate} />
        )}

      </div>

    </div>
  );
}
