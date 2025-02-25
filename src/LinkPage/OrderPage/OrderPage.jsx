import React, { useState } from "react";
import "./OrderStyle.css";

export default function OrderPage() {
  const [items, setItems] = useState([
    { id: 1, name: "Classic Ice-Cream", price: 65, quantity: 1, img: "https://5.imimg.com/data5/ANDROID/Default/2024/12/475017726/SW/AA/CA/44299916/product-jpeg-500x500.jpg" },

    { id: 2, name: "Cookie & Cream", price: 200, quantity: 1, img: "https://m.media-amazon.com/images/I/51YoPNvluQL._AC_UF1000,1000_QL80_.jpg" },

    { id: 3, name: "Buttor Scotch", price: 190, quantity: 1, img: "https://m.media-amazon.com/images/I/819iqJX2plL._AC_UF894,1000_QL80_.jpg" },

    { id: 4, name: "Gulab Jamun", price: 90, quantity: 1, img: "https://www.bigbasket.com/media/uploads/p/xl/40278421_2-kwality-walls-gulab-jamun-ice-cream-dessert.jpg" }
  ]);

  const increment = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setItems(
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="OrderPage-container">
      {/* Left Side - Order List */}
      <div className="left-side">
        <h2>Your Orders</h2>
        {items.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="item">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <div className="quantity-control">
                <button className="btn decrement" onClick={() => decrement(item.id)}>-</button>
                <h3>{item.quantity}</h3>
                <button className="btn increment" onClick={() => increment(item.id)}>+</button>
              </div>
              <p>₹{item.price * item.quantity}</p>
              <button className="delete-btn" onClick={() => deleteItem(item.id)}>🗑</button>
            </div>
          ))
        )}
      </div>

      {/* Right Side - Order Summary */}
      <div className="right-side">
        <h1>Order Summary</h1>
        {items.length === 0 ? (
          <p className="empty-cart">No items in cart</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} ({item.quantity}) - ₹{item.price * item.quantity}
              </li>
            ))}
          </ul>
        )}
        <h2>Total Price: ₹{totalPrice}</h2>
        <button className="checkout-btn" disabled={items.length === 0}>
          Place to Order
        </button>
      </div>
    </div>
  );
}
