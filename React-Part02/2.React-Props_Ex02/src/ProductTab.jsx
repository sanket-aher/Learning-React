import Product from './Product.jsx';

/*
    React Props : 
        Props are the information that you pass to a JSX tag.
*/

function ProductTab(){
    return(
        <>
            <Product title="phone" price={3000} />
            <Product title="laptop" price={4000} />
            <Product title="pen" />
        </>
    )
}
export default ProductTab;