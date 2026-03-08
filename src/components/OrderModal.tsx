import { useState } from 'react';
import { Engine } from '../types';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  engine: Engine | null;
}

export function OrderModal({ isOpen, onClose, engine }: OrderModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen || !engine) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send data to the server
    console.log('Order submitted:', { engine, formData });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', comment: '' });
      onClose();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
        >
          <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Заявка отправлена!</h3>
            <p className="text-slate-600">Мы свяжемся с вами в ближайшее время</p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="p-6 border-b border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900">Оформление заказа</h2>
              <p className="text-slate-500 mt-1">Заполните форму и мы свяжемся с вами</p>
            </div>

            {/* Engine info */}
            <div className="p-6 bg-slate-50">
              <div className="flex gap-4">
                <img 
                  src={engine.image} 
                  alt={engine.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <div className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mb-2 ${
                    engine.brand === 'Daewoo Matiz' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {engine.brand}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">{engine.name}</h3>
                  <p className="text-slate-500 text-sm">{engine.model} • {engine.volume} • {engine.power}</p>
                  <div className="mt-2 text-xl font-bold text-amber-600">
                    {formatPrice(engine.price)} ₽
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-slate-700 mb-2">
                  Комментарий
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none"
                  placeholder="Дополнительная информация..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/30"
              >
                Отправить заявку
              </button>

              <p className="text-center text-xs text-slate-500">
                Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
