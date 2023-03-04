// import Header from './components/Header';
// import ToDOList from './components/ToDOList';
import React, { useState } from 'react';
import ToDOList from './components/ToDOList';
import './App.css'

function App() {
const[inputList,setInputList] = useState('');
const[items,setItems]=useState([]);

const itemEvent=(event)=>{
setInputList(event.target.value);
}

const listOfItem=()=>{
  setItems((oldItems)=>{
    return [...oldItems, inputList];
  })
  setInputList("");
  

}
const deleteItem=(id)=>{
console.log('deleted' );
setItems((oldItems)=>{
 return oldItems.filter((arr,index)=>{
  return index!==id;
  })
})

}



  return (
    <div className="main_div">
      <div className="container">

      <div className='header_div'>
        <h1>To Do List</h1>
        </div>
        <div className="input_div">
        <input className='type_box'
         type="text" 
         value={inputList} 
         placeholder='Add a Items' 
         onChange={itemEvent} 
         />
        <button onClick={listOfItem}>+</button>
        </div>

        <div className="list_div">
          <ul>
          { items.map((itemVal,index)=>{
           return <ToDOList
            id={index}
            key={index}
            text={itemVal}
            onSelect = {deleteItem} />
           })}
          </ul>

      </div>
    </div>
      
    </div>
  );
}

export default App;
