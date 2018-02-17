<template>
  <v-form v-model="valid" class="contact-form pa-3">
    <div class="white--text">    
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
</template>

<script>
export default {
  name: 'ContactForm',
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
  border-radius: 1rem;
}
</style>
