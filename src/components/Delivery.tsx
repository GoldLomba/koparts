export function Delivery() {
  const deliveryOptions = [
    {
      icon: '🏪',
      title: 'Самовывоз',
      description: 'Бесплатно из нашего склада в Москве',
      details: 'Ежедневно с 9:00 до 19:00'
    },
    {
      icon: '🚚',
      title: 'Доставка по Москве',
      description: 'От 500 ₽, в день заказа',
      details: 'При заказе от 50 000 ₽ — бесплатно'
    },
    {
      icon: '📦',
      title: 'Транспортные компании',
      description: 'СДЭК, ПЭК, Деловые Линии',
      details: 'Доставка 3-10 дней по России'
    },
    {
      icon: '✈️',
      title: 'Экспресс-доставка',
      description: 'Срочная доставка авиа',
      details: 'В любой город за 1-3 дня'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Оформление заказа',
      description: 'Выберите двигатель и оставьте заявку на сайте или позвоните нам'
    },
    {
      step: '02',
      title: 'Подтверждение',
      description: 'Менеджер свяжется с вами для уточнения деталей и оплаты'
    },
    {
      step: '03',
      title: 'Отправка',
      description: 'Упаковываем двигатель и передаём в транспортную компанию'
    },
    {
      step: '04',
      title: 'Получение',
      description: 'Забираете двигатель и проверяете комплектность при получении'
    }
  ];

  return (
    <section id="delivery" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Доставка и оплата
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Доставим в любой город России
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Работаем со всеми крупными транспортными компаниями. 
            Надёжно упаковываем и страхуем каждый двигатель.
          </p>
        </div>

        {/* Delivery Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {deliveryOptions.map((option, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="text-4xl mb-4">{option.icon}</div>
              <h3 className="text-lg font-bold mb-2">{option.title}</h3>
              <p className="text-slate-300 text-sm mb-2">{option.description}</p>
              <p className="text-amber-400 text-sm font-medium">{option.details}</p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-12">Как сделать заказ</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="relative text-center">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-amber-500 to-amber-500/0" />
                )}
                
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment methods */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-6">Способы оплаты</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['💳 Банковская карта', '🏦 Безналичный расчёт', '💵 Наличные', '📱 СБП'].map((method, index) => (
              <span 
                key={index}
                className="bg-white/10 px-5 py-3 rounded-full text-sm font-medium"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
