// getDates.js

document.addEventListener("DOMContentLoaded", function() {
    // Copyright year
    var yearSpan = document.getElementById("currentYear");
    var currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Last modified date
    var modifiedSpan = document.getElementById("lastModified");
    modifiedSpan.textContent = "Last Modified: " + document.lastModified;
});