import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const BasketModal = ({ basket, onClose, removeFromBasket, handleCheckout }) => {
  const [stripe, setStripe] = useState(null);

  // Load Stripe when the component mounts
  useEffect(() => {
    stripePromise.then((stripeInstance) => {
      setStripe(stripeInstance);
    }).catch((err) => {
      console.error("Failed to load Stripe:", err);
    });
    const response = axios.get(import.meta.env.VITE_SERVER_URL + "/products");
    console.log(response);
  }, []);

  const totalPrice = basket.reduce((sum, item) => sum + item.price, 0);
  const formattedTotalPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(totalPrice / 100);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe) {
      console.error("Stripe.js not loaded yet");
      return;
    }
    try {
      const response = await axios.post(
        import.meta.env.VITE_SERVER_URL + "/create-checkout-session",
      );
      const sessionId = response.data.id;

      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        console.error("Stripe error:", error.message);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <div className="basket-modal-overlay">
      <div className="basket-modal">
        <div className="basket-header">
          <h2>Your Basket</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        {basket.length === 0
          ? (
            <div className="empty-basket">
              <p>Your basket is empty</p>
            </div>
          )
          : (
            <>
              <div className="basket-items">
                {basket.map((item) => (
                  <div key={`${item.id}-${Date.now()}`} className="basket-item">
                    <div className="basket-item-image-container">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="basket-item-image"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div className="basket-fallback-image">
                        {item.name.charAt(0)}
                      </div>
                    </div>
                    <div className="basket-item-details">
                      <h3>{item.name}</h3>
                      <p>
                        {new Intl.NumberFormat("fr-FR", {
                          style: "currency",
                          currency: "EUR",
                        }).format(item.price / 100)}
                      </p>
                    </div>
                    <button
                      className="remove-item-button"
                      onClick={() =>
                        removeFromBasket(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <div className="basket-footer">
                <div className="basket-total">
                  <span>Total:</span>
                  <span>{formattedTotalPrice}</span>
                </div>
                <button
                  className="checkout-button"
                  disabled={basket.length === 0}
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
      </div>
    </div>
  );
};

BasketModal.propTypes = {
  basket: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClose: PropTypes.func.isRequired,
  removeFromBasket: PropTypes.func.isRequired,
  handleCheckout: PropTypes.func.isRequired,
};

export default BasketModal;
