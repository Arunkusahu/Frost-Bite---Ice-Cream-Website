import React, { useState, useEffect } from "react";
import "./ManuStyle.css";

export default function Menu() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("All");

  useEffect(() => {
    fetch("/Data.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const renderStars = (rating) => {
    return (
      <span className="stars">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src={
              i < rating
                ? "https://img.icons8.com/ios-filled/50/000000/star.png"
                : "https://img.icons8.com/ios/50/000000/star.png"
            }
            alt="star"
            className="star-icon"
          />
        ))}
      </span>
    );
  };

  const toggleFavorite = (item) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.name === item.name)
        ? prevFavorites.filter((fav) => fav.name !== item.name)
        : [...prevFavorites, item]
    );
  };

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const filteredItems = items.filter(
    (item) =>
      (selectedBrand === "All" || item.brand === selectedBrand) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu-container">
      {/* Navbar */}
      <div className="navbar-content">
        <ul>
          {["All", "Amul", "Arun", "Kwality Walls", "Mother Dairy", "Top'N Town"].map((brand) => (
            <li key={brand}>
              <a href="#" onClick={() => setSelectedBrand(brand)}>
                {brand}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons for favorites and cart */}
        <div className="cart-icons">
          <div className="fav-section">
            <img src="https://cdn-icons-png.flaticon.com/512/833/833472.png" alt="Like" />
            <span className="count">{favorites.length}</span>
          </div>
          <div className="cart-section">
            <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Cart" />
            <span className="count">{cart.length}</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Ice Cream..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Ice Cream List */}
      <div className="cart-container">
        {filteredItems.length === 0 ? (
          <div>No ice creams found</div>
        ) : (
          filteredItems.map((item, index) => (
            <div className="cart" key={index}>
              <div className="box">
                <img src={item.imageUrl} alt={item.name} />
              </div>

              <div className="title">
                <h1>{item.name}</h1>
                {renderStars(item.rating)}
              </div>

              <p>{item.description}</p>
              <h3 className="brand-name">{item.brand}</h3>
              
              <div className="price-tag">
                <h1>₹ {item.price.toFixed(2)}/-</h1>
              </div>
              <div className="actions">
                <button className="order-btn" onClick={() => addToCart(item)}>Order Now</button>
                <button className="fav-btn" onClick={() => toggleFavorite(item)}>
                  {favorites.some((fav) => fav.name === item.name) ? "❤️" : "🤍"}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
