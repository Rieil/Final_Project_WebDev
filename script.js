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

// Function to handle logging out and redirecting to the landing page
function logout() {
    // Clear any login indication (e.g., session or local storage)
    sessionStorage.removeItem('loggedIn');
    window.location.href = "landing.html"; 
}

// Function to handle home button behavior
function handleHomeButton() {
    if (sessionStorage.getItem('loggedIn')) {
        redirectToHome();
    } else {
        window.location.href = "landing.html"; 
    }
}

// Event listeners for buttons and form submissions
document.addEventListener("DOMContentLoaded", function() {
    // Get buttons
    const signupBtns = document.querySelectorAll(".signup-btn");
    const loginBtns = document.querySelectorAll(".login-btn");
    const signinBtn = document.querySelector(".signin-btn");
    const loginaccBtn = document.querySelector(".loginacc-btn");
    const homeBtns = document.querySelectorAll(".home-btn");
    const logoutBtn = document.querySelector(".logout-btn");

    // Add click event listeners to all Sign Up buttons
    signupBtns.forEach(function(button) {
        button.addEventListener("click", redirectToSignup);
    });

    // Add click event listeners to all Log In buttons
    loginBtns.forEach(function(button) {
        button.addEventListener("click", redirectToLogin);
    });

    // Add click event listeners to all Home buttons
    homeBtns.forEach(function(button) {
        button.addEventListener("click", handleHomeButton);
    });

    // Add click event listener to Logout button
    if (logoutBtn) {
        logoutBtn.addEventListener("click", logout);
    }

    // Add submit event listener to Sign In button in Sign Up form
    if (signinBtn) {
        signinBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent form submission (for demonstration)
            
            const signupForm = new FormData(document.getElementById("signupForm"));

            fetch('http://localhost/Final_forms/signup.php', {
                method: 'POST',
                body: signupForm
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
                if (data.includes("successfully")) {
                    sessionStorage.setItem('loggedIn', true);
                    redirectToHome();
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }

    // Add submit event listener to Log In button in Log In form
    if (loginaccBtn) {
        loginaccBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent form submission (for demonstration)
            
            const loginForm = new FormData(document.getElementById("loginForm"));

            fetch('http://localhost/Final_forms/login.php', {
                method: 'POST',
                body: loginForm
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
                if (data.includes("successful")) {
                    sessionStorage.setItem('loggedIn', true);
                    redirectToHome();
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }
});
