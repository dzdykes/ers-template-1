<template>
  <section>
    <v-card class="transparent" height="686px">
      <v-layout column fill-height align-center justify-center>
        <div class="text-xs-center">
          <h1 class="display-4 mb-3"><span>Farm Fresh Beer</span></h1>
          <blockquote>Mission statement here. Wouldn't it be nice to have a custom webite that is tailor fitted for your business</blockquote>
          <v-dialog v-model="contactFormDialog" max-width="490" :fullscreen="$vuetify.breakpoint.xs" @keyup.esc="contactFormDialog=false">
            <v-btn slot="activator" class="mt-3 blue-grey darken-3 white--text elevation-24" large>
              Contact Us
            </v-btn>
            <contact-form @close="contactFormDialog=false" :is-dialog="true"></contact-form>
          </v-dialog>
        </div>
      </v-layout>
    </v-card>
    <v-card flat class="transparent">
      <v-container fill-height v-bind="{ [`grid-list-xl`]: true }" :fluid="$vuetify.breakpoint.smAndUp">
        <v-layout row wrap>
          <v-flex xs12 order-sm3 sm6 offset-lg2 lg4>
            <v-layout column align-center justify-center>
              <div class="text-xs-center py-5">
                <div class="display-1 white--text">Live Events!</div>
                <h2 class="ml-3 white--text">See who's coming to Farm Fresh Beer</h2>
                <v-btn large class="elevation-24">
                  <v-icon left>
                    people_outline
                  </v-icon>
                  Events
                </v-btn>
              </div>
            </v-layout>
          </v-flex>
          <v-flex xs12 order-sm1 sm6 offset-lg2 lg4>
            <div class="pa-3">
              <v-card-media :src="require('@/assets/grid/seth-weisfeld-510833.jpg')" height="425"></v-card-media>
            </div>
          </v-flex>
          <v-flex xs12 order-sm2 sm6 lg4>
            <v-layout column align-center justify-center>
              <div class="text-xs-center py-5">
                <div class="display-1 white--text">Great Food!</div>
                <h1 class="px-3 text-xs-center ml-3 white--text">Come to our restaurant and try some food and massive beer selection.</h1>
                <v-menu open-on-hover bottom offset-y>
                  <v-btn dark class="blue-grey" large slot="activator">See Our Menu</v-btn>
                  <v-list class="blue-grey lighten-4">
                    <v-list-tile>
                      <div>
                        <v-tooltip v-for="link in menuLinks" :key="link.id" bottom>                        
                          <v-btn slot="activator" icon>
                            <v-icon>
                              {{link.icon}}
                            </v-icon>
                          </v-btn>
                          <span>{{link.tooltip}}</span>
                        </v-tooltip>
                      </div>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              </div>
            </v-layout>
          </v-flex>
          <v-flex xs12 order-sm4 sm6 lg4>
            <div class="pa-3">
              <v-card-media :src="require('@/assets/grid/james-sutton-198871.jpg')" height="425"></v-card-media>
            </div>
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
            <v-card-media class="hidden-sm-and-down" :src="require('@/assets/grid/khachik-simonian-180759.jpg')" height="500"></v-card-media>
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
      contactFormDialog: false,
      menuLinks: [
        {
          id: 'bar-menu-link',
          icon: 'local_bar',
          tooltip: 'Craft Beer and Drink Menu',
          src: 'clem-onojeghuo-222414.jpg'
        },
        {
          id: 'food-menu-link',
          icon: 'local_dining',
          tooltip: 'Local Farm Food Menu',
          src: 'seth-weisfel-510833.jpg'
        },
        {
          id: 'catering-menu-link',
          icon: 'room_service',
          tooltip: 'Custom Catering Menu',
          src: 'james-sutton-198871.jpg'
        }
      ]
    }
  },
  components: {
    'contact-form': ContactForm
  }
}
</script>

<style lang="stylus" scoped>
h1 {
  text-shadow: .4rem .6rem 1rem rgba(255,255,255,.9);
}
blockquote {
  max-width: 350px;
  margin:auto;
  padding:1rem 1.5rem;
  color: rgba(255,255,200,.7);
  text-shadow: .1rem .1rem .2rem rgba(0,0,0,.9);
  background: rgba(0,0,0,.4);
}
.btn.btn--large.btn--oversized {
  width:250px;
  height: 60px;
}
</style>
