// user.js
function goBack() {
    window.location.href = '../index.html';
}

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const displayName = urlParams.get('displayName');

    // Display the welcome message with the user's display name
    const welcomeMessage = `Welcome, ${displayName || 'Guest'}`;
    const welcomeMessageElement = document.getElementById('welcomeMessage');
    if (welcomeMessageElement) {
        welcomeMessageElement.textContent = welcomeMessage;
    } else {
        console.error("Element with ID 'welcomeMessage' not found.");
    }

    // Retrieve user's display name from query parameter
    const displayNameElement = document.getElementById('displayName');
    if (displayNameElement) {
        displayNameElement.textContent = displayName || 'Guest';
    } else {
        console.error("Element with ID 'displayName' not found.");
    }
});