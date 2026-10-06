import React, { useState } from 'react';
import { 
  Music, 
  Play, 
  Pause, 
  Heart, 
  MessageSquare, 
  Share2, 
  Sparkles, 
  Send, 
  PenTool, 
  BookOpen, 
  Volume2, 
  Disc,
  Headphones,
  Calendar
} from 'lucide-react';
import { MOCK_TALENT_SPACE, MOCK_USER } from '../data/mock';

export default function TalentsScreen() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [likes, setLikes] = useState(MOCK_TALENT_SPACE.featuredVideo.initialLikes);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState(MOCK_TALENT_SPACE.initialComments);
  const [newCommentText, setNewCommentText] = useState('');
  const [activeSongIndex, setActiveSongIndex] = useState(0);

  const handleToggleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment = {
      id: `c-${Date.now()}`,
      author: "Comunidad de Murcia",
      location: "Murcia",
      avatarBg: "bg-emerald-100 text-emerald-800",
      avatarText: "CM",
      time: "Ahora mismo",
      text: newCommentText.trim()
    };

    setComments([newComment, ...comments]);
    setNewCommentText('');
  };

  return (
    <div className="min-h-full bg-cream-50 text-slateWarm-800 pb-20">
      
      {/* Cabecera del espacio artístico */}
      <div className="bg-gradient-to-b from-sage-100/90 via-sage-50 to-cream-50 px-5 pt-4 pb-3 border-b border-cream-200">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-sage-800">
            Espacio de Talentos y Expresión
          </span>
          <span className="text-[10px] font-bold bg-white text-stone-600 px-2 py-0.5 rounded-full border border-cream-200 shadow-2xs">
            Música de autor
          </span>
        </div>

        <h1 className="text-xl font-black text-stone-900 leading-tight">
          Mis canciones y acordes
        </h1>
        <p className="text-xs text-stone-600 mt-1">
          {MOCK_TALENT_SPACE.userBio}
        </p>
      </div>

      <div className="p-5 space-y-5">
        
        {/* VÍDEO SIMULADO: Miniatura en degradado con botón de Play y waveform */}
        <div className="bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-soft">
          
          <div className="relative h-48 bg-gradient-to-br from-emerald-800 via-sage-700 to-teal-900 flex flex-col justify-between p-4 text-white overflow-hidden">
            
            {/* Fondo con ondas sonoras estilizadas SVG */}
            <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
              <svg viewBox="0 0 400 120" className="w-full h-full">
                <path d="M0 60 Q 25 10, 50 60 T 100 60 T 150 110 T 200 60 T 250 20 T 300 60 T 350 90 T 400 60" fill="none" stroke="#FFFFFF" strokeWidth="4" />
                <path d="M0 60 Q 30 90, 60 60 T 120 30 T 180 80 T 240 60 T 300 40 T 360 70 T 400 60" fill="none" stroke="#FACD4F" strokeWidth="2" />
              </svg>
            </div>

            {/* Badges superiores de la miniatura */}
            <div className="relative z-10 flex justify-between items-center text-xs">
              <span className="bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 border border-white/20">
                <Headphones size={11} className="text-amberWarm-300" />
                Grabación acústica casera
              </span>
              <span className="bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-md text-[10px] font-bold">
                {MOCK_TALENT_SPACE.featuredVideo.duration}
              </span>
            </div>

            {/* Botón central de Play / Pausa animado */}
            <div className="relative z-10 flex justify-center items-center my-auto">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-14 h-14 rounded-full bg-white/90 text-sage-800 hover:bg-white hover:scale-110 flex items-center justify-center shadow-lg transition-transform active:scale-95 group"
                aria-label={isPlaying ? "Pausar canción" : "Reproducir canción"}
              >
                {isPlaying ? (
                  <Pause size={24} className="fill-sage-800 text-sage-800" />
                ) : (
                  <Play size={24} className="fill-sage-800 text-sage-800 ml-1" />
                )}
              </button>
            </div>

            {/* Título de la pista y artista en la miniatura */}
            <div className="relative z-10">
              <h2 className="text-sm font-black text-white leading-tight drop-shadow-sm">
                {MOCK_TALENT_SPACE.featuredVideo.title}
              </h2>
              <p className="text-[11px] text-sage-100 flex items-center gap-1.5 mt-0.5">
                <span>Por Lucía M. · Guitarra acústica en directo</span>
              </p>
            </div>

          </div>

          {/* Barra de interacción debajo de la miniatura: Plays, Likes y Comentarios */}
          <div className="px-4 py-3 bg-white flex items-center justify-between border-t border-cream-100">
            <div className="flex items-center gap-4 text-xs font-semibold text-stone-600">
              <span className="flex items-center gap-1.5">
                <Disc size={15} className={`text-sage-600 ${isPlaying ? 'animate-spin' : ''}`} />
                <span>{MOCK_TALENT_SPACE.featuredVideo.plays} escuchas</span>
              </span>

              <span className="flex items-center gap-1.5 text-stone-500">
                <MessageSquare size={14} className="text-stone-400" />
                <span>{comments.length} mensajes</span>
              </span>
            </div>

            {/* Botón de Like interactivo */}
            <button
              onClick={handleToggleLike}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                hasLiked
                  ? 'bg-rose-50 text-rose-600 border border-rose-200 shadow-2xs'
                  : 'bg-stone-50 text-stone-600 hover:bg-stone-100 border border-cream-200'
              }`}
            >
              <Heart size={14} fill={hasLiked ? 'currentColor' : 'none'} />
              <span>{likes}</span>
            </button>
          </div>

        </div>

        {/* LISTA DE CANCIONES */}
        <div className="bg-white rounded-3xl p-4 border border-cream-200 shadow-soft space-y-2.5">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black uppercase tracking-wider text-stone-900">
              Maquetas acústicas
            </h3>
            <span className="text-[10px] text-stone-400 font-bold">4 grabaciones</span>
          </div>

          <div className="divide-y divide-cream-100">
            {MOCK_TALENT_SPACE.songsList.map((song, i) => (
              <div
                key={song.id}
                onClick={() => setActiveSongIndex(i)}
                className={`py-2.5 px-2 flex items-center justify-between rounded-xl cursor-pointer transition-colors ${
                  activeSongIndex === i ? 'bg-sage-50/90 text-sage-900' : 'hover:bg-cream-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black ${
                    activeSongIndex === i ? 'bg-sage-600 text-white' : 'bg-stone-100 text-stone-500'
                  }`}>
                    {activeSongIndex === i ? '▶' : i + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-800 leading-tight">{song.title}</h4>
                    <span className="text-[10px] text-stone-400">Guitarra acústica · {song.plays} reproducciones</span>
                  </div>
                </div>
                <span className="text-xs text-stone-400 font-medium">{song.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CUADERNO DE LETRAS: Estética de libreta con líneas y tipografía manuscrita */}
        <div className="rounded-3xl border border-cream-300 shadow-soft overflow-hidden">
          
          {/* Cabecera de la libreta con anillas simuladas */}
          <div className="bg-[#EFE8DE] px-4 py-2 flex items-center justify-between border-b border-cream-300">
            <div className="flex items-center gap-2">
              <PenTool size={14} className="text-stone-700" />
              <span className="text-xs font-black text-stone-800">
                Cuaderno de letras de Lucía
              </span>
            </div>
            <span className="text-[10px] font-bold text-stone-500">
              {MOCK_TALENT_SPACE.notebookLyrics.dateWritten}
            </span>
          </div>

          {/* Hoja de libreta pautada con texto poético */}
          <div className="notebook-paper p-5 pl-14 relative text-stone-800 font-handwriting text-lg leading-7 select-text">
            
            {/* Margen rojo vertical clásico de cuaderno */}
            <div className="absolute top-0 bottom-0 left-12 w-[1.5px] bg-red-300/60"></div>
            
            <p className="font-extrabold text-stone-900 text-xl mb-1 tracking-wide">
              {MOCK_TALENT_SPACE.notebookLyrics.songTitle}
            </p>

            <div className="whitespace-pre-line text-stone-800 text-[19px] leading-8 font-medium">
              {MOCK_TALENT_SPACE.notebookLyrics.lyrics}
            </div>

            <div className="mt-3 pt-2 text-[15px] text-stone-600 italic border-t border-dashed border-stone-300">
              ✏️ "Compuesta en mi habitación un martes de lluvia. Gracias por escucharla con tanta ternura."
            </div>

          </div>

        </div>

        {/* SECCIÓN DE COMENTARIOS DE ÁNIMO Y CARIÑO */}
        <div className="bg-white rounded-3xl p-4 border border-cream-200 shadow-soft space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <MessageSquare size={15} className="text-sage-600" />
              <h3 className="text-xs font-black uppercase tracking-wider text-stone-900">
                Comentarios de ánimo de la comunidad
              </h3>
            </div>
            <span className="text-[10px] font-bold text-stone-400">{comments.length} mensajes</span>
          </div>

          {/* Formulario para añadir un nuevo comentario interactivo */}
          <form onSubmit={handleAddComment} className="flex gap-2">
            <input
              type="text"
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              placeholder="Escribe un mensaje de ánimo a Lucía..."
              className="flex-1 bg-cream-50 border border-cream-200 rounded-2xl px-3 py-2 text-xs text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-sage-500"
            />
            <button
              type="submit"
              disabled={!newCommentText.trim()}
              className="px-3 py-2 bg-sage-600 hover:bg-sage-700 disabled:opacity-40 text-white rounded-2xl text-xs font-bold flex items-center justify-center transition-colors"
            >
              <Send size={13} />
            </button>
          </form>

          {/* Listado de comentarios */}
          <div className="space-y-2.5 pt-1">
            {comments.map((c) => (
              <div key={c.id} className="p-3 bg-cream-50/70 rounded-2xl border border-cream-200/80 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${c.avatarBg}`}>
                      {c.avatarText}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-stone-900 block leading-tight">{c.author}</span>
                      <span className="text-[9px] text-stone-400 leading-none">{c.location} · {c.time}</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-amberWarm-600">🌱</span>
                </div>
                <p className="text-xs text-stone-700 pl-8 leading-snug">
                  {c.text}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}
