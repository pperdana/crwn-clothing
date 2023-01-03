import { useDispatch, useSelector } from "react-redux";
import { CartContext } from "../../contexts/cart.context";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import "./checkout-item.styles.scss";

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const carItems = useSelector(selectCartItems);
  // const { clearItemFromCart, addItemToCart, removeItemToCart } =
  //   useContext(CartContext);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(carItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(carItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(carItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
