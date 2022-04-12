<template>
             <main class="main">
                <div class="main__div-topo">
                    <p>
                        Bienvenue dans notre galerie d'arts virtuelle qui vous permet de visiter et de contempler des œuvres présentées, sans pour autant sortir de son canapé...
                    </p>
                </div>
<div class="topHorizontaleDividingLine"></div> <!-- premier hr horizontal  -->
                <div class="bottomHorizontaleDividingLine"></div> <!-- second hr horizontal -->

                <div class="wrapper">

                    <div class="main__div-carousel">
                        <h2 class="h2-actu">- ACTUELLEMENT -</h2>

                        <div id="sliderMobile">
                            
                            <figure>

                                <router-link
                                    :to="{
                                        name: 'ArtWorkList',
                                        params: {
                                            id: salons[2].id,
                                        },
                                    }"
                                >
                                <img :src="salons[2].acf.mobile" alt="">
                                </router-link>

                                <router-link
                                    :to="{
                                        name: 'ArtWorkList',
                                        params: {
                                            id: salons[1].id,
                                        },
                                    }"
                                >
                                <img :src="salons[1].acf.mobile" alt="">
                                </router-link>

                                <router-link
                                    :to="{
                                        name: 'ArtWorkList',
                                        params: {
                                            id: salons[0].id,
                                        },
                                     }"
                                >
                                <img :src="salons[0].acf.mobile" alt="">
                                </router-link>

                                <img :src="salons[2].acf.mobile" alt="">

                            </figure>
                            
                        </div>


                        <div id="sliderDesktop">
                            <figure>

                                <router-link
                                    :to="{
                                        name: 'ArtWorkList',
                                        params: {
                                            id: salons[2].id,
                                        },
                                    }"
                                >
                                <img :src="salons[2]._embedded['wp:featuredmedia'][0].source_url" alt="">
                                </router-link>

                                <router-link
                                    :to="{
                                        name: 'ArtWorkList',
                                        params: {
                                            id: salons[1].id,
                                        },
                                    }"
                                >
                                <img :src="salons[1]._embedded['wp:featuredmedia'][0].source_url" alt="">
                                </router-link>

                                <router-link
                                    :to="{
                                        name: 'ArtWorkList',
                                        params: {
                                            id: salons[0].id,
                                        },
                                     }"
                                >
                                <img :src="salons[0]._embedded['wp:featuredmedia'][0].source_url" alt="">
                                </router-link>

                                <img :src="salons[2]._embedded['wp:featuredmedia'][0].source_url" alt="">

                            </figure>

                        </div>
                    </div>      


                <!--<div id="sliderMobile">
                            <figure>

                                <router-link
                                    :to="{
                                        name: 'ArtWorkList',
                                        params: {
                                            id: 14,
                                        },
                                    }"
                                >
                                <img src="../assets/images/expoSalonOne_mobile.png" alt="" />
                                </router-link>

                                <router-link
                                    :to="{
                                        name: 'ArtWorkList',
                                        params: {
                                            id: 49,
                                        },
                                    }"
                                >
                                <img src="../assets/images/expoSalonTwo_mobile.png" alt="" />
                                </router-link>

                                <router-link
                                    :to="{
                                        name: 'ArtWorkList',
                                        params: {
                                            id: 107,
                                        },
                                     }"
                                >
                                <img src="../assets/images/expoSalonThree_mobile.png" alt="" />
                                </router-link>

                                <img src="../assets/images/expoSalonOne_mobile.png" alt="" />

                            </figure>
                        </div>


                        <div id="sliderDesktop">
                            <figure>
                                <router-link
                                    :to="{
                                        name: 'ArtWorkList',
                                        params: {
                                            id: 14,
                                        },
                                    }"
                                >
                                <img src="../assets/images/expoSalonOne_02.png" alt="" />
                                </router-link>

                                <router-link
                                    :to="{
                                        name: 'ArtWorkList',
                                        params: {
                                            id: 49,
                                        },
                                    }"
                                >
                                <img src="../assets/images/expoSalonTwo_02.png" alt="" />
                                </router-link>

                                <router-link
                                    :to="{
                                        name: 'ArtWorkList',
                                        params: {
                                            id: 107,
                                        },
                                    }"
                                >
                                <img src="../assets/images/expoSalonThree_02.png" alt="" />
                                </router-link>

                                <img src="../assets/images/expoSalonOne_02.png" alt="" />

                            </figure>

                        </div>-->


                    <div class="main__div-actu">
                        <h2 class="h2-proch">- PROCHAINEMENT -</h2>
                        <p class="main__p-proch">
                            - A partir du 15 juin nous retrouverons à nouveau l'artiste NAES mais cette fois en street art, dans des proportions bien différentes que les objets présentés actuellement...
                        </p>
                        <p class="main__p-proch">
                            - Acienne élève de l'école Boule, l'artiste KKA nous présentera ses créations en ciselure et en sculpture sur cuir du 1er juin au 1er août prochain...
                        </p>
                        <p class="main__p-proch">
                            - Souhaitant renouer avec la tradition d'artisanat d'art initiée à la fin du 19e siècle, KARMAN, nous présentera ses création en tant que souffleur de verre...
                        </p>
                    </div>
                </div>
            </main>
