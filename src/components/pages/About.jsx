import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {

    

    return (
        <section className="about">
           <h1 style={{margin:"0 3vw" , padding : "20px 0" }}>About this app</h1>
           <div className="about-info"> 
                <p> welcome to my Online humble MARKET , here I am fetching Maybelline free app <br/> and with React.js I built this app to train myself on using Reakt hooks fetch API (or axios)  </p>
                <p>the API is not perfect, I had to change many things after fetching like adding missing properties or product colors ext...</p>
                <p>I know the style is bad,because I am focusing on functions and hooks, maybe in the future I will change it :) </p>
                <Link to="/products">take a look</Link> 
                <p>Don't forget to add your shipping details </p>
                <p>  <Link to="/home">Go to log in </Link></p>
           </div>
        </section>
    )
}

export default About
