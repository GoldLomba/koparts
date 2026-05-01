function MaxIcon({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center font-extrabold tracking-tight ${className ?? ''}`}
      style={{ color: '#1d4ed8' }}
    >
      MAX
    </span>
  );
}

const MAX_URL = 'https://max.ru/u/f9LHodD0cOLqAXpgA53WqMtakiGF0eK1GAp67QiTkmHbtmUjt9s7_BVCaEo';
const TELEGRAM_URL = 'https://t.me/+79382060824';

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.658-.643.136-.953l11.566-4.458c.538-.196 1.006.128.832.939z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="bg-bg-light py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text">Свяжитесь с нами</h2>
          <p className="text-text-secondary mt-3">
            Ответим на все вопросы по двигателям Daewoo, Hyundai и KIA
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Phone */}
          <a
            href="tel:+79382060824"
            className="border border-border rounded-2xl p-6 text-center hover:shadow-md transition-shadow bg-white"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-text">Телефон</h3>
            <p className="text-primary font-bold text-lg mt-2">+7 (938) 206-08-24</p>
            <p className="text-xs text-text-secondary mt-1">Пн–Сб: 9:00–19:00</p>
          </a>

          {/* MAX */}
          <a
            href={MAX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border rounded-2xl p-6 text-center hover:shadow-md transition-shadow bg-white"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MaxIcon className="text-sm" />
            </div>
            <h3 className="text-base font-bold text-text">MAX мессенджер</h3>
            <p className="text-primary font-bold text-lg mt-2">Написать</p>
            <p className="text-xs text-text-secondary mt-1">Ответим за 10 минут</p>
          </a>

          {/* Telegram */}
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border rounded-2xl p-6 text-center hover:shadow-md transition-shadow bg-white"
          >
            <div className="w-12 h-12 bg-[#0088cc]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TelegramIcon className="w-7 h-7 text-[#0088cc]" />
            </div>
            <h3 className="text-base font-bold text-text">Telegram</h3>
            <p className="text-[#0088cc] font-bold text-lg mt-2">Написать</p>
            <p className="text-xs text-text-secondary mt-1">Ответим за 10 минут</p>
          </a>

          {/* Address */}
          <div className="border border-border rounded-2xl p-6 text-center bg-white">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-text">Склад / Самовывоз</h3>
            <p className="text-text font-semibold mt-2">г. Москва</p>
            <p className="text-xs text-text-secondary mt-1">Адрес уточняйте по телефону</p>
          </div>
        </div>

        {/* Big CTA */}
        <div className="mt-14 bg-primary rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-xl md:text-2xl font-extrabold">Нужна консультация?</h3>
          <p className="text-white/80 mt-2 max-w-lg mx-auto text-sm md:text-base">
            Поможем подобрать двигатель Daewoo, Hyundai или KIA для вашего автомобиля. Звоните или пишите!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <a
              href="tel:+79382060824"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-3.5 rounded-xl hover:bg-gray-100 transition"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +7 (938) 206-08-24
            </a>
            <a
              href={MAX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition"
            >
              <span className="text-white font-extrabold">MAX</span>
              мессенджер
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition"
            >
              <TelegramIcon className="w-6 h-6" />
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