</template>

<script>
import salonService from "../services/salonService.js";

export default {
  name: 'Home',
  components: {
          
  },

  data() {
            return {
                salons: [],
                
            };
        },

async created() {
            // dans le cycle de vie du composant, je suis au niveau de la création de ce dernier
            console.log("Je suis dans created Header.vue");
    
            // quand le composant va etre créé, on voudra charger les recettes depuis l'API
            // this.artworks = await artworkService.loadArtworksBySalon();
            this.salons = await salonService.loadSalon();
            console.log("je charge les infos des salons");
             //console.log(this.salons);
            // console.log(this.salons[0]);
             //console.log(this.salons[0].acf);
             //console.log(this.salons[0].acf.mobile);
             
        },

computed: {
      // ici je vais ranger les fonctions qui vont me permettre de "remplir" des attributs
      //getImageURL1(){
          // Si le "tirroir" wp:featuredmedia existe bien
          //if( this.salons[2].acf.mobile){
              // on va renvoyer le contenu de ce dernier
              //return this.salons[2].acf.mobile;
          
          }
      

}
</script>

<style scoped >
/* -----=====##### MAIN Mobile #####=====----- */
main {
    display : flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFF;
    width: 95%; /* largeur de la partie MAIN */
    /*height: 89.084vh;  hauteur de la partie MAIN */
    height: auto;
    margin: 0 auto;
    margin-top: 5%;
    border-radius: 25px;
    box-shadow: 5px 12px 5px rgb(50, 78, 61);
    /*overflow:scroll;*/
}

.main__div-topo {
    margin: 1.25em 1.25em 3em 1.25em;
    text-align: justify;
}

.topHorizontaleDividingLine{display: none;}
.bottomHorizontaleDividingLine {display: none;}

.main__div-carousel {
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
    height: 83vh;   
}

.h2-actu {
    font-weight: bold;
    font-size: 1.2em;
    color: #785558;
    margin: 0 auto 1.25em auto;
}

div#sliderDesktop {display: none;}

div#sliderMobile { width: 80%; max-width: 18.75em; overflow: hidden;}

div#sliderMobile figure {
    position: relative; 
    width: 400%;
    margin: 0;
    padding: 0;
    font-size: 0;
    text-align: left;
    animation: 20s slidy infinite;
}

div#sliderMobile figure img { width: 25%; height: auto; float: left;}

@keyframes slidy {
    0% { left: 0%; }
    28% { left: 0%; }
    33% { left: -100%; }
    61% { left: -100%; }
    66% { left: -200%; }
    95% { left: -200%; }
    100% { left: -300%; }
}

.main__div-actu {
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    padding: 0 1.25em;
}

.h2-proch {
    font-weight: bold;
    font-size: 1.2em;
    color: #785558;
    margin-bottom: 1.25em;
}

