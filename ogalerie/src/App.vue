<template>


  <div id="app">
      <body>
      <div class="container">
            <Header/>
            <router-view :key="$route.fullPath"/>
            <Footer/>
      </div>
      </body>
  </div>
 
</template>

<script>
import Header from './components/Header.vue';
//import ArtWorkList from './components/ArtWorkList.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Header,
    //ArtWorkList
    Footer,
  }
}
</script>

<style scoped lang="scss">
#app {
/* -----=====##### COMMUN Mobile #####=====----- */
*, *::after, *::before {box-sizing: border-box;}

html {font-size: 62.5%; background-color: #808080;} 

body {
    height: 100%;
    background-color: #808080;
    font-family: 'Gudea', sans-serif;
    font-size: 1.1em;
     width: 100%;
}

b {color: #fff;}

em{font-size:1.5em;color:#fff;}

li {font-weight: bold;}

.container {
    width: 100%;
    height: 100%;
    background-color: #839371;
    margin: 0 auto;
    overflow: hidden;
}

a:link {text-decoration: none; color : #fff;}

a:hover {text-decoration: none; color : #C6CDB1;}

b {color: #fff;}

em{font-size:1.5rem;color:#fff;}

}
@media screen and (min-width: 992px) {
/* -----=====##### COMMUN Desktop #####=====----- */
    body {margin-top: 1.25em;}

    .container {
        width: 70%;
        height: 95vh;
        margin: 0 auto;
        overflow: hidden;
    }
}
</style>
