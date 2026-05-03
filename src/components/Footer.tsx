export default function Footer() {
  return (
    <footer className="bg-white border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}logo.jpg`}
              alt="KO PARTS"
              className="h-8 w-auto object-contain"
            />
          </div>

          <p className="text-xs text-text-secondary text-center">
            © {new Date().getFullYear()} KO PARTS. Новые двигатели Daewoo, Hyundai, KIA. Все права защищены.
          </p>

          <div className="flex items-center gap-4 text-xs text-text-secondary">
            <span>Доставка: Москва, вся Россия</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
