import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {

    

    return (
        <section className="about">
           <h1 style={{margin:0 , padding : "20px 0" }}>about us</h1> 
           <p> welcome to our Online humble MARKET , here you can find some Maybelline products with high quality and low price .  </p>
           <p>we are sure you will fine here what you need</p>
           <Link to="/products">take a look</Link> 
           <p>Don't forget to add your shipping details  <Link to="/home">Go to log in </Link></p>
           
        </section>
    )
}

export default About
