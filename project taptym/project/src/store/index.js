import { createStore } from 'vuex'

import {state} from "./modules/state";
import {actions} from "./modules/actions";

export const store = createStore( {
    state: () => (state),
    actions: actions
});
