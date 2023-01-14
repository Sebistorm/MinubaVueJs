<template>
    <div class="q-pa-md">
      <q-slider
        v-model="value"
        :min="0"
        :max="totalVotes"
        :step="1"
        label
        :label-value="value + ' Votes'"
        label-always
        color="red"
        readonly
      />
      <q-badge color="secondary">
        {{ votesCount }} votes on: {{ answer }}
      </q-badge>
    </div>
    <q-separator />
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    props: ["votesCount", "answer", "totalVotes"],
    data () {
      return {
        value: ref(this.votesCount)
      }
    }
  }
  </script>
  