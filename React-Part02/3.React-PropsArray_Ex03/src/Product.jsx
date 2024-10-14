import './Product.css';

function Product({title,price,feature1,feature2}){
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h3>Price : {price}</h3>
            <p>{ 
                    feature1.map((features) => (
                       <li>{features}</li> 
                    ))
                }
             </p>
            <p>
                {feature2.a},{feature2.b}
            </p>
        </div>
    );
}

export default Product;