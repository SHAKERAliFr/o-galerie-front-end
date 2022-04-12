<template>
  <div>
    <section>
        <i class="fas fa-power-off"></i>
        <!--<img src="https://img2.freepng.fr/20180218/lre/kisspng-abmeldung-button-icon-shut-cliparts-5a89cae3634e92.2358717915189798114068.jpg">-->
      <h1 class="text-align">Vous êtes à présent déconnecté.</h1>
    </section>
  </div>
</template>
<script>
import userService from "../services/userService.js";
export default {
  name: "Logout",
  components: {},
  created() {
    userService.logout();
  },
};
</script>
<style scoped lang="scss">
h1 {
  margin: auto;
  color: #765457;
}
div{
    padding: 7%;
}
section {
  padding-top: 2rem;
  border-radius: 25px;
  box-shadow: 5px 12px 5px rgb(50, 78, 61);
  border: 3px solid rgb(50, 78, 61);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(244, 246, 246);
  /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
  width: 90%;
  /*width: 50%; *//* largeur de la partie MAIN */
  height:62.084vh; /* hauteur de la partie MAIN */
  margin: 0 auto;
  /* overflow:scroll; */
  font-size: 1, 3rem;
  position: relative;
  /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
  font-size: 0.7rem;
}

.fa-power-off {
    font-size: 2rem;
    color: #765457;
    margin-top: 10%;
}

@media screen and (min-width: 992px) {
  /* -----===== Le menu du HEADER Desktop =====----- */
  
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

section {
    font-size: 1.2rem;
    width: 50%;
}
.fa-power-off {
    font-size: 5rem;
}
}
</style>














