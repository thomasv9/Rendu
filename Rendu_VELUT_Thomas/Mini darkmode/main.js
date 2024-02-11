// Sélectionnez le lien de mode de commutation et l'élément body
const switchModeLink = document.querySelector('.switch-mode');
const body = document.body;

// Ajout d'un événement click au lien de changement de mode
switchModeLink.addEventListener('click', (e) => {
  e.preventDefault(); 

  
  body.classList.toggle('dark');
});