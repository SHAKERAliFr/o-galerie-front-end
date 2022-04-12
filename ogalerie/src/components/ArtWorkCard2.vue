<template>
    <article class="card">
        <img 
            :src="getImageURL"
            alt=""
        >
        <h2> {{artworkProps.title.rendered}} </h2>
        <div 
        class="card__content"
        v-html="artworkProps.content.rendered"
        >
        </div>

        <router-link
            :to="{
                name:'ArtWork',
                params: {
                    id: artworkProps.id
                }
            }"
        >
        Lire la suite
        </router-link>

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
  },
  created(){
      //console.log(this.recipeProps);
  },
  computed: {
      // ici je vais ranger les fonctions qui vont me permettre de "remplir" des attributs
      getImageURL(){
          // Si le "tirroir" wp:featuredmedia existe bien
          if( this.artworkProps._embedded['wp:featuredmedia']){
              // on va renvoyer le contenu de ce dernier
              return this.artworkProps._embedded['wp:featuredmedia'][0].source_url;
          } else {
              // sinon on renvoi une image random
              return "https://picsum.photos/300/200";
          }
      }
  }
}
</script>

<style scoped lang="scss">

</style>
