import React,{useEffect, useState} from 'react'
import MyContext from "./MyContext"


const MyProvider = (props) => {

    const [result, setResult] = useState({data:[], loading:true, error: ""})

    const [cart,setCart]= useState([])

    const [form,setForm] = useState({address : "" , email: ""})
    const [error,setError]= useState({error:""})








    const addToCart = (element) => {
        const addItem = cart.find((item)=> item.id === element.id)
        
        if(addItem === undefined){
            
            setCart([...cart,{...element, quantity:1 }])
        } else {
            addItem.quantity += 1
            const itemIndex = cart.indexOf(addItem)
            const clone = [...cart]
            clone.splice(itemIndex,1, addItem)
            setCart(clone)
        }
    }
    
    console.log(cart)

    
    
    const removeItem = (element) => {
        const delItem = cart.find((item) => item.id === element.id)
        const index = cart.indexOf(delItem)

        const clone = [...cart]
        clone.splice(index,1)
        setCart(clone)
    }
    const reduceQuan = (element) => {
        const targetItem = cart.find((item) => item.id === element.id)
        const index = cart.indexOf(targetItem)
        targetItem.quantity -=1
        const clone = [...cart]
        targetItem.quantity >= 1 ? clone.splice(index,1, targetItem) : clone.splice(index,1)
        setCart(clone)
    }

    const totalCalc = (item) => {
       let total= cart.reduce((acc,next) => 
          acc + (next.quantity * next.price)   
        ,0)
        return total
    }


    useEffect(() => {
        try {
            const getData = async () => {
                const resp = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
                const data = await resp.json()
                setResult({data:data, loading:false, error: ""})
            }
            getData()
        } catch (error) {
          console.log(error);  
        }
    },[])

    if (result.loading) return (<p>loading...</p> )


    console.log(result.data);

    return (
        <MyContext.Provider value={{result, addToCart, cart, removeItem,reduceQuan, totalCalc,form,setForm,error,setError}}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyProvider
