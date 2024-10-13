import './Product.css';

function Product({title,price=1000}){
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h3>Price : {price}</h3>
        </div>
    );
}

export default Product;