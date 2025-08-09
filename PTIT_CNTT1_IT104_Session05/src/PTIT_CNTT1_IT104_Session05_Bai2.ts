class Student{
    protected _id: number;
    protected _age: number;
    protected _email: string;
    constructor(id : number, age : number, email: string){
        this._id = id;
        this._age = age;
        this._email = email;
    }
    id(){
        return this._id;
    }
    age(){
        return this._age;
    }
    email(){
        return this._email;
    }

    setId(newId : number){
        this._id = newId;
    }
    setAge(newAge : number){
        if(newAge > 0){
            this._age = newAge;
        }

    }
    setEmail(newEmail : string){
        this._email = newEmail;
    }
}

let studentList : Student[] = [];
studentList[0] = new Student(1, 18, "nva@gmail.com")
studentList[1] = new Student(2, 19, "nvb@gmail.com")
studentList[2] = new Student(3, 20, "nvc@gmail.com")

for (let i = 0; i < studentList.length; i++) {
    console.log(`ID: ${studentList[i].id()}`);
    console.log(`Age: ${studentList[i].age()}`);
    console.log(`Email: ${studentList[i].email()}`);
}
