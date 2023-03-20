import {BrowserRouter, Routes, Route } from 'react-router-dom'

//pages and componenets
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
            <Routes>
                <Route
                />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
