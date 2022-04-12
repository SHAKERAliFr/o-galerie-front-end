<template>
    <article class="card">

        <router-link
            :to="{
                name:'ArtWork',
                params: {
                    id: artworkProps.ID
                }
            }"
        >

       <img 
            :src="getImageURL"
            alt=""
        >

        </router-link>
        <!--<h2> {{artworkProps.post_title}} </h2>
        
        <div 
        class="card__content"
        v-html="artworkProps.post_content"
        >
        </div>-->
        

    </article>
</template>

<script>


export default {
  name: 'ArtWorkCard',
  components: {

  },
  props: {
      // props qui va me permettre de récupérer toutes les infos de la recette sous la forme d'un objet
      artworkProps: Object,
      artworkProps3: Object,
  },
  created(){
      //console.log(this.recipeProps);
  },
  computed: {
      // ici je vais ranger les fonctions qui vont me permettre de "remplir" des attributs
      getImageURL(){
          // Si le "tirroir" wp:featuredmedia existe bien
          if( this.artworkProps.post_image){
              // on va renvoyer le contenu de ce dernier
              return this.artworkProps.post_image;
          } else {
              // sinon on renvoi une image random
              return "https://picsum.photos/300/200";
          }
      }
  }
}
</script>

<style scoped lang="scss">
img {
    width: 100%;
    height: 100%;
    filter: sepia(0);
    transition-property: all;
    transition-duration: 100ms;
    transition-delay: 1ms;
    transition-timing-function: linear;
    overflow:hidden;
}

img:hover {
    filter: sepia(1);
    width: 110%;
    height: 110%;
    margin-top: -5%;
    margin-left: -5%;
    border: 5px solid #fff;
}
</style>
