import React, { useState } from 'react'

const Input = (props) => {
    const [item,setItem] = useState('')
    const { addItem } = props;

    const handleSubmit = (e) =>{
        e.preventDefault()
        addItem(item)
        setItem('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    className='addItemInput'
                    name='addItem' 
                    id='addItem' 
                    value={item} 
                    onChange={(e)=>{
                        e.preventDefault()
                        setItem(e.target.value)
                    }}
                />
                <button
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