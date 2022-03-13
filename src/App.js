import logo from './logo.svg';
import './index.css';
import Header from './component/Header'
import About from './component/About';
import Experinace from './component/Experinace';
import Services from './component/Services';
import Portfolio from './component/Portfolio';
import Testimonial from './component/Testimonial';
import Footer from './component/Footer';
import Contact from './component/Contact';
import Nav from './component/Nav';
function App() {
  return (
    <>
      
        <Header />
        <Nav />
        <About />
        <Experinace />
        <Services />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
       
    </>
  );
}

export default App;
