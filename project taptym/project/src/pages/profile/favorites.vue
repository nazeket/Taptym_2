<template>
  <div class="d-flex main flex-column container">
    <div class="page__header">
      <div class="d-flex px-4 align-center mt-6">
        <return-back route-name="main"/>
        <h3 class="px-4 flex-grow-1 flex-shrink-1 text-center">Избранное</h3>
      </div>
    </div>
    <div ref="pageBody" class="py-4 px-4 overflow-y-auto fill-height">
      <create-statement mode="create"/>
      sd
    </div>
  </div>
</template>

<script setup>
import CreateStatement from "@/pages/common/statement.vue";
import ReturnBack from "@/components/ReturnBack.vue";
</script>