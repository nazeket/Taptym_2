<template>
  <div class="d-flex main flex-column container">
    <div class="page__header">
      <div class="d-flex px-4 align-center mt-6">
        <return-back route-name="profile"/>
        <h3 class="px-4 flex-grow-1 flex-shrink-1 text-center">Избранное</h3>
      </div>
      <div class="page__menu d-flex justify-space-between align-center">
        <router-link :to="{name: 'favoriteCategory', params: {category: 'more'}}" class="page__menu__item"><span>Прочее</span></router-link>
        <router-link :to="{name: 'favoriteCategory', params: {category: 'auto'}}" class="page__menu__item"><span>Авто</span></router-link>
        <router-link :to="{name: 'favoriteCategory', params: {category: 'quarter'}}" class="page__menu__item"><span>Жилье</span></router-link>
        <router-link :to="{name: 'favoriteCategory', params: {category: 'services'}}" class="page__menu__item"><span>Услуги</span></router-link>
      </div>
    </div>
    <div ref="pageBody" class="py-4 px-4 overflow-y-auto fill-height">
      <create-statement mode="create"/>
      <router-view/>
    </div>
  </div>
</template>

<script setup>
import CreateStatement from "@/pages/common/statement.vue";
import ReturnBack from "@/components/ReturnBack.vue";
</script>