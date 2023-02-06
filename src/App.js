import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import User from './Component/User';

function App() {
  const [data, setData]= useState([])

  let fetchData = async(url)=>{
    let res = await fetch('https://randomuser.me/api/')
    let newData = await res.json()
    setData(newData.results)
  }
  useEffect(()=>{
    fetchData()
  },[])




  return (
    <div className="App">

    <User newdata={data} fetchData={fetchData} />
  
  
    </div>
  );
}

export default App;
