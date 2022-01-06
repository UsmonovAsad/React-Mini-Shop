import {useContext} from "react";
import {ShopContext} from "../context";

function GoodItem(props) {
	const {id,name,description,price,full_background} = props;

	const {addToBasket} = useContext(ShopContext);

	console.log(addToBasket)

	return (
		<div id={id} className="card">
			<div className="card-img">
				<img src={full_background} alt={name} />
			</div>
			<div className="card-content">
				<p className="card-title">{name}</p>
				<p className="card-descr">{description}</p>
			</div>
			<div className="card-action">
				<button onClick={() => addToBasket({id,name,price,full_background})} className="card-btn">
					Add To Cart
				</button>
				<p className="card-price">{price}$</p>
			</div>
		</div>
	);
}

export default GoodItem;