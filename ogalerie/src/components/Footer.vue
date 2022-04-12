<template>
  <footer>
    <p class="footer__p">
      copyright <em>&copy;</em> O' Galerie 2022 <b>|</b> tous droits réservés
      <b>|</b>
      <a class="RS" href="#"><i class="fab fa-facebook-f"></i></a>
      <a class="RS" href="#"><i class="fab fa-pinterest-p"></i></a>
      <a class="RS" href="#"><i class="fab fa-instagram"></i></a>
    </p>
    <nav role="navigation" class="secondary-navigation">
      <ul>
            <li>
                <router-link
                    :to="{
                    name: 'apropos',
                    }"
                 >
                    <a>à propos</a>
                </router-link>
            </li>

            <li>
                <router-link
                    :to="{
                    name: 'MentionsLegales',
                    }"
                ><a>mentions légales</a>
                </router-link>
            </li>
      </ul>
    </nav>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  components: {},
};
</script>
<style scoped lang="scss">
/* -----=====##### FOOTER MOBILE #####=====----- */
footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 3em;
  margin: 1.25em 0;
}
.secondary-navigation {
  display: none;
}
.footer__clickZone {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 3em;
  margin: -0.625em;
}

i {
      padding-left: 1em;
  }

a[class="RS"]:link {
  text-decoration: none;
  color: #000;
}
a[class="RS"]:hover {
  text-decoration: none;
  color: #fff;
}
a{
      color: black;
      /*padding-left: 1em;*/
    text-decoration: none;
  }
  em {
      color: white;
      font-size: 1.6em;
  }
  b {
      color: white;
  }

/* -----=====##### FOOTER Desktop #####=====----- */
@media screen and (min-width: 992px) {
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
  a{
      color: black;
      /*padding-left: 1em;*/
    text-decoration: none;
  }
  li a {
    color: #fff;
    font-size: 1.6rem; }
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
  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 97%;
    height: 5em;
    margin: 2em 0 0 1.7em;
  }
  .footer_nav {
    display: block;
  }
  .secondary-navigation {
    display: inline;
  }

  em {
      color: white;
      font-size: 1.6em;
  }
  b {
      color: white;
  }
}
/* -----=====##### #### #####=====----- */
</style>














