<template>
  <q-layout view="lHr lpR fFf">
    <q-header elevated>
      <q-toolbar style="padding-left: 10%; padding-right: 10%; height: 8.45vw;">
        <a href="#">
          <q-avatar size="5.21vw" class="q-my-md">
            <img src="src/assets/logo.svg">
          </q-avatar>
        </a>
        <q-space />
        <div class="links flex" v-if="$q.screen.gt.xs">
          <a href="#" v-for="link in menu_links" :key="link.name" class="links text-accent q-mx-md">
            {{  link.field  }}
          </a>
        </div>
        <q-space />
        <q-btn color="secondary" icon="img:src/assets/vk.png" class="q-mr-md header-btn" v-if="$q.screen.gt.xs" />
        <q-btn color="secondary" icon="img:src/assets/telegram.png" v-if="$q.screen.gt.xs" class="header-btn" />
        <q-btn flat @click="drawerRight = !drawerRight" round dense icon="menu" v-if="$q.screen.lt.sm" />
      </q-toolbar>
    </q-header>
    <q-drawer side="right" v-model="drawerRight" show-if-above bordered overlay :width="200" v-if="$q.screen.lt.sm" >
      <q-scroll-area class="fit drawer" >
        <div class="q-pa-md">
          <q-btn color="secondary" icon="img:src/assets/vk.png" padding="10px 10px" class="q-mr-md" />
          <q-btn color="secondary" icon="img:src/assets/telegram.png" padding="10px 10px" />
          <div class="links flex column">
            <a href="#" v-for="link in menu_links" :key="link.name" class="links text-accent">
              {{  link.field  }}
            </a>
          </div>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
// import { dom } from 'quasar'
// const { height, width } = dom
// import EssentialLink from 'components/EssentialLink.vue'
const drawerRight = ref(false)
const menu_links = [
  {
    name: 'about',
    field: 'О нас'
  },
  {
    name: 'Partners',
    field: 'Партнёры'
  },
  {
    name: 'Cost',
    field: 'Стоимость'
  },
  {
    name: 'Galary',
    field: 'Фото'
  }
]
// const cost = ref()
// cost.value = height('cost')



</script>
<style scoped lang="scss">
.links {
  font-weight: 600;
  font-size: 1.39vw;
  line-height: 100%;
  font-style: normal;
  text-decoration: none;
}

.header-btn {
  width: 3.47vw;
  height: 3.47vw;
}

.drawer {
  background-color: #212121;
  .links {
    padding-top: 10px;
    font-size: 30px;
  }
}

.btn {
  &-link {
    //background: white;
    //width: 66px;
    //height: 66px;
  }
}
</style>
