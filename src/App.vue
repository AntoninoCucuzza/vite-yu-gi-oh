<script >
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',
  data() {
    return {
      message: 'we',
    }
  },
  components: {
    AppHeader,
    AppMain,
  },

}

</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped></style>
