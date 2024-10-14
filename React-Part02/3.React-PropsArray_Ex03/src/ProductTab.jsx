import Product from './Product.jsx';

/*
    React Props : 
        Props are the information that you pass to a JSX tag.
*/

function ProductTab(){
    let option1 = ['hi-tech','durable','fast'];
    let option2 = { a:'hi-tech', b:'durable',c:'fast' };
    return(
        <>
            <Product title="phone" price={3000} feature1={option1} feature2={option2} />
            <Product title="laptop" price={4000} 
                feature1={['charge','power']}
                feature2={{a:'charge',b:'power'}}
            />
        </>
    )
}
export default ProductTab;