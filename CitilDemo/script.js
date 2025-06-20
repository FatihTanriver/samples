document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Optional: Hide sidebar when a menu item is clicked (on smaller screens)
    const navLinks = sidebar.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            sidebar.classList.remove("active");
        });
    });

    // Optional: Close sidebar if clicking outside of it
    document.addEventListener("click", function (event) {
        if (
            !sidebar.contains(event.target) &&
            !toggleButton.contains(event.target)
        ) {
            sidebar.classList.remove("active");
        }
    });
});
