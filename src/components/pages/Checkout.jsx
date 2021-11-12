import React,{useContext} from 'react'
/* import {useNavigate} from 'react-router-dom' */
import MyContext from '../../context/MyContext'

const Checkout = () => {
    const context = useContext(MyContext)
    const {cart,totalCalc} = context;

    return (
        <section  className="checkout">
            
            <h1>thank you for shopping with us</h1>
            {cart.map((item) => (
              <div key={item.id} className="item">
                  <h3 >{item.name}</h3>
                  <span>item price :{item.price * item.quantity}</span>
                  <span>item quantity : {item.quantity}</span>
              </div>  
            ))}
            <div className="total" >
              <p>TOTAL PRICE : {(totalCalc(cart)).toFixed(2)} €</p>
              
          </div>
        </section>
    )
}

export default Checkout
