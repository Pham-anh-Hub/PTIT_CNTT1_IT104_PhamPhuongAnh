"use strict";
// Phương thức(method) thông thường  // Phương thức(method) trừu tượng
// - có phần thân                       - Không có phần thân, chỉ được khởi tạo thôgn qua abstract class
// - Sử dụng để thực hiện tác           - Được sử định nghĩa 1 hành vi(method)
// vụ cụ thể trong 1 lớp                chung mà lớp con phải thực hiện
// - Có thể gọi trực tiếp từ đối        - Không thể gọi trực tiếp, chỉ có thể gọi 
// tượng của lớp                        thông qua lớp con đã triển khai
Object.defineProperty(exports, "__esModule", { value: true });
// Sử dụng phương thức trừu tượng <=> 
// - Khi muốn định nghĩa 1 giao diện chung cho 1 nhóm các lớp liên quan
// - Khi muốn đảm bảo rằng tất cả các lớp ocn phải thực hiện 1 số hành vi cụ thể
// - Khi muốn tạo các lớp trừu tượng, không thể gọi trực tiếp mà chỉ có thể được kế thừa và triển khai
class Transport {
    name;
    company;
    price;
    constructor(name, company, price) {
        this.name = name;
        this.company = company;
        this.price = price;
    }
    // method thường
    printInfor() {
        console.log(`${this.name} - ${this.company} - ${this.price}`);
    }
}
//# sourceMappingURL=PTIT_CNTT1_IT104_Session06_Bai3.js.map