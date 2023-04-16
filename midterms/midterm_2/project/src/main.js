import {createApp} from 'vue'
import App from './App.vue'
import {createVuetify} from 'vuetify'
import router from './router';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import {MotionPlugin} from '@vueuse/motion'
import 'vuetify/styles'
import { Skeletor } from 'vue-skeletor';
import 'vue-skeletor/dist/vue-skeletor.css';
// import Pusher from 'pusher-js'
// import Echo from 'laravel-echo'
import('./style/main.scss')
import Maska from "maska";

const app = createApp(App);
import 'animate.css';
import {store} from "@/store/index.js";
import VueProgressBar from "@aacassandra/vue3-progressbar";
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'fcf6523f0245cfda1179',
//     cluster: 'mt1',
//     forceTLS: true,
// })
const vuetify = createVuetify({
    components,
    directives,
})
const progressBarOptions = {
    color: "#2580D5",
    failedColor: "#FF3B30",
    thickness: "3px",
    transition: {
        speed: "0.2s",
        opacity: "0.6s",
        termination: 300,
    },
    autoRevert: true,
    inverse: false,
};
const toasterOptions = {
    transition: "Vue-Toastification__fade",
    maxToasts: 20,
    newestOnTop: true,
    position: "top-center",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: false,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
}
app.use(Maska)
app.use(Skeletor.name, Skeletor).use(Toast, toasterOptions).use(store).use(VueProgressBar, progressBarOptions).use(MotionPlugin).use(router).use(vuetify).mount('#app')
