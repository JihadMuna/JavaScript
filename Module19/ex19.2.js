const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
    ];
    
//1-Loop over the array with the forEach method 
//and dynamically create an ordered list of the first and last names of the objects.
const ol = document.createElement("ol");
users.forEach((user) => {
    console.log("user", user);
    const li = document.createElement("li");
    li.innerText = user.firstName + " " + user.lastName;

//Create a custom data attribute called “data-id” and attach
//the id value to each li.
    const dataId = document.createAttribute("data-id");
    li.setAttribute("data-id", user.id);

    ol.append(li); //attend the list to the parent
})

const body = document.getElementsByTagName("body")[0];
body.appendChild(ol);

// Remove the bullet points of the ordered list with JavaScript.
ol.classList.add("removeNum");
