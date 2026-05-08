import { useEffect, useState } from 'react';
import MaxIcon from './MaxIcon';

const TELEGRAM_URL = 'https://t.me/+79382060824';
const MAX_URL = 'https://max.ru/u/f9LHodD0cOLqAXpgA53WqMtakiGF0eK1GAp67QiTkmHbtmUjt9s7_BVCaEo';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Mobile */}
      <div className="md:hidden grid grid-cols-3 gap-2 p-3">
        <a
          href="tel:+79382060824"
          className="flex flex-col items-center justify-center gap-0.5 bg-primary text-white text-xs font-bold py-2.5 rounded-lg hover:bg-primary-dark transition"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Заказать
        </a>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 border border-border text-text text-xs font-bold py-2.5 rounded-lg hover:border-[#0088cc] hover:text-[#0088cc] transition"
        >
          <svg className="w-5 h-5 text-[#0088cc]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.658-.643.136-.953l11.566-4.458c.538-.196 1.006.128.832.939z" />
          </svg>
          Telegram
        </a>
        <a
          href={MAX_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 border border-border text-text text-xs font-bold py-2.5 rounded-lg hover:border-primary hover:text-primary transition"
        >
          <MaxIcon className="w-5 h-5 rounded" />
          MAX
        </a>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex max-w-6xl mx-auto px-4 py-3 items-center justify-between gap-4">
        <p className="text-sm font-bold text-text">Свяжитесь с нами — ответим на все вопросы по двигателям</p>
        <div className="flex items-center gap-3">
          <a
            href="tel:+79382060824"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-5 py-2.5 rounded-lg hover:bg-primary-dark transition text-sm shadow-lg shadow-primary/20"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +7 (938) 206-08-24
          </a>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-text font-bold px-5 py-2.5 rounded-lg hover:border-[#0088cc] hover:text-[#0088cc] transition text-sm"
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
            className="inline-flex items-center gap-2 border border-border text-text font-bold px-5 py-2.5 rounded-lg hover:border-primary hover:text-primary transition text-sm"
          >
            <MaxIcon className="w-4 h-4 rounded" />
            MAX
          </a>
        </div>
      </div>
    </div>
  );
}
