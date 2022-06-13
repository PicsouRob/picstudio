import React from 'react';
import Footer from './components/footer';
import About from './screens/About';
import Home from './screens/home';
import Portfolio from './screens/Portfolio';
import Pricing from './screens/Pricing';
import Services from './screens/Services';
import Team from './screens/Team';
import Testimonial from './screens/Testimonial';

function App() {
  return (
    <div className="App h-auto font-extralight">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Pricing />
        <Testimonial />
        <Footer />
    </div>
  );
}

export default App;