import React,{useRef,useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import MyContext from '../../context/MyContext'

const Home = () => {
    const shop = useContext(MyContext)
    const {form,setForm,error,setError, setLogin} = shop


    
    const navigate = useNavigate()
    const userRef = useRef()

    const EMAIL = process.env.REACT_APP_EMAIL;
    const ADDRESS = process.env.REACT_APP_ADDRESS;

    useEffect(()=> {
        userRef.current.focus()
    },[])

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const checkAndNavigate = () => {
        setLogin({success:true});
        navigate("../products", {replace: true})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setForm({address: "", email: ""})
        setError("")
     
        EMAIL === form.email && ADDRESS === form.address ? 
        checkAndNavigate() : setError({error:"invalid data, please check your shipping information again"})
        
    }

    return (
        <section className="login" >
           <h2>insert your shipping details</h2>
           <form >
               <label htmlFor="email">your E-mail</label>
               <input type="text" name="email" id="email" ref={userRef} value={form.email} placeholder="newmail@gmail.com" onChange={changeHandler} /> 
               
               
               <label htmlFor="address">your shipping address</label>
               <input type="text" name="address" id="address" value={form.address} placeholder="wallstreet11" onChange={changeHandler}/>

               <button onClick={handleSubmit}>submit</button>
           </form>
           {error.error && 
           <p className="error">{error.error}</p> }    

               
        </section>
    )
}

export default Home
