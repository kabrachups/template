import { defineStore } from 'pinia'
import {InterfaceLeftDrawerItem} from "../interfaces/layouts/main/interface_left_drawer_item";

/**
 * State management for LayoutMain
 * drawer state (to avoid a lot of props and emits
 * drawer items as one place to store data
 */
export const useLayoutMainStore = defineStore('layout-main-store', {
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            leftDrawerOpen: true,
            leftDrawerItems: [
                {path: '/main', icon: 'public', label: 'Main', caption: 'main task here'},
            //     add new menu items here
            ] as InterfaceLeftDrawerItem[]
        }
    },
})
