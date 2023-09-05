import { useState } from 'react'
import './App.css'
import list from './assets/list'
import { nanoid } from 'nanoid' 

function App() {
  const[listOfProduct,setListOfProduct]= useState(list);

  function removedItem(isChecked,product){
    if(isChecked){
      setListOfProduct(listOfProduct.filter((pro)=> pro.id !== product.id));
    } 
  }

  function addItem(productName){
    const newProduct = {
      id : nanoid(),
      name : productName,
    };
    setListOfProduct([...listOfProduct,newProduct]);
  }
  

  return (
    <div>
      <h1>Lala</h1>
    </div>
  )
}

export default App;
