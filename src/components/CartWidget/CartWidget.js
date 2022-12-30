
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getQuantity }= useContext(CartContext)
  const totalQuantity = getQuantity()
  return (
    <Button>
      <Link className="link" to="/cart">
      <img src={"./images/cart.svg"} alt="cart-widget" />{totalQuantity}
      </Link>
    </Button>
  );
};
export default CartWidget;
