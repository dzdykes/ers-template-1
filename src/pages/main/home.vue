<template>
  <section>
    <v-card class="transparent" height="686px">
      <v-layout column fill-height>
        <v-flex class="text-xs-center center-title">
          <h1 class="display-2">Farm Fresh Beer</h1>
          <h1>You could have this website for your restaurant</h1>
          <v-dialog v-model="contactFormDialog" max-width="490" :fullscreen="$vuetify.breakpoint.xs">
            <v-btn slot="activator" class="mt-5 blue-grey darken-3 white--text btn--oversized" large>
              Contact Us
            </v-btn>
            <v-toolbar dark color="blue-grey darken-3">
              <v-spacer></v-spacer>
              <v-btn icon @click.native="contactFormDialog = false" dark>
                <v-icon>close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card>
              <contact-form></contact-form>
            </v-card>
          </v-dialog>
        </v-flex>
      </v-layout>
    </v-card>
    <v-card flat class="transparent" :height="$vuetify.breakpoint.smAndUp ? '1000px' : '1200px'">
      <v-container fill-height v-bind="{ [`grid-list-xl`]: true }" :fluid="$vuetify.breakpoint.smAndUp">
        <v-layout fill-height row wrap>
          <v-flex xs12 order-sm1 sm6 offset-lg2 lg4>
            <div class="pa-3">
              <v-card-media :src="require('@/assets/grid/seth-weisfeld-510833.jpg')" height="425"></v-card-media>
            </div>
          </v-flex>
          <v-flex xs12 order-sm2 sm6 lg4>
            <v-layout :class="$vuetify.breakpoint.smAndUp || true ? 'column align-center justify-center' : 'row'">
              <div class="display-1 white--text">Great Food! Cold Beer!</div>
              <h1 class="ml-3 white--text">Foster the People</h1>
            </v-layout>
          </v-flex>
          <v-flex xs12 order-sm4 sm6 lg4>
            <div class="pa-3">
              <v-card-media :src="require('@/assets/grid/seth-weisfeld-510833.jpg')" height="425"></v-card-media>
            </div>
          </v-flex>
          <v-flex xs12 order-sm3 sm6 offset-lg2 lg4>
            <v-layout :class="$vuetify.breakpoint.smAndUp || true ? 'column align-center justify-center' : 'row'">
              <div class="display-1 white--text">Great Food! Cold Beer!</div>
              <h1 class="ml-3 white--text">Foster the People</h1>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <v-card flat class="transparent" height="800">
      <v-layout fill-height class="my-5" row wrap>
        <v-flex offset-md4 md4 xs12 class="text-xs-center">
          <v-layout fill-height column align-center justify-center>
            <contact-form></contact-form>
          </v-layout>
        </v-flex>
        <v-flex offset-md2 md8 xs12 class="pt-3">
          <div>
            <v-card-media :src="require('@/assets/grid/seth-weisfeld-510833.jpg')" height="500"></v-card-media>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </section>
</template>

<script>
import ContactForm from '@/components/customer/contactForm.vue'

export default {
  name: 'Home',
  data () {
    return {
      size: 'xl',
      contactFormDialog: false
    }
  },
  components: {
    'contact-form': ContactForm
  }
}
</script>

<style scoped>
.center-title {
  margin-top:15rem;
}
h1 {
  color: rgba(255,255,255,.9);
  text-shadow: .1rem .1rem .2rem rgba(0,0,0,.9);
}
h4 {
  color: rgba(255,255,255,.7);
  text-shadow: .1rem .1rem .2rem rgba(0,0,0,.9);
}
.btn.btn--large.btn--oversized {
  width:250px;
  height: 60px;
}
</style>
