import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";
import plants from "../data/plants";

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const isAdded = (id) => cart.find(item => item.id === id);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/plants">Plants</Link> | 
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>

      {Object.keys(plants).map(category => (
        <div key={category}>
          <h2>{category}</h2>

          {plants[category].map(plant => (
            <div key={plant.id}>
              <img src={plant.image} width="100" />
              <h4>{plant.name}</h4>
              <p>${plant.price}</p>

              <button
                onClick={() => dispatch(addItem(plant))}
                disabled={isAdded(plant.id)}
              >
                {isAdded(plant.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;