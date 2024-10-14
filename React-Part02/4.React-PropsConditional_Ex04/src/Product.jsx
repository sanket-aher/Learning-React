import './Product.css';

function Product({title,price}){
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            { price > 3000 ? <p>Discount of 5%</p> : null } 
            
            {
                            /* OR 
                { price > 3000 && <p>Discount of 5%</p> }  */
            }

        </div>
    );
}

export default Product;