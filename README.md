# Centric task

FE framework:
- Vue 3 (Composition API)

Lang:
- TypeScript

PM:
- Vite

State manager:
- Pinia

Navigation:
- VueRouter

Component framework
- Quasar

## Run

- cd template
- npm install
- npm run dev

## Technics and approaches
In the project you can find the next approaches and technics:
- typescript class ModelMainItem (public, private methods)
- typescript interface (InterfaceLeftDrawerItem)
- infinite scrolling (ViewMain.vue)
- v-for and :key (ViewMain.vue)
- v-if and v-else (ViewMainCard.vue)
- props and emits (ViewMainItem.vue)
- scope style (ViewMain.vue)
- router navigation with children
- css depending on screen resolution (ViewMain.vue)
- axios with async await

## Project structure
I prefer to keep layouts in separate folders and call views as "views" (not "screens" etc.)
Folders have subfolders, it makes future navigation easier when project grows. 
Tests should be added in the future
