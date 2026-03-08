export function Advantages() {
  const advantages = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Гарантия до 24 месяцев',
      description: 'Предоставляем официальную гарантию на все двигатели. Новые моторы — 24 месяца, восстановленные — 12 месяцев.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: '100% проверка качества',
      description: 'Каждый двигатель проходит комплексную диагностику перед продажей. Проверяем компрессию, состояние всех узлов.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Доставка по всей России',
      description: 'Отправляем транспортными компаниями в любой регион. Надёжная упаковка, страхование груза.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Выгодные цены',
      description: 'Работаем напрямую с поставщиками. Предлагаем конкурентные цены без посредников и переплат.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: 'Обмен и возврат',
      description: 'Возможность обмена или возврата в течение 14 дней, если двигатель не подошёл или имеет дефекты.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Техническая поддержка',
      description: 'Консультируем по подбору и установке двигателей. Помогаем с документами и гарантийным обслуживанием.'
    }
  ];

  return (
    <section id="advantages" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Почему мы
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Преимущества работы с нами
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Более 12 лет мы специализируемся на двигателях для Daewoo Matiz и Chevrolet Spark. 
            Знаем об этих моторах всё!
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {advantage.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
