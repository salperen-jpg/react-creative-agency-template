import './App.css';
import About from './components/about.js/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Meters from './components/meters/Meters';
import Services from './components/services/Services';
import Sidebar from './components/Sidebar';
import Quotes from './components/quote/Quotes';
import Gallery from './components/gallery/Gallery';
import Hero from './components/hero/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <main className='section-layout'>
      <Hero />
      <About />
      <Meters />
      <Services />
      <Quotes />
      <Gallery />
      <Contact />
      <Footer />
      <Sidebar />
    </main>
  );
}

export default App;
