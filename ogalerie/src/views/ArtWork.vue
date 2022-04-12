<template>
    <!--! ATTENTION
    Sans le v-if="recipe" je vais avoir une erreur coté console, en effet, la section template va s'afficher un peu trop tot, ne laissant pas le temps de récupération de la recette dans la data recipe
     -->
<main class="main">

    <article class="card" v-if="artwork">
        <div>
            <img 
            :src="this.artwork.acf.photo"
            alt=""
            >       
        </div>
        <div>
            <h2> {{artwork.title.rendered}} </h2>
            <div 
                class="card__content" v-html="artwork.content.rendered"
        
             >
            </div>
        <button type="button" onclick="javascript:history.back()">Retour</button>
        </div>
        <!--<router-link
            :to="{
                name:'ArtWorkList'
                
        >
        Retour
        </router-link>-->

    </article>
    </main>
</template>

<script>
import artworkService from '../services/artworkService';


export default {
  name: 'ArtWork',
  components: {

  },
  data(){
      return{
          artworkId: null, // pour récupérer la partie dynamique de l'URL
          artwork: null // pour récupérer toutes les infos de la recette
      };
  },
  async created(){
      // récupération de la partie dynamique de l'URL
      this.artworkId = this.$route.params.id;
      this.artwork = await artworkService.getArtWorkById(this.artworkId);
      console.log(this.artwork);

  },
  computed: {
      // ici je vais ranger les fonctions qui vont me permettre de "remplir" des attributs
      //getImageURL(){
          // Si le "tiroir" wp:featuredmedia existe bien
         // console.log(this.artwork.acf);
          //return this.artwork.acf.photo;
          //if( this.artwork._embedded['wp:featuredmedia']){
              // on va renvoyer le contenu de ce dernier
              //return this.artwork._embedded['wp:featuredmedia'][0].source_url;
          //} else {
              // sinon on renvoi une image random
              //return "https://picsum.photos/200/300";
          //}
      }
  }

</script>



<style scoped>
article {
  display: flex;
  flex-direction: column;
  align-items: center;
}
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
  padding-top: 5%;
  padding-bottom: 5%;
}

button {
    display: flex;
    justify-content: center;
    margin-top:30px;
  border-radius: 10px;
  color: #fff;
  padding: 5px;
  width: 100px;
  background-color: #839371;
  margin: 2rem auto;
  font-size: 17px;
}

@media screen and (min-width: 992px) {
  /* -----=====##### MAIN Desktop #####=====-----*/
  .main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #000;
    justify-content: center;
    width: 95%; /* largeur de la partie MAIN */
    height: auto;
    overflow-y: auto;
    overflow-x: hidden;
    margin: auto;
    margin-top: 3%;
    border-radius: 25px;
    box-shadow: 5px 12px 5px rgb(50, 78, 61);
  }
  
    .card__content{
      background-color: black;
  }
  .img {
    text-align: center;
    margin: auto;
  }
  .card{
      background-color: black;
      color: white;
      text-align: center;
  }

button {
    width: 200px;
}
}

</style>
   

