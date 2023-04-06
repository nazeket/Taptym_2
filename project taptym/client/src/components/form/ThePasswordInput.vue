<template>
  <div class="the-input">
    <div class="input__label pb-2">
      <span>{{ label }}</span>
      <span v-if="$route.name === 'login'">Забыли пароль?</span>
    </div>
    <v-text-field
        v-model="store.state[formName][bindKey]"
        :type="show ? 'text' : 'password'"
        placeholder="••••••••••"
        single-line
        hide-details
        solo
    >
      <template #append-inner>
        <icon :name="show ? 'eye-open': 'eye-off'" @click="show = !show"/>
      </template>
    </v-text-field>
  </div>
</template>

<script setup>
import Icon from "@/components/icon.vue"
import {inject, ref} from 'vue'
import {useStore} from "vuex";

const {label, bindKey} = defineProps({
  label: {type: String, default: null},
  bindKey: {type: String},
})
const show = ref(false)
const formName = inject('formName')
const store = useStore()
</script>