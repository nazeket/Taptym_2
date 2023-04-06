import { createStore } from 'vuex'

import {state} from "./modules/state";
import {getters} from "./modules/getters";
import {actions} from "./modules/actions";

export const store = createStore( {
    state: () => (state),
    getters: getters,
    actions: actions
});
