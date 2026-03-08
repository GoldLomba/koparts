import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-slate-700">
          <div className="flex items-center gap-6">
            <a href="tel:+78001234567" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              8 (800) 123-45-67
            </a>
            <span className="flex items-center gap-2 text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Пн-Сб: 9:00 - 19:00
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-400 font-medium">🚚 Доставка по всей России</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-xl tracking-tight">МоторМаркет</div>
              <div className="text-xs text-slate-400">Двигатели Matiz & Spark</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#catalog" className="hover:text-amber-400 transition-colors font-medium">Каталог</a>
            <a href="#advantages" className="hover:text-amber-400 transition-colors font-medium">Преимущества</a>
            <a href="#delivery" className="hover:text-amber-400 transition-colors font-medium">Доставка</a>
            <a href="#contacts" className="hover:text-amber-400 transition-colors font-medium">Контакты</a>
          </nav>

          {/* CTA Button */}
          <a href="tel:+78001234567" className="hidden md:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2.5 rounded-full font-semibold hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/30">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Позвонить
          </a>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col gap-4">
              <a href="#catalog" className="hover:text-amber-400 transition-colors py-2">Каталог</a>
              <a href="#advantages" className="hover:text-amber-400 transition-colors py-2">Преимущества</a>
              <a href="#delivery" className="hover:text-amber-400 transition-colors py-2">Доставка</a>
              <a href="#contacts" className="hover:text-amber-400 transition-colors py-2">Контакты</a>
              <a href="tel:+78001234567" className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-3 rounded-full font-semibold mt-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                8 (800) 123-45-67
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
