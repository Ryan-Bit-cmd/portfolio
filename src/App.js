import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Viewmework from './Components/Viewmework';
import Contactme from './Components/Contactme';
function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>Ryan Reagan</h1>
      </header>
        {/* nav links */}
        <nav>
          <Link to = "/" className='m-4 btn btn-dark'>Home</Link>
          <Link to ="/About" className='m-2 btn btn-dark'>About Me</Link>
          </nav>    
          <Routes>  
            <Route path='/' element ={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/view-work' element={<Viewmework/>}/>
            <Route path='/contact' element={<Contactme/>}/>
          </Routes>
    </div>
        </BrowserRouter>        
  );
}

export default App;
