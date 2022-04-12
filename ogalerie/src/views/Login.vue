
<template>
  <section>
    <form @submit="handleSubmit">
        <h1>connexion</h1>
      <label class="login"> Login</label>
      <input name="login" v-model="login" />
      <!--
        https://fr.vuejs.org/v2/guide/conditional.html#v-else
        -->
      <div class="error" v-if="loginEmpty">
        Vous devez saisir un identifiant
      </div>
      <label class="password"> Mot de passe </label>
      <input name="login" type="password" v-model="password" />
      <div class="error" v-if="passwordEmpty">
        Vous devez saisir un mot de passe
      </div>
      <div class="error" v-if="loginFailed">Echec de la connexion</div>
      <button>Se connecter</button>
    </form>
  </section>
</template>
<script>
import userService from "../services/userService.js";
import storage from "../plugins/storage.js";
export default {
  name: "Login",
  components: {},

  props: {
    //userconnected: Boolean,
  },

  data() {
    return {
      login: "",
      password: "",
      loginEmpty: false,
      passwordEmpty: false,
      loginFailed: false,
    };
  },
  methods: {
    async handleSubmit(evt) {
      evt.preventDefault();
      //this.userconnected = false;
      // vérifications
      if (this.login == "") {
        this.loginEmpty = true;
      }
      if (this.password == "") {
        this.passwordEmpty = true;
      }
      if (!this.passwordEmpty && !this.loginEmpty) {
        let userData = await userService.login(this.login, this.password);
        console.log(userData);

        if (userData) {          
          console.log("LOGIN SUCCESSFULL !! YATAAAA");
          storage.set("userData", userData);
          //! nouveauté E17 : redirections avec vueJS        
          this.$router.push("/");
        } else {
          console.log("LOGIN FAILED !!");
          this.loginFailed = true;
        }
      }
    },
  },
};
</script>
<style scoped >
section {
  padding: 7%;
}
form {
    padding-top: 3rem;
  border-radius: 4%;
  box-shadow: 5px 12px 5px rgb(50, 78, 61);
  border: 3px solid rgb(50, 78, 61);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(244, 246, 246);
  /*********************************************** */
  width: 90%;
  /*width: 50%;*/ /* largeur de la partie MAIN */
  height:62.084vh; /* hauteur de la partie MAIN */
  margin: 0 auto;
  /* overflow:scroll; */
  font-size: 1, 3rem;
}
label{
    font: 1,3rem;
    margin-top: 4rem;
}
button {
  margin-top:30px;
  font-size: 3rem;
}
button {
  border-radius: 10px;
  color: #fff;
  padding: 5px;
  width: 200px;
  background-color: #839371;
  margin: 4rem auto;
  font-size: 17px;

}

button:hover {
color: #C6CDB1;
}

input {
  margin-bottom: 0,6rem;
}
.error {
  font-weight: 500;
  color: red;
}

@media screen and (min-width: 992px) {
  /* -----===== Le menu du HEADER Desktop =====----- */
  
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
form {
    width: 50%
}

input {
    width: 30%;
}

}

</style>