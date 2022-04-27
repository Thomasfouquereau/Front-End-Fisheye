export function displayModal() {
    const modal = document.getElementById("contact_modal");
    const close = document.getElementById("closeModal");
    modal.style.display = "block";
    document.forms[0].reset();
    close.focus();
}

export function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    document.forms[0].reset();
}

export function closeKeyboard(e) {
    const modal = document.getElementById("contact_modal");
    if (e.key === "Escape" || e.key === "Esc") {
        modal.style.display = "none";
    document.forms[0].reset();
    }
}


/**
 * validateur du formulaire
 */

const form = document.getElementById("section");
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const myInput = document.getElementById("firstName");
    const firstNameValid = isFirstName(myInput.value);

    if (!firstNameValid) {
        myInput.style.border = "2px solid red";
    } else {
        myInput.style.border = "2px solid green";
    }

    const myInputlast = document.getElementById("lastName");
    const lastNameValid = isLastName(myInputlast.value);

    if (!lastNameValid) {
        myInputlast.style.border = "2px solid red";
    } else {
        myInputlast.style.border = "2px solid green";
    }

    const myInputEmail = document.getElementById("e-mail");
    const emailValid = isEmail(myInputEmail.value);

    if (!emailValid) {
        myInputEmail.style.border = "2px solid red";
    } else {
        myInputEmail.style.border = "2px solid green";
    }

    if (firstNameValid && lastNameValid && emailValid ) { 
       document.getElementById("submit").disabled = true;
       const modal = document.getElementById("contact_modal");
       console.log(`Firstname : ${myInput.value} ` + `Lastname : ${myInputlast.value} ` + `Email : ${myInputEmail.value} `);
       modal.style.display = "none";
       document.forms[0].reset();
    } else {
        document.getElementById("submit").disabled = false;
    }
});


function isFirstName(val) {
    return val.trim().length >= 2
}

function isLastName(val) {
    return val.trim().length >= 2
}

function isEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

document.getElementById("submit").addEventListener("click", function () {
    // document.forms[0].reset();
});