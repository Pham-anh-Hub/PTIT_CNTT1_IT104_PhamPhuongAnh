interface User{
    name : string;
    age : number;
    job : string;
}

const partialUpdate = <T>(obj : T, updates : Partial<T>) : T => {
    return {...obj, ...updates};
}

const object1 : User = { name: 'Nguyễn Văn A', age: 25, job: 'Dev'};
const updates1  = { age: 31 };
console.log("Object 1: ",partialUpdate(object1, updates1));

const object2 : User = { name: 'Nguyễn Văn B', age: 28, job: 'Business Analyse' };
const updates2  = { name: 'Trần Văn C', job: 'Designer' };
console.log("Object 2: ", partialUpdate(object2, updates2));
