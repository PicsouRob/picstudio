import React from 'react';
import Footer from './components/footer';
import Features from './screens/Features';
import Home from './screens/home';

function App() {
  return (
    <div className="App font-extralight px-6 md:px-8 min-h-screen mx-auto max-w-7xl">
      <Home />
      <Features />
      <Footer />
    </div>
  );
}

export default App;