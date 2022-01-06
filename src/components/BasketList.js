import {useContext} from "react";
import BasketItem from "./BasketItem";
import {ShopContext} from "../context";

function BasketList() {
	const {isBasketShow,basketShow,order} = useContext(ShopContext);

	let classNamesBsk = "bsk",
	classNamesBasket = "basket";

	if (isBasketShow) {
		classNamesBasket = classNamesBasket;
		classNamesBsk = classNamesBsk
	} else {
		classNamesBasket = classNamesBasket + " hidden-basket";
		classNamesBsk = classNamesBsk + " hidden-bsk"
	}

	const totalPrice = order.reduce((sum,e) => {
		return sum + e.price * e.quantity;
	},0);

	return (
		<div>
			<div className={classNamesBsk}>
				<ul className={classNamesBasket}>
					<li className="basket-title">Cart</li>
					
					{order.length ? (
						order.map(orderItem => (
							<BasketItem
							  key={orderItem.id}
							  {...orderItem} 
							/>
						))) : <li className="basket-item">Cart is empty</li>
					}

					<li className="basket-price">Total Price: {totalPrice} $</li>
					<div onClick={basketShow} className="basket-close">
						<i className="fas fa-times"></i>
					</div>
				</ul>
			</div>
		</div>
	);
}

export default BasketList;















