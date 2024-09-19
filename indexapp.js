document.getElementById('registration-form').addEventListener('submit', function(event) {
    // Get form field values
    var name = document.getElementById('Name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('Password').value;
    var birthdate = document.getElementById('bday').value;

    // Check if any fields are empty
    if (name === '' || email === '' || password === '' || birthdate === '') {
        // Prevent form submission
        event.preventDefault();

        // Display alert message
        alert('Please fill in all fields before submitting the form.');
    }
});

