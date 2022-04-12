<template>
  <main class="main" v-if="artworks.length">
    <div class="main__top-gallery">
      <!-- nom de l'artiste récupéré sur le endpoint -->
      <h1 class="main__artistName" v-html="salon[0].salon_author"></h1>
      <!-- code à mettre si on utilise le champ "biographical info" de l'artiste en BO wordpress :
            <p class="main__p-presentation">{{salon[0].author_biography[0]}}-->
      <!-- biographie de l'artiste exposé dans un salon -->
      <p class="main__p-presentation" v-html="salon[0].salon_biography"></p>
      <div class="main__separation"></div>
      
    </div>
    <div class="wrapper">
      <div v-for="artwork in artworks" 
        :key="artwork.ID"
        :value="artwork.ID"
      >
        <ArtWorkCard :artworkProps="artwork" />
        <div v-if="loggedIn">
          <ClickCounter label="J'aime" :artWorkId="artwork.ID" :artworkLikesProps="artwork.artwork_likes"/>
        </div>
      </div>
      
      <!-- code à mettre si on a la possiblité d'utiliser le champ "biographical info" dans la catégorie artiste du BO l'utilisation des champs sera différente-->
      <!--<div class="main__infoExpo"><p>{{salon[0].salon_content}}</p></div>-->
      <!--<div class="main__infoExpo"  v-html="salon[0].salon_content"></div>-->
      <!-- information concernant les dates de l'expo -->
    </div>
    <div class="main__infoExpo" v-html="salon[0].salon_date"></div>
  </main>
  <!-- texte biographique initial de l'artiste NAES-->
  <!-- "... Pour moi créer c'est expérimenter, se renouveler sans cesse, je n'émets aucune limite aux supports, j'aime détourner les objets, la déco, les logos, l'écriture, les lettrages, réinventer les personnages de la culture pop, peindre, sculpter.
            Je crée des jouets certainement pour rester enfant car être adulte c'est trop sérieux...".-->
</template>
<script>
import ArtWorkCard from "../components/ArtWorkCard.vue";
import artworkService from "../services/artworkService.js";
import userService from "../services/userService.js";
import ClickCounter from '../components/ClickCounter.vue';
export default {
  name: "ArtWorkList",
  components: {
    ArtWorkCard,
    ClickCounter
  },
  data() {
    return {
      artworks: [],
      likes: [],
      loggedIn: false,
      
    };
  },
  
  async created() {
    // dans le cycle de vie du composant, je suis au niveau de la création de ce dernier
    console.log("Je suis dans created");
    // quand le composant va etre créé, on voudra charger les oeuvres depuis l'API
    
    const artworksResponse = await artworkService.loadArtworksBySalon(this.$route.params.id);
    console.log(artworksResponse);
    this.salon = artworksResponse.salon;
    console.log(artworksResponse.salon);
    this.artworks = artworksResponse.artworks;


    // Execute la fonction isConnected de userService et mets le retour dans isLoggedIn.
    // Ensuite, on affecte la veleur dans this.loggedIn
    await userService.isConnected().then((isLoggedIn) => {
      this.loggedIn = isLoggedIn;
    });
  },
  methods: {},
};
</script>
<style scoped>
/* -----=====##### MAIN #####=====----- */
/* -----=====##### MAIN Mobile #####=====----- */
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  width: 95%; /* largeur de la partie MAIN */
  /*height: 90vh;  /*hauteur de la partie MAIN */
  margin: 0 auto;
  border-radius: 25px;
  box-shadow: 5px 12px 5px rgb(50, 78, 61);           
  
}
.main__top-gallery {
  /*position: absolute;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  top: 2.5em;
  left: 0.7em;
  /*width: 25.4em;*/
  /*height: 15em;*/
  /* background-color: #000; */
}
.main__artistName {
  float: left;
  padding: 1em 1em 0em 1em;
  font-size: 1.6em;
  color: #765457;
  font-weight: bold;
  margin: 0 auto;
}
.main__p-presentation {
  color: #C6CDB1;
  padding: 0.5em 1.5em 1em 1.5em;
  /*padding: 0.5em 0.5em 0 0.5em;*/
  font-size: 1em;
  text-align: justify;
  
  margin-bottom: 1em;
  
}
.main__separation {
  width: 10em;
  height: 1em;
  border-top: 1px solid #839371;
  /*margin: 0 auto;*/
}
.main__infoExpo {
  text-align: center;
  color: #fff;
  padding: 3em 0.5em 0 0.5em;
  width: 80%;
  height: 5%;
  margin-bottom: 2em;
}

.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5em;
}
.wrapper > div {
  width: 10.8em;
  height: 10.8em;
  margin: 1em 1em 1em 1em;
  border: 0.3125em solid #fff;
}
.vignettes {
  width: 10.2em;
  height: 10.2em;
  filter: grayscale(50%);
  transition-property: all;
  transition-duration: 100ms;
  transition-delay: 1ms;
  transition-timing-function: linear;
}
.vignettes:hover {
  filter: grayscale(0);
  width: 110%;
  height: 110%;
  margin-top: -5%;
  margin-left: -5%;
  border: 0.3125em solid #fff;
}
@media screen and (min-width: 992px) {
  /* -----=====##### MAIN Desktop #####=====----- */
  .main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #000;
    width: 95%; /* largeur de la partie MAIN */
    height: 76.26vh;
    overflow-y: auto;
    overflow-x:hidden;
    margin: 0 auto;
    margin-top: 3%;
    border-radius: 25px;
    box-shadow: 5px 12px 5px rgb(50, 78, 61);
  }

  .main__top-gallery {
    position: static;
    z-index: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 8.5em;
    margin: 0 0 0 0;
    align-items: center;
  }
  .main__artistName {
    /*float: none;*/
    /*width: 70%;*/
    
    height: 20%;
    padding: 0 0 0 0;
    font-size: 1.6em;
    color: #765457;
    font-weight: bold;
  }
  .main__p-presentation {
    color: #C6CDB1;
    /*width: 75em;*/
    
    height: 25%;
    padding: 0 1.5 0 0;
    font-size: 1.1em;
    text-align: justify;
  }
  .main__separation {
    display: none;
  }
  .main__infoExpo {
    /*width: 40%;*/
    height: 5%;
    width: 100%;
    padding: 3em 0 0 1.5em;
    color: #fff;
    text-align: center;
    
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 95%;
    margin: -2em auto;
   
  }
  .wrapper > div {
    width: 10.8em;
    height: 10.8em;
    margin: 2em 1.8em 2em 1.8em;
    border: 0.3125em solid #fff;
  }
  .vignettes {
    width: 10.2em;
    height: 10.2em;
    filter: grayscale(50%);
    transition-property: all;
    transition-duration: 100ms;
    transition-delay: 1ms;
    transition-timing-function: linear;
  }
  .vignettes:hover {
    filter: grayscale(0);
    width: 110%;
    height: 110%;
    margin-top: -5%;
    margin-left: -5%;
    border: 0.3125em solid #fff;
  }
}
</style>