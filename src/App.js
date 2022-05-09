import React from 'react';
import Footer from './components/footer';
import Features from './screens/Features';
import FeaturesApp from './screens/FeaturesApp';
import Home from './screens/home';

function App() {
  return (
    <div className="App h-auto font-extralight">
      <Home />
      <FeaturesApp />
      <Features />
      <Footer />
    </div>
  );
}

export default App;