import './App.css';
import About from './components/about.js/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Meters from './components/meters/Meters';
import Services from './components/services/Services';
import Sidebar from './components/Sidebar';
import Quotes from './components/quote/Quotes';
import Gallery from './components/gallery/Gallery';

function App() {
  return (
    <main className='section-layout'>
      <About />
      <Meters />
      <Services />
      <Quotes />
      <Contact />
      <Gallery />
      <Footer />
      <Sidebar />
    </main>
  );
}

export default App;
