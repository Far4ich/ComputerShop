import '../../styles/ProductCard.scss';
import { useNavigate } from 'react-router-dom';

function ProductCard(props) {  
  const navigate = useNavigate()
  return (
    <div className="Product-card" onClick={()=> navigate("/product/"+props.product.id)}>
      <img className='Product-card-picture'
        src={props.product.pictures[0]}
        alt=''/>
      <div className='Product-card-text'>
        <div className='Product-card-text-top'>
          <div className='Product-card-text-title'>
            <h2>{props.product.title}</h2>
          </div>
          <div className='Product-card-text-price'>
            <p>Цена: {props.product.prices[0]}</p>
          </div>
        </div>
        <div className='Product-card-text-description'>
          <p>{props.product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;