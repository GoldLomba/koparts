export default function Hero() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-green/10 text-green text-sm font-semibold px-3 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
              Только новые двигатели — заводская упаковка
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text leading-tight">
              Новые двигатели <span className="text-primary">Daewoo</span>,{' '}
              <span className="text-primary">Hyundai</span>,{' '}
              <span className="text-primary">KIA</span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary mt-4 max-w-xl mx-auto lg:mx-0">
              Оригинальные OEM-моторы прямо с завода для{' '}
              <strong className="text-text">Matiz, Nexia, Lanos, Solaris, Accent, Rio, Cerato, Sportage</strong>{' '}
              и других моделей. Заводская гарантия, новая комплектация, доставка по всей России.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center lg:justify-start">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-primary-dark transition text-base"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                Каталог двигателей
              </a>
              <a
                href="tel:+79382060824"
                className="inline-flex items-center justify-center gap-2 border-2 border-border text-text font-semibold px-7 py-3.5 rounded-xl hover:border-primary hover:text-primary transition text-base"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Позвонить
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mt-10 max-w-md mx-auto lg:mx-0">
              {[
                { icon: '🛡️', title: 'Гарантия', sub: '12 месяцев' },
                { icon: '📦', title: 'Заводская', sub: 'упаковка' },
                { icon: '🚚', title: 'Доставка', sub: 'По всей РФ' },
              ].map((b) => (
                <div key={b.title} className="text-center">
                  <div className="text-2xl mb-1">{b.icon}</div>
                  <div className="text-sm font-semibold text-text">{b.title}</div>
                  <div className="text-xs text-text-secondary">{b.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Engine illustration */}
          <div className="flex-1 flex justify-center w-full">
            <div className="image-decor w-full max-w-md aspect-[4/3] bg-gradient-to-br from-primary-dark via-primary to-primary-light flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 20%, white 0%, transparent 40%), radial-gradient(circle at 80% 70%, white 0%, transparent 40%)',
              }} />
              <svg
                className="w-2/3 h-2/3 text-white relative drop-shadow-lg"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="10" y="20" width="44" height="28" rx="3" />
                <rect x="14" y="14" width="8" height="6" rx="1" />
                <rect x="26" y="14" width="8" height="6" rx="1" />
                <rect x="38" y="14" width="8" height="6" rx="1" />
                <line x1="10" y1="30" x2="54" y2="30" />
                <line x1="10" y1="40" x2="54" y2="40" />
                <circle cx="20" cy="48" r="2" />
                <circle cx="44" cy="48" r="2" />
                <path d="M54 26 L60 26 L60 36 L54 36" />
                <path d="M10 32 L4 32" />
              </svg>
              <div className="absolute bottom-4 left-4 right-4 bg-white/15 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-xs font-semibold flex items-center justify-between">
                <span>Daewoo · Hyundai · KIA</span>
                <span className="bg-accent text-white px-2 py-0.5 rounded text-[10px] font-bold">НОВЫЕ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
