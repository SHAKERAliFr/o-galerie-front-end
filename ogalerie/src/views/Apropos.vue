<template>
  <section>
    <h1> A propos </h1>
    <p>L'idée du site O'Galerie est née après le confinement de 2020, lorsque tous les lieux de loisirs et d'évasion culturelle étaient fermés au public.
        D'un côté il y avait plusieurs petites galeries d'art qui n'ont jamais rouvert, faute de moyens, et de l'autre des artistes ne pouvaient plus vivre de leur passion car il n'y avait plus la possibilité de visualiser leur travail.
    </p>
    <p>Le site O'Galerie est donc une galerie d'art en ligne qui permet modestement de mettre en lumière le travail d'artistes et de les relier avec des amateurs.
        </p>
    <h1><br> Qui sommes nous ?</h1>
    <p>
        Bien que très différents les uns des autres, nous nous sommes retrouvés sur ce projet par amour de l'art, quel qu'il soit. </p><br>
    <div class="box">
        <div id="A">Stéphanie G.<br>Lead Developer</div>
        <div id="B">Ali H.<br>Lead Developer</div>
        <div id="C">Nathalie D.<br>Git Master</div>
        <div id="D">Nadège L.<br>Product Owner</div>
        <div id="E">Stéphane E.<br>Scrum Master</div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Apropos",
  components: {},
};
</script>
<style scoped lang="scss">
h1 {
    font-weight: bold;
    font-variant: small-caps;
    font-family: 'Times New Roman', Times, serif;
    margin-top: 0.2%;
    color: #785558;
    margin-left: 2% ;
}
section {
    display: flex;
    padding: 2% 0 2% 0;
    border-radius: 1rem;
    border: solid 1px #555;
    background-color: #FFF;
    flex-direction: column;
    margin-left: 2% ;
    margin-right: 2%;
    margin-top: 3%;
    margin-bottom: 3%;
    box-shadow: 5px 12px 5px rgb(50, 78, 61);
}
p {
    font-size: 1.3rem;
    font-style: italic;
    color:#785558;
    font-family: 'Times New Roman', Times, serif;
    margin-left: 2% ;
    margin-right: 2%;
    margin-top: -0.5%;
}
.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    //flex-wrap: wrap;
    //justify-content: space-evenly;
}
#A, #B, #C, #D, #E {
    //display: block;
    width: 90%;
    height: 25rem;
    color: #FFF;
    padding-left: 0.5rem;
}
#A {
    background-size: cover;
    background-image: url(../assets/images/steph-vignette.jpg);
}
#B {
    background-size: cover;
    background-image: url(../assets/images/Ali.jpg);
}
#C {
    background-size: cover;
    background-image: url(../assets/images/Nath-vignette.jpg);
}
#D {
    background-size: cover;
    background-image: url(../assets/images/nad-vignette4.jpg);
}
#E {
    background-size: cover;
    background-image: url(../assets/images/Stephane.png);
}

@media screen and (min-width: 992px) {
  /* -----===== Le menu du HEADER Desktop =====----- */
  
#A, #B, #C, #D, #E {
    display: block;
    width: 18%;
    height: 25rem;
    color: #FFF;
    padding-left: 0.5rem;
}
.box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
}
</style>