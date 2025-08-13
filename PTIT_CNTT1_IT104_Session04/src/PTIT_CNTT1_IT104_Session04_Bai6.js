"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listProduct = [
    {
        id: "SP001",
        name: "Sản phẩm 1",
        price: 120000,
        category: {
            id: "CTG001",
            name: "Thời trang",
        },
        discount: 0.2,
    },
    {
        id: "SP002",
        name: "Sản phẩm 2",
        price: 125000,
        category: {
            id: "CTG003",
            name: "Thực phẩm",
        },
    },
    {
        id: "SP002",
        name: "Sản phẩm 6",
        price: 11000,
        category: {
            id: "CTG007",
            name: "Gia dụng",
        },
        discount: 0.1,
    }
];
const getFinalPrice = (product) => {
    let finalPrice;
    if (product.discount !== undefined) {
        finalPrice = product.price * (1 - product.discount);
    }
    else {
        finalPrice = product.price;
    }
    return finalPrice;
};
const getProductInfo = (product) => {
    console.log("Tên: ", product.name);
    console.log("Giá gốc: ", product.price);
    if (getFinalPrice(product) == product.price) {
        console.log("Sản phẩm không có discount");
    }
    else {
        console.log("Giá sau giảm: ", getFinalPrice(product));
    }
    console.log("Danh mục: ", product.category.name);
};
getProductInfo(listProduct[0]);
getProductInfo(listProduct[1]);
getProductInfo(listProduct[2]);
//# sourceMappingURL=PTIT_CNTT1_IT104_Session04_Bai6.js.map