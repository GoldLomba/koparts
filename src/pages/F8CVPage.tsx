import { Link } from 'react-router-dom';
import Delivery from '../components/Delivery';
import Contact from '../components/Contact';

const MAX_URL = 'https://max.ru/u/f9LHodD0cOLqAXpgA53WqMtakiGF0eK1GAp67QiTkmHbtmUjt9s7_BVCaEo';
const TELEGRAM_URL = 'https://t.me/+79382060824';

const specs = [
  { label: 'Модель', value: 'F8CV' },
  { label: 'Объём', value: '796 см³ (0.8 л)' },
  { label: 'Тип', value: 'Бензиновый, рядный' },
  { label: 'Кол-во цилиндров', value: '3' },
  { label: 'Клапанов', value: '6 (2 на цилиндр)' },
  { label: 'ГРМ', value: 'SOHC, ремень' },
  { label: 'Мощность', value: '51 л.с. при 6200 об/мин' },
  { label: 'Крутящий момент', value: '69 Нм при 3400 об/мин' },
  { label: 'Степень сжатия', value: '9.3 : 1' },
  { label: 'Топливо', value: 'АИ-92 / АИ-95' },
  { label: 'Система питания', value: 'Инжектор (MPI)' },
  { label: 'Масло', value: '5W-30 / 10W-40, 3.2 л' },
  { label: 'Ресурс', value: '~300 000 км' },
  { label: 'Вес двигателя', value: '~55 кг' },
];

const variants = [
  {
    badge: 'Под катушку',
    badgeColor: 'bg-primary',
    title: 'F8CV под катушку зажигания',
    subtitle: 'Современная электронная система зажигания',
    price: 'от 145 000 ₽',
    features: [
      'Новый, в заводской упаковке',
      'Электронный модуль зажигания',
      'Индивидуальные катушки на каждый цилиндр',
      'Стабильный пуск в любую погоду',
    ],
    fits: ['Daewoo Matiz (2000–2015)', 'Chevrolet Spark (2005–2010)'],
  },
  {
    badge: 'Под трамблёр',
    badgeColor: 'bg-accent',
    title: 'F8CV под трамблёр',
    subtitle: 'Классическая, проверенная конструкция',
    price: 'от 145 000 ₽',
    features: [
      'Новый, в заводской упаковке',
      'Механический распределитель зажигания',
      'Простое обслуживание и ремонт',
      'Совместимость с ранними кузовами',
    ],
    fits: ['Daewoo Matiz (1998–2005)', 'Daewoo Tico'],
  },
];

