$(document).ready(function() {
    $("#arrow-link").click(function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Add a fade-out effect to the body
        $("body").fadeOut(800, function() {
            // Redirect to the target page after fade-out
            window.location.href = $("#arrow-link").attr("href");
        });
    });

    // Toggle popup screen visibility
    $(".menu-icon").click(function() {
        $(".popup-screen").addClass("popup-visible");
    });

    $(".close-btn").click(function() {
        $(".popup-screen").removeClass("popup-visible");
    });
});
