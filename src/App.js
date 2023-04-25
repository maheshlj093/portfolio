import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Project from './components/pages/Project'
import Navbar from './components/inc/Navbar';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/Portfolio' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Project' element={<Project />} />
        
      </Routes>  
          
    </div>
  );
}

export default App;
