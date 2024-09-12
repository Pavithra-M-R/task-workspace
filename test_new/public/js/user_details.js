$(document).ready(function() {
    $('#save-button').on('click', function(e) {
        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            address: $('#address').val(),
            mobile_number: $('#mobile_number').val(),
        };
        console.log("Sending data", formData);
        const  csrf_token = $('meta[name="csrf-token"]').attr('content'); // Fetch CSRF token
        $.ajax({
            url: '/api/method/test_new.api.save_portal_user_data',
            type: 'POST',
            contentType: 'application/json',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-Frappe-CSRF-Token": csrf_token // Include CSRF token in headers
            },
            data: JSON.stringify({ data: formData }),
            success: function(response) {
                console.log("Response data", response);
                if (response.message === 'success') {
                    console.log("Data saved successfully!");
                }
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
            }
        });

    });
});

