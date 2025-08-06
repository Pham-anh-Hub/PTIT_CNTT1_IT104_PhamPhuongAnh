"use strict";
const getFullname = (firstname, lastname) => {
    firstname = firstname.charAt(0).toUpperCase() + firstname.substring(1, firstname.length);
    lastname = lastname.charAt(0).toUpperCase() + lastname.substring(1, lastname.length);
    let fullname = ` ${firstname} ${lastname}`;
    return fullname;
};
console.log(getFullname("john", "doe"));
