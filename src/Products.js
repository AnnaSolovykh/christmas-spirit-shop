import './App.css';

function Products({itemsForSale}) {
    return (
        <div className="products-wrapper">
            {itemsForSale.map((element => {
                const {id, image, productName, price} = element;
                return(
                        <div className="products-container"  key={id}>
                            <img className='product-image' src={image} alt="Item for Sale"/>
                            <div className='text-container'>
                                <p className='product-text'>{productName}</p>
                                <p className='product-text'>{price} $</p>
                            </div>
                            <button className="product-button">Quick view</button>
                        </div>
                )
            }))}
        </div>
    )
}

export default Products;