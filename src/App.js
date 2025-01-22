
import './App.css';
import About from './components/About';
import Cards from './components/Cards';
import Review from './components/Review';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Courses from './components/Courses';

function App() {
  return (
    <div >
      <Navbar/>
      <Hero />
      <About />
      <Courses />
      <Newsletter />
      <Cards />
      <Review />
    </div>
  );
}

export default App;
