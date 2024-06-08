import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import InputOutput from './Components/InputOutput';
import Footer from './Components/Footer';

function App() {
  const [customername, setCustomerName] = useState([]);
  const [totaltip, setTip] = useState([0]);

  const AddCustomerName = (link) => {
    setCustomerName([...customername, link]);
  };

  const AddTip = (link) => {
    setTip([...totaltip, link]);
  };

  return (
    <div className="container my-2">
      <Header />
      <InputOutput 
        customername={customername} 
        AddCustomerName={AddCustomerName} 
        totaltip={totaltip} 
        AddTip={AddTip} 
      />
      <Footer />
    </div>
  );
}

export default App;
