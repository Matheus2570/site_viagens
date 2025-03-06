import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Viajem1 from './pages/Viajem1';
import Viajem2 from './pages/Viajem2';
import Viajem3 from './pages/Viajem3';
import Viajem4 from './pages/Viajem4';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/viajem1" element={<Viajem1/>} />
        <Route path="/viajem2" element={<Viajem2/>} />
        <Route path="/viajem3" element={<Viajem3/>} />
        <Route path="/viajem4" element={<Viajem4/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App