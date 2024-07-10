// Function to handle redirecting to signup page
function redirectToSignup() {
    window.location.href = "signup.html";
}

// Function to handle redirecting to login page
function redirectToLogin() {
    window.location.href = "login.html";
}

// Function to handle redirecting to home page after signup or login
function redirectToHome() {
    window.location.href = "home.html";
}

// Event listeners for buttons and form submissions
document.addEventListener("DOMContentLoaded", function() {
    // Get buttons
    const signupBtns = document.querySelectorAll(".signup-btn");
    const loginBtns = document.querySelectorAll(".login-btn");
    const signinBtn = document.querySelector(".signin-btn");
    const loginaccBtn = document.querySelector(".loginacc-btn");

    // Add click event listeners to all Sign Up buttons
    signupBtns.forEach(function(button) {
        button.addEventListener("click", redirectToSignup);
    });

    // Add click event listeners to all Log In buttons
    loginBtns.forEach(function(button) {
        button.addEventListener("click", redirectToLogin);
    });

    // Add submit event listener to Sign In button in Sign Up form
    if (signinBtn) {
        signinBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent form submission (for demonstration)
            const firstname = document.getElementById("firstname").value.trim();
            const lastname = document.getElementById("lastname").value.trim();
            const studentnumber = document.getElementById("studentnumber").value.trim();
            const password = document.getElementById("password").value.trim();
            const confirmpassword = document.getElementById("confirmpassword").value.trim();

            // Perform form validation if needed
            if (firstname === '' || lastname === '' || studentnumber === '' || password === '' || confirmpassword === '') {
                alert("Please fill in all fields.");
                return;
            }

            // Redirect to home page after form submission
            redirectToHome();
        });
    }

    // Add submit event listener to Log In button in Log In form
    if (loginaccBtn) {
        loginaccBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent form submission (for demonstration)
            const studentnumberLogin = document.getElementById("studentnumber-login").value.trim();
            const passwordLogin = document.getElementById("password-login").value.trim();

            // Perform form validation if needed
            if (studentnumberLogin === '' || passwordLogin === '') {
                alert("Please fill in all fields.");
                return;
            }

            // Redirect to home page after form submission
            redirectToHome();
        });
    }
});
