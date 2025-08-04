class ProductDetail {
    constructor(product) {
        this.name = product.name;
        this.quantity = product.quantity;

        let discount = product.discount || 0; // vì tổng discount của sản phẩm với bulkDIscount có thể > 1 --> dẫn đến lastPrice có thể âm
        if (product.bulkDiscount && product.quantity >= product.bulkDiscount.minQuantity) {
            discount += product.bulkDiscount.extraDiscount || 0;
        }
        this.lastPrice = product.price * (1 - discount);
        this.subTotal = this.lastPrice * product.quantity;
    }
}

const products = [
    { name: "A", price: 150, discount: 0.35, quantity: 2 },
    { name: "B", price: 200, discount: 0.24, quantity: 1, bulkDiscount: { minQuantity: 2, extraDiscount: 0.05 } },
    { name: "C", price: 300, discount: 0.1, quantity: 3, bulkDiscount: { minQuantity: 3, extraDiscount: 0.1 } },
];

const getOrderSummary = (products) => {
    let totalBeforeDiscount = 0;
    for (const product of products) {
        totalBeforeDiscount += (product.price * product.quantity);
    }
    console.log("totalBeforeDiscount: ", totalBeforeDiscount);
    let totalAfterDiscount = 0;
    for (const product of products) {
        if (product.bulkDiscount !== undefined && product.quantity >= product.bulkDiscount.minQuantity) {
            totalAfterDiscount += (product.price - product.price * (product.bulkDiscount.extraDiscount + product.discount)) * product.quantity;
        } else {
            totalAfterDiscount += (product.price - (product.price * product.discount)) * product.quantity;

        }
    }
    console.log("totalAfterDiscount: ", totalAfterDiscount);
    let detail = [];
    products.forEach(product => {
        let detailProduct = new ProductDetail(product);
        detail.push(detailProduct);
    });
    console.log(detail);



}
getOrderSummary(products);