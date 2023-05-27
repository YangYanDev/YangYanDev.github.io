import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import Navbar from './navbar/navbar';
import Carousel from './carousel/carousel';
import Events from './events/events';
import Loading from './loading/loading';
import Footer from './footer/footer';
import OpenCard from './open-card/open-card';
import AddingCard from './adding-card/adding-card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MarketPlace from './market-place/market-place';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Carousel}/>
      </Routes>
      <Routes>
        <Route path='/' Component={Events}/>
      </Routes>
      <Routes>
        <Route path='/' Component={Loading}/>
      </Routes>
      <Routes >
        <Route path='/add' Component={AddingCard}/>
      </Routes>
      <Routes>
        <Route path='/events/:eventType' Component={MarketPlace}/>
      </Routes>
      <Routes>
        <Route path='/event/:eventID' Component={OpenCard}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
