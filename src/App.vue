<template>
  <v-app>
    <admin-nav v-if="isAdmin"></admin-nav>
    <customer-nav v-else></customer-nav>
    <v-content>
      <router-view/>
    </v-content>
    <admin-footer v-if="isAdmin"></admin-footer>
    <customer-footer v-else></customer-footer>
    <v-btn color="blue-grey" @click="isAdmin = !isAdmin" dark large fixed bottom right fab>
      <v-tooltip left>
        <v-icon slot="activator">autorenew</v-icon>
        <span>Switch between Admin and Customer view</span>
      </v-tooltip>
    </v-btn>
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
