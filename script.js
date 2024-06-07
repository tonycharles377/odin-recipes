document.addEventListener("DOMContentLoaded", () => {
    const moonSunElement = document.querySelector(".moon-sun");
    const darkModeClass = "dark";

    // Function to apply the saved theme
    const applySavedTheme = () => {
        const isDarkMode = localStorage.getItem("dark-mode");
        if (isDarkMode === "true") {
            document.body.classList.add(darkModeClass);
        } else {
            document.body.classList.remove(darkModeClass);
        }
    };

    // Apply the saved theme when the page loads
    applySavedTheme();

    // Toggle the theme and save the preference
    if (moonSunElement) {
        moonSunElement.addEventListener("click", () => {
            document.body.classList.toggle(darkModeClass);
            const isDarkMode = document.body.classList.contains(darkModeClass);
            localStorage.setItem("dark-mode", isDarkMode);
        });
    } else {
        console.error("Element .moon-sun not found");
    }
});
