import React, { useState } from 'react'

const Input = (props) => {
    const [item,setItem] = useState("")
    const { addItem } = props;
    return (
        <div>
            <form className='form' onSubmit={()=>{}}>
                <input 
                    className='addItemInput'
                    name='addItem' 
                    id='addItem' 
                    value={item} 
                    onChange={(e)=>{
                        setItem(e.target.value)
                    }}
                />
                <button
                    onClick={()=>{
                        addItem(item)
                    }} 
                    className='btn btn-block'
                    type='submit'
                >
                    Add Item
                </button>
            </form>

        </div>
    )
}

export default Input 