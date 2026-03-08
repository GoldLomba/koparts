import { Engine } from '../types';

interface EngineCardProps {
  engine: Engine;
  onOrder: (engine: Engine) => void;
}

export function EngineCard({ engine, onOrder }: EngineCardProps) {
  const conditionLabels = {
    new: { text: 'Новый', color: 'bg-green-500' },
    used: { text: 'Б/У', color: 'bg-blue-500' },
    refurbished: { text: 'Восстановленный', color: 'bg-purple-500' }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-slate-100">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img 
          src={engine.image} 
          alt={engine.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className={`${conditionLabels[engine.condition].color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
            {conditionLabels[engine.condition].text}
          </span>
          {engine.oldPrice && (
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Скидка {Math.round((1 - engine.price / engine.oldPrice) * 100)}%
            </span>
          )}
        </div>

        {/* Stock status */}
        <div className="absolute top-3 right-3">
          {engine.inStock ? (
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              В наличии
            </span>
          ) : (
            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">
              Под заказ
            </span>
          )}
        </div>

        {/* Brand badge */}
        <div className="absolute bottom-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white">Подробнее</span>
          
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-slate-900 mb-2">{engine.name}</h3>
        <p className="text-slate-500 text-sm mb-4">{engine.model}</p>
        <p className="text-slate-500 text-sm mb-4">{engine.probel}</p>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-slate-600">{engine.power}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-slate-600">{engine.volume}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-slate-600">{engine.year}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-slate-600">{engine.warranty}</span>
          </div>
        </div>

        {engine.mileage && (
          <div className="flex items-center gap-2 text-sm mb-4 text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Состояние: {engine.mileage}
            
          </div>
          
        )}

        {/* Price */}
        <div className="flex items-end justify-between mb-4">
          <div>
            {engine.oldPrice && (
              <span className="text-slate-400 line-through text-sm">
                {formatPrice(engine.oldPrice)} ₽
              </span>
            )}
            
            <div className="text-2xl font-bold text-slate-900">
              {formatPrice(engine.price)} <span className="text-lg">₽</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button 
            onClick={() => onOrder(engine)}
            className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
          >
            Заказать
          </button>
          <a
          href="https://t.me/username"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-3 border-2 border-slate-200 rounded-xl hover:border-sky-400 hover:text-sky-500 transition-all"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
        </a>
        </div>
      </div>
    </div>
  );
}
