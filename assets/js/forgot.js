// Get all necessary elements
const emailSection = document.getElementById("emailSection");
const otpSection = document.getElementById("otpSection");
const newPasswordSection = document.getElementById("newPasswordSection");
const successMessage = document.getElementById("successMessage");

// Form elements
const emailForm = document.getElementById("emailForm");
const otpForm = document.getElementById("otpForm");
const newPasswordForm = document.getElementById("newPasswordForm");

// Step indicators
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

// Password validation elements
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");
const passwordRequirements = document.querySelectorAll(
    ".password-requirements li"
);

// OTP verification elements
const otpInput = document.getElementById("otpInput");
const verificationIconSuccess = document.getElementById(
    "verificationIconSuccess"
);
const verificationIconError = document.getElementById("verificationIconError");

// Generate a random 6-digit OTP for demo
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

let currentOTP = null;

// Email form submission - Request OTP
emailForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("resetEmail").value;

    // For demo purposes, generate and show OTP
    currentOTP = generateOTP();
    console.log("Generated OTP:", currentOTP);

    // Show alert with OTP for demo purposes
    alert(`For demo purposes, your OTP is: ${currentOTP}`);

    // Hide email section, show OTP section
    emailSection.style.display = "none";
    otpSection.style.display = "block";
    otpSection.classList.add("fadeIn");

    // Update step indicators
    step1.classList.remove("active");
    step2.classList.add("active");
});

// Reset verification icons
function resetVerificationIcons() {
    verificationIconSuccess.classList.remove("icon-show");
    verificationIconError.classList.remove("icon-show");
}

// OTP form submission - Verify OTP
otpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const enteredOTP = otpInput.value;

    // Reset icons first
    resetVerificationIcons();

    // Simple validation for demo
    if (enteredOTP == currentOTP) {
        // Show success icon
        verificationIconSuccess.classList.add("icon-show");

        // Proceed to next step after a short delay
        setTimeout(() => {
            // Success - show new password section
            otpSection.style.display = "none";
            newPasswordSection.style.display = "block";
            newPasswordSection.classList.add("fadeIn");

            // Update step indicators
            step2.classList.remove("active");
            step3.classList.add("active");
        }, 1000);
    } else {
        // Show error icon
        verificationIconError.classList.add("icon-show");
    }
});

// Resend OTP
document
    .getElementById("resendOtp")
    .addEventListener("click", function (event) {
        event.preventDefault();

        // Generate new OTP
        currentOTP = generateOTP();
        console.log("New OTP:", currentOTP);

        // Show alert with new OTP for demo
        alert(`For demo purposes, your new OTP is: ${currentOTP}`);

        // Reset the verification icons
        resetVerificationIcons();
        otpInput.value = "";
    });

// Reset verification icons when typing in OTP input
otpInput.addEventListener("input", function () {
    resetVerificationIcons();
});

// Password validations
newPassword.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validatePassword);

function validatePassword() {
    const password = newPassword.value;
    const confirm = confirmPassword.value;

    // Length validation
    if (password.length >= 8) {
        passwordRequirements[0].classList.add("valid");
    } else {
        passwordRequirements[0].classList.remove("valid");
    }

    // Uppercase validation
    if (/[A-Z]/.test(password)) {
        passwordRequirements[1].classList.add("valid");
    } else {
        passwordRequirements[1].classList.remove("valid");
    }

    // Number validation
    if (/[0-9]/.test(password)) {
        passwordRequirements[2].classList.add("valid");
    } else {
        passwordRequirements[2].classList.remove("valid");
    }

    // Special character validation
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        passwordRequirements[3].classList.add("valid");
    } else {
        passwordRequirements[3].classList.remove("valid");
    }

    // Password match validation
    if (password === confirm && password !== "") {
        passwordRequirements[4].classList.add("valid");
    } else {
        passwordRequirements[4].classList.remove("valid");
    }
}

// New password form submission
newPasswordForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const password = newPassword.value;
    const confirm = confirmPassword.value;

    // Check if all requirements are met
    const requirements = [
        password.length >= 8,
        /[A-Z]/.test(password),
        /[0-9]/.test(password),
        /[!@#$%^&*(),.?":{}|<>]/.test(password),
        password === confirm,
    ];

    if (requirements.every((req) => req === true)) {
        // Success - show completion message
        newPasswordSection.style.display = "none";
        successMessage.style.display = "block";
        successMessage.classList.add("fadeIn");

        // Simulate redirect after success
        setTimeout(() => {
            alert("Password reset successful! Redirecting to login page...");
            // In a real app, you would redirect to login page
            window.location.href = "login.html";
        }, 3000);
    } else {
        alert("Please ensure all password requirements are met.");
    }
});

// Back to login
document
    .getElementById("backToLogin")
    .addEventListener("click", function (event) {
        event.preventDefault();
        // alert('Redirecting to login page...');
        // In a real app, you would redirect to login page
        window.location.href = "login.html";
    });
