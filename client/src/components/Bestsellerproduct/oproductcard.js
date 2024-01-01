import { Link } from "react-router-dom";
// import "./bproductcard.css";
import "./productcard.css";

function OProductCard({ id, name, description, price, image, category }) {
  return (
    <div className="product-cardd">
      <img src={image} alt={name} className="productt-img" />

      <div className="product-infoo">
        <h3>{name}</h3>
        <p>description : </p>
        <p>{description}</p>
        <p>CATEGORY : {category}</p>
        <h4>PRICE : ₹ {price}</h4>
        <p>FREE SHIPPING OVER ₹ 5000</p>
        <Link className="buyy-btn cardd-btn" to={`/buy/${id}`}>
          <span>Buy Now</span>
        </Link>
        <Link to='/myorders'>
        <button className="wishlistt-btn cardd-btn">my orders</button>
        </Link>
      </div>
    </div>
  );
}

export default OProductCard;
