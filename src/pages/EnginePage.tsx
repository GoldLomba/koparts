import { useState, useEffect, useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Delivery from '../components/Delivery';
import Contact from '../components/Contact';
import EnginePhoto from '../components/EnginePhoto';
import MaxIcon from '../components/MaxIcon';
import { findEngineBySlug, type Engine, type Variant } from '../data/engines';

const MAX_URL = 'https://max.ru/u/f9LHodD0cOLqAXpgA53WqMtakiGF0eK1GAp67QiTkmHbtmUjt9s7_BVCaEo';
const TELEGRAM_URL = 'https://t.me/+79382060824';

const RU_MONTHS_GENITIVE = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
];

/** Deterministic pseudo-random integer in [1..5] for a given date. */
function dailyIncrement(year: number, month: number, day: number): number {
  let x = year * 10000 + (month + 1) * 100 + day;
  x = (x * 9301 + 49297) % 233280;
  return Math.floor((x / 233280) * 5) + 1;
}

/** Sales counter: starts at 4 on day 1 of the month, +1..5 deterministic daily. */
function computeMonthlySold(now: Date): { count: number; dateLabel: string } {
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  let count = 4;
  for (let d = 2; d <= day; d++) {
    count += dailyIncrement(year, month, d);
  }
  return { count, dateLabel: `${day} ${RU_MONTHS_GENITIVE[month]}` };
}

const RECENT_ORDERS = [
  'Иван, Краснодар — 2 ч. назад',
  'Алексей, Москва — 45 мин. назад',
  'Дмитрий, Казань — 3 ч. назад',
  'Сергей, СПб — 1 ч. назад',
  'Павел, Воронеж — 5 ч. назад',
  'Максим, Екатеринбург — вчера',
  'Руслан, Самара — 4 ч. назад',
  'Андрей, Новосибирск — 6 ч. назад',
  'Михаил, Уфа — сегодня утром',
  'Виктор, Ростов — 2 дня назад',
  'Олег, Пермь — 8 ч. назад',
  'Артём, Волгоград — вчера',
];

function SocialProof() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const { count, dateLabel } = useMemo(() => computeMonthlySold(new Date()), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % RECENT_ORDERS.length);
        setVisible(true);
      }, 350);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-4 flex flex-col gap-2 items-center lg:items-start">
      {/* Monthly counter */}
      <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/20 rounded-lg px-3.5 py-2 text-sm">
        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        <span className="text-text-secondary">Продано в этом месяце:</span>
        <span className="font-extrabold text-primary">{count} штук</span>
        <span className="text-text-secondary text-xs">· {dateLabel}</span>
      </div>

      {/* Recent order ticker */}
      <div className="flex items-center gap-2 bg-bg-light border border-border rounded-lg px-3.5 py-2 text-sm w-72">
        <span className="w-2 h-2 bg-green rounded-full flex-shrink-0 animate-pulse" />
        <span
          className={`text-text font-medium overflow-hidden whitespace-nowrap transition-opacity duration-300 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {RECENT_ORDERS[idx]}
        </span>
      </div>
    </div>
  );
}

function EngineCanvas({
  engine,
  className = '',
}: {
  engine: Engine;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center bg-bg-light rounded-2xl border border-border overflow-hidden ${className}`}
    >
      <EnginePhoto
        code={engine.code}
        cylinders={engine.cylinders}
        accentColor={engine.brandColor}
        className="w-full h-full max-h-full object-contain p-6 md:p-8"
      />
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

