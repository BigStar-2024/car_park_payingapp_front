import success from "../assets/Success.gif";
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Card.css";
import { useAppSelector } from "../../redux/hooks"; 



function Completion(props) {
  const parkName = useAppSelector(state => state.pay.parkName);
  const licensePlateNumber = useAppSelector(
    state => state.pay.licensePlateNumber
  );
  const [messageBody, setMessageBody] = useState('');
  const { stripePromise } = props;
  const [amount, setAmount] = useState('');
  const [createDate, setCreateDate] = useState('');
  const [receiptEmail, setReceiptEmail] = useState('');
  const [status, setStatus] = useState('');
  

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/payments_log`)
      .then(res => {
        const data = res.data.data
        console.log(data);
        setAmount(data[0].amount / 100);

        const timestamp = data[0].created*1000;
        const date = new Date(timestamp); // Convert timestamp to Date object
        // const formattedDate = date.toI(); // Get the date in a readable format
        const options = { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const formattedDate = date.toLocaleString('en-US', options); // Get date and time in EDT format
        setCreateDate(formattedDate)

        setReceiptEmail(data[0].receipt_email)
        setStatus(data[0].status)
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }, [setAmount, setReceiptEmail, setStatus])



  useEffect(() => {
    if (!stripePromise) return;

    stripePromise.then(async (stripe) => {
      const url = new URL(window.location);
      const clientSecret = url.searchParams.get('payment_intent_client_secret');
      const { error, paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

      setMessageBody(error ? `> ${error.message}` : (
        <>&gt; Payment {paymentIntent.status}: <a href={`https://dashboard.stripe.com/test/payments/${paymentIntent.id}`} target="_blank" rel="noreferrer">{paymentIntent.id}</a></>
      ));
    });
  }, [stripePromise]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 flex items-center justify-center completion">
        <div
          className=" rounded-[20px] border-solid border-[0px] bg-[#FFFAF9] relative py-10 px-20 m-10 shadow-lg"
          style={{ transition: "transform 3s", transform: "scale(1)" }}
        >
          <div className='flex flex-col justify-center items-center'>
            <div className="mt-5">
              <img src={success} alt="Success" className="success-img"></img>
            </div>
            <p className='text-4xl text-[#FA551D] font-bold mt-4'>Payment {status}!</p>
          </div>
          <div className="flex flex-col p-2">
            <div className="flex float-left">
              <p className='text-xl text-[grey] font-bold mt-4'>Lot : </p>
              <p className='text-xl text-[#091C62] font-bold mt-4 ml-2'> {parkName}</p>
            </div>
            <div className="flex float-left">
              <p className='text-xl text-[grey] font-bold mt-4'>Plate Number : </p>
              <p className='text-xl text-[#091C62] font-bold mt-4 ml-2'> {licensePlateNumber}</p>
            </div>
            <div className="flex float-left">
              <p className='text-xl text-[grey] font-bold mt-4'>Amount : </p>
              <p className='text-xl text-[#091C62] font-bold mt-4 ml-2'> ${amount}</p>
            </div>
            <div className="flex float-left">
              <p className='text-xl text-[grey] font-bold mt-4'>Receipt Email : </p>
              <p className='text-xl text-[#091C62] font-bold mt-4 ml-2'> {receiptEmail}</p>
            </div>
            <div className="flex">
              <p className='text-xl text-[grey] font-bold mt-4'>Payment Date (EDT) : </p>
              <p className='text-xl text-[#091C62] font-bold mt-4 ml-2'> {createDate}</p>
            </div>

          </div>
          <div className="flex flex-col justify-center items-center">
            <p className='text-2xl text-[red] font-bold mt-6'>Thanks for your park!</p>
            <a href="/" className="text-2xl text-[#091C62] mx-2 underline mt-4">HOME</a>
            <div id="messages" role="alert" style={messageBody ? { display: 'block' } : {}}>{messageBody}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Completion;
