"use strict";
const newStaff = {
    employedId: "EMP001",
    name: "Nguyễn Văn A",
    age: 20,
    department: "Kế toán",
};
const printStaffInfor = (staff) => {
    console.log(`${staff.name} (${staff.age} tuổi), Mã nhân viên: ${staff.employedId} - Phòng: ${staff.department} `);
};
printStaffInfor(newStaff);
