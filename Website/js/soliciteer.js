// Functionality to toggle job description visibility
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach((button) => {
        button.addEventListener('click', function() {
            const jobDescription = this.previousElementSibling;
            
            if (jobDescription.style.display === 'block') {
                jobDescription.style.display = 'none';
                this.textContent = 'Toon Meer';
            } else {
                jobDescription.style.display = 'block';
                this.textContent = 'Toon Minder';
            }
        });
    });
});


function applyJob(jobTitle) {
   
    window.location.href = `apply.html?jobTitle=${encodeURIComponent(jobTitle)}`;
}
