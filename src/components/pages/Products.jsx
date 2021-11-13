import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../../context/MyContext'

const Products = () => {
    const context = useContext(MyContext)
    const {result,addToCart} = context

    return (
        <section className="cardContainer" >
           <h2>Maybelline products in our shop</h2> 
           {result.data.map((item)=>( 
               <div key={item.id} className="card" >
                   
                   <Link to="/product-detail" state={item}>
                    <div className="flip-box">
                        <div className="flip-img">
                            <div className="front">
                                <img src={item.image_link} alt="makeup" />
                            </div>
                            <div className="back">
                                <p>{item.name}</p>    
                                <span> Price {item.price} $</span>
                            </div>
                        </div>
                   </div>
                       
                    </Link>
                   
                   <button onClick={()=>addToCart(item)} >ADD to cart</button>
               </div>)
           )}
        </section>
    )
}

export default Products
                   
