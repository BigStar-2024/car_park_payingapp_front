import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchLot from './pages/SearchLot';
import Payment from './pages/Payment';
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Completion from './components/Modal/Completion';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import axios from 'axios';



function App() {
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/config`)
      .then(async (response) => {
        const { publishableKey } = response.data;
        console.log("config", publishableKey, process.env.REACT_APP_BACKEND_URL);
        setStripePromise(loadStripe(publishableKey));
      })
      .catch((error) => {
        console.error('Error fetching config:', error);
      });
  }, []);

  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SearchLot />} exact />
            <Route path="/Payment/:item/parkingTab" element={<Payment />} />
            <Route path="/completion" element={<Completion stripePromise={stripePromise} />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
