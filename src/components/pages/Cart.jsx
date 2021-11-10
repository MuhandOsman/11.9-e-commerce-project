import React,{useContext} from 'react'
import MyContext from '../../context/MyContext'

const Cart = () => {
    const context = useContext(MyContext)
    const {cart, removeItem} = context


    return (
        <div>
          {cart.length === 0 ? <p>there is no items in your cart</p> : cart.map((item)=>
          <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.price} </p>
              <img src={item.image_link} alt="cartItem" />
              <h2>{item.quantity}</h2>
              <button onClick={() =>removeItem(item)} >Remove Item</button>
          </div>
          ) }
        </div>
    )
}

export default Cart
