// Create a variable for the error message and add a listener for form submission:

var message = document.querySelector(".error-text");
document.querySelector("#formEntry").addEventListener("submit", (event) => {
    event.preventDefault();
    checkInput();
});
// Select the email.value and check it for specific conditions:
function checkInput() {
    // const form = document.querySelector("#formEntry");
    const emailEntry = document.querySelector(".form-field").value.toLowerCase().trim();
    if (emailEntry == "") {
        message.innerText = "Oops! Please add your email";
        // check to see if RegEx matches an email
    } else if (!isEmail(emailEntry)) {
        message.innerText = "Oops! Please check your email";
    } else {
        message.innerText = "";
        window.open("./confirmation.html", "_self");
    };

};

function isEmail(email) {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
}

// JQuery method with same procedure:
// var message = $("error-text").text();
// $("#formEntry").submit((event) => {
//     event.preventDefault();
//     checkInput();
// });

// function checkInput() {
//     const form = $("#formEntry");
//     const emailEntry = $("input.form-field").val();

//     if (emailEntry == "") {
//         message.text() = "Oops! Please add your email";
//     } else if (!isEmail(emailEntry)) {
//         message.text() = "Oops! Please check your email";
//     } else {
//         message.text() = "";
//         window.open("./confirmation.html");
//     };
// };

// function isEmail(email) {
//     return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
// };