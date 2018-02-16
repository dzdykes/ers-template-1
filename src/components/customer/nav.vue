<template>
  <section>
    <v-toolbar app>
      <v-toolbar-title class="white--text" v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
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
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      title: 'Farm Fresh Beer'
    }
  }
}
</script>

<style scoped>
.toolbar {
  background: rgba(55,71,79,.6)
}
</style>
