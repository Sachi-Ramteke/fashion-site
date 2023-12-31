import "./productcardmain.css";

function ProductCardMain({ id, name, description, price, image, category }) {
  return (
    <div className="productt-card">
      <img src={image} alt={name} className="product-imgg" />

      <div className="productt-info">
        <p>{description}</p>
        <p>category: {category}</p>
        <h5>₹ {price}</h5>
      </div>
    </div>
  );
}

export default ProductCardMain;
