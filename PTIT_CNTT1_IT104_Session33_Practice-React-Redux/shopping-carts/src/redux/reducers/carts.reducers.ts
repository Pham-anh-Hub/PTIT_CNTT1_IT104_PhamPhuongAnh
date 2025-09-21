import type { Item } from "./items.reducer"

export interface Cart {
    purchase: Item,
    quantity: number
}

type CartAction =
    | { type: "ADDTOCART"; payload: Item }
    | { type: "DELETE"; payload: Item }
    | { type: "UPDATE"; payload: { id: number; quantity: number } };

const cartReducer = (state: Cart[] = [], action : CartAction ): Cart[] => {
    const cloneCartList = [...state]
    switch (action.type) {
        case "ADDTOCART":
            if (action.payload) {
                console.log(action.payload)
                const targetPurschase = cloneCartList.find((item) => item.purchase.id === action.payload.id)
                if (targetPurschase) {
                    // Đã tồn tại trong ds cart
                    return cloneCartList.map((item) => item.purchase.id === Number(action.payload.id) ? { ...item, quantity: item.quantity + 1 } : item)
                } else {
                    const newCart: Cart = {
                        purchase: action.payload,
                        quantity: 1
                    }
                    return [...cloneCartList, newCart]
                }
            }
            return state
        case "DELETE":
            if (action.payload) {
                console.log(action.payload);

                return cloneCartList.filter((item) => item.purchase.id !== action.payload.id)
            }
            return state
        case "UPDATE":
            if (action.payload) {
                return cloneCartList.map((item) => item.purchase.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item)
            }
            return state
        default:
            return state

    }
}

export default cartReducer