
import './App.css'; 
import Home from './components/Home/Home';
import { CounterContextProvider } from './CounterContext';
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
  return( 
  <>
    <CounterContextProvider>
      <Home/>
      <About/>
    </CounterContextProvider>
  </>
  )
}
export default App;