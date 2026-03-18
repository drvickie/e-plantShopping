import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import plants from "../data/plants";

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const isAdded = (id) => cart.find(item => item.id === id);

  return (
    <>
      <Header />

      <div className="container">
        {Object.keys(plants).map(category => (
          <div key={category}>
            <h2>{category}</h2>

            <div className="grid">
              {plants[category].map(plant => (
                <div className="card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />

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
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;