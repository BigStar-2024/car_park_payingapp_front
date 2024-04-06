import React from 'react';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import SearchLot from './pages/SearchLot';
import Payment from './pages/Payment'; 
import LabTabs from './components/Tabview';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchLot />} exact />
          <Route path="/Payment/:item/parkingTab" element={<Payment />} /> 
          {/* <Route path="/Payment/:item/parkingTab" element={<LabTabs />} />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
