import { Link, Navigate, useParams } from 'react-router-dom';
import Delivery from '../components/Delivery';
import Contact from '../components/Contact';
import EnginePhoto from '../components/EnginePhoto';
import { findEngineBySlug, type Engine, type Variant } from '../data/engines';

const MAX_URL = 'https://max.ru/u/f9LHodD0cOLqAXpgA53WqMtakiGF0eK1GAp67QiTkmHbtmUjt9s7_BVCaEo';
const TELEGRAM_URL = 'https://t.me/+79382060824';

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
            <div className="inline-flex items-center gap-2 bg-green/10 text-green text-sm font-semibold px-3 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
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
            </h1>

            <p className="text-lg md:text-xl text-text-secondary mt-4 max-w-xl mx-auto lg:mx-0">
              {engine.description}
            </p>

            <p className="text-3xl font-extrabold text-primary mt-6">{engine.price}</p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center lg:justify-start">
              <a
                href="tel:+79382060824"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-primary-dark transition text-base"
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
                MAX
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

          <div className="flex-1 flex justify-center w-full">
            <EngineCanvas engine={engine} className="w-full max-w-md aspect-[4/3]" />
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
        <EnginePhoto
          code={engine.code}
          cylinders={engine.cylinders}
          accentColor={engine.brandColor}
          className="w-full h-full max-h-52 object-contain px-4 py-3"
        />
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
                Позвонить
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

export default function EnginePage() {
  const { slug } = useParams();
  const engine = slug ? findEngineBySlug(slug) : undefined;

  if (!engine) return <Navigate to="/" replace />;

  return (
    <>
      <Hero engine={engine} />
      <Variants engine={engine} />
      <FeaturesAndApps engine={engine} />
      <Specs engine={engine} />
      <Delivery />
      <Contact />
    </>
  );
}
