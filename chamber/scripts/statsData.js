document.addEventListener("DOMContentLoaded", function() {
    // Check if localStorage is supported
    if (typeof(Storage) !== "undefined") {
        // Retrieve the last visit date from localStorage
        var lastVisit = localStorage.getItem("lastVisit");
        if (lastVisit) {
            // Calculate the time difference between the last visit and now
            var currentDate = new Date();
            var diffTime = currentDate - new Date(lastVisit);
            var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            // Update the visit message based on the time difference
            var visitMessage = document.getElementById("visit-message");
            if (diffDays === 0) {
                visitMessage.textContent = "Back so soon! Awesome!";
            } else {
                visitMessage.textContent = "You last visited " + diffDays + (diffDays === 1 ? " day" : " days") + " ago.";
            }
        } else {
            // This is the user's first visit
            var visitMessage = document.getElementById("visit-message");
            visitMessage.textContent = "Welcome! Let us know if you have any questions.";

            // Store the current visit date in localStorage
            localStorage.setItem("lastVisit", new Date());
        }
    } else {
        // Browser doesn't support localStorage
        console.error("LocalStorage is not supported.");
    }
});
