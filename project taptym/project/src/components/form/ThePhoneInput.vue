<template>
  <div class="the-input">
    <div class="input__label pb-2">
      {{ label }}
    </div>
    <v-text-field
        v-model="store.state[formName][bindKey]"
        :placeholder="placeholder"
        v-maska="'+7 (7##) ### ## ##'"
        solo
    ></v-text-field>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {inject} from "vue";
const store = useStore()
const formName = inject('formName')
const {bindKey, placeholder, label} = defineProps({
  bindKey: {type: String},
  label: {type: String},
  placeholder: {type: String},
})
</script>