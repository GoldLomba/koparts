import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { id: 'brands', label: 'Бренды' },
  { id: 'products', label: 'Двигатели' },
  { id: 'specs', label: 'Характеристики' },
  { id: 'delivery', label: 'Доставка' },
  { id: 'contact', label: 'Контакты' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function goToSection(id: string, closeMenu = false) {
    if (closeMenu) setMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      // Wait for HomePage to mount, then scroll.
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    }
  }

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      {/* Mobile top bar with phone */}
      <div className="md:hidden bg-primary px-4 py-1.5 flex items-center justify-center gap-2">
        <svg className="w-3.5 h-3.5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <a href="tel:+79382060824" className="text-white font-bold text-sm tracking-wide">
          +7 (938) 206-08-24
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}logo.jpg`}
            alt="KO PARTS"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-secondary">
          {navItems.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => goToSection(n.id)}
              className="hover:text-primary transition cursor-pointer"
            >
              {n.label}
            </button>
          ))}
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
            {navItems.map((n) => (
              <button
                key={n.id}
                type="button"
                onClick={() => goToSection(n.id, true)}
                className="hover:text-primary py-1 text-left"
              >
                {n.label}
              </button>
            ))}
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
