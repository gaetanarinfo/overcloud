<script>

import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import axios from 'axios'
import { ref } from 'vue'

export default {

  setup () {

    /*------------------
        Liste des extensions
    --------------------*/
    const extensions = [{
      name: '.com',
      price: 2.58
    },
    {
      name: '.net',
      price: 2.58
    },
    {
      name: '.org',
      price: 2.58
    },
    {
      name: '.me',
      price: 2.58
    },
    {
      name: '.cm',
      price: 2.58
    }
    ];

    /*------------------
        Liste des services
    --------------------*/
    const services = [{
      name: 'Starter pack',
      price: 2.58,
      description: '5 Go de stockage, 1 nom de domaine associé à votre cloud.'
    },
    {
      name: 'Basic pack',
      price: 2.58,
      description: '10 Go de stockage, 1 nom de domaine associé à votre cloud.'
    },
    {
      name: 'Boost pack',
      price: 2.58,
      description: '20 Go de stockage, 2 nom de domaine associé à votre cloud.'
    }];

    /*------------------
        Liste des plans par mois
    --------------------*/
    const monthly_plans = [{
      name: 'Starter',
      price: 2.58,
      services: [
        '2,5 GB web space',
        'Free site buiding tools',
        'Free domain registar',
        '24/7 Support',
        'Free marketing tool',
        '99,9% Services uptime',
        '30 day money back',
      ]
    },
    {
      name: 'Basic',
      price: 5.99,
      services: [
        '2,5 GB web space',
        'Free site buiding tools',
        'Free domain registar',
        '24/7 Support',
        'Free marketing tool',
        '99,9% Services uptime',
        '30 day money back',
      ]
    },
    {
      name: 'Boost',
      price: 19.99,
      services: [
        '2,5 GB web space',
        'Free site buiding tools',
        'Free domain registar',
        '24/7 Support',
        'Free marketing tool',
        '99,9% Services uptime',
        '30 day money back',
      ]
    },
    {
      name: 'Premium',
      price: 29.99,
      services: [
        '2,5 GB web space',
        'Free site buiding tools',
        'Free domain registar',
        '24/7 Support',
        'Free marketing tool',
        '99,9% Services uptime',
        '30 day money back',
      ]
    }];

    /*------------------
        Liste des plans par an
    --------------------*/
    const year_plans = [{
      name: 'Starter',
      price: 33.60,
      services: [
        '2,5 GB web space',
        'Free site buiding tools',
        'Free domain registar',
        '24/7 Support',
        'Free marketing tool',
        '99,9% Services uptime',
        '30 day money back',
      ]
    },
    ];

    /*------------------
        Liste des achievements
    --------------------*/
    const achievements = [{
      name: 'Clients',
      number: 250
    },
    {
      name: 'Domaines',
      number: 565
    },
    {
      name: 'Fichiers',
      number: 1458
    },
    {
      name: 'Visites',
      number: 2487
    }];

    /*------------------
        Liste des aticless
    --------------------*/
    const articles = [{
      title: 'L\'importance de l\'utilisation du cloud',
      subtitle: 'Si vous ne connaissez pas',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
    gravida facilisis.`,
      icon: 'fa fa-cloud-download'
    },
    {
      title: 'Notre guide pas à pas',
      subtitle: 'Suivez-le en cas de doute',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
    gravida facilisis.`,
      icon: 'fa fa-briefcase'
    }]

    /*------------------
        Offre gratuite
    --------------------*/
    const offer = [{
      logo: 'choose-plan.png',
      title: 'Profiter d\'un essai gratuit en vous inscrivant dès maintenant !',
      services: [{
        icon: 'fa fa-check',
        name: '2 Go d\'espace cloud'
      },
      {
        icon: 'fa fa-check',
        name: '1 domaine gratuit'
      },
      {
        icon: 'fa fa-check',
        name: 'Bande passante limité'
      }]
    }];

    /*------------------
        Constantes diverses
    --------------------*/
    const filter_ext = '.filter_ext',
      error_form = 'register__form form input',
      check_pricing = ref(0);

    return {
      check_pricing,
      error_form,
      filter_ext,
      extensions,
      services,
      monthly_plans,
      articles,
      year_plans,
      achievements,
      offer,

      watch_domain: [],
      search_domain: null,
      validate_ext: ref('.com'),
      info: null,
      loading: ref(false),
      errored: ref(false),

      /*------------------
          Récupération des données sur le site internet de whois domain
      --------------------*/
      load_ext () {

        if (this.search_domain) {

          document.querySelector(this.error_form).classList.remove('form_error')
          document.querySelector(filter_ext).classList.remove('fade')

          this.loading = true

          const api_url = 'https://api.whoisfreaks.com/v1.0/whois?apiKey=' + import.meta.env.VITE_WHOISFREAKS_API_KEY + '&whois=live&domainName=' + this.search_domain + this.validate_ext;

          this.watch_domain = [];

          axios
            .get(api_url)
            .then(response => {
              this.watch_domain = response.data;
              document.querySelector(filter_ext).classList.add('fade')
            })
            .catch(error => {
              this.loading = false
              document.querySelector(filter_ext).classList.add('fade')
              this.errored = true
            })
            .finally(() => this.loading = false);

        } else {

          document.querySelector(this.error_form).classList.add('form_error')

        }

      }

    }

  },
  components: {
    HeaderComponent,
    FooterComponent,
  }

}
</script>

