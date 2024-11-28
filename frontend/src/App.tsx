import ConfirmRide from './pages/ConfirmRIde';
import EstimateForm from './pages/EstimateRide';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import './App.css';
import HistoricRider from './pages/HistoricRide';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EstimateForm />} />
          <Route path="/confirm-travel" element={<ConfirmRide />} />
          <Route path="/travel-historic" element={<HistoricRider />} />
          <Route path={`*`} element={<Navigate to={`/`} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


