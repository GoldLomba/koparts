type Props = {
  code: string;
  cylinders?: 3 | 4;
  accentColor?: string;
  className?: string;
};

const ENGINE_IMG = `${import.meta.env.BASE_URL}engine.jpg`;

export default function EnginePhoto({ code, className }: Props) {
  return (
    <img
      src={ENGINE_IMG}
      alt={`Двигатель ${code}`}
      loading="lazy"
      className={className}
    />
  );
}
