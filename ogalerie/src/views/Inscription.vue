<template>
  <section>
    <form @submit="handleSubmit">
      <h1>Inscription</h1>
      <label> Nom d'utilisateur </label>
      <input v-model="username" name="username" />
      <div class="error" v-if="usernameEmpty">
        Vous devez saisir un nom d'utilisateur
      </div>
      <label> Adresse e-mail </label>
      <input v-model="email" name="email" />
      <div class="error" v-if="emailEmpty">Vous devez saisir un email</div>
      <label> Mot de passe </label>
      <input v-model="password" type="password" name="password" />
      <div class="error" v-if="passwordEmpty">
        Vous devez saisir un password
      </div>
      <div class="error" v-if="passwordTooShort">
        Le mot de passe doit faire 8 caractères au minimum
      </div>
      <label > Confirmez le mot de passe </label>
      <input class="confirm" v-model="passwordVerify" type="password" name="passwordVerify" />
      <div class="error" v-if="passwordVerifyEmpty">
        Vous devez confirmer le mot de passe
      </div>
      <div class="error" v-if="passwordConfirm">
        Les mots de passe ne correspondent pas.
      </div>
      <button>S'enregistrer</button>
    </form>
  </section>
</template>
<script>
import userService from "../services/userService.js";
export default {
  name: "Inscription",
  components: {},
  data() {
    return {
      username: "",
      email: "",
      password: "",
      passwordVerify: "",
      usernameEmpty: false,
      emailEmpty: false,
      passwordEmpty: false,
      passwordTooShort: false,
      passwordVerifyEmpty: false,
      passwordConfirm: false,
    };
  },
  methods: {
    async handleSubmit(evt) {
      evt.preventDefault();
      if (this.username == "") {
        this.usernameEmpty = true;
      }
      if (this.email == "") {
        this.emailEmpty = true;
      }
      if (this.password == "") {
        this.passwordEmpty = true;
      }
      if (this.passwordVerify == "") {
        this.passwordVerifyEmpty = true;
      }
      if (this.password.length < 8) {
        this.passwordTooShort = true;
      }
      if (this.password !== this.passwordVerify) {
        this.passwordConfirm = true;
      }
      //si tout s'est bien passé
      if (
        !this.usernameEmpty &&
        !this.emailEmpty &&
        !this.passwordEmpty &&
        !this.passwordVerifyEmpty &&
        !this.passwordTooShort &&
        !this.passwordConfirm
      ) {
        console.log("Appel de l'API pour s'inscrire");
        let result = await userService.inscription(
          this.username,
          this.email,
          this.password
        );
        // si tout s'est bien passé je redirige vers la page login
        console.log(result);
        if (result) {
          if (result.success == true) {
            this.$router.push({ name: "login" });
          }
        }
      }
    },
  },
};
</script>
<style scoped>
section {
  padding: 7%;
}
form {
  padding-top: 3rem;
  border-radius: 4%;
  box-shadow: 5px 12px 5px rgb(50, 78, 61);
  border: 3px solid rgb(50, 78, 61);
  /*background-image: url("");*/
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(244, 246, 246);
  /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
  width: 90%;
  /*width: 50%; *//* largeur de la partie MAIN */
  /*height: 69.084vh;*/ /* hauteur de la partie MAIN */
  margin: 0 auto;
  /* overflow:scroll; */
  font-size: 1,3rem;
}
label{
    font: 1,3rem;
    margin-top: 4rem;
}
input {
  margin-bottom: 0,6rem;
 
}
/* button { */
  /* width: 400px; */
  /* background-color: #839371; */
  /* margin: 2rem auto; */
/* } */
button {
    margin-top:30px;
  border-radius: 10px;
  color: #fff;
  padding: 5px;
  width: 200px;
  background-color: #839371;
  margin: 2rem auto;
  font-size: 17px;
}

button:hover {
color: #C6CDB1;
}

.confirm{
    margin-bottom: 3rem;
}
.error {
  font-weight: 500;
  color: red;
}
h1 {
  margin: 0 auto;
}
@media screen and (min-width: 992px) {
  /* -----===== Le menu du HEADER Desktop =====----- */
  .primary-navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto 1em auto 0;
    text-align: center;
    font-size: 1.3em;
  }
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
form {
    width: 50%
}

input {
    width: 30%;
}

}
</style>














