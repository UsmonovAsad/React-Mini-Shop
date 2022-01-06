import {useContext} from "react";
import {ShopContext} from "../context";

function Cart(props) {
	const {basketShow,order} = useContext(ShopContext)

	return (
		<div onClick={basketShow} className="cart">
			<i className="fas fa-shopping-cart"></i>
			<span className="cart-badge">{order.length ? order.length : null}</span>
		</div>
	);
}

export default Cart