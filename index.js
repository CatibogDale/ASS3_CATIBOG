document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registration-form').addEventListener('submit', function(event) {
        // Get form field values
        var name = document.getElementById('Name').value.trim();
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('Password').value.trim();
        var birthdate = document.getElementById('bday').value.trim();

        // Array to store names of fields with errors
        var errorFields = [];

        // Check if name is empty or does not meet length requirements
        if (name === '') {
            errorFields.push('Name is required');
        } else if (name.length < 3) {
            errorFields.push('Name must be at least 3 characters long');
        } else if (name.length > 15) {
            errorFields.push('Name must not exceed 15 characters');
        }

        // Check if other fields are empty
        if (email === '') {
            errorFields.push('E-mail is required');
        }
        if (password === '') {
            errorFields.push('Password is required');
        }
        if (birthdate === '') {
            errorFields.push('Birthdate is required');
        }

        // If there are any errors, prevent submission and show an alert
        if (errorFields.length > 0) {
            // Prevent form submission
            event.preventDefault();

            // Display alert message listing errors
            alert('Please correct the following errors before submitting the form:\n- ' + errorFields.join('\n- '));
        }
    });
});
