<template>
  <div id="app">
    <NavBarMain />
    <HomeSection />
  </div>
</template>

<script>
import NavBarMain from './components/NavBar'
import HomeSection from './components/HomeSection'

export default {
  name: 'app',
  components: {
    NavBarMain,
    HomeSection
  }
}
</script>

<style>
#app {
  margin-top: 100px;
}
</style>
