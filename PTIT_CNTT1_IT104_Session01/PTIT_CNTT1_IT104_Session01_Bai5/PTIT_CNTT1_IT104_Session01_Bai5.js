const response = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "Dev",
            email: "Dev@gmail.com",
        },
    },
};

const extractData = (data) => {
    let { title } = data;
    let { author } = data;
    console.log("Title: ", title);
    console.log("Author: ", author);
    console.log("AuthorName: ", author.name);
    console.log("AuthorEmail: ", author.email);
}

extractData(response.data);


