import MaxIcon from './MaxIcon';

const TELEGRAM_URL = 'https://t.me/+79382060824';
const MAX_URL = 'https://max.ru/u/f9LHodD0cOLqAXpgA53WqMtakiGF0eK1GAp67QiTkmHbtmUjt9s7_BVCaEo';

const brands = [
  {
    name: 'Daewoo',
    color: '#0f2c63',
    models: ['Matiz', 'Nexia', 'Lanos', 'Espero', 'Tico'],
    engines: 'F8CV, A15SMS, A15MF, G15MF',
    count: '20+ моторов',
  },
  {
    name: 'Hyundai',
    color: '#002c5f',
    models: ['Solaris', 'Accent', 'Getz', 'Elantra', 'Sonata', 'Tucson'],
    engines: 'G4EE, G4FA, G4FC, G4FG, G4KD, D4EA',
    count: '30+ моторов',
  },
  {
    name: 'KIA',
    color: '#bb162b',
    models: ['Rio', 'Cerato', 'Spectra', 'Sportage', 'Optima', 'Sorento'],
    engines: 'G4EE, G4FA, G4FC, G4FG, G4KD, D4HB',
    count: '30+ моторов',
  },
];

export default function Brands() {
  return (
    <section id="brands" className="bg-bg-light py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text">Бренды, с которыми мы работаем</h2>
          <p className="text-text-secondary mt-3">
            Новые двигатели для трёх ведущих корейских марок
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((b) => (
            <div
              key={b.name}
              className="bg-white border border-border rounded-2xl p-7 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-extrabold text-lg"
                  style={{ backgroundColor: b.color }}
                >
                  {b.name[0]}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-text">{b.name}</h3>
                  <p className="text-xs text-text-secondary">{b.count}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs text-text-secondary uppercase tracking-wide font-semibold mb-2">
                  Популярные модели
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {b.models.map((m) => (
                    <span
                      key={m}
                      className="bg-bg-light text-text text-xs font-medium px-2.5 py-1 rounded-md border border-border"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wide font-semibold mb-2">
                  Двигатели в наличии
                </p>
                <p className="text-sm font-semibold text-text">{b.engines}</p>
              </div>

              <a
                href="#products"
                className="inline-flex items-center justify-center gap-1.5 mt-5 w-full bg-primary text-white text-sm font-bold px-4 py-2.5 rounded-lg hover:bg-primary-dark transition"
              >
                Заказать двигатель
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-10 bg-white border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-5 md:gap-6">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-extrabold text-text">
              Не нашли свою марку или модель?
            </h3>
            <p className="text-sm text-text-secondary mt-1">
              Подберём двигатель под ваш VIN — пишите в любой удобный мессенджер
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
              Позвонить
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border text-text font-semibold px-5 py-2.5 rounded-lg hover:border-[#0088cc] hover:text-[#0088cc] transition text-sm"
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
              className="inline-flex items-center justify-center gap-2 border border-border text-text font-semibold px-5 py-2.5 rounded-lg hover:border-primary hover:text-primary transition text-sm"
            >
              <MaxIcon className="w-5 h-5 rounded" />
              MAX
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
