import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Navbar from "../Navbar.jsx";

const ProductCard = ({ product, addToBasket }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToBasket = (e) => {
    e.stopPropagation(); // Prevent navigating to product detail page
    addToBasket(product);
  };

  // Format price from cents to euros
  const formattedPrice = new Intl.NumberFormat("ch-FR", {
    style: "currency",
    currency: "CHF",
  }).format(product.price / 100);

  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container product-link">
        {imageError
          ? (
            <div className="fallback-image">
              {product.name.charAt(0)}
            </div>
          )
          : (
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              onError={handleImageError}
            />
          )}
        {isHovered && (
          <div className="product-overlay">
            <button
              className="add-to-basket-button"
              onClick={handleAddToBasket}
            >
              Add to Basket
            </button>
            <Link to={`/shop/product/${product.id}`} className="">
              <div className="view-details-button">
                View Details
              </div>
            </Link>
          </div>
        )}
      </div>

      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{formattedPrice}</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  addToBasket: PropTypes.func.isRequired,
};

export default ProductCard;
