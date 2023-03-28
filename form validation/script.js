const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordRewrite = document.getElementById("passwordRewrite");
const submitBtn = document.getElementById("submit");
const form = document.getElementById("form");

let pas = false;
let pasR = false;
let em = false;
let zp = false;

function checkPass() {
    if (password.value.length < 7) {
        password.setCustomValidity(
            "Password must be at least 8 characters long"
        );
    } else {
        password.setCustomValidity("");
        pas = true;
    }
}

password.addEventListener("input", () => {
    checkPass();
});

function checkPassRewrite() {
    if (password.value !== passwordRewrite.value) {
        passwordRewrite.setCustomValidity("Please rewrite the same password");
    } else {
        passwordRewrite.setCustomValidity("");
        pasR = true;
    }
}

passwordRewrite.addEventListener("input", () => {
    checkPassRewrite();
});

function checkZIP() {
    const constraints = {
        Romania: [
            "^\\d{6}$",
            "The length of the zip code should be exactly 6.",
        ],
        Sweden: ["^\\d{3}\\s*\\d{2}$", "Fill in a valid zip code for Sweden."],
        Switzerland: ["^\\d{4}$", "Fill a valid Switzerland zip code."],
    };
    const country = document.getElementById("country").value;

    const zipField = document.getElementById("ZIP");

    const constraint = new RegExp(constraints[country][0], "");

    if (constraint.test(zipField.value)) {
        zipField.setCustomValidity("");
        zp = true;
    } else {
        zipField.setCustomValidity(constraints[country][1]);
    }
}

window.onload = () => {
    document.getElementById("country").onchange = checkZIP;
    document.getElementById("ZIP").oninput = checkZIP;
};

function checkEmail() {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please fill in a valid email address!");
    } else {
        email.setCustomValidity("");
        em = true;
    }
}

email.addEventListener("input", () => {
    checkEmail();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (zp === true && em === true && pas === true && pasR === true) {
        window.alert("Form filled in. High Five");
        form.reset();
        return;
    } else {
        checkEmail();
        checkZIP();
        checkPass();
        checkPassRewrite();
    }
});
