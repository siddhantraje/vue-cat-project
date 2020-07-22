<template>
  <v-app>
    <Header />
    <v-content>
      <Dashboard />
    </v-content>
  </v-app>
</template>

<script>
import Dashboard from './components/Dashboard'
import Header from './components/Header'
// import Images from './components/Images'

export default {
  name: 'App',

  components: {
    Dashboard,
    Header,
    // Images
  },

  data: () => ({
    //
  }),
};
</script>
