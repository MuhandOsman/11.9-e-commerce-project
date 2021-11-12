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
                   <p>{item.name}</p>
                   <Link to="/product-detail" state={item}><img src={item.image_link} alt="makeup"  /></Link>
                   <span> Price {item.price} $</span>
                   <button onClick={()=>addToCart(item)} >ADD to cart</button>
               </div>)
           )}
        </section>
    )
}

export default Products
                   
