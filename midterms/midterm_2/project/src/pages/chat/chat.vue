<template>
  <div class="d-flex flex-column fill-height">
    <div class="flex-shrink-1 flex-grow-1 px-4 ">
      <div class="page__title">
        Сообщения
      </div>
      <chat-block
          v-if="chatList.length"
          v-for="chat in chatList"
          :key="chat.id"
          :images="chat.announcement.images[0][0]"
          :announcementId="chat.announcement.id"
          :chatId="chat.id"
          :title="chat['announcement']['user']['name']"
          :text="chat['lastMessage'].body"
          :new-message="0"
      />
      <chat-skeleton v-if="store.state.loaders.isChatLoading && !chatList.length"/>
      <no-content v-if="!store.state.loaders.isChatLoading && !chatList.length" iconName="no-chat-icon"
                  text="У вас пока нет сообщений"/>
    </div>
    <footer-menu/>
  </div>
</template>

<script setup>
import FooterMenu from "@/components/FooterMenu.vue";
import NoContent from "@/components/NoContent.vue";
import ChatBlock from "@/pages/chat/chatBlock.vue";
import {onMounted, ref} from "vue";
import {useStore} from "vuex";
import ChatSkeleton from "@/components/skeleton/ChatSkeleton.vue";

const store = useStore()
const chatList = ref([])
onMounted(async () => {

})
</script>

<style scoped>

</style>