<template>
  <v-app>
    <admin-nav v-if="isAdmin" :mini-variant.sync="$vuetify.breakpoint.smAndDown"></admin-nav>
    <customer-nav :admin-on.sync="isAdmin"></customer-nav>
    <section v-if="isParalax">
      <v-parallax :src="require('@/assets/backgrounds/parallax-3.jpg')" height="750"></v-parallax>
      <v-parallax class="hidden-sm-and-down" :src="require('@/assets/backgrounds/parallax-1.jpg')" height="1000"></v-parallax>
      <v-parallax class="hidden-md-and-up" :src="require('@/assets/backgrounds/parallax-1.jpg')" height="1400"></v-parallax>
      <v-parallax :src="require('@/assets/backgrounds/parallax-2.jpg')" height="1100"></v-parallax>
    </section>
    <v-container fluid class="page-container accent pa-0">
      <router-view/>
    </v-container>
    <v-btn color="blue-grey" @click="isAdmin = !isAdmin" dark large fixed bottom right fab>
      <v-tooltip left>
        <v-icon slot="activator">autorenew</v-icon>
        <span>Switch between Admin and Customer view</span>
        <v-spacer></v-spacer>
      </v-tooltip>
    </v-btn>
    <customer-footer></customer-footer>
  </v-app>
</template>

<script>
import AdminNav from '@/components/admin/nav'
import AdminFooter from '@/components/admin/footer'
import CustomerNav from '@/components/customer/nav'
import CustomerFooter from '@/components/customer/footer'

export default {
  data () {
    return {
      isAdmin: false,
      isParalax: false
    }
  },
  name: 'App',
  components: {
    'admin-nav': AdminNav,
    'admin-footer': AdminFooter,
    'customer-nav': CustomerNav,
    'customer-footer': CustomerFooter
  }
}
</script>
<style lang="stylus">
  @import './assets/stylus/main'
  .page-container {
    position: absolute;
    left:0;
    right:0;
    top:63px;
    bottom:0;
}

.parallax__content {
  padding: 0 !important;
}
</style>