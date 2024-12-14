function goBack() {
    window.location.href = "index.html"; 
}


function librarianLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // temp
    const librarianUsername = "admin";
    const librarianPassword = "admin";

    if (username === librarianUsername && password === librarianPassword) {
        alert("Welcome, Librarian!");
        window.location.href = "admin_portal.html"; 
    } else {
        alert("Invalid username or password. Please try again.");
    }
}


function loginn(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // for now
    const studentid = "yaren";
    const studentpas = "yaren";

    if (username === studentid && password === studentpas) {
        
        window.location.href = "student_page.html"; 
    } else {
        alert("Invalid username or password. Please try again.");
    }
}