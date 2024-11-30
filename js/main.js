//alerts users about the purpose of the website
alert("This website was created to fulfill Web Technology module\’s requirementsand does not represent an actual company or service");

const textarea = document.getElementById("textarea");
const form = document.getElementById("form");

//This function will validate form on submit and will change placeholders value of textare if it is empty 
form.addEventListener("submit", (e) => {
    if(textarea.value === '' || textarea.value === null) {
        textarea.classList.add("red-placeholder")
        textarea.placeholder = "Messages are required";
        e.preventDefault();
    }
})