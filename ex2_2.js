function convertDuration() {
    // References to elements on the page
    const inputTitle = document.getElementById("inputTitle");
    const inputDuration = document.getElementById("inputDuration");
    const outputTitle = document.getElementById("outputTitle");
    const outputResult = document.getElementById("outputResult");

    // Get the values from input fields
    const title = inputTitle.value;
    const duration = Number(inputDuration.value);

    // Simple validation
    if (title === "" || isNaN(duration) || duration <= 0) {
        alert("Please fill in the fields correctly.");
        return;
    }

    // Calculate hours and minutes
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    // Display results
    outputTitle.textContent = title;
    outputResult.textContent = hours + " hour(s) and " + minutes + " minute(s)";
}

// Attach the function to the button click event
const btnConvert = document.getElementById("btnConvert");
btnConvert.addEventListener("click", convertDuration);

