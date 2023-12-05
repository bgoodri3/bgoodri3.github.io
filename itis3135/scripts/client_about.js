var originalText = "Welcome to 2bSquared Design! We are a nonprofit design business. We offer designs for cakes, cupcakes, t-shirts (when available), and more. Thanks for checking us out!";
var updatedText = "We strive for creative excellence in every design. Explore our portfolio!";

var isOriginal = true;

function changeWelcomeText() {
  var welcomeText = document.getElementById('welcome-text');
  
  if (isOriginal) {
    welcomeText.innerHTML = updatedText;
  } else {
    welcomeText.innerHTML = originalText;
  }

  // Toggle the state
  isOriginal = !isOriginal;
}