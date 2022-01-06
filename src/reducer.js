// import {toast} from "react-toastify";

// export function reducer(state,{type,payload = null}) {
// 	switch(type) {
// 		case "ADD_TO_BASKET": {
// 			const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.id);

// 			let newOrder = null;

// 			if (itemIndex < 0) {
// 				const newItem = {
// 					...payload,
// 					quantity: 1
// 				}

// 				newOrder = [...state.order,newItem];
// 			} else {
// 				newOrder = state.order.map((orderItem,index) => {
// 					if (index === itemIndex) {
// 						return {
// 							...orderItem,
// 							quantity: orderItem.quantity + 1
// 						};
// 					} else return orderItem;
// 				});
// 			}

// 			toast.success("Good added to Cart successfully");

// 			return {
// 				...state,
// 				order: newOrder
// 			};
// 		}; 
// 		// Case ADD_TO_BASKET End;

// 		case "INCR_QUANTITY": {
// 			toast.success("Added 1 Good Cart Successfully");

// 			const newOrder = state.order.map(orderItem => {
// 				if(payload === orderItem.id) {
// 					return {
// 						...orderItem,
// 						quantity: orderItem.quantity + 1
// 					};
// 				} else return orderItem;
// 			});


// 			return {
// 				...state,
// 				order: newOrder
// 			};
// 		}
// 		// Case INCR_QUANTITY End;

// 		case "DECR_QUANTITY": {
// 			toast.error("Remove 1 Good Cart Successfully");

// 			const newOrder = state.order.map(orderItem => {
// 				if(payload === orderItem.id) {
// 					return {
// 						...orderItem,
// 						quantity: orderItem.quantity < 1 ? 0 : orderItem.quantity - 1
// 					};
// 				} else return orderItem;
// 			});

// 			return {
// 				...state,
// 				order: newOrder
// 			};
// 		}
// 		// Case DECR_QUANTITY End;

// 		case "DELETE_ORDER": {
// 			const newOrder = state.order.filter(orderItem => orderItem.id !== payload);

// 			toast.error("Good removed from Cart successfully");

// 			return {
// 				...state,
// 				order: newOrder
// 			};
// 		}
// 		// Case DELETE_ORDER End;

// 		case "BASKET_SHOW": {
// 			return {
// 				...state,
// 				isBasketShow: !state.isBasketShow
// 			};
// 		}
// 		// Case BASKET_SHOW End;

// 		case "SET_GOODS": {
// 			return {
// 				...state,
// 				goods: payload || [],
// 				loading: false
// 			};
// 		}

// 		default: 
// 			return state;
// 	}
// }








































































import {toast} from "react-toastify";

export function reducer(state,{type,payload = null}) {
	switch(type) {
		case "ADD_TO_BASKET": {
			const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload);

			let newOrder = null;

			if (itemIndex < 0) {
				const newItem = {
					...payload,
					quantity: 1
				};

				newOrder = [...state.order,newItem];
			} else {
				newOrder = state.order.map((orderItem,index) => itemIndex === index ? {...orderItem,quantity: orderItem.quantity + 1} : orderItem);
			}

			toast.success("Added successfully!");

			return {
				...state,
				order: newOrder
			}
		}

		case "INCR_QUANTITY": {
			const newOrder = state.order.map(orderItem => orderItem.id === payload ? {...orderItem,quantity: orderItem.quantity + 1} : orderItem);

			toast.success("Plus 1 successfully!");

			return {
				...state,
				order: newOrder
			};
		}

		case "DECR_QUANTITY": {
			const newOrder = state.order.map(orderItem => orderItem.id === payload ? {...orderItem,quantity: orderItem.quantity < 1 ? 0 : orderItem.quantity + 1} : orderItem);

			toast.error("Minus 1 successfully!");

			return {
				...state,
				order: newOrder
			};
		}

		case "DELETE_ORDER": {
			const newOrder = state.order.filter(orderItem => orderItem.id !== payload);

			toast.error("removed successfully!");

			return {
				...state,
				order: newOrder
			};
		}

		case "BASKET_SHOW": {
			return {
				...state,
				isBasketShow: !state.isBasketShow
			};
		}

		case "SET_GOODS": {
			return {
				...state,
				goods: payload,
				loading: false
			}
		}

		default: return state;
	}
}













