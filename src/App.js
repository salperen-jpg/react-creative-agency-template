import './App.css';
import About from './components/about.js/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Meters from './components/meters/Meters';
import Services from './components/services/Services';
import Sidebar from './components/Sidebar';
import Quotes from './components/quote/Quotes';

function App() {
  return (
    <main className='section-layout'>
      <About />
      <Meters />
      <Services />
      <Quotes />
      <Contact />
      <Footer />
      <Sidebar />
    </main>
  );
}

export default App;
