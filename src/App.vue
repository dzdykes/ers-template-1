<template>
  <v-app>
    <admin-nav v-if="isAdmin" :mini-variant.sync="$vuetify.breakpoint.smAndDown"></admin-nav>
    <customer-nav v-else></customer-nav>
    <section>
      <v-parallax :src="require('@/assets/backgrounds/parallax-3.jpg')" height="750"></v-parallax>
      <v-parallax class="hidden-sm-and-down" :src="require('@/assets/backgrounds/parallax-1.jpg')" height="1000"></v-parallax>
      <v-parallax class="hidden-sm-and-up" :src="require('@/assets/backgrounds/parallax-1.jpg')" height="2000"></v-parallax>
      <v-parallax :src="require('@/assets/backgrounds/parallax-2.jpg')" height="1000"></v-parallax>
    </section>

    <v-container>
      <div class="page-container">
        <router-view/>
      </div>
      <v-btn color="blue-grey" @click="isAdmin = !isAdmin" dark large fixed bottom right fab>
        <v-tooltip left>
          <v-icon slot="activator">autorenew</v-icon>
          <span>Switch between Admin and Customer view</span>
          <v-spacer></v-spacer>
        </v-tooltip>
      </v-btn>
    </v-container>
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
      isAdmin: false
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
<style scoped>
.page-container {
  position: absolute;
  left:0;
  right:0;
  top:63px;
  bottom:0;
}
</style>