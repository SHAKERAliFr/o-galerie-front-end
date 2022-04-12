<template>

    <button
      @click="handleClick"
      :class="effect"
    > 
        {{label}} : {{clickCount}}
    </button>
    <!--<div
            class="error"
            v-if="alreadyLike"
        >déjà liké</div>-->
       
</template>

<script>
    import userService from "../services/userService.js";

    export default {
        name: 'ClickCounter',
        components: {   
    },

    // les props sont des "propriétés publiques"
    props:{
        label: String,
        artWorkId: Number,
        artworkLikesProps: Number
    },

    // les "data" en vuejs correspondent au propriétés protected de la poo classique
    data(){
        return{
            clickCount: 0,
            alreadyLike: false,
            effect: 'nolike'
        };
    },

    // au chargement du composant on remplit le clickCount avec la props venant de ArtWorkList et 
    // ayant réceptionné pour chaque oeuvre le nombre de likes venant de la BDD
    async created() {
        this.clickCount = this.artworkLikesProps; 
    },

    methods: {
        async handleClick(evt){

            // On envoie la valeur de la props ArtworkId à l'api
            console.log('coucou on est dans le click counter');
            console.log(this.artWorkId);
            evt.preventDefault();
          
            // au click sur une des oeuvres, on envoie l'id de l'oeuvre dans la méthode qui va envoyer 
            //la requête axios au endpoint  créé à cette occasion pour enregistrer l'indo en BDD du like : oeuvre/user-connecté
            let result = await userService.addLike(this.artWorkId);

            if(result){
                  // si l'insertion a bien eu lieu en BDD, cela veut dire que le user n'avait pas déjà liké l'oeuvre
                  // alors on incrémente le compteur de clicks
                  if(result.success){ 
 
                        this.clickCount++;
                        this.effect = 'onelike';
                        console.log("enregistrement like ok");

                  // sinon cela veut dire que le user retire son like donc on décrémente le compteur de clicks
                  } else {
 
                        this.clickCount--;
                        this.effect = 'nolike';
                        this.alreadyLike= true;
                  }
            }
        }
    }
}

</script>

<style scoped>
button {
   margin-left: 3rem;
   border-radius: 20px;
   
}

button.nolike {
    background-color: #c6cdb1;
   color: #765457;
}

button.onelike {
    background-color: #765457;
   color: #c6cdb1;
}

</style>