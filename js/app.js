// --- Events ---

var app = {
    
    currentQuoteIndex: 0,

    init: function () {

        /*****AFFICHAGE & NAVIGATION DANS LE TABLEAU QUOTES******/

        // Affiche la citation la citation suivante au clic sur la flèche "suivant"
        document.getElementById('nav-next').addEventListener('click', app.handleClickOnNextButton);

        // Affiche la citation la citation suivante au clic sur la flèche "précédent"
        document.getElementById('nav-prev').addEventListener('click', app.handleClickOnPreviousButton)

        // Affiche la citation la citation suivante au clic sur la flèche "début"
        document.getElementById('nav-first').addEventListener('click', app.handleClickOnFirstButton)

        // Affiche la citation la citation suivante au clic sur la flèche "fin"
        document.getElementById('nav-last').addEventListener('click', app.handleClickOnLastButton)

        /***** AFFICHAGE D'UNE CITATION AJOUTÉE ******/

        // attache la méthode app.handleClickOnDisplayAddFormButton à l'évènement "click" sur le bouton "ajouter une citation"
        document.getElementById('btnDisplayAddForm').addEventListener('click', app.handleClickOnDisplayAddFormButton);

        // Affiche les citations au clic "ajouter" du formulaire d'ajout de citations
        document.querySelector('button').addEventListener('click', app.handleClickOnAddButton);
    },

    /*****AFFICHAGE & NAVIGATION DANS LE TABLEAU QUOTES******/


    // Méthode permettant de modifier le DOM pour afficher la quote "courante"
    displayCurrentQuote: function () {
        document.getElementById('quote').textContent = quotes[app.currentQuoteIndex]['quote'];
        document.getElementById('author').textContent = quotes[app.currentQuoteIndex]['author'];

    },
    // Méthode permettant la gestion du click sur le bouton "Next"
    handleClickOnNextButton: function () {
        app.currentQuoteIndex++;
        app.displayCurrentQuote();
    },

    // Méthode permettant la gestion du click sur le bouton "Previous"
    handleClickOnPreviousButton: function () {
        app.currentQuoteIndex--;
        app.displayCurrentQuote();
    },

    // Méthode permettant la gestion du click sur le bouton "FIrst"
    handleClickOnFirstButton: function () {
        app.currentQuoteIndex = 0;
        app.displayCurrentQuote();
    },

    // Méthode permettant la gestion du click sur le bouton "Last"
    handleClickOnLastButton: function () {
        app.currentQuoteIndex = (quotes.length)-1;
        app.displayCurrentQuote();

    },

    /***** AFFICHAGE D'UNE CITATION AJOUTÉE ******/

    // Méthode gérant le click pour afficher le form d'ajout

    handleClickOnDisplayAddFormButton: function (evt) {
        console.log('click to display form');

        document.getElementById('divAddQuote').classList.remove('d-none');

    },

    handleClickOnAddButton: function (evt) {

        evt.preventDefault();

        quotes.push(
            {
                quote: document.getElementById('input-quote').value,
                author: document.getElementById('input-author').value,
            }
        );

        console.log(quotes);

        app.currentQuoteIndex = (quotes.length)-1;

        app.displayCurrentQuote();

    },

    /***** AFFICHAGE DE LA PREMIERE CITATION ******/

    firstQuoteDisplay: function (){
        document.getElementById('quote').textContent = quotes[0]['quote'];
        document.getElementById('author').textContent = quotes[0]['author'];
    }

};

document.addEventListener('DOMContentLoaded', app.firstQuoteDisplay());
document.addEventListener('DOMContentLoaded', app.init);

