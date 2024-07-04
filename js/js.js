// JavaScript for toggling section visibility

// Function to toggle section visibility based on sectionId
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Add event listeners to section buttons to toggle section visibility
document.addEventListener("DOMContentLoaded", function() {
    var sectionButtons = document.querySelectorAll(".section-button");
    sectionButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var sectionId = button.getAttribute("data-section-id");
            toggleSection(sectionId);
        });
    });
});
