import MaxIcon from './MaxIcon';

const TELEGRAM_URL = 'https://t.me/+79382060824';
const MAX_URL = 'https://max.ru/u/f9LHodD0cOLqAXpgA53WqMtakiGF0eK1GAp67QiTkmHbtmUjt9s7_BVCaEo';

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

          {/* CTA after steps */}
          <div className="mt-10 bg-bg-light border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-5">
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-lg md:text-xl font-extrabold text-text">
                Готовы заказать двигатель?
              </h4>
              <p className="text-sm text-text-secondary mt-1">
                Свяжитесь с менеджером — поможем подобрать и оформим заказ за 10 минут
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <a
                href="tel:+79382060824"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-primary-dark transition text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Заказать сейчас
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border text-text font-semibold px-5 py-2.5 rounded-lg hover:border-[#0088cc] hover:text-[#0088cc] transition text-sm bg-white"
              >
                <svg className="w-4 h-4 text-[#0088cc]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.658-.643.136-.953l11.566-4.458c.538-.196 1.006.128.832.939z" />
                </svg>
                Telegram
              </a>
              <a
                href={MAX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border text-text font-semibold px-5 py-2.5 rounded-lg hover:border-primary hover:text-primary transition text-sm bg-white"
              >
                <MaxIcon className="w-5 h-5 rounded" />
                MAX
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
