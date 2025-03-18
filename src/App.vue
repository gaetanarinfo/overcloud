<script>
import { RouterView } from 'vue-router'

export default {

  setup () {

    /*------------------
        Déclaration des constantes
    --------------------*/
    const set_bg = 'set-bg',
      main = '.main',
      loader = '.loader',
      preloder = '#preloder'

    return {
      set_bg,
      main,
      loader,
      preloder
    }

  },
  components: {
    RouterView
  },
  mounted () {

    /*------------------
         Ont attend que la page soit chargé
     --------------------*/
    window.addEventListener('load', () => {

      /*------------------
         Preloader
     --------------------*/
      const main = document.querySelector(this.main)

      setTimeout(() => {
        document.querySelector(this.loader).style.display = 'none';
      }, 900);

      setTimeout(() => {
        document.querySelector(this.preloder).style.display = 'none';
      }, 1000);

      setTimeout(() => {
        main.classList.toggle('fade');
      }, 1000);

      /*------------------
          Background Set
      --------------------*/
      const set = document.getElementsByClassName(this.set_bg)
      for (let i = 0; i < set.length; i++) {
        const bg = set[i].dataset.setbg;
        set[i].style.backgroundImage = `url(${bg})`;
      }

    });

  }

}

</script>

<template>

  <!-- Page Preloder -->
  <div id="preloder">
    <div class="loader"></div>
  </div>

  <RouterView />

</template>
