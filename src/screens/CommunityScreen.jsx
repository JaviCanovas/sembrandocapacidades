import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  Heart, 
  MessageSquare, 
  Share2, 
  MapPin, 
  Check, 
  UserPlus, 
  Palette, 
  PenTool, 
  Utensils, 
  Camera, 
  Code, 
  Flame,
  Search
} from 'lucide-react';
import { MOCK_COMMUNITY_MEMBERS, MOCK_COMMUNITY_POSTS } from '../data/mock';

export default function CommunityScreen() {
  const [members, setMembers] = useState(MOCK_COMMUNITY_MEMBERS);
  const [posts, setPosts] = useState(MOCK_COMMUNITY_POSTS);
  const [activeTab, setActiveTab] = useState('personas'); // 'personas' o 'feed'

  const toggleConnect = (id) => {
    setMembers((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, connected: !m.connected } : m
      )
    );
  };

  const togglePostLike = (id) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            likes: p.hasLiked ? p.likes - 1 : p.likes + 1,
            hasLiked: !p.hasLiked,
          };
        }
        return p;
      })
    );
  };

  const getTalentIcon = (iconName) => {
    switch (iconName) {
      case 'Palette': return <Palette size={14} />;
      case 'PenTool': return <PenTool size={14} />;
      case 'Utensils': return <Utensils size={14} />;
      case 'Camera': return <Camera size={14} />;
      default: return <Sparkles size={14} />;
    }
  };

  return (
    <div className="min-h-full bg-cream-50 text-slateWarm-800 pb-20">
      
      {/* Cabecera de Comunidad */}
      <div className="bg-gradient-to-b from-sage-100/90 via-sage-50 to-cream-50 px-5 pt-4 pb-3 border-b border-cream-200 space-y-2.5">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-sage-800">
              Red Sembrando Murcia
            </span>
            <h1 className="text-xl font-black text-stone-900 leading-tight">
              Comunidad y vínculos
            </h1>
          </div>
          <div className="w-9 h-9 rounded-2xl bg-white border border-cream-200 flex items-center justify-center text-sage-700 shadow-2xs">
            <Users size={18} />
          </div>
        </div>

        <p className="text-xs text-stone-600 leading-snug">
          Conecta con personas que comparten tus intereses, comprenden tus tiempos y quieren tejer redes de apoyo mutuo.
        </p>

        {/* Pestañas: Personas afines vs Muro de brotes */}
        <div className="flex p-1 bg-white rounded-2xl border border-cream-200 shadow-2xs">
          <button
            onClick={() => setActiveTab('personas')}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'personas'
                ? 'bg-sage-600 text-white shadow-2xs'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Personas afines ({members.length})
          </button>
          <button
            onClick={() => setActiveTab('feed')}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'feed'
                ? 'bg-sage-600 text-white shadow-2xs'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Muro de brotes ({posts.length})
          </button>
        </div>
      </div>

      <div className="p-5 space-y-4">
        
        {activeTab === 'personas' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-stone-800 uppercase tracking-wider">
                Recomendadas por afinidad artística y vital
              </span>
              <span className="text-[10px] text-stone-400 font-bold">Región de Murcia</span>
            </div>

            {/* Listado de tarjetas de miembros */}
            <div className="space-y-3">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-3xl p-4 border border-cream-200 shadow-soft space-y-3 hover:border-sage-300 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-sm shadow-2xs ${member.avatarBg}`}>
                        {member.avatarText}
                      </div>
                      <div>
                        <h3 className="text-xs font-black text-stone-900 leading-tight">
                          {member.name}, <span className="font-semibold text-stone-500">{member.age}</span>
                        </h3>
                        <p className="text-[10px] text-stone-500 flex items-center gap-1 mt-0.5">
                          <MapPin size={10} className="text-sage-600" />
                          <span>{member.city}</span>
                        </p>
                      </div>
                    </div>

                    {/* Botón de conectar interactivo */}
                    <button
                      onClick={() => toggleConnect(member.id)}
                      className={`py-1.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                        member.connected
                          ? 'bg-sage-100 text-sage-800 border border-sage-300'
                          : 'bg-sage-600 hover:bg-sage-700 text-white shadow-2xs'
                      }`}
                    >
                      {member.connected ? (
                        <>
                          <Check size={13} />
                          <span>Conectada</span>
                        </>
                      ) : (
                        <>
                          <UserPlus size={13} />
                          <span>Conectar</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Badge de talento */}
                  <div className="flex items-center gap-1.5 bg-cream-50 p-2 rounded-xl border border-cream-200 text-xs font-bold text-stone-800">
                    <span className="text-sage-600">{getTalentIcon(member.icon)}</span>
                    <span>Talento: {member.talent}</span>
                  </div>

                  <p className="text-[11px] text-stone-600 leading-snug">
                    {member.bio}
                  </p>

                  {/* Puntos en común */}
                  <div className="flex flex-wrap gap-1.5 pt-1 border-t border-cream-100">
                    <span className="text-[10px] text-stone-400 font-semibold">Afinidad:</span>
                    {member.mutualInterests.map((interest, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-bold bg-sage-50 text-sage-800 px-2 py-0.5 rounded-md border border-sage-200/60"
                      >
                        🌱 {interest}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'feed' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-stone-800 uppercase tracking-wider">
                Publicaciones recientes
              </span>
              <span className="text-[10px] text-stone-400 font-bold">Comunidad Murcia</span>
            </div>

            <div className="space-y-3">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-3xl p-4 border border-cream-200 shadow-soft space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${post.avatarBg}`}>
                        {post.avatarText}
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-stone-900 leading-tight">
                          {post.author}
                        </h4>
                        <span className="text-[10px] text-stone-400">
                          {post.authorLocation} · {post.time}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-bold bg-amberWarm-50 text-amberWarm-800 border border-amberWarm-200 px-2 py-0.5 rounded-full">
                      {post.tag}
                    </span>
                  </div>

                  <p className="text-xs text-stone-700 leading-relaxed font-medium bg-cream-50/70 p-3 rounded-2xl border border-cream-100">
                    “{post.content}”
                  </p>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => togglePostLike(post.id)}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                          post.hasLiked
                            ? 'bg-rose-50 text-rose-600 border border-rose-200'
                            : 'bg-stone-50 text-stone-600 hover:bg-stone-100 border border-cream-200'
                        }`}
                      >
                        <Heart size={13} fill={post.hasLiked ? 'currentColor' : 'none'} />
                        <span>{post.likes}</span>
                      </button>

                      <span className="text-[11px] text-stone-400 flex items-center gap-1">
                        <MessageSquare size={13} />
                        <span>Comentar</span>
                      </span>
                    </div>

                    <span className="text-[11px] text-sage-700 font-bold">
                      Sembrando apoyo 🌱
                    </span>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
