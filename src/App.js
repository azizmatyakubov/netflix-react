import {BrowserRouter, Routes, Route} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyFooter from "./components/MyFooter";
import NotFound from "./components/NotFound";

import Gallery from "./components/Gallery";
import MyNavbar from "./components/Navbar";
import TvShows from './components/TvShows';


function App() {
  return (
    <>
    <BrowserRouter>
      <MyNavbar
        logoWidth={"100%"}
        iconWidth={"40px"}
        bgColor={"black"}
        textColor={"white"}
        fontSize={"20px"}
        logoSmartphoneWidth={"180px"}
      />
    
      <Routes>
        <Route path='/'  element={<Gallery />}/>
        <Route path='/tv-shows'  element={<TvShows />}/>
        <Route path='*'  element={<NotFound />}/>
      </Routes>
      <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
