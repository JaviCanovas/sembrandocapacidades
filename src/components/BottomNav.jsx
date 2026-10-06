import React from 'react';
import { Home, Compass, Music, Users, User } from 'lucide-react';

export default function BottomNav({ currentScreen, onNavigate }) {
  const navItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'explore', label: 'Oportunidades', icon: Compass },
    { id: 'talents', label: 'Talentos', icon: Music },
    { id: 'community', label: 'Comunidad', icon: Users },
    { id: 'profile', label: 'Perfil', icon: User },
  ];

  return (
    <nav className="sticky bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-cream-200/80 px-3 pt-2 pb-5 shadow-[0_-4px_20px_rgba(46,81,56,0.06)]" aria-label="Navegación principal">
      <div className="flex justify-around items-center max-w-sm mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 ${
                isActive
                  ? 'text-sage-700 font-bold scale-105'
                  : 'text-stone-400 hover:text-stone-600 font-medium'
              }`}
            >
              <div className={`relative p-1 rounded-xl transition-colors ${
                isActive ? 'bg-sage-100 text-sage-800' : 'text-stone-400'
              }`}>
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-sage-600 rounded-full" />
                )}
              </div>
              <span className={`text-[10px] mt-0.5 tracking-tight ${isActive ? 'font-bold' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
      {/* Barra de inicio estilo iOS */}
      <div className="w-32 h-1 bg-stone-300 rounded-full mx-auto mt-2"></div>
    </nav>
  );
}
