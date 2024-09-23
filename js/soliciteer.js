// Functionality to toggle job description visibility
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const jobDescription = this.previousElementSibling;
            
            if (jobDescription.style.display === 'block') {
                jobDescription.style.display = 'none';
                this.textContent = 'Show More';
            } else {
                jobDescription.style.display = 'block';
                this.textContent = 'Show Less';
            }
        });
    });
});
