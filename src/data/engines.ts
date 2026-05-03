export type Variant = {
  badge: string;
  badgeBg: string;
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  fits: string[];
};

export type SpecRow = { label: string; value: string };
export type Application = { model: string; years: string };

export type Engine = {
  slug: string;
  code: string;
  brand: 'Daewoo' | 'Hyundai' | 'KIA';
  brandColor: string;
  /** Number of cylinders — used by the engine illustration. */
  cylinders: 3 | 4;
  /** Catalog card title, e.g. "Daewoo F8CV 0.8L" */
  title: string;
  /** Catalog card subtitle */
  subtitle: string;
  /** Catalog card price */
  price: string;
  /** Catalog card bullet features (3 items) */
  features: string[];
  /** Catalog card "fits on" tags */
  fits: string[];
  /** Hero paragraph on the dedicated page */
  description: string;
  variants?: Variant[];
  specs: SpecRow[];
  applications: Application[];
  /** Customer review photo paths (relative to public/) */
  reviewPhotos?: { src: string; caption: string }[];
  /** Customer review text + rating */
  review?: {
    author: string;
    location?: string;
    rating: 1 | 2 | 3 | 4 | 5;
    text: string;
    date?: string;
  };
};

export const engines: Engine[] = [
  {
    slug: 'f8cv',
    code: 'F8CV',
    brand: 'Daewoo',
    brandColor: '#0f2c63',
    cylinders: 3,
    title: 'Daewoo F8CV 0.8L',
    subtitle: 'Бензиновый, 3 цилиндра, 51 л.с.',
    price: 'от 145 000 ₽',
    features: [
      'Новый, в заводской упаковке',
      'Под катушку зажигания и под трамблёр',
      'Полный комплект навесного по запросу',
    ],
    fits: ['Daewoo Matiz', 'Chevrolet Spark'],
    description:
      'Компактный и экономичный 3-цилиндровый мотор для Daewoo Matiz и Chevrolet Spark. Доступен в двух исполнениях — под катушку зажигания и под трамблёр. Только новые двигатели в заводской упаковке.',
    variants: [
      {
        badge: 'Под катушку',
        badgeBg: 'bg-primary',
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
        badgeBg: 'bg-accent',
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
    ],
    specs: [
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
    ],
    applications: [
      { model: 'Daewoo Matiz', years: '1998–2015' },
      { model: 'Daewoo Tico', years: '1991–2001' },
      { model: 'Chevrolet Spark', years: '2005–2010' },
    ],
    reviewPhotos: [
      { src: 'reviews/f8cv-1.jpg', caption: 'Старый мотор до замены — Daewoo Matiz' },
      { src: 'reviews/f8cv-2.jpg', caption: 'Доставка в металлическом ящике на паллете' },
      { src: 'reviews/f8cv-3.jpg', caption: 'Двигатель в заводской деревянной упаковке' },
      { src: 'reviews/f8cv-4.jpg', caption: 'Новый F8CV M-TEC — готов к установке' },
    ],
    review: {
      author: 'Алексей',
      location: 'Москва',
      rating: 5,
      date: 'апрель 2026',
      text:
        'Старый мотор на Матизе уже дымил и троил, искал замену — попал на сайт koparts. Менеджер сразу ответил в Telegram, подобрал нужное исполнение под катушку зажигания, прислал фото и видео двигателя со склада. Заказал, оплатил по СБП — на следующий день уже отгрузили транспортной. Мотор пришёл в металлическом ящике на паллете, внутри — заводская деревянная упаковка и плёнка. Двигатель новый, без следов работы, маркировка совпадает. Установили — завёлся с первого раза, работает ровно. Рекомендую!',
    },
  },
  {
    slug: 'a15sms',
    code: 'A15SMS',
    brand: 'Daewoo',
    brandColor: '#0f2c63',
    cylinders: 4,
    title: 'Daewoo A15SMS 1.5L',
    subtitle: 'Бензиновый, 8-клапанный, 80 л.с.',
    price: 'от 135 000 ₽',
    features: [
      'Новый, поставка GM Korea',
      'Чугунный блок, надёжный SOHC',
      'Заводская гарантия 12 месяцев',
    ],
    fits: ['Daewoo Nexia', 'Daewoo Lanos', 'ЗАЗ Chance'],
    description:
      'Надёжный 1.5-литровый 8-клапанный мотор серии GM Family I. Чугунный блок, простая конструкция и широкая распространённость запчастей. Идеален для Daewoo Nexia и Lanos.',
    specs: [
      { label: 'Модель', value: 'A15SMS' },
      { label: 'Объём', value: '1498 см³ (1.5 л)' },
      { label: 'Тип', value: 'Бензиновый, рядный' },
      { label: 'Кол-во цилиндров', value: '4' },
      { label: 'Клапанов', value: '8 (2 на цилиндр)' },
      { label: 'ГРМ', value: 'SOHC, ремень' },
      { label: 'Мощность', value: '80 л.с. при 5400 об/мин' },
      { label: 'Крутящий момент', value: '124 Нм при 3000 об/мин' },
      { label: 'Степень сжатия', value: '9.5 : 1' },
      { label: 'Топливо', value: 'АИ-92 / АИ-95' },
      { label: 'Система питания', value: 'Инжектор (MPI)' },
      { label: 'Масло', value: '5W-30 / 10W-40, 3.5 л' },
      { label: 'Ресурс', value: '~250 000 км' },
      { label: 'Вес двигателя', value: '~108 кг' },
    ],
    applications: [
      { model: 'Daewoo Nexia', years: '1995–2016' },
      { model: 'Daewoo Lanos', years: '1997–2010' },
      { model: 'ЗАЗ Chance', years: '2009–2017' },
    ],
  },
  {
    slug: 'g4ee',
    code: 'G4EE',
    brand: 'Hyundai',
    brandColor: '#002c5f',
    cylinders: 4,
    title: 'Hyundai G4EE 1.4L',
    subtitle: 'Бензиновый, 16V, DOHC, 97 л.с.',
    price: 'от 175 000 ₽',
    features: [
      'Новый, поставка Hyundai-Kia',
      'Серия Alpha II, 16V DOHC',
      'Заводская гарантия 12 месяцев',
    ],
    fits: ['Hyundai Getz', 'Hyundai Accent', 'KIA Rio'],
    description:
      'Бензиновый 1.4-литровый мотор серии Alpha II — один из самых распространённых двигателей Hyundai середины 2000-х. 16-клапанный DOHC с ременным приводом ГРМ, надёжный и неприхотливый.',
    specs: [
      { label: 'Модель', value: 'G4EE' },
      { label: 'Объём', value: '1399 см³ (1.4 л)' },
      { label: 'Тип', value: 'Бензиновый, рядный' },
      { label: 'Кол-во цилиндров', value: '4' },
      { label: 'Клапанов', value: '16 (4 на цилиндр)' },
      { label: 'ГРМ', value: 'DOHC, ремень' },
      { label: 'Мощность', value: '97 л.с. при 5500 об/мин' },
      { label: 'Крутящий момент', value: '125 Нм при 3200 об/мин' },
      { label: 'Степень сжатия', value: '10.0 : 1' },
      { label: 'Диаметр × ход', value: '75.5 × 78.1 мм' },
      { label: 'Топливо', value: 'АИ-95' },
      { label: 'Система питания', value: 'Инжектор (MPI)' },
      { label: 'Масло', value: '5W-30 / 10W-40, 3.3 л' },
      { label: 'Ресурс', value: '~250 000 км' },
    ],
    applications: [
      { model: 'Hyundai Getz', years: '2002–2011' },
      { model: 'Hyundai Accent (LC/MC)', years: '2002–2011' },
      { model: 'KIA Rio II', years: '2005–2011' },
    ],
  },
  {
    slug: 'g4fa',
    code: 'G4FA',
    brand: 'Hyundai',
    brandColor: '#002c5f',
    cylinders: 4,
    title: 'Hyundai G4FA 1.4L',
    subtitle: 'Бензиновый, 16V, DOHC, 107 л.с.',
    price: 'от 195 000 ₽',
    features: [
      'Новый, поставка Hyundai-Kia',
      'Серия Gamma, цепной привод ГРМ',
      'Заводская консервация и упаковка',
    ],
    fits: ['Hyundai Solaris', 'Hyundai Accent', 'KIA Rio'],
    description:
      'Современный 1.4-литровый мотор серии Gamma с цепным приводом ГРМ — без замены ремня. Используется на массовых моделях Hyundai Solaris, Accent и Kia Rio. Высокая надёжность и хорошая динамика.',
    specs: [
      { label: 'Модель', value: 'G4FA' },
      { label: 'Объём', value: '1396 см³ (1.4 л)' },
      { label: 'Тип', value: 'Бензиновый, рядный' },
      { label: 'Кол-во цилиндров', value: '4' },
      { label: 'Клапанов', value: '16 (4 на цилиндр)' },
      { label: 'ГРМ', value: 'DOHC, цепь' },
      { label: 'Мощность', value: '107 л.с. при 6300 об/мин' },
      { label: 'Крутящий момент', value: '135 Нм при 5000 об/мин' },
      { label: 'Степень сжатия', value: '11.0 : 1' },
      { label: 'Топливо', value: 'АИ-95' },
      { label: 'Система питания', value: 'Инжектор (MPI)' },
      { label: 'Масло', value: '5W-30 / 10W-40, 3.6 л' },
      { label: 'Ресурс', value: '~250 000 км' },
    ],
    applications: [
      { model: 'Hyundai Solaris I', years: '2010–2017' },
      { model: 'Hyundai Accent IV', years: '2010–2017' },
      { model: 'KIA Rio III', years: '2011–2017' },
      { model: 'Hyundai i20', years: '2008–2014' },
    ],
  },
  {
    slug: 'g4fc',
    code: 'G4FC',
    brand: 'Hyundai',
    brandColor: '#002c5f',
    cylinders: 4,
    title: 'Hyundai G4FC 1.6L',
    subtitle: 'Бензиновый, 16V, DOHC, 123 л.с.',
    price: 'от 220 000 ₽',
    features: [
      'Новый, поставка Hyundai-Kia',
      'Серия Gamma, цепной привод ГРМ',
      'Заводская гарантия 12 месяцев',
    ],
    fits: ['Hyundai Solaris', 'Hyundai i30', 'KIA Cerato'],
    description:
      '1.6-литровый бензиновый мотор серии Gamma. Цепной привод ГРМ исключает плановую замену ремня. Один из самых популярных моторов на вторичном рынке РФ — массовость и доступность запчастей.',
    specs: [
      { label: 'Модель', value: 'G4FC' },
      { label: 'Объём', value: '1591 см³ (1.6 л)' },
      { label: 'Тип', value: 'Бензиновый, рядный' },
      { label: 'Кол-во цилиндров', value: '4' },
      { label: 'Клапанов', value: '16 (4 на цилиндр)' },
      { label: 'ГРМ', value: 'DOHC, цепь' },
      { label: 'Мощность', value: '123 л.с. при 6300 об/мин' },
      { label: 'Крутящий момент', value: '155 Нм при 4200 об/мин' },
      { label: 'Степень сжатия', value: '10.5 : 1' },
      { label: 'Топливо', value: 'АИ-95' },
      { label: 'Система питания', value: 'Инжектор (MPI)' },
      { label: 'Масло', value: '5W-30, 3.6 л' },
      { label: 'Ресурс', value: '~250 000 км' },
    ],
    applications: [
      { model: 'Hyundai Solaris I', years: '2010–2017' },
      { model: 'Hyundai Accent IV', years: '2010–2017' },
      { model: 'Hyundai i30 II', years: '2011–2017' },
      { model: 'KIA Cerato II', years: '2008–2013' },
      { model: 'KIA Soul I', years: '2008–2013' },
    ],
  },
  {
    slug: 'g4fg',
    code: 'G4FG',
    brand: 'KIA',
    brandColor: '#bb162b',
    cylinders: 4,
    title: 'KIA G4FG 1.6L MPI',
    subtitle: 'Бензиновый, 16V, DOHC, 123 л.с.',
    price: 'от 235 000 ₽',
    features: [
      'Новый, серия Gamma II',
      'Цепной привод ГРМ — без замены ремня',
      'Установка у партнёров в Москве',
    ],
    fits: ['KIA Rio', 'KIA Cerato', 'Hyundai Solaris II'],
    description:
      '1.6-литровый бензиновый мотор семейства Gamma II — обновлённая версия G4FC. Применяется на современных моделях Hyundai Solaris II и Kia Rio IV / Cerato III.',
    specs: [
      { label: 'Модель', value: 'G4FG' },
      { label: 'Объём', value: '1591 см³ (1.6 л)' },
      { label: 'Тип', value: 'Бензиновый, рядный' },
      { label: 'Кол-во цилиндров', value: '4' },
      { label: 'Клапанов', value: '16 (4 на цилиндр)' },
      { label: 'ГРМ', value: 'DOHC, цепь' },
      { label: 'Мощность', value: '123 л.с. при 6300 об/мин' },
      { label: 'Крутящий момент', value: '151 Нм при 4850 об/мин' },
      { label: 'Степень сжатия', value: '11.0 : 1' },
      { label: 'Топливо', value: 'АИ-95' },
      { label: 'Система питания', value: 'Инжектор (MPI)' },
      { label: 'Масло', value: '5W-30, 3.6 л' },
      { label: 'Ресурс', value: '~250 000 км' },
    ],
    applications: [
      { model: 'Hyundai Solaris II', years: '2017–2020' },
      { model: 'KIA Rio IV', years: '2017–2020' },
      { model: 'KIA Cerato III', years: '2013–2018' },
      { model: 'KIA Ceed III', years: '2018+' },
    ],
  },
  {
    slug: 'g4kd',
    code: 'G4KD',
    brand: 'KIA',
    brandColor: '#bb162b',
    cylinders: 4,
    title: 'KIA G4KD 2.0L',
    subtitle: 'Бензиновый, 16V, DOHC, 150 л.с.',
    price: 'от 295 000 ₽',
    features: [
      'Новый, серия Theta II MPI',
      'Заводская упаковка и консервация',
      'Гарантия 12 месяцев от производителя',
    ],
    fits: ['KIA Sportage III', 'KIA Optima', 'Hyundai ix35', 'Hyundai Sonata'],
    description:
      '2.0-литровый бензиновый мотор серии Theta II MPI с цепным приводом ГРМ. Используется на кроссоверах и седанах среднего класса Hyundai-Kia.',
    specs: [
      { label: 'Модель', value: 'G4KD' },
      { label: 'Объём', value: '1998 см³ (2.0 л)' },
      { label: 'Тип', value: 'Бензиновый, рядный' },
      { label: 'Кол-во цилиндров', value: '4' },
      { label: 'Клапанов', value: '16 (4 на цилиндр)' },
      { label: 'ГРМ', value: 'DOHC, цепь' },
      { label: 'Мощность', value: '150 л.с. при 6200 об/мин' },
      { label: 'Крутящий момент', value: '196 Нм при 4600 об/мин' },
      { label: 'Степень сжатия', value: '10.5 : 1' },
      { label: 'Топливо', value: 'АИ-95' },
      { label: 'Система питания', value: 'Инжектор (MPI)' },
      { label: 'Масло', value: '5W-30, 4.5 л' },
      { label: 'Ресурс', value: '~250 000 км' },
    ],
    applications: [
      { model: 'KIA Sportage III', years: '2010–2016' },
      { model: 'KIA Optima III', years: '2010–2015' },
      { model: 'Hyundai ix35', years: '2010–2015' },
      { model: 'Hyundai Sonata YF', years: '2010–2014' },
      { model: 'KIA Soul II', years: '2014–2019' },
    ],
  },
];

export function findEngineBySlug(slug: string): Engine | undefined {
  return engines.find((e) => e.slug === slug);
}
