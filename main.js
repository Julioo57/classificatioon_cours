 // Fonction pour ouvrir un onglet - définie dans la portée globale
 function openTab(evt, tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
const deleteButtons = document.querySelectorAll('.delete-btn');

// Ajoute un écouteur d'événement "click" à chaque bouton
deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Récupère l'élément parent le plus proche (la section) et la supprime
        const section = this.closest('section');
        section.remove();
    });
});

const popUp = document.querySelectorAll('.pop-up');

popUp.addEventListener('click', function() {
    // Si la pop-up est invisible, la montré
    console.log('bouton cliqué!!!!')
    //if (popUp.style.display === 'none') {
        //// popUp.style.display = 'none';
    });