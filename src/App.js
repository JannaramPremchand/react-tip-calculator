import React,{useState} from 'react';
import './App.css';
import Header from './Components/Header';
import InputOutput from './Components/InputOutput';
import Footer from './Components/Footer';

  
function App() {
  const [customername,setCustomerName]= useState([

    
  ])
  const [totaltip, setTip] = useState([0])

    const AddCustomerName=(link)=>{
      setCustomerName([...customername,link])
    }

    const AddTip=(link)=>{
      setTip([...totaltip,link]);
      console.log(setTip);
      
    }
    console.log(AddTip);

  

  return (
    <>
    <div className="container  my-2 banner">
      <div className ="inner">
    <Header/>
    <InputOutput customername={customername} AddCustomerName={AddCustomerName} totaltip={totaltip} AddTip={AddTip} />
    <Footer/>
    </div>
    </div>
   
    
    </>
  );
}

export default App;