function Hero({ engine }: { engine: Engine }) {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
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
          <span className="text-text font-semibold">{engine.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-green text-white text-sm font-extrabold px-3.5 py-2 rounded-full mb-5 shadow-md shadow-green/30">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              В наличии на складе в Москве
            </div>

            <div
              className="inline-block text-xs font-extrabold tracking-wider px-2.5 py-1 rounded-md mb-3"
              style={{ backgroundColor: `${engine.brandColor}15`, color: engine.brandColor }}
            >
              {engine.brand}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text leading-tight">
              Двигатель <span className="text-primary">{engine.code}</span>
              {engine.volumeLabel && (
                <span className="text-text-secondary font-bold"> {engine.volumeLabel}</span>
              )}
            </h1>

            <p className="text-lg md:text-xl text-text-secondary mt-4 max-w-xl mx-auto lg:mx-0">
              {engine.description}
            </p>

            <div className="mt-6 flex items-baseline gap-3 justify-center lg:justify-start">
              <p className="text-3xl font-extrabold text-primary">{engine.price}</p>
              <span className="text-xs text-text-secondary">с НДС, без доставки</span>
            </div>
            <p className="mt-2 text-sm text-accent font-semibold flex items-center gap-1.5 justify-center lg:justify-start">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              Сейчас в наличии — успейте заказать
            </p>
            {engine.stockCount && (
              <div className="mt-3 inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-sm font-semibold px-3 py-1.5 rounded-lg">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Осталось {engine.stockCount} шт. — торопитесь
              </div>
            )}
            <div className="mt-3 inline-flex items-center gap-2 bg-yellow-400 text-text font-extrabold px-3.5 py-2 rounded-lg text-sm shadow-md shadow-yellow-400/40 ring-1 ring-yellow-500/30">
              <span className="text-base animate-pulse">⚡</span>
              Отгружаем в день оплаты при заказе до 14:00
            </div>

            <SocialProof />

            <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center lg:justify-start">
              <a
                href="tel:+79382060824"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-primary-dark transition text-base shadow-lg shadow-primary/30"
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
                Купить сейчас
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-border text-text font-semibold px-7 py-3.5 rounded-xl hover:border-primary hover:text-primary transition text-base"
              >
                <TelegramIcon className="w-5 h-5 text-[#0088cc]" />
                Telegram
              </a>
              <a
                href={MAX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-border text-text font-semibold px-7 py-3.5 rounded-xl hover:border-primary hover:text-primary transition text-base"
              >
                <MaxIcon className="w-5 h-5 rounded" />
                MAX
              </a>
            </div>

            {/* Trust badges — mobile/tablet only */}
            <div className="grid lg:hidden grid-cols-3 gap-4 mt-10 max-w-md mx-auto">
              {[
                { icon: '🛡️', title: 'Гарантия', sub: '12 месяцев' },
                { icon: '📋', title: 'Декларация', sub: 'для ГИБДД' },
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

          <div className="flex-1 flex flex-col items-center w-full">
            <EngineCanvas engine={engine} className="w-full max-w-md aspect-[4/3]" />

            {/* Trust badges — desktop only (under photo) */}
            <div className="hidden lg:grid grid-cols-3 gap-4 mt-8 w-full max-w-md">
              {[
                { icon: '🛡️', title: 'Гарантия', sub: '12 месяцев' },
                { icon: '📋', title: 'Декларация', sub: 'для ГИБДД' },
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
        </div>
      </div>
    </section>
  );
}

function VariantCard({
  v,
  engine,
}: {
  v: Variant;
  engine: Engine;
}) {
  return (
    <article className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      <div className="relative h-56 bg-bg-light flex items-center justify-center">
        {v.image ? (
          <img
            src={`${import.meta.env.BASE_URL}${v.image}`}
            alt={v.title}
            loading="lazy"
            className="w-full h-full max-h-52 object-contain px-4 py-3"
          />
        ) : (
          <EnginePhoto
            code={engine.code}
            cylinders={engine.cylinders}
            accentColor={engine.brandColor}
            className="w-full h-full max-h-52 object-contain px-4 py-3"
          />
        )}
        <span
          className={`absolute top-3 left-3 ${v.badgeBg} text-white text-xs font-bold px-2.5 py-1 rounded-md`}
        >
          {v.badge}
        </span>
        <span className="absolute top-3 right-3 bg-accent text-white text-xs font-bold px-2.5 py-1 rounded-md">
          Новый
        </span>
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
            Купить сейчас
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
            className="w-10 h-10 inline-flex items-center justify-center rounded-lg border border-border hover:border-primary transition"
          >
            <MaxIcon className="w-6 h-6 rounded" />
          </a>
        </div>
      </div>
    </article>
  );
}

function Variants({ engine }: { engine: Engine }) {
  if (!engine.variants?.length) return null;
  return (
    <section id="variants" className="bg-bg-light py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text">
            {engine.variants.length === 2 ? 'Два варианта исполнения' : 'Варианты исполнения'}
          </h2>
          <p className="text-text-secondary mt-3 max-w-2xl mx-auto">
            Выберите модификацию под систему вашего автомобиля.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {engine.variants.map((v) => (
            <VariantCard key={v.badge} v={v} engine={engine} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesAndApps({ engine }: { engine: Engine }) {
  if (engine.variants?.length) return null;
  return (
    <section className="bg-bg-light py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text">Описание и комплектация</h2>
          <p className="text-text-secondary mt-3 max-w-2xl mx-auto">
            Только новые двигатели в заводской упаковке. Полный комплект навесного — по запросу.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Features card */}
          <div className="md:col-span-3 bg-white border border-border rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-extrabold text-text">Особенности</h3>
            <ul className="mt-4 space-y-3 text-sm text-text-secondary">
              {engine.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mt-0.5"
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

            <div className="mt-6 flex gap-2">
              <a
                href="tel:+79382060824"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-primary-dark transition text-sm"
              >
                Купить сейчас
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-border text-text font-semibold px-5 py-2.5 rounded-lg hover:border-primary hover:text-primary transition text-sm"
              >
                <TelegramIcon className="w-5 h-5 text-[#0088cc]" />
                Telegram
              </a>
              <a
                href={MAX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-border text-text font-semibold px-5 py-2.5 rounded-lg hover:border-primary hover:text-primary transition text-sm"
              >
                <MaxIcon className="w-5 h-5 rounded" />
                MAX
              </a>
            </div>
          </div>

          {/* Applications card */}
          <div className="md:col-span-2 bg-white border border-border rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-extrabold text-text">Применяется на</h3>
            <ul className="mt-4 divide-y divide-border">
              {engine.applications.map((a) => (
                <li key={a.model} className="py-2.5 flex items-center justify-between text-sm">
                  <span className="text-text font-semibold">{a.model}</span>
                  <span className="text-text-secondary text-xs">{a.years}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Specs({ engine }: { engine: Engine }) {
  return (
    <section id="specs" className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text">Технические характеристики</h2>
          <p className="text-text-secondary mt-3">{engine.title}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            {engine.specs.map((s, i) => (
              <div
                key={s.label}
                className={`flex items-center justify-between px-5 md:px-6 py-3.5 text-sm ${
                  i % 2 === 0 ? 'bg-white' : 'bg-bg-light'
                } ${i < engine.specs.length - 1 ? 'border-b border-border' : ''}`}
              >
                <span className="text-text-secondary font-medium">{s.label}</span>
                <span className="text-text font-semibold text-right">{s.value}</span>
              </div>
            ))}
          </div>

          {engine.variants?.length ? (
            <div className="bg-bg-light rounded-2xl border border-border p-6 md:p-8">
              <h3 className="text-lg font-extrabold text-text">Применяется на</h3>
              <ul className="mt-4 divide-y divide-border">
                {engine.applications.map((a) => (
                  <li
                    key={a.model}
                    className="py-3 flex items-center justify-between text-sm"
                  >
                    <span className="text-text font-semibold">{a.model}</span>
                    <span className="text-text-secondary text-xs">{a.years}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="bg-bg-light rounded-2xl border border-border p-6 md:p-8 flex flex-col">
              <h3 className="text-lg font-extrabold text-text">Нужна консультация?</h3>
              <p className="text-sm text-text-secondary mt-3">
                Поможем определить нужную модификацию двигателя {engine.code} под ваш автомобиль —
                пришлите VIN или фото шильдика мотора.
              </p>
              <div className="mt-auto pt-6 flex flex-col gap-2">
                <a
                  href="tel:+79382060824"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-5 py-3 rounded-lg hover:bg-primary-dark transition text-sm"
                >
                  +7 (938) 206-08-24
                </a>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-border text-text font-semibold px-5 py-3 rounded-lg hover:border-primary hover:text-primary transition text-sm"
                >
                  <TelegramIcon className="w-5 h-5 text-[#0088cc]" />
                  Написать в Telegram
                </a>
                <a
                  href={MAX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-border text-text font-semibold px-5 py-3 rounded-lg hover:border-primary hover:text-primary transition text-sm"
                >
                  <MaxIcon className="w-5 h-5 rounded" />
                  Написать в MAX
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FAQSection({ engine }: { engine: Engine }) {
  const [open, setOpen] = useState<number | null>(null);
  if (!engine.faq?.length) return null;
  return (
    <section className="bg-bg-light py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-text text-center mb-10">
          Часто задаваемые вопросы
        </h2>
        <div className="space-y-3">
          {engine.faq.map((item, i) => (
            <div key={i} className="bg-white border border-border rounded-2xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-bg-light transition-colors"
              >
                <span className="font-semibold text-text text-sm md:text-base">{item.q}</span>
                <svg
                  className={`w-5 h-5 text-text-secondary flex-shrink-0 transition-transform duration-200 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-text-secondary text-sm leading-relaxed border-t border-border pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const BASE = import.meta.env.BASE_URL;

function DiscountCTA() {
  return (
    <section className="bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 py-16 md:py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, white 0%, transparent 40%), radial-gradient(circle at 80% 70%, white 0%, transparent 45%)',
        }}
      />
      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <div className="inline-flex items-center gap-2 bg-text/15 text-text text-xs font-extrabold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wide">
          <span>🎁</span> Специальное предложение
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-text leading-tight">
          Узнайте, как получить{' '}
          <span className="text-primary whitespace-nowrap">скидку 5%</span>
        </h2>
        <p className="text-text mt-5 text-base md:text-lg max-w-2xl mx-auto font-medium">
          Позвоните или напишите нам{' '}
          <span className="inline-block bg-text text-yellow-300 font-extrabold px-2.5 py-0.5 rounded-md">
            «Хочу скидку 5%»
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <a
            href="tel:+79382060824"
            className="inline-flex items-center justify-center gap-2 bg-text text-white font-bold px-7 py-3.5 rounded-xl hover:bg-primary transition text-base shadow-lg shadow-black/20"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Позвонить
          </a>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-text font-bold px-7 py-3.5 rounded-xl hover:bg-bg-light transition text-base border-2 border-text/10"
          >
            <TelegramIcon className="w-5 h-5 text-[#0088cc]" />
            Telegram
          </a>
          <a
            href={MAX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-text font-bold px-7 py-3.5 rounded-xl hover:bg-bg-light transition text-base border-2 border-text/10"
          >
            <MaxIcon className="w-5 h-5 rounded" />
            MAX
          </a>
        </div>
      </div>
    </section>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="inline-flex items-center gap-0.5" aria-label={`Рейтинг ${rating} из 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-border'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewPhotos({ engine }: { engine: Engine }) {
  if (!engine.reviews?.length) return null;
  const avgRating =
    engine.reviews.reduce((s, r) => s + r.rating, 0) / engine.reviews.length;
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text">Отзывы покупателей</h2>
          <div className="mt-3 inline-flex items-center gap-2">
            <Stars rating={Math.round(avgRating)} />
            <span className="text-sm font-semibold text-text">
              {avgRating.toFixed(1)} / 5 · {engine.reviews.length}{' '}
              {engine.reviews.length === 1 ? 'отзыв' : engine.reviews.length < 5 ? 'отзыва' : 'отзывов'}
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {engine.reviews.map((r, i) => (
            <article
              key={i}
              className="border border-border rounded-2xl overflow-hidden bg-white hover:shadow-md transition-shadow flex flex-col"
            >
              {r.src && (
                <img
                  src={`${BASE}${r.src}`}
                  alt={`Отзыв ${r.author}`}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover bg-bg-light"
                />
              )}
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-white font-extrabold flex items-center justify-center flex-shrink-0">
                    {r.author[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                      <span className="font-extrabold text-text">{r.author}</span>
                      {r.location && (
                        <span className="text-xs text-text-secondary">{r.location}</span>
                      )}
                      {r.date && (
                        <span className="text-xs text-text-secondary">· {r.date}</span>
                      )}
                    </div>
                    <div className="mt-1">
                      <Stars rating={r.rating} />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-text-secondary text-sm leading-relaxed">{r.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngineDesktopStickyBar({ engine }: { engine: Engine }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`hidden md:flex fixed inset-x-0 bottom-0 z-40 bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 w-full flex items-center justify-between gap-4">
        <div>
          <p className="text-base font-extrabold text-text">
            Двигатель {engine.code} — {engine.price}
          </p>
          <p className="text-xs text-text-secondary">Новый · Гарантия 12 мес. · Отгрузка в день оплаты</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {engine.stockCount && (
            <span className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full">
              ⚠ Осталось {engine.stockCount} шт.
            </span>
          )}
          <a
            href="tel:+79382060824"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-5 py-2.5 rounded-lg hover:bg-primary-dark transition text-sm shadow-lg shadow-primary/20"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Купить сейчас
          </a>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border text-text font-semibold px-4 py-2.5 rounded-lg hover:border-[#0088cc] hover:text-[#0088cc] transition text-sm"
          >
            <TelegramIcon className="w-4 h-4 text-[#0088cc]" />
            Telegram
          </a>
          <a
            href={MAX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border text-text font-semibold px-4 py-2.5 rounded-lg hover:border-primary hover:text-primary transition text-sm"
          >
            <MaxIcon className="w-5 h-5 rounded" />
            MAX
          </a>
        </div>
      </div>
    </div>
  );
}

const WHY_ITEMS = [
  {
    emoji: '💸',
    text: 'Не трать деньги на ремонт старого ржавого двигателя — поставь',
    highlight: 'НОВЫЙ двигатель',
    tail: 'и забудь о проблемах.',
  },
  {
    emoji: '🔧',
    text: 'Ремонт сегодня — поломка завтра.',
    highlight: 'НОВЫЙ двигатель',
    tail: '— решение на годы.',
  },
  {
    emoji: '🛡️',
    text: 'Купи новый двигатель с гарантией 12 месяцев и',
    highlight: 'забудь о ремонтах.',
    tail: '',
  },
];

function WhyNewEngine() {
  return (
    <section className="bg-text py-14 md:py-18">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
            Зачем ремонтировать,<br className="hidden sm:block" /> если можно поставить новый?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {WHY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="text-4xl">{item.emoji}</div>
              <p className="text-white/90 text-base leading-relaxed font-medium">
                {item.text}{' '}
                <span className="text-accent font-extrabold">{item.highlight}</span>
                {item.tail && ' ' + item.tail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoReviewCTA() {
  return (
    <section className="bg-white py-14 md:py-18 border-y border-border">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden shadow-xl shadow-primary/20">
          {/* Background glow */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 10% 30%, white 0%, transparent 50%), radial-gradient(circle at 90% 70%, white 0%, transparent 50%)',
            }}
          />

          {/* Icon block */}
          <div className="relative flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/30">
            <svg
              className="w-12 h-12 md:w-14 md:h-14 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>

          {/* Text */}
          <div className="relative flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wide">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              Бесплатно
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
              Заказать видеообзор двигателя онлайн
            </h2>
            <p className="text-white/85 mt-2 text-base md:text-lg font-medium">
              В живую покажем ваш двигатель — состояние, маркировку и комплектацию
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center md:justify-start">
              <a
                href="tel:+79382060824"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-bg-light transition text-sm shadow-lg shadow-black/15"
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
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/15 transition text-sm"
              >
                <TelegramIcon className="w-4 h-4" />
                Telegram
              </a>
              <a
                href={MAX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/15 transition text-sm"
              >
                <MaxIcon className="w-5 h-5 rounded" />
                MAX
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MidPageCTA({ engine }: { engine: Engine }) {
  return (
    <section className="bg-gradient-to-r from-primary-dark to-primary py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 text-center md:text-left">
            <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-1">
              Не откладывайте
            </p>
            <h3 className="text-xl md:text-2xl font-extrabold text-white">
              Двигатель {engine.code} — {engine.price}
            </h3>
            <p className="text-white/80 text-sm mt-1.5">
              Отгружаем в день оплаты · Гарантия 12 мес. · Документы для ГИБДД
            </p>
            {engine.stockCount && (
              <p className="text-sm font-bold text-yellow-300 mt-2 flex items-center gap-1.5 justify-center md:justify-start">
                <span>⚠</span> Осталось {engine.stockCount} шт. на складе
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <a
              href="tel:+79382060824"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-bg-light transition text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Купить сейчас
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition text-sm"
            >
              <TelegramIcon className="w-4 h-4" />
              Telegram
            </a>
            <a
              href={MAX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition text-sm"
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

export default function EnginePage() {
  const { slug } = useParams();
  const engine = slug ? findEngineBySlug(slug) : undefined;

  if (!engine) return <Navigate to="/" replace />;

  return (
    <>
      <Hero engine={engine} />
      <Variants engine={engine} />
      <FeaturesAndApps engine={engine} />
      <WhyNewEngine />
      <VideoReviewCTA />
      <Specs engine={engine} />
      <MidPageCTA engine={engine} />
      <ReviewPhotos engine={engine} />
      <FAQSection engine={engine} />
      <Delivery />
      <DiscountCTA />
      <Contact />
      <EngineDesktopStickyBar engine={engine} />
    </>
  );
}
