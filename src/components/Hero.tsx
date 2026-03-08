export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              Более 500+ двигателей в наличии
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Двигатели на
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500"> Корейские </span>
              автомобили
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500"> Chevrolet, Hyundai, Daewoo </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
              Качественные двигатели с гарантией от 3 до 24 месяцев. Новые, контрактные и восстановленные моторы с быстрой доставкой по всей России.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#catalog" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5">
                Смотреть каталог
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="tel:+78001234567" className="inline-flex items-center justify-center gap-2 border-2 border-slate-600 px-8 py-4 rounded-full font-bold text-lg hover:border-amber-400 hover:text-amber-400 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Консультация
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-400">12+</div>
                <div className="text-slate-400 text-sm">лет на рынке</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-400">5000+</div>
                <div className="text-slate-400 text-sm">довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-400">24 мес</div>
                <div className="text-slate-400 text-sm">максимальная гарантия</div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative hidden md:block">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=500&fit=crop" 
                alt="Двигатель автомобиля"
                className="rounded-3xl shadow-2xl"
              />
              
              {/* Floating cards */}
              <div className="absolute -left-8 top-1/4 bg-white text-slate-900 p-4 rounded-2xl shadow-xl animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold">Гарантия качества</div>
                    <div className="text-sm text-slate-500">100% проверка</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-white text-slate-900 p-4 rounded-2xl shadow-xl animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold">Низкие цены</div>
                    <div className="text-sm text-slate-500">от 32 000 ₽</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
