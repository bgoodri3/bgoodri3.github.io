let currentSlideId = 'B'; // Default to the first slide

function showSlide(letter) {
  // Hide the current slide
  document.getElementById(`slide-${currentSlideId}`).style.display = 'none';

  // Show the selected slide
  document.getElementById(`slide-${letter}`).style.display = 'block';

  // Update the current slide ID
  currentSlideId = letter;
}

// Show the first slide on page load
showSlide('B');