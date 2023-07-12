import "../../styles/Product.scss";
import productsJson from "../../assets/data/products.json";
import { useParams } from "react-router-dom";
import PictureSlider from "./picture-slider/PictureSlider";
import PriceChart from './PriceChart';
import Reviews from './reviews/Reviews';

function Product() {  
    const { productId } = useParams();
    const product = JSON.parse(JSON.stringify(productsJson))
        .find(item => item.id === Number(productId));
    const min = (values) => values.reduce((x, y) => Math.min(x, y));
    const max = (values) => values.reduce((x, y) => Math.max(x, y));

    return (
        <div className="Product">
            <div className="Product-data">
                <PictureSlider pictures={product.pictures} />
                <div className="Product-data-text">
                    <div className="Product-data-text-top">
                        <h1>{product.title}</h1>
                        <p className="Product-data-text-price">Стоимость: {product.prices[0]}₽</p>
                    </div>
                    <p className="Product-data-text-description">{product.description}</p>
                    <div className="Product-data-text-chart">
                        <div className="Product-data-text-chart-title">
                            <p>История цены:</p>
                            <p>от {min(product.prices)}₽ до {max(product.prices)}₽</p>
                        </div>
                        <PriceChart prices={product.prices} />
                    </div>
                </div>    
            </div>
            <Reviews reviews={product.reviews}/>
        </div>
    );
  }
  
  export default Product;