<template>
  <section>
    <v-parallax :src="require('@/assets/backgrounds/parallax-1.jpg')" height="3000" dark>
      <v-layout column fill-height align-center justify-center>
        <v-card class="transparent mx-auto" height="1000">
          <v-card class="text-xs-center transparent fixed elevation-0 my-5 py-5 frozen-title">
            <h1 class="display-4 accent--text text-shadow--light"><span>Farm Fresh Beer</span></h1>
            <v-card width="150px" class="mx-auto">
              <v-card-media :src="require('@/assets/logo.png')" height="150"></v-card-media>
            </v-card>
            <v-card class="mx-auto my-3 transparent" flat width="500px">
              <v-card-title class="text-xs-center primary accent--text ">
                <span>Mission statement here. Wouldn't it be nice to have a custom webite that is tailor fitted for your business</span>
              </v-card-title>
            </v-card>
          </v-card>
        </v-card>
        <v-card flat class="mx-0">
          <v-container fill-height v-bind="{ [`grid-list-xl`]: true }" :fluid="$vuetify.breakpoint.smAndUp">
            <v-layout row wrap>
              <v-flex xs12 order-sm3 sm6 md4 lg3>
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
              <v-flex xs12 order-sm1 sm6 md4 lg3>
                <div class="pa-3">
                  <v-card width="300" class="mx-auto elevation-20">
                    <v-card-media :src="require('@/assets/grid/seth-weisfeld-510833.jpg')" height="300"></v-card-media>
                  </v-card>
                </div>
              </v-flex>
              <v-flex xs12 order-sm2 sm6 lg3>
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
              <v-flex xs12 order-sm4 sm6 lg3>
                <div class="pa-3">
                  <v-card-media :src="require('@/assets/grid/james-sutton-198871.jpg')" height="425"></v-card-media>
                </div>
              </v-flex>
              <v-flex xs12 order-sm2 sm6 md4 lg3>
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
              <v-flex xs12 order-sm4 sm6 md4 lg3>
                <div class="pa-3">
                  <v-card-media :src="require('@/assets/backgrounds/parallax-1.jpg')" height="425"></v-card-media>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12>
              <contact-form></contact-form>
            </v-flex>
            <v-flex offset-md2 md8 xs12 class="pt-3">
              <div>
                <v-jumbotron :src="require('@/assets/grid/khachik-simonian-180759.jpg')" height="500"></v-jumbotron>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-layout>
    </v-parallax>
  </section>
</template>

<script>
import ContactForm from '@/components/customer/contactForm.vue'

export default {
  name: 'Home',
  data () {
    return {
      size: 'xl',
      gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)',
      contactFormDialog: false,
      email: null,
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
.btn.btn--large.btn--oversized {
  width:250px;
  height: 60px;
}
.frozen-title {
  z-index: 0;
  position: fixed;
  left:0;
  right:0;
}
.text-shadow--light {
  text-shadow:1rem .5rem 3rem rgba(255,255,255,.7)

}
</style>
