import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import $ from 'jquery';
import Businesses from './components/businesses/Businesses';
import ContactUs from './components/contact-us/ContactUs';

function App() {

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
