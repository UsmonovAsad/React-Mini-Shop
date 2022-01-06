import {useEffect,useContext} from "react";
import {API_KEY,API_URL} from "../config";
import Loader from "./Loader";
import GoodList from "./GoodList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import {toast} from "react-toastify";
import {ShopContext} from "../context";

function Shop() {
	const {goods,setGoods,loading,isBasketShow} = useContext(ShopContext);

	useEffect(() => {
		fetch(API_URL,{
			headers: {
				"Authorization": API_KEY
			}
		}).then(res => res.json())
		.then(data => {
			setGoods(data.featured);
		});
	},[]);


	if(isBasketShow) document.body.style.overflow = "hidden";
	else document.body.style.overflow = "";

	return (
		<div className="content">
			{
				!loading ? <GoodList /> : <Loader />
			}
			<Cart />
			<BasketList />
		</div>
	);
}

export default Shop;













