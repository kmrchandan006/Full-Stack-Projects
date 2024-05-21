// Get the navbar element
var navbar = document.querySelector(".navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add a scroll event listener to the window
window.addEventListener("scroll", function() {
  // Check if the window scroll position is greater than or equal to the navbar offset position
  if (window.pageYOffset >= sticky) {
    // Add a sticky class to the navbar
    navbar.classList.add("sticky");
  } else {
    // Remove the sticky class from the navbar
    navbar.classList.remove("sticky");
}
});