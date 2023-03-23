import { defineStore } from 'pinia'
import axios, {AxiosError} from "axios";
import {ModelMainItem} from "../models/main/model_main_item";

export const useViewMainStore = defineStore('view-main-store', {
    state: () => {
        return {
            url: 'search?query=people',
            items: [] as ModelMainItem[],
            item: null,
            page: 1
        }
    },
    actions: {
        async getItems(page: number, done?: Function) {
            this.page = page + 1
            const queryParams = new URLSearchParams();
            queryParams.append('query', 'people');
            queryParams.append('page', String(this.page));
            try {
              const response = await axios.get(this.url, {params: queryParams})
              // TODO add additional validation for response
              for (const photo of response.data.photos) {
                  const item = new ModelMainItem(photo.id, photo.photographer, photo.src.large, photo.src.small)
                  this.items.push(item)
              }
            } catch (e) {
              const error = e as AxiosError;
              console.log(error.message)
            } finally {
                done ? done() : true
            }
        },
    }
})
