import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { UpdateFollower } from 'react-mouse-follower';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import BannerText from './components/Banner Text/BannerText';
import Footern from './components/Footer/Footern';
import About from './components/About';
import Contact from './components/Contact';
import Reviews from './components/Reviews/Reviews';
import CheckoutForm from './components/Checkout/CheckoutForm';

function App() {
  return (
    <Router>
      <main className='overflow-x-hidden'>
        <UpdateFollower 
          mouseOptions={{
            backgroundColor: "White", 
            zIndex: 999,
            followSpeed: 1.7,
          }}>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services/>
                <Banner />
                <BannerText />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/checkout" element={<CheckoutForm />} />
          </Routes>
        </UpdateFollower>
        <Footern />
      </main>
    </Router>
  );
}

export default App;
