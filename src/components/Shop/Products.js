import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        price: 6,
        title: 'My First book',
        description: 'The first book'
    },
    {
        id: 'p2',
        price: 12,
        title: 'My Second Book',
        description: 'The second one!'
    }
]

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map(item => <ProductItem title={item.title} price={item.price} key={item.id} id={item.id} description={item.description} />)}
            </ul>
        </section>
    );
};

export default Products;
