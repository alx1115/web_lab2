// Manages user profile interactions
document.addEventListener("DOMContentLoaded", function() {
    const profileForm = document.querySelector('.profileForm');

    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const details = {
            email: document.querySelector('input[name="email"]').value,
            name: document.querySelector('input[name="name"]').value,
            dob: document.querySelector('input[name="dob"]').date
        };

        const userModel = new UserModel();
        userModel.updateProfile(details);

        alert("Profile updated successfully!");
    });
});
