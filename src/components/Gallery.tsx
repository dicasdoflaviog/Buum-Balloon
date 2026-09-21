import React, { useState } from 'react';
import { casamentoGalleryItems } from '../config/themes';
import { GalleryItem } from '../types';
import { Eye, X, Info } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Ambientes' },
    { id: 'cenario', label: 'Cenários & Painéis' },
    { id: 'mesa', label: 'Mesa do Bolo' },
    { id: 'detalhes', label: 'Peças & Detalhes' },
    { id: 'modelo', label: 'Por Modelo' },
  ];

  const filteredItems =
    selectedCategory === 'todos'
      ? casamentoGalleryItems
      : casamentoGalleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="galeria" className="py-14 sm:py-20 bg-[#FFF9FA]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A94767] block mb-2">
            Inspirações & Composições
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3D2930] mb-4 leading-tight">
            Veja como uma decoração simples pode transformar o ambiente
          </h2>
          <p className="text-sm sm:text-base text-[#765F66]">
            Inspire-se com arranjos delicados, mesas decoradas e cenários acolhedores pensados para valorizar cada foto.
          </p>
        </div>

        {/* Clear Notice about Demo Images */}
        <div className="max-w-2xl mx-auto mb-8 rounded-xl bg-white border border-[#F0DDE2] p-3 text-xs text-[#765F66] flex items-center justify-center gap-2 text-center shadow-2xs">
          <Info className="w-4 h-4 text-[#A94767] shrink-0" />
          <span>
            <strong>Nota visual:</strong> As fotos abaixo são referências visuais demonstrativas e devem ser substituídas pelas fotos dos kits reais da Buum Balloonn.
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#A94767] text-white shadow-xs'
                  : 'bg-white text-[#765F66] border border-[#F0DDE2] hover:border-[#D9829A] hover:text-[#3D2930]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#F0DDE2] shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-[#F7C9D4]/20">
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#3D2930]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-[#3D2930] text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Eye className="w-3.5 h-3.5" />
                    Ampliar
                  </span>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-[#3D2930]">
                    {item.title}
                  </h4>
                  {item.modelName && (
                    <span className="inline-block mt-0.5 text-xs text-[#A94767] font-medium">
                      {item.modelName}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Lightbox for detailed view */}
        {activeModalItem && (
          <div
            className="fixed inset-0 z-50 bg-[#3D2930]/80 backdrop-blur-sm p-4 flex items-center justify-center"
            onClick={() => setActiveModalItem(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#F0DDE2]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 text-[#3D2930] hover:text-[#A94767] flex items-center justify-center shadow-md transition-colors"
                title="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activeModalItem.imageUrl}
                  alt={activeModalItem.altText}
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>
              <div className="p-5 bg-white">
                <h3 className="font-serif text-xl font-bold text-[#3D2930]">
                  {activeModalItem.title}
                </h3>
                <p className="text-xs text-[#765F66] mt-1">
                  {activeModalItem.altText}
                </p>
                <p className="text-[11px] text-[#A94767] mt-2 italic">
                  * Foto de demonstração estética para planejamento de decoração.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
