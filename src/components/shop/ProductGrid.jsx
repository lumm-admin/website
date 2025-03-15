import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, addToBasket }) => {
  // Group products by category
  const categorizedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="product-grid-container">
      {Object.entries(categorizedProducts).map(([category, categoryProducts]) => (
        <div key={category} className="product-category">
          <h2 className="category-title">{category}</h2>
          <div className="product-grid">
            {categoryProducts.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
                addToBasket={addToBasket}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  addToBasket: PropTypes.func.isRequired,
};

export default ProductGrid;