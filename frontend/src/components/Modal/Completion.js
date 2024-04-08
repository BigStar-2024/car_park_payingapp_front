import success from "../assets/Success.gif";
import { useEffect, useState } from 'react';

function Completion(props) {
  const [messageBody, setMessageBody] = useState('');
  const { stripePromise } = props;

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
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div
          className="bg-white rounded-lg border-solid border-[5px] border-[#grey] relative py-10 px-20 m-10"
          style={{ transition: "transform 3s", transform: "scale(1)" }}
        >
          <div className='flex flex-col justify-center items-center'>
            <p className='text-6xl text-[#FA551D] font-bold mt-6'>Thank you!</p>
            <p className='text-4xl text-[#091C62] font-bold mt-10'>Payment succeeded!</p>
            <div className="mt-5">
              <img src={success} alt="Success" className="success-img"></img>
            </div>
            <a href="/" className="text-2xl text-[#091C62] mx-2 underline mt-4">HOME</a>
            <div id="messages" role="alert" style={messageBody ? { display: 'block' } : {}}>{messageBody}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Completion;
