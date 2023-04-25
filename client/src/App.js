import {BrowserRouter, Routes, Route } from 'react-router-dom'

//pages and componenets
import Navbar from './Components/Navbar';
//import Home from './Pages/Home';
//import Happy from './Pages/Happy';
import VolunteerDeliveryAccept from './Pages/Volunteer/VolunteerDeliveryAccept';
import VolunteerMgmt from './Pages/Volunteer/VolunteerMgmt';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
            <Routes>
                <Route
                  path="/volunteer-delivery-accept"
                  element={<VolunteerDeliveryAccept/>}
                />
                <Route
                  path="/"
                  element={<VolunteerMgmt/>}
                />

            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
