<template>
  <section>
    <v-card class="transparent" height="686px">
      <v-layout column fill-height>
        <v-flex class="text-xs-center center-title">
          <h1>Farm Fresh Beer</h1>
          <h4>You could have this website for your restaurant</h4>
          <v-btn class="mt-5 blue-grey darken-3 white--text" large flat>
            Contact Us
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card>
    <v-card class="transparent" :height="$vuetify.breakpoint.smAndUp ? '1000px' : '2000px'">
      <v-container fill-height v-bind="{ [`grid-list-${$vuetify.breakpoint}`]: true }">
        <v-layout fill-height row wrap>
          <v-flex xs12 sm6 offset-md2 md4>
            <v-card tile class="elevation-20">
              <v-card-media :src="require('@/assets/grid/seth-weisfeld-510833.jpg')" height="500px"></v-card-media>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md4>
            <v-card flat tile class="transparent">
              <v-card-text class="text-xs-center">
                <h1>Great Food! Live Music Sundays!</h1>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <v-card flat class="transparent">
      <v-card-text>
        <v-layout class="my-5" row wrap>
          <v-flex offset-md4 md4 xs12 class="text-xs-center">
            <v-form v-model="valid" class="contact-form pa-3">
              <div>    
                <h1>
                  Contact Us
                </h1>
                <h4>
                  Fill out the form below to contact us.
                </h4>
              </div>
              <v-text-field class="mt-3" dark label="Name" v-model="name" required></v-text-field>
              <v-text-field dark label="E-mail" v-model="email" required></v-text-field>
              <v-text-field dark label="Phone" v-model="phone"></v-text-field>
              <v-text-field multi-line dark label="Comments" v-model="comments" :counter="300"></v-text-field>
              <div class="text-xs-right">
                <v-btn class="mt-3 mr-0" large flat dark outline>
                  Submit
                </v-btn>
              </div>
            </v-form>
          </v-flex>
          <v-flex class="text-xs-right">
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      size: 'xl',
      name: '',
      email: '',
      phone: '',
      comments: '',
      valid: false
    }
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
.contact-form {
  background-color: rgba(0,0,0,.8);
  width: 100%;
  border-radius: 1rem;
}
</style>
