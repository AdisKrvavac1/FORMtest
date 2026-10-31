// Smooth scrolling
$('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var target = $(this.getAttribute('href'))[0];
    $('html, body').animate({scrollTop: $(target).offset().top}, 1200);
});

// Simple form validation and success message
$('#contact-form').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    let name = $('#name').val(); // Get the value of the 'Name' field
    let email = $('#email').val(); // Get the value of the 'Email' field
    let message = $('#message').val(); // Get the value of the 'Message' field

    // Here you can add more validation logic if needed, e.g., checking the format of the email.

    // If all checks passed successfully:
    Swal.fire({
        icon: 'success',
        title: 'Poruka poslana!',
        text: 'Vaša poruka je uspješno poslana. Svači na nama bude prvo zahvaljen!' // Display a success alert
    }).then(() => {
        $('#contact-form')[0].reset(); // Reset the form
    });
});