import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import $ from 'jquery';
import Aos from 'aos';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Businesses from './components/businesses/Businesses';
import ContactUs from './components/contact-us/ContactUs';
import 'aos/dist/aos.css';
import Sustainability from './components/sustainablity/Sustainability';
import Awards from './components/awards/Awards';
import AboutUs from './components/about-us/AboutUs';

function App() {

  // Resets Window position to top after location change
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({
      duration: 1200
    });
    Aos.refresh();
  }, [pathname]);

  // Show button after scrolling few pixels
  $(window).scroll(function () {
    var btn = $('#bottomtop');
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  // Down to Top scroll
  const bottomTotop = () => {
    $('html, body').animate({ scrollTop: 0 }, '300');
  }

  return (
    <>
      <button id="bottomtop" onClick={bottomTotop}><i className="fa fa-arrow-up" aria-hidden="true"></i></button>
      <Navbar />
      <div className="banner-space"></div>
      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route exact element={<Businesses />} path="/Businesses" />
        <Route exact element={<ContactUs />} path="/Contact-us" />
        <Route exact element={<Sustainability />} path="/Sustainability" />
        <Route exact element={<Awards />} path="/Awards" />
        <Route exact element={<AboutUs />} path="/About-us" />
      </Routes>
      <Footer />
    </>
  );
}

// 1. Check for data-aoe-delay
// 2. Check for className and class
// 3. Check for Style
// 4. Check for Comments
// 5. Complete Navbar

export default App;
