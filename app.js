(function () {
    // Add a 'click' event listener to each control button
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            // Remove 'active-btn' class from the currently active button
            document.querySelector(".active-btn").classList.remove("active-btn");
            // Add 'active-btn' class to the clicked button
            this.classList.add("active-btn");
            // Remove 'active' class from the currently active section
            document.querySelector(".active").classList.remove("active");
            // Add 'active' class to the section corresponding to the clicked button
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

    // Add a 'click' event listener to the theme button
    document.querySelector(".theme-btn").addEventListener("click", () => {
        // Toggle the 'light-mode' class on the body
        document.body.classList.toggle("light-mode");
    });

    // Add a 'click' event listener to the submit button in the contact form
    document.getElementById("submitButton").addEventListener("click", function () {
        // Trigger form submission when the button is clicked
        document.getElementById("contactForm").submit();
    });
})();
