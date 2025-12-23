import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhoWeAre from './components/WhoWeAre';
import Services from './components/Services';
import Network from './components/Network';
import Results from './components/Results';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-black text-white font-display overflow-x-hidden antialiased">
      <Navbar />
      <Hero />
      {/* <Stats /> */}
      <WhoWeAre />  
      <Results />    
      <Services />
      <Network />
      <Portfolio />
      <WhyChooseUs />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;