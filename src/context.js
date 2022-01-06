// import {createContext , useReducer} from "react";
// import {reducer} from "./reducer";

// export const ShopContext = createContext();



// const initialState = {
// 	title: "hello",
// 	goods: [],
// 	loading: true,
// 	order: [],
// 	isBasketShow: false
// }

// export default function ContextProvider({children}) {
// 	const [value,dispatch] = useReducer(reducer,initialState);

// 	value.addToBasket = item => {
// 		dispatch({type: "ADD_TO_BASKET",payload: item});
// 	};

// 	value.incrQuantity = id => {
// 		dispatch({type: "INCR_QUANTITY",payload: id});
// 	};

// 	value.decrQuantity = id => {
// 		dispatch({type: "DECR_QUANTITY",payload: id});
// 	}

// 	value.deleteOrder = id => {
// 		dispatch({type: "DELETE_ORDER",payload:id});
// 	}

// 	value.basketShow = () => {
// 		dispatch({type: "BASKET_SHOW"});
// 	}

// 	value.setGoods = data => {
// 		dispatch({type: "SET_GOODS", payload: data});
// 	}

// 	return (
// 		<ShopContext.Provider value={value}>
// 			{children}
// 		</ShopContext.Provider>
// 	);
// }



































































































































import {createContext,useReducer} from "react";
import {reducer} from "./reducer";

export const ShopContext = createContext();

const initialState = {
	goods: [],
	loading: true,
	order: [],
	isBasketShow: false
}

export default function ContextProvider({children}) {

	const [value,dispatch] = useReducer(reducer,initialState);

	value.addToBasket = item => dispatch({type: "ADD_TO_BASKET",payload: item});

	value.incrQuantity = id => dispatch({type: "INCR_QUANTITY",payload: id});

	value.decrQuantity = id => dispatch({type: "DECR_QUANTITY",payload: id});

	value.deleteOrder = id => dispatch({type: "DELETE_ORDER", payload: id});

	value.basketShow = () => dispatch({type: "BASKET_SHOW"});

	value.setGoods = data => dispatch({type: "SET_GOODS",payload: data});

	return (
		<ShopContext.Provider value={value}>
			{children}
		</ShopContext.Provider>
	);
}






































