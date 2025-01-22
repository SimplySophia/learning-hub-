
import './App.css';
import About from './components/About';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Services from './components/Services';

function App() {
  return (
    <div >
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <Newsletter />
      <Cards />
    </div>
  );
}

export default App;
