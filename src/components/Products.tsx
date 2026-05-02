import { Link } from 'react-router-dom';
import { engines } from '../data/engines';
import EnginePhoto from './EnginePhoto';

const TELEGRAM_URL = 'https://t.me/+79382060824';
const MAX_URL = 'https://max.ru/u/f9LHodD0cOLqAXpgA53WqMtakiGF0eK1GAp67QiTkmHbtmUjt9s7_BVCaEo';

export default function Products() {
  return (
    <section id="products" className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text">Каталог двигателей</h2>
          <p className="text-text-secondary mt-3 max-w-2xl mx-auto">
            Только новые моторы Daewoo, Hyundai и KIA — все в наличии на складе в Москве. Цены указаны без
            учёта доставки и навесного оборудования.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engines.map((p) => {
            const pageUrl = `/engines/${p.slug}`;
            return (
              <article
                key={p.code}
                className="border border-border rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-shadow flex flex-col"
              >
                <Link
                  to={pageUrl}
                  aria-label={`Подробнее о ${p.title}`}
                  className="relative h-48 flex items-center justify-center bg-bg-light block group overflow-hidden"
                >
                  <span
                    className="absolute top-3 left-3 bg-white text-xs font-bold px-2.5 py-1 rounded-md border border-border shadow-sm"
                    style={{ color: p.brandColor }}
                  >
                    {p.brand}
                  </span>
                  <span className="absolute top-3 right-3 bg-accent text-white text-xs font-bold px-2.5 py-1 rounded-md">
                    Новый
                  </span>
                  <EnginePhoto
                    code={p.code}
                    cylinders={p.cylinders}
                    accentColor={p.brandColor}
                    className="w-full h-full max-h-44 object-contain px-4 py-3 transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.03] transition-colors" />
                </Link>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-extrabold text-text">
                    <Link to={pageUrl} className="hover:text-primary transition">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">{p.subtitle}</p>

                  <p className="text-2xl font-extrabold text-primary mt-4">{p.price}</p>

                  <ul className="mt-4 space-y-2 text-sm text-text-secondary flex-1">
                    {p.features.map((f) => (
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
                      {p.fits.map((f) => (
                        <span
                          key={f}
                          className="bg-yellow-50 text-yellow-800 border border-yellow-200 text-xs font-medium px-2.5 py-1 rounded-md"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={pageUrl}
                    className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-primary hover:text-primary-dark transition"
                  >
                    Подробнее о двигателе
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>

                  <div className="mt-6 flex gap-2">
                    <a
                      href="tel:+79382060824"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary text-white text-sm font-semibold px-3 py-2.5 rounded-lg hover:bg-primary-dark transition"
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
                      aria-label="Telegram"
                      className="w-10 h-10 inline-flex items-center justify-center rounded-lg border border-border text-[#0088cc] hover:border-[#0088cc] transition"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.658-.643.136-.953l11.566-4.458c.538-.196 1.006.128.832.939z" />
                      </svg>
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
          })}
        </div>

        {/* Help block */}
        <div className="mt-12 max-w-3xl mx-auto bg-bg-light border border-border rounded-2xl p-6 md:p-8 text-center">
          <h3 className="text-xl font-extrabold text-text">Не нашли свой двигатель?</h3>
          <p className="text-text-secondary mt-2 text-sm md:text-base">
            Пришлите VIN или фото шильдика мотора — подберём нужную модификацию из 80+ новых позиций на
            складе или под заказ напрямую с завода Hyundai-Kia / GM Korea (срок 2–4 недели).
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
            <a
              href={MAX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-border text-text font-semibold px-6 py-3 rounded-xl hover:border-primary hover:text-primary transition"
            >
              Написать в MAX
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
