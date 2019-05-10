<template>
  <div id="app" v-b-scrollspy>
    <NavBarMain />
    <HomeSection />
    <SubscriptionSection />
    <BoxesSection />
    <AboutSection />
    <AuthorSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
import NavBarMain from './components/NavBar'
import HomeSection from './components/HomeSection'
import SubscriptionSection from './components/SubscriptionSection'
import BoxesSection from './components/BoxesSection'
import AboutSection from './components/AboutSection'
import AuthorSection from './components/AuthorSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/Footer'

export default {
  name: 'app',
  components: {
    NavBarMain,
    HomeSection,
    SubscriptionSection,
    BoxesSection,
    AboutSection,
    AuthorSection,
    ContactSection,
    FooterSection
  },
  mounted () {
    // $('body').scrollspy({ target: '#main-nav' });

    // // Add smooth scrolling
    // $('#main-nav a').on('click', function (e) {
    //     // Check for a hash value
    //     if (this.hash !== '') {
    //     // Prevent default behavior
    //     e.preventDefault();

    //     // Store hash
    //     const hash = this.hash;

    //     // Animate smooth scroll
    //     $('html, body').animate({
    //         scrollTop: $(hash).offset().top
    //     }, 900, function () {
    //         // Add hash to URL after scroll
    //         window.location.hash = hash;
    //     });
    //     }
    // });
  }
}
</script>

<style>
  #app {
    margin-top: 100px;
  }

  section header {
    width: 50%;
    margin: auto;
    border-bottom: 1px #ddd solid;
  }

  @media (max-width: 992px) {
      .mb-md-resp {
          margin-bottom: 1rem; 
      }

      section header {
          width: 80%;
      }
  }

  @media (max-width: 768px) {
    
      .mb-sm-resp {
        margin-bottom: 1rem; 
      }

      .home-title {
          font-size: 3rem;
      }

  }
</style>
