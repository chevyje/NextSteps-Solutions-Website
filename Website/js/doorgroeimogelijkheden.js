document.getElementById('roleForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const currentRole = document.getElementById('currentRole').value.trim().toLowerCase();
    const growthPaths = document.getElementById('careerPaths');
    const growthSection = document.getElementById('growthPath');

    growthPaths.innerHTML = '';

    const careerGrowth = {
        'junior developer': ['Mid-Level Developer', 'Senior Developer', 'Team Lead'],
        'mid-level developer': ['Senior Developer', 'Team Lead', 'Project Manager'],
        'senior developer': ['Team Lead', 'Engineering Manager', 'CTO'],
        'team lead': ['Engineering Manager', 'CTO'],
        'project manager': ['Senior Project Manager', 'Product Manager', 'COO'],
        'engineering manager': ['Director of Engineering', 'CTO'],
    };

    if (careerGrowth[currentRole]) {
        careerGrowth[currentRole].forEach(role => {
            const listItem = document.createElement('li');
            listItem.textContent = role;
            growthPaths.appendChild(listItem);
        });
        growthSection.classList.remove('hidden'); 
    } else {
        const noMatch = document.createElement('li');
        noMatch.textContent = 'No growth paths available for this role.';
        growthPaths.appendChild(noMatch);
        growthSection.classList.remove('hidden');
    }
});
