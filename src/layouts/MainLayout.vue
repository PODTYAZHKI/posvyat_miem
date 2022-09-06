<template>
  <q-layout view="lHr lpR fFf">
    <q-header elevated>
      <q-toolbar style="padding-left: 10%; padding-right: 10%; height: 8.55vw;">
        <a href="#">
          <q-avatar size="5.21vw" class="q-my-md">
            <img src="~assets/logo.svg">
          </q-avatar>
        </a>
        <q-space />
        <div class="links flex" v-if="$q.screen.gt.xs">
          <a v-for="link in menu_links" :key="link.name" class="links text-accent q-mx-md" @click="goTo(link.id)">
            {{ link.field }}
          </a>
        </div>
        <q-space />
        <q-btn color="secondary" icon="img:icons/vk.png" class="q-mr-md header-btn" v-if="$q.screen.gt.xs"
          @click="go('https://vk.com/miemposvyat')" />
        <q-btn color="secondary" icon="img:icons/telegram.png" v-if="$q.screen.gt.xs" class="header-btn"
          @click="go('https://t.me/miemposvyat')" />
        <q-btn flat @click="drawerRight = !drawerRight" round dense icon="menu" v-if="$q.screen.lt.sm" />
      </q-toolbar>
    </q-header>
    <q-drawer side="right" v-model="drawerRight" show-if-above bordered overlay :width="200" v-if="$q.screen.lt.sm">
      <q-scroll-area class="fit drawer">
        <div class="q-pa-md">
          <q-btn color="secondary" icon="img:icons/vk.png" padding="10px 10px" class="q-mr-md"
            @click="go('https://vk.com/miemposvyat')" />
          <q-btn color="secondary" icon="img:icons/telegram.png" padding="10px 10px"
            @click="go('https://t.me/miemposvyat')" />
          <div class="links flex column">
            <a v-for="link in menu_links" :key="link.name" class="links text-accent" @click="goTo(link.id)">
              {{ link.field }}
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
import { useRouter } from 'vue-router'

const router = useRouter()
const drawerRight = ref(false)
const menu_links = [
  {
    name: 'about',
    field: 'О нас',
    id: 'about'
  },
  {
    name: 'Partners',
    field: 'Партнёры',
    id: 'partner'
  },
  {
    name: 'Cost',
    field: 'Прогамма',
    id: 'cost'
  },
  {
    name: 'Galary',
    field: 'Фото',
    id: 'picture'
  }
]
function go(link) {
  // window.location.href = link
  window.open(link, '_blank');
}
function goTo(link) {
  let l = `#${link}`
  console.log(l)
  router.push({ path: '/', hash: l })
}

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
  cursor: pointer;
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
