<template>
  <div id="app">
    <Nav />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Nav from './views/partials/Nav.vue'
import Footer from './views/partials/Footer.vue'
export default {
  name: 'App',
    components: {
      Nav,
      Footer
    }
}
</script>

<style lang="scss">
@import "./assets/sass/style.scss";
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
