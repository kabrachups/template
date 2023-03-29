import { defineStore } from 'pinia'
import axios, {AxiosError} from "axios";
import {ModelMainItem} from "../models/main/model_main_item";

/**
 * State management for ViewMain component
 */

export const useViewMainStore = defineStore('view-main-store', {
    state: () => {
        return {
            url: 'search',
            // items list is not plain objects, but objects of class to handle counters
            items: [] as ModelMainItem[],
            item: null,
            page: 1
        }
    },
    actions: {
        // page and done are arguments from q-infinite-scroll in-built component
        async getItems(page: number, done?: Function) {
            alert()
            // default page is q-infinite-scroll is 0, so +1 is required
            this.page = page + 1
            const queryParams = new URLSearchParams();
            queryParams.append('query', 'people');
            queryParams.append('page', String(this.page));
            try {
              const response = await axios.get(
                  this.url,
                  {params: queryParams}
              )
              // TODO add additional validation for response
              for (const photo of response.data.photos) {
                  const item = new ModelMainItem(
                      photo.id, photo.photographer,
                      photo.src.large,
                      photo.src.small
                  )
                  this.items.push(item)
              }
            } catch (e) {
                // TODO add class to handle errors
              const error = e as AxiosError;
              console.log(error.message)
            } finally {
                done ? done() : true
            }
        },
    }
})
