// Sélectionner le formulaire
const formulaire = document.querySelector('form');

// Écouter l'événement de soumission du formulaire
formulaire.addEventListener('clic', function (event) {
    // Sélectionner les champs du formulaire par leur id
    const nom = document.querySelector('#nom');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
    
    // Vérifier si l'un des champs est vide
    if (nom.value === '' || email.value === '' || message.value === '') {
        // Empêcher la soumission du formulaire par défaut
        event.preventDefault();
        
        // Afficher un message d'erreur
        alert('Veuillez remplir tous les champs du formulaire.');
    }
});
