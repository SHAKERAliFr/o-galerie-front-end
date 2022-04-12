<template>
  <header>
    <div class="header__identity">
      <router-link
        :to="{
          name: 'Home',
        }"
      >
        <img
          src="../assets/images/logo.png"
          alt="le logo de la galerie"
          class="logo"
        />
      </router-link>
      <p class="header__p">
        "...des oeuvres artistiques, à portée de clics..."
      </p>
    </div>
    <!-- <div class="menuBurger"> -->
    <!-- <a href="#" alt=""> -->
    <!-- <div class="header__clickZone"> -->
    <!-- <i class="fas fa-bars"></i> -->
    <!-- </div> -->
    <!-- </a> -->
    <!-- </div> -->
    <div class="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>
      <ul class="menu__box">
        <router-link
          :to="{
            name: 'Home',
          }"
        >
          <li class="menu__item">accueil</li>
        </router-link>
        <li
          class="menu__item"
          v-for="salon in salons"
          :key="salon.id"
          :value="salon.id"
        >
          <router-link
            :to="{
              name: 'ArtWorkList',
              params: {
                id: salon.id,
              },
            }"
          >
            {{ salon.title.rendered }}
          </router-link>
        </li>
        <router-link
          :to="{
            name: 'inscription',
          }"
          ><li class="menu__item" v-if="!loggedIn">inscription</li>
        </router-link>
        <router-link
          :to="{
            name: 'login',
          }"
          ><li class="menu__item" v-if="!loggedIn">connexion</li>
        </router-link>
        <router-link
          :to="{
            name: 'logout',
          }"
        >
          <li class="menu__item"  v-if="loggedIn">déconnexion</li></router-link
        >
       <router-link
  :to="{
    name: 'apropos',
  }"
> <li class="menu__item">à propos</li></router-link>
              <router-link
 :to="{
   name: 'MentionsLegales',
 }"><li class="menu__item">mentions légales</li></router-link>
      </ul>
    </div>
    <nav role="navigation" class="primary-navigation">
      <ul>
        <router-link
          :to="{
            name: 'Home',
          }"
        >
          <li>accueil</li>
        </router-link>
        <li>
          exposition
          <ul class="dropdown">
            <li v-for="salon in salons" :key="salon.id" :value="salon.id">
              <router-link
                :to="{
                  name: 'ArtWorkList',
                  params: {
                    id: salon.id,
                  },
                }"
              >
                {{ salon.title.rendered }}
              </router-link>
            </li>
          </ul>
        </li>
        <router-link
          :to="{
            name: 'inscription',
          }"
        >
          <li v-if="!loggedIn">inscription</li>
        </router-link>
        <router-link
          :to="{
            name: 'login',
          }"
        >
          <li v-if="!loggedIn">connexion</li>
        </router-link>
        <router-link
          :to="{
            name: 'logout',
          }"
        >
          <li v-if="loggedIn">déconnexion</li>
        </router-link>
      </ul>
    </nav>
  </header>
