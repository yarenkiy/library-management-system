function goBack() {
    window.location.href = "index.html"; // Replace with the selection page URL
}

// Librarian Login Functionality
function librarianLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Hardcoded librarian credentials
    const librarianUsername = "admin";
    const librarianPassword = "admin";

    if (username === librarianUsername && password === librarianPassword) {
        alert("Welcome, Librarian!");
        window.location.href = "admin_portal.html"; // Redirect to the librarian dashboard
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Placeholder for forgot password functionality
function forgotPassword() {
    alert("Please contact library support to reset your password.");
}