import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  // Function to show toast
  const notify = () => {
    toast("Introducing Thrift Store E Fashion! 🛍️ Explore our new curated collection of pre-loved fashion must-haves. Get ready to score unique finds at affordable prices. Start shopping now and upgrade your style!");
  
    toast("Your wait is over! 🎉 PANT is now back in stock in XXXL size. Get it before it sells out again!");
    toast("Flash Sale Alert! ⏰ Ethnic Dresses from your Wishlist is now [Discount upto 50% off. Limited time only! ⏰");
    toast("Good news! 🎉🎉 High-Heels from your Wishlist 🤲is now available in all sizes and colours. Shop now and get ready to enjoy!🥰🥰");
    toast("SALE IS LIVE NOW! 🚨 Don't miss out on our biggest sale of the season! Shop your Wishlist favorites at unbeatable prices. Hurry, sale ends soon! ⏰");
   };

  // Style for the heading
  const headingStyle = {
    color: 'blue'
  };

  return (
    <div className="App">
      <h1 style={headingStyle}> </h1>
      <button onClick={notify}>NOTIFY</button>
      <ToastContainer />
    </div>
  );
}

export default App;
