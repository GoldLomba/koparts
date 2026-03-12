import { Engine } from '../types';

export const engines: Engine[] = [
  {
    id: 1,
    name: 'F8CV 0.8L',
    model: 'Катушка и Трамблер',
    brand: 'Daewoo',
    volume: '0.8L',
    power: '52 л.с.',
    year: '2000-2015',
    price: 55000,
    oldPrice: 65000,
    image: './src/images/F8CV.jpeg',
    inStock: true,
    warranty: '6 месяцев',
    mileage: 'Новый',
    condition: 'new',
  
  },
  {
    id: 2,
    name: 'B10S1',
    model: 'B10S1 1.0L',
    brand: 'Daewoo',
    volume: '1.0L',
    power: '64 л.с.',
    year: '2003-2015',
    price: 52000,
    probel:'',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    inStock: true,
    warranty: '12 месяцев',
    mileage: 'Новый',
    condition: 'new'
  },
  {
    id: 3,
    name: 'G4EE 1.4L',
    model: '',
    brand: 'Hyundai',
    volume: '1.4L',
    power: '98 л.с.',
    year: '2005-2010',
    price: 95000,
    oldPrice: 105000,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop',
    inStock: true,
    warranty: '6 месяцев',
    mileage: 'Новый',
    condition: 'new'
  }
];
