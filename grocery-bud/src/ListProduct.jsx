import React from 'react'
import Item from './Item';
const ListProduct = (props) => {

    const { removeItem , listOfProduct } = props;

    return (
        <div>
            {listOfProduct.map((prod)=>{
                return <Item removeItem={removeItem} product={prod} key={prod.id} />
            })}
        </div>
    )
}

export default ListProduct