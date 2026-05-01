import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-lg font-bold text-text">КорПартс</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-secondary">
          <a href="#brands" className="hover:text-primary transition">Бренды</a>
          <a href="#products" className="hover:text-primary transition">Двигатели</a>
          <a href="#specs" className="hover:text-primary transition">Характеристики</a>
          <a href="#delivery" className="hover:text-primary transition">Доставка</a>
          <a href="#contact" className="hover:text-primary transition">Контакты</a>
        </nav>

        {/* Phone */}
        <div className="hidden md:flex items-center gap-3">
          <div className="text-right">
            <a href="tel:+79382060824" className="text-base font-bold text-text hover:text-primary transition">
              +7 (938) 206-08-24
            </a>
            <p className="text-xs text-text-secondary">Пн–Сб: 9:00–19:00</p>
          </div>
          <a
            href="tel:+79382060824"
            className="w-10 h-10 rounded-full bg-green text-white flex items-center justify-center hover:bg-green-light transition"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-text"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3 text-sm font-medium text-text-secondary">
            <a href="#brands" onClick={() => setMenuOpen(false)} className="hover:text-primary py-1">Бренды</a>
            <a href="#products" onClick={() => setMenuOpen(false)} className="hover:text-primary py-1">Двигатели</a>
            <a href="#specs" onClick={() => setMenuOpen(false)} className="hover:text-primary py-1">Характеристики</a>
            <a href="#delivery" onClick={() => setMenuOpen(false)} className="hover:text-primary py-1">Доставка</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-primary py-1">Контакты</a>
          </nav>
          <div className="mt-4 pt-3 border-t border-border">
            <a href="tel:+79382060824" className="text-base font-bold text-text">+7 (938) 206-08-24</a>
            <p className="text-xs text-text-secondary mt-1">Пн–Сб: 9:00–19:00</p>
          </div>
        </div>
      )}
    </header>
  );
}
