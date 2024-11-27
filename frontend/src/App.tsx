import ConfirmRide from './pages/ConfirmRIde';
import EstimateForm from './pages/EstimateRide';
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EstimateForm />} />
          <Route path="/confirm-travel" element={<ConfirmRide />} />
          <Route path="/travel-historic" element={<div></div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


