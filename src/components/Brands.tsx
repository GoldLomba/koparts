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
                className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-primary hover:text-primary-dark transition"
              >
                Смотреть каталог
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
