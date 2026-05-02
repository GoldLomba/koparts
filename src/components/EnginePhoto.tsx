type Props = {
  code: string;
  cylinders?: 3 | 4;
  accentColor?: string;
  className?: string;
};

const BASE = import.meta.env.BASE_URL;
const DEFAULT_IMG = `${BASE}engine.jpg`;

const IMAGE_BY_CODE: Record<string, string> = {
  F8CV: `${BASE}engine-f8cv.jpg`,
};

export default function EnginePhoto({ code, className }: Props) {
  const src = IMAGE_BY_CODE[code] ?? DEFAULT_IMG;
  return (
    <img
      src={src}
      alt={`Двигатель ${code}`}
      loading="lazy"
      className={className}
    />
  );
}
