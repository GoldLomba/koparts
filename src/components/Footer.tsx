export default function Footer() {
  return (
    <footer className="bg-white border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-sm font-bold text-text">КорПартс</span>
          </div>

          <p className="text-xs text-text-secondary text-center">
            © {new Date().getFullYear()} КорПартс. Контрактные двигатели Daewoo, Hyundai, KIA. Все права защищены.
          </p>

          <div className="flex items-center gap-4 text-xs text-text-secondary">
            <span>Доставка: Москва, вся Россия</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
