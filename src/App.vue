<script>
import { router } from './router';
import AppNav from './components/AppNav.vue';
import AppFooter from './components/AppFooter.vue';
export default {
    components:{
      AppNav,
      AppFooter
    }
}
</script>

<template>
  <AppNav/>
  <router-view></router-view>
  <AppFooter/>
</template>

<style lang="scss">
@import url(styles/generals.scss);
</style>
