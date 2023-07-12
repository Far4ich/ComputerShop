
import '../../styles/Products.scss';
import productsJson from '../../assets/data/products.json';
import ProductCard from './ProductCard';

function Products() {
    const productsData = JSON.parse(JSON.stringify(productsJson));
  
    return (
      <div className='App-product-list'>
        <h1>Список товаров</h1>
        <div className="Products">
          {productsData.map((product, idx) =>
            <ProductCard key={idx} product={product}/>
          )}
        </div>
      </div>
    );
}

export default Products;