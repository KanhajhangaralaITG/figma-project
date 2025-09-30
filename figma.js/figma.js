
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Form ko submit hone se rokna

        let isValid = true;

        // Input Fields
        const firstName = document.getElementById("firstName");
        const lastName = document.getElementById("lastName");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const gender = document.querySelector('input[name="gender"]:checked');
        const terms = document.getElementById("terms");

        // Error Fields
        const firstNameError = document.getElementById("firstNameError");
        const lastNameError = document.getElementById("lastNameError");
        const emailError = document.getElementById("emailError");
        const phoneError = document.getElementById("phoneError");
        const genderError = document.getElementById("genderError");
        const termsError = document.getElementById("termsError");

        // --- Reset sab error messages ---
        firstNameError.style.display = "none";
        lastNameError.style.display = "none";
        emailError.style.display = "none";
        phoneError.style.display = "none";
        genderError.style.display = "none";
        termsError.style.display = "none";

        // --- Validation Rules ---
        if (firstName.value.trim() === "") {
            firstNameError.style.display = "block";
            isValid = false;
        }

        if (lastName.value.trim() === "") {
            lastNameError.style.display = "block";
            isValid = false;
        }

        if (!validateEmail(email.value)) {
            emailError.style.display = "block";
            isValid = false;
        }

        if (!validatePhone(phone.value)) {
            phoneError.style.display = "block";
            isValid = false;
        }

        if (!gender) {
            genderError.style.display = "block";
            isValid = false;
        }

        if (!terms.checked) {
            termsError.style.display = "block";
            isValid = false;
        }

        if (isValid) {
            // Sab input values collect karo
            const formData = {
                firstName: firstName.value.trim(),
                lastName: lastName.value.trim(),
                email: email.value.trim(),
                phone: phone.value.trim(),
                date: document.getElementById("date").value,
                gender: gender.value,
                hobbies: Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(cb => cb.value),
                message: document.getElementById("message").value.trim(),
                newsletter: document.getElementById("newsletter").checked,
                terms: terms.checked,
                offers: document.getElementById("offers").checked
            };

            console.log("Form Data Submitted:", formData);
            alert("Form submitted successfully!");
        }
    });

    // Helper function: Email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Helper function: Phone number validation (basic)
    function validatePhone(phone) {
        const re = /^[0-9]{10}$/;
        return re.test(phone);
    }

