// IMPORTANT import du composant axios (pas besoin de spécifier le chemin, axios a été installé avec npm ; la bibliothèque sera chargée directement depuis le dossier node_modules)
import axios from 'axios';

const artworkService = {

    baseURI: 'http://localhost/WP/apotheose/projet-O-Galerie/public/wp-json/wp/v2',
    

    /**
     * Methode qui va nous permettre de récupérer les recettes depuis l'API
     */
    async loadArtworks(){
        console.log('Je vais charger les oeuvres d art')
        // await permet de dire a javascript qu'avant de continuer son traitement, il va devoir attendre que la fonction se termine.
        // préciser await permet d'attendre mais sans bloquer javascript
        const response = await axios.get(artworkService.baseURI + '/artwork?_embed=true');
        //! Je vais renvoyer une réponse sous la forme dun tableau indexé qui contient des objets
        return response.data;
    },


        
        async loadArtworksBySalon(salonId){
        // préparer les options avec header et authorization pour porter le token
        // Puis envoyer les données (title,type,description,ingredients) a l'API tout en donnant également le token.
        
        console.log('je suis dans loadArtworksBySalon');
         
        const response = await axios.get('http://localhost/WP/apotheose/projet-O-Galerie/public/wp-json/ogalerie/v1/salon/' + salonId + '/artworks');
        console.log(response.data);

        return response.data;
     },

     async getArtWorkById(artworkId){
        const response = await axios.get(artworkService.baseURI + '/artwork/' + artworkId + '?_embed=true');
        return response.data;
    },


};

// Pour rendre le recipeService utilisable (importable) par d'autre composants il faut IMPERATIVEMENT l'exporter : 
export default artworkService;