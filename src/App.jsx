import logo from './logo.svg';
import './App.css'; 
import Home from './components/Home/Home';
import Card from './components/Card/Card';
import Parent from './components/Parent/Parent';



function App(){
  return <>
  <div className='container'>
      <h1>App Component</h1>
      <Parent/>
  </div>
    
  </>
}
export default App;