import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { Advantages } from './components/Advantages';
import { Delivery } from './components/Delivery';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Advantages />
        <Delivery />
      </main>
      <Footer />
    </div>
  );
}
