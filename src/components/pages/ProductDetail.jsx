import React,{useContext} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';

const ProductDetail = () => {
    const context = useContext(MyContext)
    const {addToCart} = context


    const navigate = useNavigate()
    const location = useLocation();
    const item = location.state;
    console.log(item);

    return (
        <section className="product-detail">
          <h1 style={{color: `${item.product_colors[0].hex_value}`}} >{item.name}</h1>
          <h3 className="description">DESCRIPTION : {item.description}</h3>
          <h3>COLORS AVAILABLE : {item.product_colors.map((element,index)=>(<span key={index} style={{backgroundColor:`${element.hex_value}`}} >{element.colour_name === null ? element.hex_value :element.colour_name}</span> ))}</h3>
           
          <p style={{color:"red"}} >Price{item.price}€</p> 
          <button className="btn" onClick={()=> addToCart(item)}>ADD to cart</button>
          <button className="btn" onClick={() =>navigate(-1)}>return to shop</button>
          <br />
          <img src={item.image_link} alt="" />
        </section>
    )
}

export default ProductDetail
