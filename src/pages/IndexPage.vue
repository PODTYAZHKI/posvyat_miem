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
          <q-img src="src/assets/yellow-line.png" class="background" />
          <div class="title flex flex-center q-pt-xl q-pb-md">
            Что входит в стоимость?
          </div>
          <div class="accomodation">
            <div class="card-text justify-end">
              <div class="card-title">Проживание</div>
              <div class="card-description">Мы знаем, как важен здоровый сон для студентов, поэтому тебя ждёт уютная
                комната и тёплое спальное место. Также в комнатах самые стойкие смогут продолжить вечер со своей
                компанией!</div>
            </div>


          </div>
          <div class="transfer">
            <div class="card-text">
              <div class="card-title">Трансфер туда и обратно</div>
              <div class="card-description">Тебе не придётся думать о том, как доехать до места проведения или добраться
                до метро после Посвята.
              </div>
            </div>
          </div>
          <div class="food">
            <div class="card-text">
              <div class="card-title">Ужин и завтрак в формате шведского стола</div>
              <div class="card-description">Собираешься много общаться, петь и танцевать? Хочешь, чтобы сил хватило до
                утра? Тогда шведский стол со вкусной полезной едой – то, что нужно!
              </div>
            </div>
          </div>
          <div class="welcome">
            <div class="card-text">
              <div class="card-title">Велком-программа</div>
              <div class="card-description">Первые знакомства, неповторимые задания и много-много сюрпризов помогут тебе
                собраться с мыслями и погрузиться в атмосферу американской ярмарки.</div>
            </div>
          </div>
          <div class="program">
            <div class="card-text">
              <div class="card-title">Основная программа</div>
              <div class="card-description">Командная игра? Сюжетная линия, погружающая в атмосферу с каждой секундой
                всё больше? Изумительный поворот событий? На Посвяте возможно всё и сразу!</div>
            </div>
          </div>
          <div class="show">
            <div class="card-text">
              <div class="card-title">Яркое шоу</div>
              <div class="card-description">Выступление музыкальной группы, тематический танец, ритуал посвящения в
                студенты — всё это организаторы подготовили для тебя!
              </div>
            </div>
          </div>
          <div class="night">
            <div class="card-text">
              <div class="card-title">Ночная программа</div>
              <div class="card-description">Дискотека, гитарники, неповторимые задания и ночные точки для тех, кто любит
                давать волю эмоциям, – все это будет на Посвяте!
              </div>
            </div>
          </div>
          <div class="photo">
            <div class="card-text">
              <div class="card-title">Фотозоны</div>
              <div class="card-description">Благодаря фотографиям ты сможешь освежить в памяти моменты вечера! Помогут в
                этом наши фотографы. А селфизоны созданы для того, чтобы ты точно подобрал нужный ракурс!
              </div>
            </div>
          </div>
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
  pointer-events: none;

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

.cost {
  background: #212121;

  .card {
    &-text {
      width: 50%;
      //float: right;
    }
    &-title {
      font-weight: 900;
      font-size: 48px;
      line-height: 100%;
      /* identical to box height, or 48px */

      font-feature-settings: 'pnum' on, 'lnum' on;
      color: $secondary;
    }

    &-description {
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 100%;
      /* or 32px */

      font-feature-settings: 'pnum' on, 'lnum' on;
      color: $accent;
    }
  }
}
.accomodation {
  float: right;
}
.transfer {

}
.food {

}
.welcome {

}
.programm {

}
.show {

}
.night {

}
.photo {

}
</style>
