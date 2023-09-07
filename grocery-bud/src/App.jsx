import { useEffect, useState } from 'react'
import './App.css'
import { list } from './assets/list'
import { nanoid } from 'nanoid' 
import Input from './Input';
import ListProduct from './ListProduct';
import MyAlert from './MyAlert';

function App() {
  const[listOfProduct,setListOfProduct]= useState(list);

  useEffect(()=>{
    localStorage.setItem('myArray', JSON.stringify(listOfProduct));
  },[listOfProduct])

  

  function removeItem(isChecked,product){
    if(isChecked){
      setListOfProduct((prevList)=>
        prevList.filter((prod)=>prod.id !== product.id)
      )
    }
  }

  function addItem(productName){
    if(productName !== ''){
      const newProduct = {
        id : nanoid(),
        name : productName,
      };
      setListOfProduct((list) => [...list,newProduct]);
    }
  }
  

  return (
    <div>
      <MyAlert variant="success" message="This is a success alert." />
      <h1>Grocery Bud</h1>
      <Input addItem={addItem} />
      <ListProduct removeItem={removeItem} listOfProduct={listOfProduct} />
    </div>
  )
}

export default App;
