import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Products from './components/Products';
import Specs from './components/Specs';
import Delivery from './components/Delivery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brands />
        <Products />
        <Specs />
        <Delivery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
