import {useContext} from "react";
import {ShopContext} from "../context";

function BasketItem(props) {
	const {id,name,price,quantity} = props;

	const {incrQuantity,decrQuantity,deleteOrder} = useContext(ShopContext);

	return (
		<li className="basket-item">
			<span className="basket-item-name">{name}</span> 
			<span className="quantity">x{quantity}
				<span className="basket-item-price">{price * quantity} $</span>
			</span> 
			<span className="basket-icons">
				<i onClick={() => incrQuantity(id)} className="fas fa-plus"></i>
				<i onClick={() => decrQuantity(id)} className="fas fa-minus"></i>
				<i onClick={() => deleteOrder(id)} className="fas fa-trash-alt"></i>
			</span>
		</li>
	);
}

export default BasketItem;









