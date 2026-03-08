import { useState } from 'react';
import { engines } from '@/data/engines';
import { EngineCard } from './EngineCard';
import { Engine } from '../types';
import { OrderModal } from './OrderModal';

type BrandFilter = 'all' | 'Daewoo' | 'Chevrolet' | 'Hyundai';
type ConditionFilter = 'all' | 'new' | 'used' | 'refurbished';

export function Catalog() {
  const [brandFilter, setBrandFilter] = useState<BrandFilter>('all');
  const [conditionFilter, setConditionFilter] = useState<ConditionFilter>('all');
  const [selectedEngine, setSelectedEngine] = useState<Engine | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredEngines = engines.filter(engine => {
    const brandMatch = brandFilter === 'all' || engine.brand === brandFilter;
    const conditionMatch = conditionFilter === 'all' || engine.condition === conditionFilter;
    return brandMatch && conditionMatch;
  });

  const handleOrder = (engine: Engine) => {
    setSelectedEngine(engine);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEngine(null);
  };

  return (
    <section id="catalog" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Каталог двигателей
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Выберите двигатель для вашего автомобиля
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Широкий ассортимент двигателей для Daewoo, Chevrolet, Hyundai. 
            Все моторы проходят тщательную проверку перед продажей.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          {/* Brand Filter */}
          <div className="flex flex-wrap gap-2">
            <span className="text-slate-600 font-medium py-2 pr-2">Марка:</span>
            {(['all', 'Daewoo', 'Chevrolet', 'Hyundai'] as BrandFilter[]).map(brand => (
              <button
                key={brand}
                onClick={() => setBrandFilter(brand)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  brandFilter === brand
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {brand === 'all' ? 'Все марки' : brand}
              </button>
            ))}
          </div>

          {/* Condition Filter */}
          <div className="flex flex-wrap gap-2 md:ml-auto">
            <span className="text-slate-600 font-medium py-2 pr-2">Состояние:</span>
            {([
              { value: 'all', label: 'Все' },
              { value: 'new', label: 'Новые' },
              { value: 'used', label: 'Б/У' },
              { value: 'refurbished', label: 'Восстановленные' }
            ] as { value: ConditionFilter; label: string }[]).map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setConditionFilter(value)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  conditionFilter === value
                    ? 'bg-slate-800 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6 text-slate-600">
          Найдено: <span className="font-bold text-slate-900">{filteredEngines.length}</span> двигателей
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEngines.map(engine => (
            <EngineCard key={engine.id} engine={engine} onOrder={handleOrder} />
          ))}
        </div>

        {filteredEngines.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔧</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Ничего не найдено</h3>
            <p className="text-slate-600">Попробуйте изменить параметры фильтра</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 md:p-8 rounded-2xl">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-1">Не нашли нужный двигатель?</h3>
              <p className="text-slate-400">Свяжитесь с нами — поможем подобрать!</p>
            </div>
            <a 
              href="tel:+78001234567"
              className="bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3 rounded-full font-bold hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg whitespace-nowrap"
            >
              8 (800) 123-45-67
            </a>
          </div>
        </div>
      </div>

      {/* Order Modal */}
      <OrderModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        engine={selectedEngine} 
      />
    </section>
  );
}
