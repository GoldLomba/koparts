type Props = {
  className?: string;
};

const MAX_ICON = `${import.meta.env.BASE_URL}max-icon.webp`;

export default function MaxIcon({ className }: Props) {
  return (
    <img
      src={MAX_ICON}
      alt="MAX"
      loading="lazy"
      className={className}
    />
  );
}
