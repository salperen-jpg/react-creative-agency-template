import './App.css';
import About from './components/about.js/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Meters from './components/meters/Meters';
import Services from './components/services/Services';

function App() {
  return (
    <main className='section-layout'>
      <About />
      <Meters />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
