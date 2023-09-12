import { useEffect, useState } from 'react'
import './App.css'
import { list } from './assets/list'
import { nanoid } from 'nanoid' 
import Input from './Input';
import ListProduct from './ListProduct';
import MyAlert from './MyAlert';

function App() {
  const[listOfProduct,setListOfProduct]= useState(list);
  const[itemAdded,setItemAdded] = useState(false);
  const[itemRemoved,setItemRemoved] = useState(false);

  useEffect(()=>{
    localStorage.setItem('myArray', JSON.stringify(listOfProduct));
  },[listOfProduct])

  

  function removeItem(isChecked,product){
    if(isChecked && !itemAdded){
      setListOfProduct((prevList)=>
        prevList.filter((prod)=>prod.id !== product.id)
      )
      setItemRemoved(true)
    }
  }

  function addItem(productName){
    if((productName !== '')&&(!itemRemoved)){
      const newProduct = {
        id : nanoid(),
        name : productName,
      };
      setListOfProduct((list) => [...list,newProduct]);
      setItemAdded(true)
    }
  }
  

  return (
    <div>
      {itemAdded && 
        <MyAlert variant="success" message="Item Added To The List" setItem={setItemAdded} />
      }
      {itemRemoved &&
        <MyAlert variant="danger" message="Item Removed" setItem={setItemRemoved} />
      }
      <h1>Grocery Bud</h1>
      <Input addItem={addItem} />
      <ListProduct removeItem={removeItem} listOfProduct={listOfProduct} />
    </div>
  )
}

export default App;
