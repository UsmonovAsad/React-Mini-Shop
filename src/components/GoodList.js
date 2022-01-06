import {useContext} from "react";
import GoodItem from "./GoodItem";
import {ShopContext} from "../context";

function GoodList( ) {
	const {goods = []} = useContext(ShopContext);

	return (
		<div className="goods">
			{
				!goods.length ? (
					<div className="not-found">
						<h1>Sorry No Goods :( <br /> Please Come later</h1>
					</div>
				) : (
					goods.map(good => (
						<GoodItem key={good.id} {...good}  />
					))
				)
			}
		</div>
	);
}

export default GoodList;




























