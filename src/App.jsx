
import './App.css'; 
import Home from './components/Home/Home';
import Card from './components/Card/Card';
import Parent from './components/Parent/Parent';
import About from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Web from './components/Web/Web';
import Mobile from './components/Mobile/Mobile';
import Gallery from './components/Gallery/Gallery';




function App(){
  return <>
    <NavBar/>
    <Gallery/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='Home' element={<Home />}>
          </Route>
          <Route path='About' element={<About />}>
          </Route>
          <Route path='Parent' element={<Parent />}>
          </Route>
          <Route path='*' element={<NotFound />}>
          </Route>
          <Route path='Projects' element={<Projects/>}>
            <Route path='Web' element={<Web/>}/>
            <Route path='Mobile' element={<Mobile/>} />
          </Route>
        </Routes>
      </div> 
    <Footer/>
  </>
}
export default App;