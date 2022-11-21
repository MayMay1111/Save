import 'swiper/swiper.min.css'
import './App.scss';


import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import RoutePaths from './config/RoutePaths.jsx'

function App() {
  return (
    <>
      <Header/>
      <RoutePaths/>
      <Footer/>
    </>
  );
}

export default App;
