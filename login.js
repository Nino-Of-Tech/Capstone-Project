// Select form elements
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signInButton = document.querySelector('button[type="submit"]');
const googleSignInButton = document.querySelector('.google-signin');

// Event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the default way

  // Get email and password values
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Validate email and password fields
  if (!email || !validateEmail(email)) {
    alert('Please enter a valid email.');
    return;
  }

  if (!password) {
    alert('Please enter your password.');
    return;
  }

  // Simulate sign-in process
  signIn(email, password);
});

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to handle sign-in
function signIn(email, password) {
  // Simulate an API request (replace with your actual sign-in logic)
  console.log('Signing in with:', email, password);
  
  // Example: Displaying a successful sign-in message
  setTimeout(() => {
    alert('Signed in successfully!');
    // Redirect to the dashboard or next page here
    window.location.href = '/dashboard'; // Change to your dashboard URL
  }, 1000);
}

// Event listener for Google Sign-In button
googleSignInButton.addEventListener('click', function() {
  alert('Google Sign-In is not implemented yet.');
  // Redirect to Google OAuth or similar here
});