.main__p-proch {margin-bottom: 1.25em;}

@media screen and (min-width: 992px) {
/* -----===== Le menu du HEADER Desktop =====----- */
.main {
    
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
  width: 95%; /* largeur de la partie MAIN */
  height: 76.26vh; /* hauteur de la partie MAIN */
  margin-top: 5%;
  margin-bottom: 0;

}


    .primary-navigation {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: auto 1em auto 0;
        text-align: center;
        font-size: 1.6rem;
    }
    
    ul li {
        list-style: none;
        margin: 0 auto;
        border-left: 0.12em solid #765457;
        display: inline-block;
        padding: 0 0.93em;
        position: relative;
        text-decoration: none;
        text-align: center;
    }
    
    li a {color: #fff;}
    
    li a:hover {color: #C6CDB1;}
    
    li:hover {cursor: pointer;}
    
    ul li ul {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        padding-left: 0;
        left: 0;
        display: none;
        background: #839371;
    }
    
    ul li:hover > ul,
    ul li ul:hover {
        visibility: visible;
        opacity: 1;
        display: block;
        min-width: 8.75em;
        text-align: left;
        padding-top: 1.25em;
        box-shadow: 0 0.37em 0.62em -0.06em #808080;
    }
    
    ul li ul li {
        clear: both;
        width: 100%;
        text-align: left;
        margin-bottom: 1.25em;
        border-style: none;
    }
    
    ul li ul li a:hover {
        padding-left: 0.62em;
        border-left: 0.12em solid #765457;
        transition: all 0.3s ease;
    }
    
    ul li ul li a { transition: all 0.5s ease; }

    

    /* -----=====##### MAIN Desktop #####=====----- */
    .main {
        display : flex;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: #fff;
        width: 95%; /* largeur de la partie MAIN */
        height: 76.26vh; /* hauteur de la partie MAIN */
        margin: 0 auto;
        margin-top: 3%;
        border-radius: 25px;
    box-shadow: 5px 12px 5px rgb(50, 78, 61);
    }

    .main__div-topo {
        margin: 30px auto;
        text-align: justify;
        font-size: 1.3em;
        padding-right: 5%;
        padding-left: 5%;
    }

    .topHorizontaleDividingLine {
        display: inline;
        width: 63.01vw;  /* longueur du trait horizontal supérieur */
        height: 0.18em;
        background-color: #C6CDB1;
        margin: 0 0 -0.62em 2.5em;
    }
    
    .bottomHorizontaleDividingLine {
        display: inline;
        width: 53.47vw;  /* longueur du trait horizontal inférieur */
        height: 0.06em;
        background-color:#765457;
        margin: -1.04em 0 0 3.75em;
    }
    
    .wrapper {
        display: flex;
    flex-direction: row;
    justify-content: space-between;
    }

    .main__div-carousel {
        display: flex;
        flex-direction: column;
        width: 100%;
        /*height: 100%;*/
        height: 55vh;
        margin: 5px 0 0 20px;  
        border-right: 0.06em solid #765457;
    }

    div#sliderMobile {display: none;}
    div#sliderDesktop {display: block;}

    div#sliderDesktop { width: 80%; max-width: 37.5em; overflow: hidden}

    div#sliderDesktop figure {
        position: relative; 
        width: 400%;
        margin: 0;
        padding: 0;
        font-size: 0;
        text-align: left;
        animation: 20s slidy infinite;
    }
    
    div#sliderDesktop figure img { width: 25%; height: auto; float: left; }
    
    .main__div-actu {
        display:flex;
        flex-direction: column;
        align-items: center;
        text-align: justify;
        padding: 2em 1.75em 1.25em 4em;
        width: 45em;
        height: 50vh;
        margin-top: -1.3em;
        margin-left: 3px;
        border-left: 3px solid #C6CDB1;
    }
    
    .h2-proch {
        font-weight: bold;
        font-size: 1.2em;
        color: #785558;
        margin-bottom: 3em;
    }
    
    .main__p-proch {margin-bottom: 4em;}    
}
</style>
