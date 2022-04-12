// pour récupérer tous les salons, appeler cet endpoint : http://localhost/ogalerie/projet-o-galerie/projet-O-Galerie/public/wp-json/wp/v2/salon
import axios from 'axios';
const salonService = {
    baseURI: 'http://localhost/WP/apotheose/projet-O-Galerie/public/wp-json/wp/v2',
    async loadSalon() {
        
        console.log('je suis dans loadSalon');
        //const response = await axios.get(salonService.baseURI + '/salon');
        const response = await axios.get(salonService.baseURI + '/salon?_embed=true');

        console.log("je viens de recevoir les données de mon API");
        console.log(response.data);
        console.log("response.data");
        return response.data;
    },
}
export default salonService;









