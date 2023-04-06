<template>
  <component :is="name"/>
</template>

<script>
import ReturnBack from "./icons/ReturnBack.vue";
import EyeOpen from "./icons/EyeOpen.vue";
import EyeOff from "./icons/EyeOff.vue";
import Google from "./icons/Google.vue";
import Telegram from "./icons/Telegram.vue";
import Checked from "./icons/Checked.vue";
import Home from "./icons/Home.vue";
import Plus from "./icons/Plus.vue";
import Document from "./icons/Document.vue";
import Profile from "./icons/Profile.vue";
import Chat from "./icons/Chat.vue";
import NoStatementIcon from "./icons/NoStatementIcon.vue";
import ReturnBackBg from "./icons/ReturnBackBg.vue";
import Edit from "./icons/Edit.vue";
import NoChatIcon from "./icons/NoChatIcon.vue";
import Camera from "./icons/Camera.vue";
import SendMessage from "./icons/SendMessage.vue";
import Right from "./icons/Right.vue";
import Logout from "./icons/Logout.vue";
import Points from "./icons/Points.vue";
import PrivacyPolicy from "./icons/PrivacyPolicy.vue";
import Hashtag from "./icons/Hashtag.vue";
import Favorites from "./icons/Favorites.vue";
import ConditionOfUse from "./icons/ConditionOfUse.vue";
import Resize from "./icons/Resize.vue";
import Trash from "./icons/Trash.vue";
import B from "./icons/B.vue";
import Kaspi from "./icons/Kaspi.vue";
import OtherCard from "./icons/OtherCard.vue";
import ScanIcon from "./icons/ScanIcon.vue";
import closeIcon from "./icons/closeIcon.vue";
import Down from "./icons/Down.vue";
import Selected from "./icons/Selected.vue";
import Search from "./icons/Search.vue";
import Location from "./icons/Location.vue";
import AddHashtag from "./icons/AddHashtag.vue";
import RemoveHashtag from "./icons/RemoveHashtag.vue";
import AddPhoto from "./icons/AddPhoto.vue";
import AddPoint from "./icons/AddPoint.vue";
import SaveToFavorites from "./icons/SaveToFavorites.vue";
import filter from "@/components/icons/filter.vue";
export default {
  name: 'icon',
  props: {
    name: String
  },
  components: {
    ReturnBack,
    AddPoint,
    filter,
    SaveToFavorites,
    Location,
    AddPhoto,
    AddHashtag,
    RemoveHashtag,
    Selected,
    Search,
    ConditionOfUse,
    EyeOpen,
    Trash,
    Favorites,
    Down,
    Hashtag,
    Google,
    Telegram,
    ScanIcon,
    EyeOff,
    Checked,
    Home,
    Plus,
    Document,
    Chat,
    Profile,
    NoStatementIcon,
    ReturnBackBg,
    PrivacyPolicy,
    NoChatIcon,
    closeIcon,
    OtherCard,
    Camera,
    Kaspi,
    Points,
    Resize,
    Edit,
    SendMessage,
    Logout,
    Right,
    B,
  }
}
</script>

<style scoped>

</style>