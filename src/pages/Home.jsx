import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Home / Products List page.
 * Destination after a user successfully submits the Register form.
 */
function Home() {
  const sampleProducts = [
    {
      id: 1,
      title: 'Wireless Noise-Canceling Headphones',
      price: '$99.99',
      category: 'Electronics',
      badge: 'In Stock',
      description: 'High fidelity audio with ultra-comfortable memory foam earcups.',
    },
    {
      id: 2,
      title: 'Mechanical Gaming Keyboard',
      price: '$79.50',
      category: 'Accessories',
      badge: 'Popular',
      description: 'Tactile mechanical switches with customizable RGB backlighting.',
    },
    {
      id: 3,
      title: 'Ergonomic Office Chair',
      price: '$189.00',
      category: 'Furniture',
      badge: 'Best Seller',
      description: 'Breathable mesh back with adjustable lumbar support.',
    },
    {
      id: 4,
      title: 'Ultra HD 4K Monitor 27"',
      price: '$249.99',
      category: 'Displays',
      badge: 'Top Rated',
      description: 'IPS panel with 99% sRGB color gamut and HDR support.',
    },
  ];

  return (
    <div className="home-page-container">
      <div className="home-hero">
        <div className="home-hero-badge">Products Catalog</div>
        <h1>Explore Products</h1>
        <p>
          Discover our curated collection of tech devices and accessories with premium quality.
        </p>
        <Link to="/register" className="btn-primary-action">
          Create an Account &rarr;
        </Link>
      </div>

      <div className="products-section">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {sampleProducts.map((product) => (
            <div key={product.id} className="product-card-item">
              <div className="product-category-row">
                <span className="product-category">{product.category}</span>
                <span className="product-badge">{product.badge}</span>
              </div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <span className="product-price">{product.price}</span>
                <button
                  type="button"
                  className="btn-add-cart"
                  onClick={() => alert(`Added "${product.title}" to cart!`)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
