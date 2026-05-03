import MaxIcon from './MaxIcon';

const TELEGRAM_URL = 'https://t.me/+79382060824';
const MAX_URL = 'https://max.ru/u/f9LHodD0cOLqAXpgA53WqMtakiGF0eK1GAp67QiTkmHbtmUjt9s7_BVCaEo';

type EngineSpec = {
  brand: string;
  code: string;
  volume: string;
  power: string;
  type: string;
  fits: string;
};

const engines: EngineSpec[] = [
  { brand: 'Daewoo', code: 'F8CV', volume: '0.8 л / 796 см³', power: '51 л.с.', type: 'Бензин, SOHC', fits: 'Matiz, Spark' },
  { brand: 'Daewoo', code: 'A15SMS', volume: '1.5 л', power: '80 л.с.', type: 'Бензин, SOHC', fits: 'Nexia, Lanos' },
  { brand: 'Hyundai', code: 'G4EE', volume: '1.4 л', power: '97 л.с.', type: 'Бензин, DOHC 16V', fits: 'Getz, Accent' },
  { brand: 'Hyundai', code: 'G4FA', volume: '1.4 л', power: '107 л.с.', type: 'Бензин, DOHC 16V', fits: 'Solaris, Accent' },
  { brand: 'Hyundai', code: 'G4FC', volume: '1.6 л', power: '123 л.с.', type: 'Бензин, DOHC 16V', fits: 'Solaris, i30' },
  { brand: 'Hyundai', code: 'D4EA', volume: '2.0 л', power: '112 л.с.', type: 'Дизель, CRDi', fits: 'Tucson, Sportage' },
  { brand: 'KIA', code: 'G4FG', volume: '1.6 л', power: '123 л.с.', type: 'Бензин, DOHC 16V', fits: 'Rio, Cerato' },
  { brand: 'KIA', code: 'G4KD', volume: '2.0 л', power: '150 л.с.', type: 'Бензин, DOHC 16V', fits: 'Sportage, Optima' },
  { brand: 'KIA', code: 'D4HB', volume: '2.2 л', power: '197 л.с.', type: 'Дизель, CRDi', fits: 'Sorento, Santa Fe' },
];

const features = [
  {
    title: 'Только новые моторы',
    text: 'Новые двигатели прямо с заводов Hyundai-Kia и GM Korea. Заводская упаковка и консервация.',
  },
  {
    title: 'Проверка перед отправкой',
    text: 'Контроль комплектации и упаковки, фото и видео по запросу перед отгрузкой.',
  },
  {
    title: 'Гарантия 12 месяцев',
    text: 'Заводская гарантия производителя. Заменим или вернём деньги при заводском дефекте.',
  },
  {
    title: 'Доставка по всей РФ',
    text: 'Деловые Линии, ПЭК, СДЭК. Москва — курьером за 1–2 дня. Регионы — 2–8 дней.',
  },
];

export default function Specs() {
  return (
    <section id="specs" className="bg-bg-light py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text">Характеристики двигателей</h2>
          <p className="text-text-secondary mt-3">
            Краткая сводка по самым востребованным моторам Daewoo, Hyundai и KIA
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-border overflow-hidden">
          {/* Header row */}
          <div className="hidden md:grid grid-cols-[110px_110px_1.2fr_1fr_1.4fr_1.4fr] gap-4 px-6 py-3.5 bg-bg-light border-b border-border text-xs font-bold text-text-secondary uppercase tracking-wider">
            <span>Бренд</span>
            <span>Код</span>
            <span>Объём</span>
            <span>Мощность</span>
            <span>Тип</span>
            <span>Применяется на</span>
          </div>

          {engines.map((e, i) => (
            <div
              key={e.code}
              className={`grid md:grid-cols-[110px_110px_1.2fr_1fr_1.4fr_1.4fr] gap-2 md:gap-4 px-5 md:px-6 py-4 text-sm ${
                i % 2 === 0 ? 'bg-white' : 'bg-bg-light'
              } ${i < engines.length - 1 ? 'border-b border-border' : ''}`}
            >
              <span className="font-bold text-primary">{e.brand}</span>
              <span className="font-mono font-semibold text-text">{e.code}</span>
              <span className="text-text">
                <span className="md:hidden text-text-secondary text-xs">Объём: </span>
                {e.volume}
              </span>
              <span className="text-text font-semibold">
                <span className="md:hidden text-text-secondary text-xs font-normal">Мощность: </span>
                {e.power}
              </span>
              <span className="text-text-secondary">
                <span className="md:hidden text-text-secondary text-xs">Тип: </span>
                {e.type}
              </span>
              <span className="text-text-secondary">
                <span className="md:hidden text-text-secondary text-xs">Авто: </span>
                {e.fits}
              </span>
            </div>
          ))}
        </div>

        {/* Why us */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-text">{f.title}</h3>
              <p className="text-sm text-text-secondary mt-2">{f.text}</p>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-10 text-center text-white shadow-xl shadow-primary/20">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
            Отгружаем в день оплаты
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold">Получите расчёт стоимости с доставкой</h3>
          <p className="text-white/85 mt-3 text-sm md:text-base max-w-2xl mx-auto">
            Назовите код двигателя или VIN автомобиля — менеджер пришлёт цену, фото мотора со склада и сроки доставки в ваш город
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-7">
            <a
              href="tel:+79382060824"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-7 py-3.5 rounded-xl hover:bg-bg-light transition"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Заказать звонок
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white/10 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.658-.643.136-.953l11.566-4.458c.538-.196 1.006.128.832.939z" />
              </svg>
              Написать в Telegram
            </a>
            <a
              href={MAX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white/10 transition"
            >
              <MaxIcon className="w-5 h-5 rounded" />
              Написать в MAX
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
