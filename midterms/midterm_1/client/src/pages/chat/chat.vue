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
          :chatId="chat.id"
          :title="chat['lastMessage']['sender']['name']"
          :text="chat['lastMessage'].body"
          :new-message="4"
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
// const chatList = [
//   {
//     id: '1',
//     title: 'Куплю Тайота Камри 25',
//     text: 'Здавствуйте! Да цену можем...',
//     newMessage: 1
//   },
//   {
//     id: '2',
//     title: 'Продам Камри 15 000 000 тг',
//     text: 'Здавствуйте! Да цену можем...',
//     newMessage: 0
//   },
//   {
//     id: '3',
//     title: 'Продам Камри 25, Срочно!',
/*    text: 'Здавствуйте! Да цену можем...',*/
//     newMessage: 0
//   },
//   {
//     id: '4',
//     title: 'Куплю Тайота Камри 25',
//     text: 'Здавствуйте! Да цену можем...',
//     newMessage: 0
//   },
// ]
</script>

<style scoped>

</style>