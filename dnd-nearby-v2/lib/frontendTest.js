// Fetch all backgrounds
fetch('/api/backgrounds')
  .then(response => response.json())
  .then(backgrounds => {
    const backgroundList = document.getElementById('background-list');
    backgrounds.forEach(bg => {
      console.log(bg)
    });
  });

// Fetch a specific background
function fetchBackground(name) {
  fetch(`/api/backgrounds/${name}`)
    .then(response => response.json())
    .then(background => {
      const detailsDiv = document.getElementById('background-details');
      detailsDiv.innerHTML = `
        <h2>${background.name}</h2>
        <p>Source: ${background.source}</p>
        <p>Page: ${background.page}</p>
        <p>Skill Proficiencies: ${background.skillProficiencies.join(', ')}</p>
      `;
    });
}