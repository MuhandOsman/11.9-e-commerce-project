import { HashRouter, Routes as Switch, Route } from 'react-router-dom'

import MyProvider from "../context/MyProvider"
import Header from '../components/Header'
import Footer from '../components/Footer'

import Home from '../components/pages/Home'
import About from '../components/pages/About'
import Cart from '../components/pages/Cart'
import Checkout from '../components/pages/Checkout'
import Products from '../components/pages/Products'
import ProductDetail from '../components/pages/ProductDetail'
import NotFound404 from '../components/pages/NotFound404'


const Routes = () => {
    return (
        <MyProvider>
            <HashRouter>
                <Header />
                <Switch>
                    <Route  path="/" element={<About />} />
                    <Route  path="/home" element={<Home />} />
                    <Route  path="/cart" element={<Cart />} />
                    <Route  path="/products" element={<Products />} />
                    <Route  path="/product-detail" element={<ProductDetail />} />
                    <Route  path="/checkout" element={<Checkout />} />
                    <Route  path="*" element={<NotFound404 />} />
                </Switch>
                <Footer />
            </HashRouter>
        </MyProvider>
    )
}

export default Routes
