import { Link } from "react-router-dom";
import "./bproductcard.css";

function ProductCard({ id, name, description, price, image, category }) {
  return (
    <div className="product-card">
      <Link to="/products" className="img-link-prdcard">
        <img src={image} alt={name} className="product-img" />
      </Link>

      <div className="product-info">
        <p>{description}</p>
        <h5>₹ {price}</h5>
      </div>
    </div>
  );
}

export default ProductCard;
