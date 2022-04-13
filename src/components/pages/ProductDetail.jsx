import React,{useContext} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';

const ProductDetail = () => {
    const context = useContext(MyContext)
    const {addToCart} = context


    const navigate = useNavigate();
    const location = useLocation();
    const item = location.state;
    console.log(item);

    return (
        <section className="product-detail">
          <h1 style={{color: `${item.product_colors[0].hex_value}`}} >{item.name}</h1>
          <div className="product-contain">
            <div className="prod-data">
              <h3 className="description">DESCRIPTION : {item.description.split("•").map((item,index )=> <p key={index}>• {item}</p>)}</h3>
              <h3>COLORS AVAILABLE : {item.product_colors.map((element,index)=>(<span key={index} style={{backgroundColor:`${element.hex_value}` , margin:"5px" , padding:"5px", display:"inline-block", borderRadius:"5px"}} >{element.colour_name === null ? element.hex_value :element.colour_name}</span> ))}</h3>
           
              <h4 style={{color:"white" }} >Price: {item.price} €</h4> 
              <div className="btn-group">
              <button className="btn-15 custom-btn" onClick={()=> addToCart(item)}> <span>ADD to cart</span> </button>
              <button className="btn-15 custom-btn" onClick={() =>navigate(-1)}> <span>to shop</span> </button>
              </div>
            </div>
          
            <div className="prod-img"><img src={item.image_link}  alt="product-img" /></div>
            
          </div>
        </section>
    )
}

export default ProductDetail
