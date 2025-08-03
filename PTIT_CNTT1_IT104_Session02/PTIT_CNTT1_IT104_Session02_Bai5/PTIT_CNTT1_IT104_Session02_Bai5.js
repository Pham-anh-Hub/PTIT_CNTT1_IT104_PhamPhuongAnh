class Contact {
    constructor(name, phoneNum, email) {
        this.name = name;
        this.phonNum = phoneNum;
        this.email = email;
    }
}
const addContact = () => {
    let newPhoneName = prompt("Enter name: ");
    let newPhoneNum = prompt("Enter phoneNumber");
    let newPhoneEmail = prompt("Enter phone email: ");
    let newPhone = new Contact(newPhoneName, newPhoneNum, newPhoneEmail);
    phoneBook.push(newPhone);
}

const displayContact = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(`Contact ${i + 1}: `);
        console.log(`Name: ${array[i].name}`);
        console.log(`Phone: ${array[i].phonNum}`);
        console.log(`Email:
             ${array[i].email}`);
    }
}

let choice;
let phoneBook = [];
do {
    choice = Number.parseInt(prompt(`------Quản lý danh bạ------
        1. Add Contact
        2. Display Contact
        3. Exist
        Your choice: `));
    switch (choice) {
        case 1:
            addContact();
            break;
        case 2:
            displayContact(phoneBook);
            break;
        case 3:
            alert("GoodByeee !!");
            break;
        default:
            alert("Undefined Choice");
    }
} while (choice != 3);

