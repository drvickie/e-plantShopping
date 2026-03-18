import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Header />

      <div className="container">
        <h2>Shopping Cart</h2>
        <h3>Total: ${total}</h3>

        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} width="100" />

            <h4>{item.name}</h4>
            <p>Unit: ${item.price}</p>
            <p>Total: ${item.price * item.quantity}</p>

            <div className="cart-buttons">
              <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
              <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
              <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
            </div>
          </div>
        ))}

        <Link to="/plants">
          <button>Continue Shopping</button>
        </Link>

        <button onClick={() => alert("Coming Soon")}>Checkout</button>
      </div>
    </>
  );
};

export default CartItem;