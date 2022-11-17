import { useState } from 'react';
import { data } from './data';
import Buttons from './ Buttons';
import logo from './pictures/others/logo.png';
import Products from './Products';
import './App.css';



function Shop() {

    const [products, setProducts] = useState(data)
    const chosenProducts = (productType) => {
        const newProducts = data.filter( element => element.productType === productType)
        setProducts(newProducts)
    }

    return(
        <div>
            <div className='heading-wrapper'>
                <img className='logo' src={logo} alt="shop logo"/>
                <h1>Our New 2022 Collection”</h1>
            </div>

            <Buttons filteredProducts={chosenProducts}/>
            
            <Products itemsForSale={products}/>
        </div>

        
    )
}

export default Shop;