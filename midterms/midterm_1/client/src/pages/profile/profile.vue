<template>
  <div class="d-flex flex-column fill-height">
    <profile-skeleton v-if="store.state.loaders.isUserDataLoading"/>
    <div v-else class="fill-height flex-shrink-1 flex-grow-1 main user__profile">
      <div class="px-4 page__title">Профиль</div>
      <router-link :to="{name: 'account'}" class="px-4 d-flex align-center justify-center mt-5 user__avatar pb-4">
        <img src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt="">
        <div class="flex-grow-1 flex-shrink-1 px-4">
          <div class="user__name mb-1">User name</div>
          <div class="user__phoneNumber">+7 (707) 777 77 77</div>
        </div>
        <div class="py-1 px-1 d-flex align-center justify-center">
          <icon name="right"/>
        </div>
      </router-link>
      <div class="px-4">
        <router-link :to="{name: 'hashtags'}" class="profile__block">
          <icon name="hashtag"/>
          <div class="block__title">
            Мои хештеги
          </div>
          <icon name="right"/>
        </router-link>
        <router-link :to="{name: 'favorites'}" class="profile__block">
          <icon name="favorites"/>
          <div class="block__title">
            Избранное
          </div>
          <icon name="right"/>
        </router-link>
        <router-link :to="{name: 'myPoints'}" class="profile__block">
          <icon name="points"/>
          <div class="block__title">
            Мои баллы
          </div>
          <icon name="right"/>
        </router-link>
        <router-link :to="{name: 'conditionOfUse'}" class="profile__block">
          <icon name="condition-of-use"/>
          <div class="block__title">
            Условия пользования
          </div>
          <icon name="right"/>
        </router-link>
        <router-link :to="{name: 'privacyPolicy'}" class="profile__block">
          <icon style="margin-left: -3px" name="privacy-policy"/>
          <div class="block__title">
            Политика конфиденциальности
          </div>
          <icon name="right"/>
        </router-link>
        <div class="profile__block logout" @click="dialog = true">
          <icon name="logout"/>
          <div class="block__title">
            Выйти
          </div>
        </div>
        <v-dialog
            v-model="dialog"
            class="glassBg logoutModal"
        >
          <v-card class="px-4 pt-5 pb-2">
            <h2 class="pb-8">Вы точно хотите выйти?</h2>
            <div class="actions d-flex align-center justify-space-between mt-2">
              <button class="cancel" @click="dialog = !dialog">Отмена</button>
              <button class="delete" @click="logout()">Выйти</button>
            </div>
          </v-card>
        </v-dialog>
      </div>
    </div>
    <footer-menu/>
  </div>
</template>

<script setup>
import Icon from "@/components/icon.vue";
import {onMounted, ref} from 'vue';
import FooterMenu from "@/components/FooterMenu.vue";
import {useStore} from "vuex";
import {api} from "@/api/endpoints.js";
import {useRouter} from "vue-router";
import ProfileSkeleton from "@/components/skeleton/ProfileSkeleton.vue";

const store = useStore()
const router = useRouter()
const dialog = ref(false)
const logout = async () => {
  localStorage.clear()
  await router.push({name: 'login'})
}
</script>