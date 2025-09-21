export interface Item {
    id: number,
    name: string,
    discription: string,
    price: number,
    image: string,
    quantity: number
}

const defaultList: Item[] = [
    {
        id: 1,
        name: "Pizza",
        discription:
            "Pizza thơm ngon với lớp phô mai béo ngậy, đế giòn rụm và nhiều loại topping hấp dẫn.",
        price: 30,
        image:
            "https://raw.githubusercontent.com/ngoquy12/template_shopping_cart/refs/heads/master/images/pizza.jpg",
        quantity: 9
    },
    {
        id: 2,
        name: "Hamburger",
        discription:
            "Hamburger với bánh mì mềm, thịt bò nướng đậm vị kết hợp cùng rau tươi và sốt đặc biệt.",
        price: 15,
        image:
            "https://raw.githubusercontent.com/ngoquy12/template_shopping_cart/refs/heads/master/images/Hamburger.jpg",
        quantity: 7
    },
    {
        id: 3,
        name: "Bread",
        discription:
            "Ổ bánh mì nóng hổi, vỏ ngoài giòn tan, bên trong mềm mịn, thích hợp cho bữa sáng nhanh gọn.",
        price: 20,
        image:
            "https://raw.githubusercontent.com/ngoquy12/template_shopping_cart/refs/heads/master/images/bread.jpg",
        quantity: 6
    },
    {
        id: 4,
        name: "Cake",
        discription:
            "Bánh ngọt mềm mịn, vị ngọt vừa phải, phủ kem thơm ngon, thích hợp cho tiệc trà chiều.",
        price: 10,
        image:
            "https://raw.githubusercontent.com/ngoquy12/template_shopping_cart/refs/heads/master/images/Cake.jpg",
        quantity: 8
    },
];

const listItemReducer = (state: Item[] = defaultList, action: { type: string, payload: Item }): Item[] => {
    const cloneItemList = [...state]
    switch (action.type) {
        case "ADDTOCART":
            if (action.payload) {
                console.log(action.payload);
                
                // Nhận thông tin và tìm đến sản phẩm sau đó trừ đi trong danh sách
                const target = cloneItemList.find((item) => item.id === Number(action.payload.id))
                if (Number(target?.quantity) > 0) {
                    return cloneItemList.map((item) => item.id === target?.id ? { ...item, quantity: item.quantity - 1 } : item)
                }
            }
            return state
        default:
            return state;

    }
}

export default listItemReducer