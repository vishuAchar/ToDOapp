import React from 'react'

function ToDOList(props) {
    const deleteItem=()=>{
        console.log('deleted');
    }
  return (
    <div className='todo_style'>
        <button onClick={()=>{
           return props.onSelect(props.id)
        }}>X</button>
        <li> {props.text} </li>
    </div>
  )
}

export default ToDOList
