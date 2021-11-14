import React,{useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import MyContext from '../../context/MyContext'

const Cart = () => {
    const context = useContext(MyContext)
    const {cart, removeItem, addToCart,reduceQuan,totalCalc, login} = context;

    const navigate = useNavigate()

    const checkAndNavigate = () => {
        login.success ? (navigate("/checkout",{ replace: true })) : (navigate("/home" ,{ replace: true }))
    }

    return (
        <section className="cart" >
          {cart.length === 0 ? <h2 className="noItem error" >there is no items in your cart</h2> : cart.map((item)=>
          <div key={item.id}>
              <p>{item.name}</p>
              <img src={item.image_link} alt="cartItem" />
              <p>Price : {(item.price * item.quantity).toFixed(2)} €</p>
              <h2>quantity :{item.quantity}</h2>
              <button onClick={() =>addToCart(item)}>+</button>
              <button onClick={() =>reduceQuan(item)}>-</button>
              <button onClick={() =>removeItem(item)} >Remove Item</button>
          </div>
          ) }
          <div className="total" >
              <p>TOTAL PRICE : {(totalCalc(cart)).toFixed(2)} €</p>
              {cart.length > 0 && <button onClick={() =>checkAndNavigate()}>checkout</button>}
          </div>
                
        </section>
    )
}

export default Cart
