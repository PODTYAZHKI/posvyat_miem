<template>
  <q-page class="flex flex-center page" color="primary">
    <div class="intro flex flex-center text-accent wrapper">
      <div class="suptitle q-mb-md">
        1-2 Октября
      </div>
      <q-img src="src/assets/title.png" class="title q-mb-md" />
      <div class="subtitle flex flex-center column">
        Скорее регистрируйся и проведи <br> лучшую ночь этой осени вместе с нами!
        <div class="q-mt-md">
          <q-btn no-caps label="Регистрация" class="btn btn-reg q-mr-md" size="32px" />
          <q-btn no-caps label="Узнать больше" class="btn btn-more" />
        </div>
      </div>
    </div>
    <div class="background-wrapper">
      <q-img src="src/assets/background-1.png" class="background" />
      <div class="afterIntro">
        <div class="whatIs">
        <!-- начинать тут -->
        </div>
        <div class="partners">
        </div>
        <div class="cost wrapper ">
          <div class="title flex flex-center q-pt-xl q-pb-md">
            Что входит в стоимость?
          </div>
          <div class="accomodation">
            <div class="text">
              <div class="title"></div>
              <div class="description"></div>
            </div>


          </div>
          <div class="transfer"></div>
          <div class="food"></div>
          <div class="welcome"></div>
          <div class="program"></div>
          <div class="show"></div>
          <div class="night"></div>
          <div class="photo"></div>
        </div>
        <div class="partners">

        </div>
      </div>
    </div>

    <!-- <div class="lines" style="margin-top: 20px">
      <q-img src="src/assets/lines.png"/>

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
.page {
  position: relative;
}

.wrapper {
  padding-left: 160px;
  padding-right: 160px;
}

.background {
  &-wrapper {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    //height: 100%;
  }

  //position: relative;


}

.intro {
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

  &-reg:hover {
    background: #F9824F;
  }

  &-more {
    border: 4px solid #EE4D07;
    color: #EE4D07;
    background: #212121;
  }

  &-more:hover {
    border: 4px solid #F9824F;
    color: #F9824F;
    background: #212121;
  }
}

.cost {
  background: #212121;

  .title {
    font-style: normal;
    font-weight: 900;
    font-size: 70px;
    line-height: 100%;

    /* or 96px */

    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: #EFB515;
  }
}
</style>
