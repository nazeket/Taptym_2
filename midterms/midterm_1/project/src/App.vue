<template>
  <SplashScreen
      v-if="splashScreen"
      v-motion
      :initial="{opacity: 0}"
      :enter="{opacity: 1}"
  />
  <router-view v-else v-slot="{Component}">
    <component :is="Component"/>
  </router-view>
  <create-statement mode="create"/>
  <vue-progress-bar></vue-progress-bar>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import SplashScreen from '@/components/SplashScreen.vue'
import { useRouter } from 'vue-router';
import { getCurrentInstance } from 'vue';
import CreateStatement from '@/pages/common/statement.vue';
import { useStore } from 'vuex';

const internalInstance = getCurrentInstance();
const splashScreen = ref(true)
const router = useRouter()
const store = useStore()
const initialize = async () => {
  setTimeout(() => splashScreen.value = false, 1500)
}
initialize()
internalInstance.appContext.config.globalProperties.$Progress.start();
router.beforeEach((to, from, next) => {
  if (to.meta.progress !== undefined) {
    let meta = to.meta.progress;
    internalInstance.appContext.config.globalProperties.$Progress.parseMeta(meta);
  }
  internalInstance.appContext.config.globalProperties.$Progress.start();
  next();
});
router.afterEach((to, from) => {
  internalInstance.appContext.config.globalProperties.$Progress.finish();
});
onMounted(async () => {
  internalInstance.appContext.config.globalProperties.$Progress.finish();
  await router.isReady()
  if (localStorage.getItem('accessToken')) {
    await store.dispatch('getUserData')
    await store.dispatch('getAnnouncementList')
  }
})
</script>
