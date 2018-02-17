<template>
  <v-card class="contact-form" @keyup.esc="$emit('close')">
    <v-card-title class="pb-0">
      <div class="headline white--text">Send us feedback.</div>
      <v-spacer></v-spacer>
      <v-btn v-if="isDialog" icon @click.native="$emit('close')" dark>
        <v-icon>close</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="pt-0">
      <v-form v-model="valid">
        <v-text-field dark label="Name" v-model="name" required></v-text-field>
        <v-text-field dark label="E-mail" v-model="email" required></v-text-field>
        <v-text-field dark label="Phone" v-model="phone"></v-text-field>
        <v-text-field multi-line dark label="Comments" v-model="comments" :counter="300"></v-text-field>
        <div class="text-xs-right">
          <v-btn class="mt-3 mr-0" large flat dark outline>
            Submit
          </v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ContactForm',
  props: {
    isDialog: Boolean
  },
  data () {
    return {
      name: null,
      email: null,
      phone: null,
      comments: null,
      valid: null
    }
  }
}
</script>

<style scoped>

.contact-form {
  background-color: rgba(0,0,0,.8);
  width: 100%;
}
</style>
