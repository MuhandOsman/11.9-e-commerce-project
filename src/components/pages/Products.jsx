import React,{useContext} from 'react'
import MyContext from '../../context/MyContext'

const Products = () => {
    const context = useContext(MyContext)
    const {result,addToCart} = context

    return (
        <div className="cardContainer" >
           <h2>here we will put some products</h2> 
           {result.data.map((item)=>( 
               <div key={item.id} className="card" >
                   <p>{item.name}</p>
                   <img src={item.image_link} alt="makeup" />
                   <span> Price {item.price} $</span>
                   <button onClick={()=>addToCart(item)} >ADD to cart</button>
               </div>)
           )}
        </div>
    )
}

export default Products
