import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Services from './components/Services';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      <Internships />
      <Projects />
      <Leadership />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
