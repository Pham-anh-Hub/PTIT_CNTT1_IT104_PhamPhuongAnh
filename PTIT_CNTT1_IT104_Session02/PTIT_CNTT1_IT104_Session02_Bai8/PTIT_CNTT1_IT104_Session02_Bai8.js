const displayUserInfor = (name, age, city, country, email = "unknown", phone = "unknown", title = "unknown", company = "unknown") => {
    const user = {
        name: name,
        age: age,
        location: {
            city: city,
            country: country,
        },
        contact: {
            email: email,
            phone: phone,
        },
        job: {
            title: title,
            company: company,
        },
    }
    console.log(`${user.name} is ${user.age} years old, lives in ${user.location.city}, ${user.location.country}, works as ${user.job.title} at ${user.job.company}, and can be contacted via ${user.contact.email} or ${user.contact.phone}.`);

}

displayUserInfor("Anna", 30, "Da Nang", "Vietnam")
displayUserInfor("John", 25, "Ha Noi", "VietNam", "john@gmail.com", "0987654321", "Dev", "TechCorp");