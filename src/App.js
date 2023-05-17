import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <div id="bottomtop"><i class="fa fa-arrow-up" aria-hidden="true"></i></div>
      <Navbar />
      <div class="banner-space"></div>
      <Home />
      <Footer />
    </>
  );
}

export default App;
