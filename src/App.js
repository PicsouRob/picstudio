import React from 'react';
import Footer from './components/Footer';
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Portfolio from './screens/Portfolio';
import Services from './screens/Services';
import Team from './screens/Team';
import Testimonial from './screens/Testimonial';

function App() {
  return (
    <div className="App h-auto text-slate-800 font-sans">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Testimonial />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;