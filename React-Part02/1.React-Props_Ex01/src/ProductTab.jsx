import Product from './Product.jsx';

/*
    React Props : 
        Props are the information that you pass to a JSX tag.
*/

function ProductTab(){
    return(
        <>
            <Product title="phone" />
            <Product title="laptop" />
            <Product title="pen" />
        </>
    )
}
export default ProductTab;