<template>
  <section>
    <h1> 404 - no stress tu peux revenir à l'accueil</h1>
    <div class="box">
        
    </div>
  </section>
</template>
<script>
export default {
  name: "Page404",
  components: {},
};
</script>

<style scoped lang="scss">
  /* -----=====##### Mobile #####=====----- */
h1 {
    text-align: center;
    font-weight: bold;
    font-variant: small-caps;
    font-family: 'Times New Roman', Times, serif;
    color: black;
    font-size:1em;
    text-shadow: 5px 10px white;
    background-color: white;
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 25px;
    position: relative;
    z-index: 9;
}
.box {
    
   text-align: center;
    height: 100%;
    width: 100%;
    border-radius: 0 0 25px 25px;
    background-image: url(../assets/images/homer.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    margin: auto;
}
section {
    display: flex;
    flex-direction: column;
    
    /*padding-top: 2%;*/
    margin: 2rem;
    border-radius: 1rem;;
    border: solid 1px #555;
    background-color: #FFF;
    flex-direction: column;
    /*margin-right: 2%;*/
    margin-top: 3%;
    box-shadow: 5px 12px 5px rgb(50, 78, 61);
    height: 75vh;
}
/* -----===== Le menu du HEADER Desktop =====----- */
@media screen and (min-width: 992px) {

    h1 {
     font-size:3em;   
    }
 .box {
 background-image: url(../assets/images/cri.jpg);
 margin: auto;
 }

section {
    height: 70vh;
}

}
</style>
