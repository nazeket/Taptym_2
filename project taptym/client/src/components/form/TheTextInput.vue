<template>
  <div class="the-input">
    <div class="input__label pb-2">
      {{ label }}
    </div>
    <v-text-field
        v-model="store.state[formName][bindKey]"
        :rules="rules[ruleType]"
        :placeholder="placeholder"
        :readonly="disabled"
        solo
    >
      <template v-if="isCategory" #append-inner>
        <icon name="down" class="mt-1 mr-3"/>
      </template>
    </v-text-field>
  </div>
</template>

<script setup>
import {inject} from "vue";
import {useStore} from "vuex";
import Icon from "@/components/icon.vue";

const {label, ruleType, placeholder, disabled, bindKey, isCategory} = defineProps({
  label: {type: String, default: null},
  ruleType: {type: String, default: null},
  placeholder: {type: String, default: null},
  isCategory: {type: Boolean, default: false},
  disabled: {type: Boolean, default: false},
  bindKey: {type: String}
})
const store = useStore()
const formName = inject('formName')
const rules = {
  email: [
    v => /.+@.+\..+/.test(v) || 'Электронная почта введена неверно',
  ]
}
</script>