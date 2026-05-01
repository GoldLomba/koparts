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
      </div>
    </section>
  );
}