function EngineImage({ className = '' }: { className?: string }) {
  return (
    <div
      className={`bg-gradient-to-br from-primary-dark via-primary to-primary-light flex items-center justify-center relative overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, white 0%, transparent 40%), radial-gradient(circle at 80% 70%, white 0%, transparent 40%)',
        }}
      />
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
    </div>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.658-.643.136-.953l11.566-4.458c.538-.196 1.006.128.832.939z" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb / back */}
        <nav className="mb-8 text-sm">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-text-secondary hover:text-primary transition"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Каталог
          </Link>
          <span className="mx-2 text-text-secondary">/</span>
          <span className="text-text font-semibold">Daewoo F8CV 0.8L</span>
        </nav>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-green/10 text-green text-sm font-semibold px-3 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
              В наличии на складе в Москве
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text leading-tight">
              Двигатель <span className="text-primary">F8CV</span> 0.8L
            </h1>

            <p className="text-lg md:text-xl text-text-secondary mt-4 max-w-xl mx-auto lg:mx-0">
              Два варианта исполнения — <strong className="text-text">под катушку зажигания</strong> и{' '}
              <strong className="text-text">под трамблёр</strong>. Для Daewoo&nbsp;Matiz, Chevrolet&nbsp;Spark.
              Только новые двигатели в заводской упаковке.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center lg:justify-start">
              <a
                href="#variants"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-primary-dark transition text-base"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                Смотреть варианты
              </a>
              <a
                href="tel:+79382060824"
                className="inline-flex items-center justify-center gap-2 border-2 border-border text-text font-semibold px-7 py-3.5 rounded-xl hover:border-primary hover:text-primary transition text-base"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Позвонить
              </a>
            </div>

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

          {/* Right */}
          <div className="flex-1 flex justify-center w-full">
            <EngineImage className="image-decor w-full max-w-md aspect-[4/3]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Variants() {
  return (
    <section id="variants" className="bg-bg-light py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text">Два варианта исполнения</h2>
          <p className="text-text-secondary mt-3 max-w-2xl mx-auto">
            Выберите модификацию под систему зажигания вашего автомобиля. Цена и комплектация одинаковы.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {variants.map((v) => (
            <article
              key={v.badge}
              className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="relative h-52">
                <EngineImage className="w-full h-full" />
                <div
                  className={`absolute top-3 left-3 ${v.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-md`}
                >
                  {v.badge}
                </div>
                <div className="absolute top-3 right-3 bg-white/15 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-md">
                  Новый
                </div>
                <div className="absolute bottom-3 left-3 text-white/90 text-xs font-semibold tracking-wider">
                  F8CV · 0.8 L
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-extrabold text-text">{v.title}</h3>
                <p className="text-sm text-text-secondary mt-1">{v.subtitle}</p>

                <p className="text-2xl font-extrabold text-primary mt-4">{v.price}</p>

                <ul className="mt-4 space-y-2 text-sm text-text-secondary flex-1">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-green flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <p className="text-xs text-text-secondary uppercase tracking-wide font-semibold mb-2">
                    Подходит на
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {v.fits.map((f) => (
                      <span
                        key={f}
                        className="bg-yellow-50 text-yellow-800 border border-yellow-200 text-xs font-medium px-2.5 py-1 rounded-md"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex gap-2">
                  <a
                    href="tel:+79382060824"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary text-white text-sm font-semibold px-3 py-2.5 rounded-lg hover:bg-primary-dark transition"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Позвонить
                  </a>
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className="w-10 h-10 inline-flex items-center justify-center rounded-lg border border-border text-[#0088cc] hover:border-[#0088cc] transition"
                  >
                    <TelegramIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={MAX_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="MAX"
                    className="w-10 h-10 inline-flex items-center justify-center rounded-lg border border-border text-primary hover:border-primary transition text-xs font-extrabold"
                  >
                    MAX
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Help block */}
        <div className="mt-12 max-w-3xl mx-auto bg-white border border-border rounded-2xl p-6 md:p-8 text-center">
          <h3 className="text-xl font-extrabold text-text">Не знаете, какой вариант подходит?</h3>
          <p className="text-text-secondary mt-2 text-sm md:text-base">
            Пришлите VIN или фото шильдика двигателя — определим систему зажигания и подберём нужную модификацию.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <a
              href="tel:+79382060824"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-dark transition"
            >
              Позвонить менеджеру
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-border text-text font-semibold px-6 py-3 rounded-xl hover:border-primary hover:text-primary transition"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Specs() {
  return (
    <section id="specs" className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text">Технические характеристики</h2>
          <p className="text-text-secondary mt-3">Двигатель F8CV — компактный и экономичный мотор</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-border overflow-hidden">
          {specs.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center justify-between px-5 md:px-6 py-3.5 text-sm ${
                i % 2 === 0 ? 'bg-white' : 'bg-bg-light'
              } ${i < specs.length - 1 ? 'border-b border-border' : ''}`}
            >
              <span className="text-text-secondary font-medium">{s.label}</span>
              <span className="text-text font-semibold text-right">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function F8CVPage() {
  return (
    <>
      <Hero />
      <Variants />
      <Specs />
      <Delivery />
      <Contact />
    </>
  );
}
