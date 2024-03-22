import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Feed from './pages/Feed';



function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Feed/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
      <Feed/>
    </div>
  );
}

export default App;
