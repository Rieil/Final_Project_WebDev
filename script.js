document.addEventListener("DOMContentLoaded", function() {
    // Get DOM elements
    const signupBtns = document.querySelectorAll(".signup-btn");
    const loginBtns = document.querySelectorAll(".login-btn");
    const signinBtn = document.querySelector(".signin-btn");
    const loginaccBtn = document.querySelector(".loginacc-btn");
    const homeBtns = document.querySelectorAll(".home-btn");
    const logoutBtn = document.querySelector(".logout-btn");
    const getStartedBtn = document.querySelector(".started-btn");
    const perInfoForm = document.getElementById("per_info_form"); // Personal info form
    const educForm = document.getElementById("education_info"); // Education form

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
        window.location.href = "landing.html"; // Redirect to landing page
    }

    // Function to handle home button behavior
    function handleHomeButton() {
        if (sessionStorage.getItem('loggedIn')) {
            redirectToHome();
        } else {
            window.location.href = "landing.html"; // Redirect to landing page if not logged in
        }
    }

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

    // Add click event listener to Get Started button
    if (getStartedBtn) {
        getStartedBtn.addEventListener("click", function() {
            window.location.href = "per_info.html";
        });
    }

    // Add submit event listener to Personal Info form
    if (perInfoForm) {
        perInfoForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            // Send form data to per_info.php using fetch API
            fetch('per_info.php', {
                method: 'POST',
                body: new FormData(perInfoForm)
            })
            .then(response => response.text())
            .then(data => {
                alert(data); // Display server response for testing
                if (data.includes("successfully")) {
                    sessionStorage.setItem('loggedIn', true);
                    redirectToHome(); // Redirect to home.html upon successful submission
                } else {
                    console.error('Submission failed:', data); // Log error if submission fails
                }
            })
            .catch(error => console.error('Fetch Error:', error)); // Catch any fetch API errors
        });
    }

    // Add submit event listener to Education form
    if (educForm) {
        educForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            // Send form data to educ_info.php using fetch API
            fetch('educ_info.php', {
                method: 'POST',
                body: new FormData(educForm)
            })
            .then(response => response.text())
            .then(data => {
                alert(data); // Display server response for testing
                if (data.includes("successfully")) {
                    sessionStorage.setItem('loggedIn', true);
                    redirectToHome(); // Redirect to home.html upon successful submission
                }
            })
            .catch(error => console.error('Fetch Error:', error));
        });
    }

    // Add submit event listener to Sign In button in Sign Up form
    if (signinBtn) {
        signinBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent form submission

            fetch('http://localhost/Final_forms/signup.php', {
                method: 'POST',
                body: new FormData(document.getElementById("signupForm"))
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
                if (data.includes("successfully")) {
                    sessionStorage.setItem('loggedIn', true);
                    redirectToHome();
                }
            })
            .catch(error => console.error('Fetch Error:', error));
        });
    }

    // Add submit event listener to Log In button in Log In form
    if (loginaccBtn) {
        loginaccBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent form submission

            fetch('http://localhost/Final_forms/login.php', {
                method: 'POST',
                body: new FormData(document.getElementById("loginForm"))
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
                if (data.includes("successful")) {
                    sessionStorage.setItem('loggedIn', true);
                    redirectToHome();
                }
            })
            .catch(error => console.error('Fetch Error:', error));
        });
    }
});
