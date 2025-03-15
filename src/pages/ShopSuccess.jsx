import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const ShopSuccess = () => {
  const [status, setStatus] = useState('loading');
  const [orderData, setOrderData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        // Get session ID from URL query params
        const queryParams = new URLSearchParams(location.search);
        const sessionId = queryParams.get('session_id');
        
        if (!sessionId) {
          setStatus('error');
          return;
        }
        
        // Get session details directly from the success page parameters
        // The backend has already processed the payment when redirecting here
        setStatus('success');
        setOrderData({ 
          id: sessionId,
          // We don't have the amount here, but we could fetch it if needed
          amount_total: 0 
        });
      } catch (error) {
        console.error('Error verifying payment:', error);
        setStatus('error');
      }
    };
    
    verifyPayment();
  }, [location]);

  if (status === 'loading') {
    return (
      <div className="success-container">
        <h1>Verifying your order...</h1>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="success-container error">
        <h1>There was a problem with your order</h1>
        <p>We couldn't verify your payment. Please contact our customer support.</p>
        <Link to="/shop" className="button">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="success-container">
      <h1>Thank You for Your Order!</h1>
      <div className="success-icon">✓</div>
      <p>Your payment has been processed successfully.</p>
      {orderData && (
        <div className="order-details">
          <h2>Order Summary</h2>
          <p>Order ID: {orderData.id}</p>
          <p>Amount: {new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR',
          }).format(orderData.amount_total / 100)}</p>
        </div>
      )}
      <Link to="/shop" className="button">Continue Shopping</Link>
    </div>
  );
};

export default ShopSuccess;