// Function to validate a form
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.trim() === "") {
        alert("Name must be filled out");
        return false;
    }
    if (email.trim() === "") {
        alert("Email must be filled out");
        return false;
    }
    // Additional email validation could be added here

    if (message.trim() === "") {
        alert("Message must be filled out");
        return false;
    }

    return true;
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    if (validateForm()) {
        var formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        // Simulate form submission (replace with actual form submission logic)
        console.log("Form submitted:", formData);
        alert("Form submitted successfully!");

        // Clear form fields after submission
        document.getElementById("myForm").reset();
    }
}

// Event listener for form submission
document.getElementById("submitBtn").addEventListener("click", submitForm);

// Function to toggle menu display
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Function to display user input securely
function displayUserInput() {
    var userInput = document.getElementById("userInput").value;
    var displayArea = document.getElementById("displayArea");

    // Sanitize userInput to prevent XSS attacks
    var sanitizedInput = userInput.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    displayArea.innerHTML = "<p>You entered:</p><p>" + sanitizedInput + "</p>";
}
