<template>
  <section>
    <v-toolbar app>
      <v-toolbar-title class="white--text" v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-layout row wrap height="68px">
          <v-flex xs3>
            <v-btn flat block dark class="px-3 active">
              Home
              <div class="nav-slider"></div>            
            </v-btn>
          </v-flex>
          <v-flex xs3>
            <v-btn flat block dark class="px-3">
              Menu    
              <div class="nav-slider"></div>
            </v-btn>
          </v-flex>
          <v-flex xs3>
            <v-btn flat block dark class="px-3">
              Our Staff
              <div class="nav-slider"></div>
            </v-btn>
          </v-flex>
          <v-flex xs3>
            <v-btn flat block dark class="px-3">
              Contact
              <div class="nav-slider"></div>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-md-and-up">        
        <v-menu dark transition="slide-x-transition" bottom left>
          <v-btn icon flat dark slot="activator">
            <v-icon>menu</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="item in items" :key="item.title">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </section>
</template>

<script>
export default {
  props: {
  },
  name: 'CustomerNav',
  data () {
    return {
      fixed: false,
      items: [{
        icon: 'home',
        title: 'Home'
      },{
        icon: 'menu',
        title: 'Menu'
      },{
        icon: 'staff',
        title: 'Our Staff'
      },{
        icon: 'contact',
        title: 'Contact Us'
      }],
      hovering: false,
      miniVariant: false,
      title: 'Farm Fresh Beer',
      activeRoute: 'menu'
    }
  }
}
</script>

<style scoped>
.toolbar {
  background: rgba(55,71,79,.6)
}
.btn--block {
  height: 100%;
}
.nav-slider {
  height: 5px;
  background-color: #fefefe;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: none;
  transition: display 3s;
}
.btn.active > .btn__content:hover > .nav-slider {
  display: none;
}
.btn.active > .btn__content:active > .nav-slider {
  display: none;
}
.btn.active > .btn__content > .nav-slider {
  display: block;
}
</style>
