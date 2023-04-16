<template>
  <div class="d-flex flex-column bg-white fill-height page px-0 py-0">
    <div class="chat__header py-5 d-flex align-center justify-space-between mb-2">
      <router-link :to="{name: 'chat'}" class="d-block pr-7 pl-6">
        <icon name="return-back"/>
      </router-link>
      <div v-if="announcement" class="flex-grow-1 flex-shrink-1 chat__block__image d-flex">
        <img class="mr-4"
             :src="'https://taptym.hikaro.space/storage/' + announcement.images[0]" alt="">
        <div>
          <h4>{{announcement.title}}</h4>
          <p class="mt-1">{{announcement.user.name}}</p>
        </div>
      </div>
    </div>
    <div ref="messagesRef" class="px-4 chat__body flex-column d-flex flex-shrink-1 flex-grow-1">
      <div v-for="message in messageList">
        <div v-if="message.sender.id === store.state.ProfileData.id" class="outcomeMessage">
          <div>
            {{ message.body }}
          </div>
        </div>
        <div v-else class="incomeMessage">
          <div>
            {{ message.body }}
          </div>
        </div>
      </div>
    </div>
    <div class="chat__input pb-4 px-4 d-flex align-end justify-space-between">
      <div class="input__detail d-flex align-center flex-grow-1 flex-shrink-1 px-4 py-3 mr-4">
        <icon name="camera" class="mr-4"/>
        <textarea ref="textArea" class="flex-grow-1 flex-shrink-1" rows="1" :value="message"
                  @input="message = $event.target.value" placeholder="Cообщение..."/>
      </div>
      <button class="send__button d-flex align-center justify-center" @click="sendMessage">
        <icon name="send-message"/>
      </button>
    </div>
  </div>
</template>

<script setup>
import Icon from "@/components/icon.vue";
import {ref, onMounted, watch, reactive, computed} from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import Pusher from "pusher-js"

const message = ref(null)
const store = useStore()
const textArea = ref(null)
const route = useRoute()
const messageList = ref()
let chatDetailInfo = ref({})
onMounted(async () => {
})
const announcement = computed(()=> chatDetailInfo.value.announcement)
watch(() => message.value,
    () => {
      if (message.value !== null) {
        setTimeout(() => {
          textArea.value.style.cssText = 'height:auto';
          textArea.value.style.cssText = 'height:' + textArea.value.scrollHeight + 'px';
        })
      }
    })
const messagesRef = ref(null)
const sendMessage = async () => {
  messagesRef.value.scrollTop = messagesRef.value.scrollHeight
  message.value = ''
}
</script>