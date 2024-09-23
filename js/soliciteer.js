// Predefined job listings for the company
const jobsData = [
    { title: "Frontend Developer", location: "New York", description: "Develop UI components for the platform." },
    { title: "Backend Developer", location: "San Francisco", description: "Work on the server-side architecture." },
    { title: "Product Manager", location: "Chicago", description: "Lead product teams and define strategy." },
    { title: "UI/UX Designer", location: "Remote", description: "Design user-friendly interfaces for apps." },
];

// Get the job list element
const jobList = document.getElementById('jobs');

// Function to display jobs
function displayJobs(jobs) {
    jobs.forEach(job => {
        const jobItem = document.createElement('li');
        jobItem.classList.add('job');
        jobItem.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Description:</strong> ${job.description}</p>
        `;
        jobList.appendChild(jobItem);
    });
}

// Display the jobs on page load
displayJobs(jobsData);
