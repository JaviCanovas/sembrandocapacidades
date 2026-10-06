import React, { useState } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  MapPin, 
  Clock, 
  Sparkles, 
  Bookmark, 
  ChevronRight, 
  CheckCircle2, 
  Building2,
  Bus,
  Filter
} from 'lucide-react';
import { MOCK_ALL_OPPORTUNITIES } from '../data/mock';

export default function ExploreScreen({ onSelectOffer }) {
  const [selectedCategory, setSelectedCategory] = useState('Todo');
  const [selectedCity, setSelectedCity] = useState('Murcia capital');
  const [maxDistance, setMaxDistance] = useState('30 min');
  const [savedOffers, setSavedOffers] = useState({ 'rec-empleo-archivo': true });

  const categories = ['Todo', 'Empleo', 'Curso', 'Taller', 'Recurso cercano'];

  const toggleSave = (e, id) => {
    e.stopPropagation();
    setSavedOffers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filtrado reactivo en local
  const filteredOffers = MOCK_ALL_OPPORTUNITIES.filter((item) => {
    if (selectedCategory === 'Todo') return true;
    return item.type.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div className="min-h-full bg-cream-50 text-slateWarm-800 pb-20">
      
      {/* Cabecera y buscador */}
      <div className="sticky top-0 z-20 bg-cream-50/95 backdrop-blur-md px-5 pt-4 pb-3 border-b border-cream-200 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-sage-600 uppercase tracking-wider">
              Región de Murcia
            </span>
            <h1 className="text-lg font-black text-stone-900 leading-tight">
              Explorar oportunidades
            </h1>
          </div>
          <span className="text-xs font-bold text-stone-500 bg-white px-2.5 py-1 rounded-full border border-cream-200 shadow-2xs">
            {filteredOffers.length} disponibles
          </span>
        </div>

        {/* Barra de búsqueda interactiva */}
        <div className="relative">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            readOnly
            value="Archivo, música, huerto, diseño..."
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-cream-200 rounded-2xl text-xs text-stone-700 shadow-2xs focus:outline-none focus:ring-1 focus:ring-sage-400 cursor-pointer"
          />
        </div>

        {/* Filtros por Categoría */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-sage-600 text-white shadow-2xs'
                    : 'bg-white text-stone-600 border border-cream-200 hover:border-stone-300'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Filtros secundarios: Ciudad y Tiempo de transporte */}
        <div className="flex items-center justify-between pt-1 text-[11px]">
          <div className="flex items-center gap-1.5">
            <MapPin size={13} className="text-sage-600" />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-white border border-cream-200 rounded-lg px-2 py-1 font-bold text-stone-700 focus:outline-none"
            >
              <option value="Murcia capital">Murcia capital</option>
              <option value="Molina de Segura">Molina de Segura</option>
              <option value="Alcantarilla">Alcantarilla</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5">
            <Bus size={13} className="text-sage-600" />
            <select
              value={maxDistance}
              onChange={(e) => setMaxDistance(e.target.value)}
              className="bg-white border border-cream-200 rounded-lg px-2 py-1 font-bold text-stone-700 focus:outline-none"
            >
              <option value="15 min">Hasta 15 min</option>
              <option value="30 min">Hasta 30 min (óptimo)</option>
              <option value="45 min">Hasta 45 min</option>
            </select>
          </div>
        </div>

      </div>

      {/* Listado de tarjetas de oportunidades */}
      <div className="p-5 space-y-3">
        {filteredOffers.map((item) => {
          const isSaved = !!savedOffers[item.id];
          return (
            <div
              key={item.id}
              onClick={() => onSelectOffer(item)}
              className="bg-white rounded-3xl p-4 border border-cream-200 shadow-soft hover:shadow-soft-lg hover:border-sage-300 transition-all cursor-pointer relative group"
            >
              {/* Categoría, bus y porcentaje de afinidad */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${item.typeBadgeColor}`}>
                    {item.type}
                  </span>
                  <span className="text-[11px] font-semibold text-stone-400">
                    {item.transitLine || "Murcia"}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-sage-800 bg-sage-50 border border-sage-200 px-2 py-0.5 rounded-full">
                    <Sparkles size={11} className="text-amberWarm-500 fill-amberWarm-400" />
                    {item.matchPercentage}%
                  </span>

                  <button
                    onClick={(e) => toggleSave(e, item.id)}
                    className={`p-1.5 rounded-full transition-colors ${
                      isSaved ? 'text-sage-700 bg-sage-100' : 'text-stone-300 hover:text-stone-600'
                    }`}
                    aria-label="Guardar"
                  >
                    <Bookmark size={15} fill={isSaved ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>

              {/* Título de la oportunidad */}
              <h3 className="text-sm font-extrabold text-stone-900 leading-snug group-hover:text-sage-800 transition-colors">
                {item.title}
              </h3>

              {/* Entidad ficticia murciana */}
              <p className="text-xs font-semibold text-stone-600 mt-1 flex items-center gap-1">
                <Building2 size={13} className="text-stone-400" />
                {item.entity}
              </p>

              {/* Descripción */}
              <p className="text-[11px] text-stone-500 mt-1.5 line-clamp-2 leading-relaxed">
                {item.shortDescription}
              </p>

              {/* Chips de adaptaciones clave */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {item.chips && item.chips.map((chip, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-semibold bg-cream-100 text-stone-700 px-2 py-0.5 rounded-md border border-cream-200"
                  >
                    ✓ {chip}
                  </span>
                ))}
              </div>

              {/* Pie de tarjeta con dedicación y botón */}
              <div className="mt-3 pt-2.5 border-t border-cream-100 flex items-center justify-between text-[11px]">
                <span className="text-stone-500 font-medium">
                  {item.hours}
                </span>

                <span className="font-bold text-sage-700 group-hover:text-sage-900 inline-flex items-center gap-0.5">
                  Ver detalle
                  <ChevronRight size={14} />
                </span>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
