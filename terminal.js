document.addEventListener('DOMContentLoaded', function() {
    let radios = document.querySelectorAll('input[type="radio"]');

    radios.forEach(function(radio) {
        let isChecked = false; // Track the checked state manually

        // Toggle the checked state on click
        radio.addEventListener('click', function(e) {
            if (isChecked) {
                // Uncheck the radio button if it's already checked
                e.preventDefault();
                this.checked = false;
                isChecked = false;
            } else {
                // Check the radio button
                this.checked = true;
                isChecked = true;
            }

            // Update the label to display "X" or nothing
            let label = this.nextElementSibling;
            label.textContent = this.checked ? 'X' : '';
        });
    });
});
