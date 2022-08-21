<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="padding-left: 160px; padding-right: 160px;">
        <q-avatar size="60px" class="q-my-md">
          <img src="src/assets/logo.svg">
        </q-avatar>
        <q-space />
        <div class="links flex">
          <a v-for="link in menu_links" :key="link.name" class="q-px-md text-accent" cursor-pointer>
            {{ link.field }}
          </a>
        </div>
        <!-- <q-toolbar-title>Quasar Framework</q-toolbar-title> -->
        <q-space />
        <q-btn color="secondary" icon="img:src/assets/vk.png" padding="10px 10px" class="q-mr-md"/>
        <q-btn color="secondary" icon="img:src/assets/telegram.png" padding="10px 10px" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
// import { defineComponent, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'
const menu_links = [
  {
    name: 'about',
    field: 'О нас'
  },
  {
    name: 'Cost',
    field: 'Стоимость'
  },
  {
    name: 'Partners',
    field: 'Партнёры'
  },
  {
    name: 'Galary',
    field: 'Фото'
  }
]



</script>
<style scoped lang="scss">
.btn {
  &-link {
    //background: white;
    //width: 66px;
    //height: 66px;
  }
}
</style>
