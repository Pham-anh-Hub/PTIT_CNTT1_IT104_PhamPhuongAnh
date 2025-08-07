interface Products{
    productId: string,
    name : string,
    price: number,
};

interface OrderItem{
    product : Products,
    quantity : number,
    note ?: string,
};

interface Order{
    orderId : string;
    customerName: string,
    items : OrderItem[],
    deliveryAddress : string,
    isPaid : boolean,
}

interface Invoice {
    invoiceId : string,
    orders : Order[],
    createAt: Date,
}

// Tính tổng tiền của tất cả các đơn hàng có trong hóa đơn
const calculateInvoiceTotal = (invoice :Invoice) : number => {
    let {orders} = invoice;
    let total = 0;
    orders.forEach(order=> {
        const {items} = order;
        
        items.forEach(item => {
            total += (item.product.price * item.quantity);
        });
    });
    return total;
}

const calOrderTotal = (order : Order) : number => {
    let {items} = order;
    let total = 0;
    items.forEach(item => {
        total += (item.product.price * item.quantity);
    });
    return total;
}

const getUnpaidOrders = (invoice : Invoice) : Order[] => {
    const unpaidOrders = invoice.orders.filter((order) => order.isPaid === false);
    return unpaidOrders;
}

const formatDate = (currentTime : Date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };  // Note
    return `${currentTime.toLocaleDateString('vi-VN')}`;
}

const printInvoice = (invoice : Invoice) => {
    console.log(`HÓA ĐƠN: ${invoice.invoiceId} -Ngày tạo: ${formatDate(invoice.createAt)}`);
    console.log("--------------------------------------");
    invoice.orders.forEach(order => {
        console.log(`ĐƠN HÀNG: ${order.orderId} - ${order.customerName}`);
        order.items.forEach(item => {
            console.log(` - ${item.product.name} x ${item.quantity} --> ${(item.product.price * item.quantity).toLocaleString()} VND `);
        });    
        console.log(`Tổng đơn: ${calOrderTotal(order).toLocaleString()} VND `);    
        if (order.isPaid) {
            console.log("Trạng thái: ĐÃ THANH TOÁN");
        } else {
            console.log("Trạng thái: CHƯA THANH TOÁN");
        }
        
    });
        
        console.log(`>> Tổng cộng hóa đơn: ${calculateInvoiceTotal(invoice).toLocaleString()} VND`);
}

const newInvoice = {
    invoiceId : "INV001",
    orders : [
        {
            orderId: "OR001",
            customerName: "Nguyễn Văn A",
            items : [
                {
                    product : {
                        productId: "ITM001",
                        name : "Sản phẩm 1",
                        price: 125000,
                    },
                    quantity : 5,
                    note : "note cho sp",
                }
            ],
            deliveryAddress : "24 Hà Đông, Hà Nội",
            isPaid : true,
        },
        {
            orderId: "OR002",
            customerName: "Nguyễn Văn B",
            items : [
                {
                    product : {
                        productId: "ITM002",
                        name : "Sản phẩm 2",
                        price: 50000,
                    },
                    quantity : 10,
                },
                {
                    product : {
                        productId: "ITM003",
                        name : "Sản phẩm 5",
                        price: 100000,
                    },
                    quantity : 12,
                }

            ],
            deliveryAddress : "1 Hà Đông, Hà Nội",
            isPaid : false,
        }


    ],
    createAt : new Date(),
}

printInvoice(newInvoice);