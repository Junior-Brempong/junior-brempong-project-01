//  Create a variable to store our button in --> querySelector

//  Create a listener so we know when the user is has clicked on the button

// preventDefault() --> this doesn't have implications when we refresh the page



// Store the form element in a variable

// target create function for when user submits form that an alert will appear thanking them for contributing!

const button = document.querySelector(`button`);
const formEl = document.querySelectorAll(`input`);
const comment = document.querySelector(`textarea`);


button.addEventListener(`click`, function(event) {
    event.preventDefault();
    alert(`Thank you for your form submission!`);
    location.reload;
    formEl.forEach(input => input.value = '');
    comment.value = "";
});