</template>
<script>
import salonService from "../services/salonService.js";
import userService from "../services/userService.js";
export default {
  name: "Header",
  components: {},
  data() {
    return {
      salons: [],
      loggedIn: false,
    };
  },
  // watch avec l'objet route permet de surveiller toute demande de changement de route dans le header
  // vue.js fonctionnant en mode single page, le header ne varie jamais puisqu'il est présent sur toutes les pages
  // donc à chaque demande de changement de route, on exécute la méthode loadConnect permettant d'aller vérifier en local storage si le user est connecté
  // si le user est connecté, on affiche dans la nav uniquement "déconnexion"
  // si le user n'est pas connecté, on affiche dans la nav uniquement "connexion"
  watch: {
    $route() {
      this.loadConnect();
    },
  },
  async created() {
    // dans le cycle de vie du composant, je suis au niveau de la création de ce dernier
    console.log("Je suis dans created Header.vue");
    // quand le composant va etre créé, on voudra charger les recettes depuis l'API
    // this.artworks = await artworkService.loadArtworksBySalon();
    this.salons = await salonService.loadSalon();
    // console.log(this.salons);
  },
  methods: {
    async loadConnect() {
      await userService.isConnected().then((isLoggedIn) => {
        this.loggedIn = isLoggedIn;
      });
    },
  },
};
</script>
<style scoped lang="scss">
/* -----=====##### HEADER Mobile #####=====----- */
#menu__toggle {
  opacity: 0;
}
#menu__toggle:checked ~ .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked ~ .menu__btn > span::before {
  top: 0;
  transform: rotate(0);
}
#menu__toggle:checked ~ .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
    z-index: 10;
  visibility: visible;
  right: 0;
}
.menu__btn {
  display: flex;
  align-items: center;
  position: fixed;
  top: 20px;
  right: 20px;
 z-index: 12;
  width: 26px;
  height: 26px;
  cursor: pointer;
}
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #616161;
  transition-duration: 0.25s;
}
.menu__btn > span::before {
  content: "";
  top: -8px;
}
.menu__btn > span::after {
  content: "";
  top: 8px;
}
.menu__box {
  display: block;
  position: fixed;
  visibility: hidden;
  top: 0.90%;
  right: 20%;
border-radius: 25px 0  0 25px ;
  width: auto;
  height: auto;
  opacity: 90%;
  margin: 0;
  padding: 50px 0;
  list-style: none;
border: 1px solid black;
  background-color: #839371;
  box-shadow: 1px 0px 6px rgba(0, 0, 0, 1.2);
  transition-duration: 0.25s;
  z-index: 11;
}
.menu__item {
  display: block;
  padding: 15px;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 600;
  //transition-duration: 0.30s;
  text-decoration: none;
  color: #fff;
}
.menu__item:hover {
  background-color: #CFD8DC;
//   color: #fff;
// text-decoration: none;
}
a {
text-decoration: none;
color: #fff;
}
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  height: 2.9em;
  padding: 0 0.625em 0.625em 0.625em;
  
}
.logo {
  width: 40%;
  max-width: 50%;
  height: 70%;
  margin: 0.625em 0 0.625em 0.1em;
}
.header__p {
  display: none;
}
// .menuBurger {
//   display: block;
// }
.header__clickZone {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 3em;
  margin-right: -0.625em;
}
.fas.fa-bars {
  font-size: 2em;
  //   color: #000;
}
.primary-navigation {
  display: none;
}
@media screen and (min-width: 992px) {
  /* -----=====##### HEADER Desktop #####=====----- */
  .hamburger-menu {
    display: none;
  }
  header {
    height: 6.25em;
  }
  a {
    text-decoration: none;
  }
  p {
    color: rgb(224, 228, 225);
    text-shadow: 10px 10px 14px black;
  }
  li {
    // font-weight: bold;
    color: white;
  }
  li:hover {
    color: #C6CDB1;
  }
  .dropdown {
    z-index: 10;
  }
  .header__identity {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.6em 0 0 2em;
  }
  .logo {
    width: 40%;
    max-width: 50%;
    height: 70%;
    margin: 0.625em 0 0.625em 0;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
  .logo:hover {
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }
  .header__p {
    display: inline;
    font-size: 1.6rem;
    margin-top: 0.3em;
  }
  .menuBurger {
    display: none;
  }
  /* -----===== Le menu du HEADER Desktop =====----- */
  .primary-navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto 1em auto 0;
    text-align: center;
    font-size: 1.6rem;
  }
  .logo {
    width: 100%;
    max-width: 100%;
    height: 60%;
    // margin: 0.625em 0 0.625em 0;
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
  li a {
    color: #fff;
  }
  li a:hover {
    color: #C6CDB1;
  }
  li:hover {
    cursor: pointer;
  }
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
  ul li ul li a {
    transition: all 0.5s ease;
  }
}
</style>