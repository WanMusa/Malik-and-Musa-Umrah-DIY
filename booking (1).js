
document.addEventListener('DOMContentLoaded', function () {
    // Handle hotel booking locations
    const hotelForm = document.getElementById('hotel-form');
    const hotelSummary = document.getElementById('hotel-summary');

    if (hotelForm && hotelSummary) {
        hotelForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const locations = document.querySelectorAll('.hotel-location');
let summary = `Hotel Bookings:
`;
            locations.forEach((loc, index) => {
                if (loc.value.trim() !== '') {
                    summary += `Location ${index + 1}: ${loc.value}
`;
                }
            });
            hotelSummary.textContent = summary;
        });
    }

    // Handle flight search
    const flightForm = document.getElementById('flight-form');
    const flightSummary = document.getElementById('flight-summary');

    if (flightForm && flightSummary) {
        flightForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const from = document.getElementById('from').value;
            const to = document.getElementById('to').value;
            const passengers = document.getElementById('passengers').value;
            flightSummary.textContent = `Flight from ${from} to ${to} for ${passengers} passenger(s)`;
        });
    }

    // Handle interest registration
    const interestForm = document.getElementById('interest-form');
    const interestMessage = document.getElementById('interest-message');

    if (interestForm && interestMessage) {
        interestForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            interestMessage.textContent = `Thank you, ${name}. We'll contact you soon to complete your booking!`;
        });
    }
});
