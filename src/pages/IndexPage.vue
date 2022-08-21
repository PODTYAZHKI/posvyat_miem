<template>
  <q-page class="flex flex-center" color="primary" style="padding-left: 160px; padding-right: 160px;">


    <q-img src="src/assets/background-1.png" class="background" />
    <div class="information flex flex-center text-accent">
      <div class="suptitle q-mb-md">
        1-2 Октября
      </div>
      <q-img src="src/assets/title.png" class="title q-mb-md" />
      <div class="subtitle flex flex-center column">
        Скорее регистрируйся и проведи <br> лучшую ночь этой осени вместе с нами!
        <div class="q-mt-md">
          <q-btn no-caps label="Регистрация" class="btn btn-reg q-mr-md" size="32px"/>
          <q-btn no-caps label="Узнать больше" class="btn btn-more"  />
        </div>
      </div>
    </div>
    <!-- <div class="lines">
      <q-img src="src/assets/line-purple.png" />
      <q-img src="src/assets/line-yellow.png" />
    </div> -->

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
<style lang="scss" scoped>


.background {
  position: absolute;
  top: 0;
  z-index: -1;
}

.information {
  width: 100%;
  z-index: 1;
}

.suptitle {
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  text-transform: uppercase;
  font-feature-settings: 'pnum' on, 'lnum' on;
}

.subtitle {
  font-weight: 600;
  font-size: 40px;
  line-height: 100%;
  /* or 40px */

  text-align: center;
  font-feature-settings: 'pnum' on, 'lnum' on;
}
.btn:hover {
  cursor: pointer;
}
.btn {
  border-radius: 16px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 100%;
  /* identical to box height, or 32px */

  font-feature-settings: 'pnum' on, 'lnum' on;
  padding-right: 50px;
  padding-left: 50px;

  &-reg {
    background: #EE4D07;
    color: #fff;

  }

  &-more {
    border: 4px solid #EE4D07;
    color: #EE4D07;
  }
}
.lines {
  width: 100vw;
}
</style>
