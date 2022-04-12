// IMPORTANT import du composant axios (pas besoin de spécifier le chemin, axios a été installé avec npm ; la bibliothèque sera chargée directement depuis le dossier node_modules)
import axios from 'axios';
import storage from '../plugins/storage.js';

const userService = {
    baseURI: 'http://localhost/WP/apotheose/projet-O-Galerie/public/wp-json/jwt-auth/v1',
    login: async function(login, password){
        const response = await axios.post(
            userService.baseURI+'/token',
            {
                username: login,
                password: password
            }
        ).catch(
            // gestion des erreurs
            // si j'ai une erreur je vais atterir dans le .catch
            function(){
                console.log('on a une erreur');
                return false;
            }
        )
        return response.data;
    },

    logout: function() {
        storage.unset('userData');
      },

    isConnected: async function(){
        const userData = storage.get('userData');
        if(userData != null) {
            const token = userData.token;
            if(token){
                let options = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                };
                const response = await axios.post(
                    userService.baseURI+'/token/validate',
                    null,
                    options
                ).catch(
                    function(){
                        // token n'est pas valide
                        return false;
                    }
                );
                console.log(response);
                return response.data;
            }
        }
        return false;
    },
    

    // méthode permettant d'insérer en BDD une nouvelle ligne like dans la custom table
    // par la sollicitation en post d'un endpoint créé pour l'occasion
    // il est nécessaire d'envoyer les informations de l'id de l'oeuvre et le token du user connecté
    addLike: async function(artworkId){
        
        const userData = storage.get('userData');
        if(userData != null) {

            const token = userData.token;
            if(token) { 
                const options = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                };

                const response = await axios.post(
                    'http://localhost/WP/apotheose/projet-O-Galerie/public/wp-json/ogalerie/v1/artwork/' + artworkId + '/like',
                    {
                        artworkId: artworkId,     
                    },
                    options
                ).catch(
                    function(){
                            return false;
                    }
                );
                return response.data;  
            }
        }
        return false;
    },

        
    inscription: async function(username, email, password){
        const response = await axios.post(
            'http://localhost/WP/apotheose/projet-O-Galerie/public/wp-json/ogalerie/v1/inscription',
            {
                username: username,
                email: email,
                password: password
            }
        ).catch(
            function(){
                return false;
            }
        );
        return response.data;
    }
};

// Pour rendre le recipeService utilisable (importable) par d'autre composants il faut IMPERATIVEMENT l'exporter :
export default userService;