<script>

import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  setup () {

    // Liste des extensions
    const extensions = [{
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
    ]

    // Liste des services
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
    }]

    // Liste des plans par mois
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
    }]

    // Liste des plans par ans
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
    ]

    // Liste des achievements
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
    }]

    return {
      extensions,
      services,
      monthly_plans,
      year_plans,
      achievements
    }

  },
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<template>

  <main>

    <HeaderComponent />

    <!-- Hero Section Begin -->
    <section class="hero-section">

      <div class="hero__slider owl-carousel">
        <div class="hero__item set-bg" data-setbg="../src/assets/img/hero/hero-1.jpg">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="hero__text">
                  <h5>À partir de seulement 2,8 €/mois</h5>
                  <h2>Bienvenue sur le<br /> meilleur hbergeur</h2>
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
                <form action="#">
                  <input type="text" placeholder="ex: moncloude.com">
                  <div class="change__extension">
                    .com
                    <ul>
                      <li v-for="ext in extensions">{{ ext.name }}</li>
                    </ul>
                  </div>
                  <button type="submit" class="site-btn">Rechercher...</button>
                </form>
              </div>
              <div class="register__result">
                <ul>
                  <li v-for="ext in extensions">{{ ext.name }} <span>{{ ext.price }} €</span></li>
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
              <label for="month" class="active">Mensuel
                <input type="radio" id="month">
              </label>
              <label for="yearly">Annuel
                <input type="radio" id="yearly">
              </label>
            </div>
          </div>
        </div>

        <div class="row monthly__plans active">

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

        <div class="row yearly__plans">

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
              <h3>COMMENT CONSTRUIRE VOTRE SITE WEB EN LIGNE AUJOURD'HUI ?</h3>
            </div>
            <div class="work__text">
              <div class="row">
                <div class="col-lg-6">
                  <div class="work__item">
                    <i class="fa fa-desktop"></i>
                    <span>CRÉEZ VOTRE PROPRE SITE WEB AVEC NOTRE
                    </span>
                    <h3>CRÉATEUR DE SITE WEB</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                      gravida facilisis. </p>
                    <a href="#" class="primary-btn">Lire la suite</a>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="work__item">
                    <i class="fa fa-shopping-bag"></i>
                    <span>CRÉER, GÉRER ET VENDRE FACILEMENT</span>
                    <h3>BOUTIQUE EN LIGNE</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                      gravida facilisis. </p>
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
            <img src="../assets/img/choose-plan.png" alt="">
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="plan__text">
              <h3>Jusqu'à 5% de réduction avec enregistrement de nom de domaine gratuit inclus !</h3>
              <ul>
                <li><span class="fa fa-check"></span> 2 Go d'espace cloud</li>
                <li><span class="fa fa-check"></span> 1 domaine gratuit</li>
                <li><span class="fa fa-check"></span> Bande passante limité</li>
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