<template>

  <main class="main">

    <HeaderComponent />

    <!-- Hero Section Begin -->
    <section class="hero-section">

      <div class="hero__slider">

        <div class="hero__item set-bg" data-setbg="../src/assets/img/hero/hero-1.jpg">

          <div class="container">

            <div class="row">

              <div class="col-lg-6">

                <div class="hero__text">
                  <h5>À partir de seulement 2,58 €/mois</h5>
                  <h2>Bienvenue sur le<br /> meilleur hébergeur</h2>
                  <a href="#" class="primary-btn">Commencez maintenant</a>
                </div>

              </div>

              <div class="col-lg-6">

                <div class="hero__img">
                  <img src="../assets/img/hero/hero-right.png" alt="">
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
    <!-- Hero Section End -->

    <!-- Register Domain Section Begin -->
    <section class="register-domain spad">

      <div class="container">

        <div class="row d-flex justify-content-center">

          <div class="col-lg-8">

            <div class="register__text">

              <div class="section-title">
                <h3>Enregistrez votre domaine cloud maintenant !</h3>
              </div>

              <div class="register__form">

                <form @submit.prevent="load_ext()">

                  <input v-model="search_domain" type="text" placeholder="ex: moncloude.com">

                  <div class="change__extension">

                    {{ validate_ext }}

                    <ul>
                      <li v-for="ext in extensions" @click="validate_ext = ext.name">{{ ext.name }}</li>
                    </ul>

                  </div>

                  <button type="submit" class="site-btn">Rechercher...
                  </button>

                </form>

                <div v-show="loading" class="mt-4">
                  <span class="loader_form"></span>
                </div>

                <div class="filter_ext mt-4">

                  <div v-if="watch_domain.status" class="alert alert-success d-flex align-items-center" role="alert">

                    <i class="bi flex-shrink-0 mr-2 fa fa-check-circle"></i>

                    <div class="font-weight-bold">
                      Le domaine {{ watch_domain.domain_name }} est disponible !
                    </div>

                  </div>

                  <div v-else class="alert alert-danger d-flex align-items-center" role="alert">

                    <i class="bi flex-shrink-0 mr-2 fa fa-exclamation-triangle"></i>

                    <div>
                      Le domaine {{ watch_domain.domain_name }} n'est pas disponible !
                    </div>

                  </div>

                  <div v-if="errored" class="alert alert-danger d-flex align-items-center" role="alert">

                    <i class="bi flex-shrink-0 mr-2 fa fa-exclamation-triangle"></i>

                    <div>
                      Une erreur est survenu !
                    </div>

                  </div>

                </div>

              </div>

              <div class="register__result">

                <ul>
                  <li v-for="ext in extensions">{{ ext.name }} <span>{{ ext.price }}
                      €</span></li>
                </ul>

              </div>

              <p>Une fois votre domaine configuré, vous pourrez accéder à votre cloud à l'aide de ce domaine, peu
                importe où vous vous trouvez dans le monde, tant que vous avez une connexion Internet.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
    <!-- Register Domain Section End -->

    <!-- Services Section Begin -->
    <section class="services-section spad">

      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h3>Choisissez la bonne solution d'hébergement</h3>
            </div>
          </div>
        </div>

        <div class="row">

          <div v-for="service in services" class="col-lg-4 col-md-4 col-sm-6">
            <div class="services__item">
              <h5>{{ service.name }}</h5>
              <span>À partir de {{ service.price }} €</span>
              <p>{{ service.description }}</p>
            </div>
          </div>

        </div>

      </div>

    </section>
    <!-- Services Section End -->

    <!-- Pricing Section Begin -->
    <section class="pricing-section spad">

      <div class="container">

        <div class="row">

          <div class="col-lg-7 col-md-7">

            <div class="section-title normal-title">
              <h3>Choisissez votre forfait</h3>
            </div>

          </div>

          <div class="col-lg-5 col-md-5">

            <div class="pricing__swipe-btn">

              <label for="month" :class="!check_pricing ? 'active' : ''">Mensuel
                <input @change="check_pricing = 0" v-model="check_pricing" value="0" type="radio" id="month">
              </label>

              <label for="yearly" :class="check_pricing ? 'active' : ''">Annuel
                <input @change="check_pricing = 1" v-model="check_pricing" value="1" type="radio" id="yearly">
              </label>

            </div>

          </div>

        </div>

        <div :class="!check_pricing ? 'row monthly__plans active' : 'row monthly__plans'">

          <div v-for="item in monthly_plans" class="col-lg-3 col-md-6 col-sm-6">

            <div class="pricing__item">
              <h4>{{ item.name }}</h4>
              <h3>{{ item.price }} € <span>/ mois</span></h3>
              <ul>
                <li v-for="service in item.services">{{ service }}</li>
              </ul>
              <a href="#" class="primary-btn">Choisir le forfait</a>
            </div>

          </div>

        </div>

        <div :class="check_pricing ? 'row yearly__plans active' : 'row yearly__plans'">

          <div v-for="item in year_plans" class="col-lg-3 col-md-6 col-sm-6">

            <div class="pricing__item">
              <h4>{{ item.name }}</h4>
              <h3>{{ item.price }} € <span>/ mois</span></h3>
              <ul>
                <li v-for="service in item.services">{{ service }}</li>
              </ul>
              <a href="#" class="primary-btn">Choisir le forfait</a>
            </div>

          </div>

        </div>

      </div>

    </section>
    <!-- Pricing Section End -->

    <!-- Achievement Section Begin -->
    <section class="achievement-section set-bg" data-setbg="../src/assets/img/achievement-bg.jpg">

      <div class="container">

        <div class="row">

          <div v-for="achievement in achievements" class="col-lg-3 col-md-3 col-sm-6">

            <div class="achievement__item">
              <span class="fa fa-user-o"></span>
              <h2 class="achieve-counter">{{ achievement.number }}</h2>
              <p>{{ achievement.name }}</p>
            </div>

          </div>

        </div>

      </div>

    </section>
    <!-- Achievement Section End -->

    <!-- Work Section Begin -->
    <section class="work-section spad">

      <div class="container">

        <div class="row">

          <div class="col-lg-12">

            <div class="section-title">
              <h3>Tout savoir sur le cloud !</h3>
            </div>

            <div class="work__text">

              <div class="row">

                <div v-for="article in articles" class="col-lg-6">

                  <div class="work__item">

                    <i :class="article.icon"></i>

                    <span>{{ article.title }}</span>

                    <h3>{{ article.subtitle }}</h3>

                    <p>{{ article.content }} </p>

                    <a href="#" class="primary-btn">Lire la suite</a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
    <!-- Work Section End -->

    <!-- Choose Plan Section Begin -->
    <section class="choose-plan-section spad">

      <div class="container">

        <div class="row">

          <div class="col-lg-6 col-md-6">
            <img :src="'../src/assets/img/' + offer[0].logo" :alt="offer[0].title">
          </div>

          <div class="col-lg-6 col-md-6">

            <div class="plan__text">

              <h3>{{ offer[0].title }}</h3>

              <ul>
                <li v-for="service in offer[0].services"><span :class="service.icon"></span> {{ service.name }}</li>
              </ul>

              <a href="#" class="primary-btn">Commencez maintenant</a>

            </div>

          </div>

        </div>

      </div>

    </section>
    <!-- Choose Plan Section End -->

    <FooterComponent />

  </main>

</template>
