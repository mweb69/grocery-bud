import React, { useState } from 'react'

const Item = (props) => {
    const { removeItem , product } = props;

    const [ isChecked,setIsChecked ] = useState(false)

    return (
        <div>
                <input 
                    type='checkbox'
                    id='checkbox'
                    name='checkbox'
                    checked={isChecked}
                    onChange={()=>{
                        setIsChecked(!isChecked)
                    }}
                />
                <span>{product.name}</span>
                <button onClick={()=> removeItem(isChecked,product) } >Delete</button>
        </div>
    )
}

export default Item
