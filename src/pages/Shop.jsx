import { useEffect, useState } from "react";
import ProductGrid from "../components/shop/ProductGrid";
import BasketModal from "../components/shop/BasketModal";
import "../styles/Shop.css";
import Navbar from "../components/Navbar.jsx";
import axios from "axios";

const Shop = () => {
  const [basket, setBasket] = useState([]);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/products`,
        );
        console.log("Products from API:", response.data);
        if (response.data.data && Array.isArray(response.data.data)) {
          const formattedProducts = response.data.data.map((product) => ({
            id: product.id,
            name: product.name,
            description: product.description || "No description available",
            price_id: product.default_price || 0,
            image: product.images?.[0] || "/images/shop/placeholder.jpg",
            category: product.metadata?.category || "Uncategorized",
          }));
          setProducts(formattedProducts);
        } else {
          // Fallback to sample products if the API doesn't return expected format
          setProducts([
            {
              id: "tote-1",
              name: "Classic Tote Bag",
              category: "Tote Bags",
              price: 2500,
              description: "Durable canvas tote with minimalist design",
              image: "/images/shop/placeholder.jpg",
            },
            {
              id: "tobacco-1",
              name: "Handcrafted Tobacco Pouch",
              category: "Tobacco Bags",
              price: 1800,
              description: "Elegant tobacco pouch with secure closure",
              image: "/images/shop/placeholder.jpg",
            },
            {
              id: "fanny-1",
              name: "Urban Fanny Pack",
              category: "Fanny Packs",
              price: 3000,
              description: "Stylish and practical fanny pack for everyday use",
              image: "/images/shop/placeholder.jpg",
            },
            {
              id: "tsuno-1",
              name: "Traditional Tsuno Bag",
              category: "Tsuno Bags",
              price: 4500,
              description: "Authentic Tsuno bag with traditional patterns",
              image: "/images/shop/placeholder.jpg",
            },
          ]);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  const addToBasket = (product) => {
    setBasket([...basket, product]);
  };

  const removeFromBasket = (productId) => {
    const index = basket.findIndex((item) => item.id === productId);
    if (index !== -1) {
      const newBasket = [...basket];
      newBasket.splice(index, 1);
      setBasket(newBasket);
    }
  };

  const handleCheckout = async () => {
    try {
      console.log("Starting checkout with items:", basket);

      // Send the request to the server
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/create-checkout-session`,
        {
          items: basket.map((item) => ({
            id: item.id,
            price_id: item.price_id,
            quantity: 1,
          })),
        },
      );

      console.log("Checkout response:", response.data);

      // Redirect to Stripe Checkout
      if (response.data && response.data.url) {
        window.location.href = response.data.url;
      } else {
        throw new Error("No checkout URL returned from server");
      }
    } catch (err) {
      console.error("Error creating checkout session:", err);
      setError("Failed to create checkout session. Please try again.");
    }
  };

  if (error && products.length === 0) {
    return <div className="shop-error">Error: {error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="shop-container">
        <button
          className="basket-button"
          onClick={() => setIsBasketOpen(true)}
        >
          Basket ({basket.length})
        </button>

        <ProductGrid
          products={products}
          addToBasket={addToBasket}
        />

        {isBasketOpen && (
          <BasketModal
            basket={basket}
            onClose={() => setIsBasketOpen(false)}
            removeFromBasket={removeFromBasket}
            handleCheckout={handleCheckout}
          />
        )}
      </div>
    </>
  );
};

export default Shop;
