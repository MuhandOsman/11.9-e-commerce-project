import React,{useContext} from 'react'
import MyContext from '../../context/MyContext'

const Cart = () => {
    const context = useContext(MyContext)
    const {cart, removeItem, addToCart,reduceQuan,totalCalc} = context


    return (
        <section className="cart" >
          {cart.length === 0 ? <h2 className="noItem" >there is no items in your cart</h2> : cart.map((item)=>
          <div key={item.id}>
              <p>{item.name}</p>
              <img src={item.image_link} alt="cartItem" />
              <p>Price {(item.price * item.quantity).toFixed(2)} €</p>
              <h2>{item.quantity}</h2>
              <button onClick={() =>addToCart(item)}>+</button>
              <button onClick={() =>reduceQuan(item)}>-</button>
              <button onClick={() =>removeItem(item)} >Remove Item</button>
          </div>
          ) }
          <div>TOTAL PRICE : {(totalCalc(cart)).toFixed(2)} €</div>
        </section>
    )
}

export default Cart
