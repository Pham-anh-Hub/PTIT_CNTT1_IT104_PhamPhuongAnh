type Person = {
    name: string,
    age : number,
}

type Employee = {
    employedId : string,
    department : string,
}

type staffMember = Person & Employee;

const newStaff : staffMember = {
    employedId: "EMP001",
    name: "Nguyễn Văn A",
    age : 20,
    department: "Kế toán",
}

const printStaffInfor = (staff : staffMember) => {
    console.log(`${staff.name} (${staff.age} tuổi), Mã nhân viên: ${staff.employedId} - Phòng: ${staff.department} `);
}

printStaffInfor(newStaff);