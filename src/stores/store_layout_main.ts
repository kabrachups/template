import { defineStore } from 'pinia'
import {InterfaceLeftDrawerItem} from "../interfaces/layouts/main/interface_left_drawer_item";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useLayoutMainStore = defineStore('layout-main-store', {
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            leftDrawerOpen: true,
            leftDrawerItems: [
                {path: '/main', icon: 'public', label: 'Main', caption: 'main task here'},
            ] as InterfaceLeftDrawerItem[]
        }
    },
})
