    import type { Item } from "./items.reducer"

    export interface Cart {
        purchase: Item,
        quantity: number
    }

    const cartReducer = (state: Cart[] = [], action: { type: string, payload: Item }): Cart[] => {
        const cloneCartList = [...state]
        switch (action.type) {
            case "ADDTOCART":
                if (action.payload) {
                    console.log(action.payload)
                    const targetPurschase = cloneCartList.find((item) => item.purchase.id === action.payload.id)
                    if (targetPurschase) {
                        // Đã tồn tại trong ds cart
                        return cloneCartList.map((item) => item.purchase.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)
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
            default:
                return state

        }
    }

    export default cartReducer