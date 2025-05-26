document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let departure = document.getElementById("departure").value;
    let destination = document.getElementById("destination").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let seats = document.getElementById("seats").value;

    // Validate input fields
    if (departure === destination) {
        alert("Departure and destination cannot be the same!");
        return;
    }

    // Show confirmation message
    let confirmationMessage = `
        ✅ Booking Successful! <br>
        Passenger: ${name} <br>
        Email: ${email} <br>
        Phone: ${phone} <br>
        From: ${departure} → ${destination} <br>
        Date: ${date} | Time: ${time} <br>
        Seats: ${seats} 
    `;
    document.getElementById("confirmationMessage").innerHTML = confirmationMessage;
});