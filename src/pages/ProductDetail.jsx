import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Shop.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const formattedPrice = product
    ? new Intl.NumberFormat("ch-FR", {
      style: "currency",
      currency: "CHF",
    }).format(product.price / 100)
    : "";

  if (error || !product) {
    return (
      <div className="product-detail-error">
        <Navbar over />
        <div className="error-content">
          <p>Error: {error || "Product not found"}</p>
          <button onClick={handleBack} className="back-button">
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <Navbar over />

      <div className="product-detail-content">
        <button onClick={handleBack} className="back-button">
          &larr; Back to Shop
        </button>

        <div className="product-detail-grid">
          <div className="product-detail-image">
            {imageError
              ? (
                <div className="fallback-image-large">
                  {product.name.charAt(0)}
                </div>
              )
              : (
                <img
                  src={product.image}
                  alt={product.name}
                  className="detail-image"
                  onError={handleImageError}
                />
              )}
          </div>

          <div className="product-detail-info">
            <h1 className="detail-product-name">{product.name}</h1>
            <p className="detail-product-category">{product.category}</p>
            <p className="detail-product-price">{formattedPrice}</p>

            <div className="detail-product-description">
              <h2>Description</h2>
              <p>{product.description}</p>
              {product.longDescription && (
                <p className="long-description">{product.longDescription}</p>
              )}
            </div>

            {!product.isSold
              ? (
                <button
                  className="add-to-basket-detail-button"
                  onClick={() => {
                    navigate("/shop");
                    // We would ideally add the item to the basket here, but we would need to lift state
                    // to a higher level component or use a state management library like Redux
                    // For now, we'll just navigate back to the shop page
                  }}
                >
                  Add to Basket
                </button>
              )
              : <div className="sold-notice">This item has been sold</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

