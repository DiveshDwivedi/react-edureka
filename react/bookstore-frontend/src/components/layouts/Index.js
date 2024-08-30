import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext.js";

const Index = (props) => {
    const {id, title, author, price} = props?.books;
  const { addToCart, cartItems } = useContext(ShopContext);

    return (
        <div className="col-3 mb-1" key={id}>
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/41aL70yoloL._SX342_SY445_.jpg"
            className="card-img-top"
            alt="book-img"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{author}</p>
            <p className="card-text">
              ₹ {price}
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </p>

            <button className="btn btn-sm btn-primary"
            onClick={() => {
              addToCart(id);
            }}
            >
              Add to cart {cartItems[id] > 0 && cartItems[id]}
            </button>
          </div>
        </div>
      </div>
    )
}

export default Index;