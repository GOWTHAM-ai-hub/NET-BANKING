document.addEventListener('DOMContentLoaded', function () {
    // Select the form element
    const form = document.getElementById('create-account-form');

    // Add an event listener for form submission
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();
        // Show the alert popup
        alert('Your account has been created successfully!');
    });
});