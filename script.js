        // Array of colors for backgrounds and text
        const colors = ['#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#e67e22'];

        // on recupere les elements du BlocItem
        const blocItems = document.querySelectorAll('.BlocItem');

        // jer ecupere tout les elements h2 qui sont dans le bloc
        const titres = document.querySelectorAll('.titre_bloc');

        //je recupere l'element boutton
        //const button = document.getElementById('changeColorButton');

        // Function pour obtenir une couleur aleatoire a partir du tableau de couleurs
        function getRandomColor() {
            const randomIndex = Math.floor(Math.random() * colors.length);
            return colors[randomIndex];
        }
        function changeColors() {
            let containerColor, textColor;
            do {
                containerColor = getRandomColor(); // Choose a new color for the container
                textColor = getRandomColor(); // Choose a new color for the text
            } while (containerColor === textColor); // Ensure the colors are different
            
            // appliquer la nouvelle couleur a tous les elements de BlocItem
            blocItems.forEach(item => {
                item.style.backgroundColor = containerColor;
            });

            //appliquer la nouvelle couleur de texte a tous les elements h2
            titres.forEach(titre => {
                titre.style.color = textColor;
            });
        }

        //set interval  pour changer la couleur toutes les 2secondes
        setInterval(changeColors, 2000);

        // ajouter un ecouteur au bouton pour changer toutes les couleurs de texte h2 et leurs couleurs de conteneur au click
        //button.addEventListener('click', function() {
           // const containerColor = getRandomColor(); // Choose a new color for the container
          //  const textColor = getRandomColor(); // Choose a new color for the text
            
            // appliquer la nouvelle couleur a tous les elements de BlocItem
          //  blocItems.forEach(item => {
               // item.style.backgroundColor = containerColor;
           // });

            // appliquer la nouvelle couleur de texte a tous les elements h2
           // titres.forEach(titre => {
               // titre.style.color = textColor;
            //});
       // });
        
