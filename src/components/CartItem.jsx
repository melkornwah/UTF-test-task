function CartItem({ item, handleUpdateQuantity, handleRemoveItem }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>${item.price}</p>
        <div className="quantity-controls">
          <button onClick={() => handleUpdateQuantity(item.id, -1)}>
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => handleUpdateQuantity(item.id, +1)}>
            +
          </button>
        </div>
      </div>
      <button 
        className="remove-btn"
        onClick={() => handleRemoveItem(item.id)}
      >
        Удалить
      </button>
    </div>
  );
};

export default CartItem;
