const options = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    color: 'primary',
    title: 'По Москве',
    sub: 'Курьер 1–2 дня',
    items: ['Курьерская доставка до подъезда', 'Самовывоз со склада в Москве', 'Оплата при получении возможна'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4M4 10v10a1 1 0 001 1h14a1 1 0 001-1V10M9 21V12h6v9" />
      </svg>
    ),
    color: 'accent',
    title: 'Деловые Линии',
    sub: '2–7 рабочих дней',
    items: ['Более 250 терминалов по РФ', 'Жёсткая упаковка двигателя', 'Страхование груза'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    color: 'green',
    title: 'ПЭК',
    sub: '2–8 рабочих дней',
    items: ['Более 200 филиалов по стране', 'Доставка до двери', 'Цена ниже, чем у Деловых Линий'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'primary',
    title: 'Способы оплаты',
    sub: 'Удобно для всех',
    items: ['Карта, СБП, перевод на счёт', 'Оплата при получении (по Москве)', 'Безналичный расчёт для юр. лиц'],
  },
];

const colorMap: Record<string, string> = {
  primary: 'bg-primary/10 text-primary',
  accent: 'bg-accent/10 text-accent',
  green: 'bg-green/10 text-green',
};

const steps = [
  { n: 1, title: 'Свяжитесь с нами', text: 'Звоните, пишите в Telegram или MAX. Подскажем по двигателю и наличию.' },
  { n: 2, title: 'Уточним детали', text: 'Менеджер пришлёт фото и видео мотора, согласует комплектацию.' },
  { n: 3, title: 'Оплата', text: 'Карта, СБП, счёт для юр. лиц или наличные при самовывозе в Москве.' },
  { n: 4, title: 'Получение', text: 'Самовывоз, курьер по Москве или ТК Деловые Линии / ПЭК / СДЭК.' },
];

export default function Delivery() {
  return (
    <section id="delivery" className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text">Доставка и оплата</h2>
          <p className="text-text-secondary mt-3">Москва, регионы — отгружаем в день оплаты</p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {options.map((o) => (
            <div
              key={o.title}
              className="border border-border rounded-2xl p-6 hover:shadow-md transition-shadow bg-white"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorMap[o.color]}`}
              >
                {o.icon}
              </div>
              <h3 className="text-base font-extrabold text-text">{o.title}</h3>
              <p className="text-xs text-text-secondary mt-1">{o.sub}</p>
              <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                {o.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-green flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Order steps */}
        <div className="mt-14">
          <h3 className="text-xl md:text-2xl font-extrabold text-text text-center">Как сделать заказ</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {steps.map((s) => (
              <div key={s.n} className="bg-bg-light border border-border rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-extrabold flex items-center justify-center">
                  {s.n}
                </div>
                <h4 className="text-base font-bold text-text mt-4">{s.title}</h4>
                <p className="text-sm text-text-secondary mt-2">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
