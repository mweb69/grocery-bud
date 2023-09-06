import { useState } from 'react'
import './App.css'
import list from './assets/list'
import { nanoid } from 'nanoid' 
import Input from './Input';

function App() {
  const[listOfProduct,setListOfProduct]= useState(list);

  function removedItem(isChecked,product){
    if(isChecked){
      setListOfProduct(listOfProduct.filter((pro)=> pro.id !== product.id));
    } 
  }

  function addItem(productName){
    if(productName !== ''){
      const newProduct = {
        id : nanoid(),
        name : productName,
      };
      const list = listOfProduct;
      list.push(newProduct);
      setListOfProduct(list);
    }
  }
  

  return (
    <div>
      <h1>Grocery Bud</h1>
      <Input addItem={addItem} />
    </div>
  )
}

export default App;
