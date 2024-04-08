import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchLot from './pages/SearchLot';
import Payment from './pages/Payment';
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Completion from './components/Modal/Completion';
import { Provider } from 'react-redux';
import { store } from './redux/store';


function App() {
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    fetch("/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
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
