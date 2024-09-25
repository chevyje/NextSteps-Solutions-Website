function toggleDescription(skillId) {
    // Haal alle beschrijvingen op en verberg ze
    var descriptions = document.querySelectorAll('.description');
    descriptions.forEach(function(description) {
        description.style.display = 'none';
    });

    // Toon de beschrijving van de aangeklikte vaardigheid
    var selectedDescription = document.getElementById(skillId);
    if (selectedDescription) {
        selectedDescription.style.display = 'block';
    }
}