document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    
    // Get the values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check if the username is a valid Gmail address
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailPattern.test(username)) {
        alert('Please enter a valid Gmail address.');
        return;
    }
    
    // Check if the password is at least 6 characters long
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }
    
    // Log the values to the console (only readable by you)
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    
    // Optionally clear the form
    document.getElementById('loginForm').reset();
});