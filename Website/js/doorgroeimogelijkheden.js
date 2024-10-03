document.getElementById('roleForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const currentRole = document.getElementById('currentRole').value.trim().toLowerCase();
    const growthPaths = document.getElementById('careerPaths');
    const growthSection = document.getElementById('growthPath');

    growthPaths.innerHTML = '';

    const careerGrowth = {
        'junior developer': ['Mid-Level Developer', 'Senior Developer', 'Scrum Master'],
        'mid-level developer': ['Senior Developer', 'Scrum Master', 'Product Owner'],
        'senior developer': ['Scrum Master', 'Senior Engineer', 'CTO'],
        'scrum master': ['Senior Engineer', 'CTO'],
        'product owner': ['Senior Product Owner', 'Product Manager', 'COO'],
        'senior engineer': ['Director of Engineering', 'CTO'],
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
        noMatch.textContent = 'Er zijn geen doorgroeimogelijkheden.';
        growthPaths.appendChild(noMatch);
        growthSection.classList.remove('hidden');
    }
});
