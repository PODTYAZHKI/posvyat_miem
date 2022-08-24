<template>
  <q-page class="full-height" color="primary">
    <div class="intro-wrapper" ref="intro">
      <div class="background-wrapper" ref="background">
        <q-img src="src/assets/background-1.png" class="background" />
      </div>
      <div class="intro text-accent wrapper" :class="[$q.screen.lt.lg && $q.screen.gt.xs ? 'q-pt-xl' : 'q-pt-sm']"
        ref="intro">
        <div class="suptitle q-mb-md text-center">
          1-2 Октября
        </div>
        <q-img src="src/assets/title.png" class="title q-mb-md" />
        <div class="subtitle flex flex-center column">
          Скорее регистрируйся и проведи <br> лучшую ночь этой осени вместе с нами!
          <div class="q-mt-md row justify-center">
            <q-btn no-caps label="Регистрация" class="btn btn-reg q-mr-md" />
            <!-- :class="[$q.screen.gt.xs ? 'q-mr-md' : '']" -->
            <q-btn no-caps label="Узнать больше" class="btn btn-more" />
          </div>
        </div>
      </div>

    </div>



    <div class="whatIs wrapper flex row flex-start q-pb-xl">
      <div style="width:50%">
        <div class="title q-pt-xl q-pb-md">
          что такое посвят?
        </div>
        <div class="description">
          Посвят – это, возможно, первое яркое событие в жизни каждого студента!
          Тебя ждут и диалоги тет-а-тет с одногруппниками, и нон-стоп танцы до утра, и даже highway to hell,
          если ты сильно захочешь победить в конкурсах.<br><br>
          В Telegram-канале Посвята — закулисье подготовки, а всю важную информацию ты найдешь в группе ВКонтакте и
          боте.
          Пропустить событие, которое бывает раз в жизни, — преступление. Скорее садись на поезд в студенчество!
        </div>
        <q-btn no-caps label="Поехали!" class="btn btn-go q-mt-lg q-mr-md" />
      </div>
      <div class="q-pt-xl q-pb-md" style="width:50%">
        <div>
          <q-img src="src/assets/des.png" class="picture" />
        </div>
      </div>
    </div>

    <div class="partners" style="">
      <div class="slider no-js">
        <button class="prew">prew</button>
        <button class="next">next</button>

        <div class="clider_list-wrap">
          <ul class="slider_list">
            <li class="slider_item">
              <q-img src="src/assets/partners1.png" style="width: 300px" />
            </li>
            <li class="slider_item">
              <q-img src="src/assets/partners2.png" style="width: 300px" />
            </li>
            <li class="slider_item">
              <q-img src="src/assets/partners1.png" style="width: 300px" />
            </li>
            <li class="slider_item">
              <q-img src="src/assets/partners2.png" style="width: 300px" />
            </li>
            <li class="slider_item">
              <q-img src="src/assets/partners1.png" style="width: 300px" />
            </li>
            <li class="slider_item">
              <q-img src="src/assets/partners2.png" style="width: 300px" />
            </li>
          </ul>
        </div>

      </div>
    </div>
    <div class="cost-wrapper">
      <div class="title flex flex-center wrapper">
        Что входит в стоимость?
      </div>
      <div class="cost   flex flex-center column">
        <q-img src="src/assets/cost.png" class="cost-background" />
        <div class="cost-text wrapper column">

          <div class="accomodation row ">
            <div class="picture-wrapper">

            </div>
            <div class="card-text ">
              <div class="card-title">Проживание</div>
              <div class="card-description">Мы знаем, как важен здоровый сон для студентов, поэтому тебя ждёт уютная
                комната и тёплое спальное место. Также в комнатах самые стойкие смогут продолжить вечер со своей
                компанией!</div>
            </div>
          </div>
          <div class="transfer row" style="margin-top: 450px;">

            <div class="card-text">
              <div class="card-title">Трансфер туда и обратно</div>
              <div class="card-description">Тебе не придётся думать о том, как доехать до места проведения или
                добраться
                до метро после Посвята.
              </div>
            </div>
            <div class="picture-wrapper">

            </div>
          </div>
          <div class="food row" style="margin-top: 250px;">
            <div class="picture-wrapper">

            </div>
            <div class="card-text">
              <div class="card-title">Ужин и завтрак в формате шведского стола</div>
              <div class="card-description">Собираешься много общаться, петь и танцевать? Хочешь, чтобы сил хватило до
                утра? Тогда шведский стол со вкусной полезной едой – то, что нужно!
              </div>
            </div>
          </div>
          <div class="welcome row" style="margin-top: 250px;">

            <div class="card-text">
              <div class="card-title">Велком-программа</div>
              <div class="card-description">Первые знакомства, неповторимые задания и много-много сюрпризов помогут
                тебе
                собраться с мыслями и погрузиться в атмосферу американской ярмарки.</div>
            </div>
            <div class="picture-wrapper">

            </div>
          </div>
          <div class="program row" style="margin-top: 350px;">
            <div class="picture-wrapper">

            </div>
            <div class="card-text">
              <div class="card-title">Основная программа</div>
              <div class="card-description">Командная игра? Сюжетная линия, погружающая в атмосферу с каждой секундой
                всё больше? Изумительный поворот событий? На Посвяте возможно всё и сразу!</div>
            </div>
          </div>
          <div class="show row" style="margin-top: 400px;">
            <div class="card-text">
              <div class="card-title">Яркое шоу</div>
              <div class="card-description">Выступление музыкальной группы, тематический танец, ритуал посвящения в
                студенты — всё это организаторы подготовили для тебя!
              </div>
            </div>
            <div class="picture-wrapper">

            </div>
          </div>
          <div class="night row" style="margin-top: 270px;">
            <div class="picture-wrapper">
            </div>
            <div class="card-text">
              <div class="card-title">Ночная программа</div>
              <div class="card-description">Дискотека, гитарники, неповторимые задания и ночные точки для тех, кто
                любит
                давать волю эмоциям, – все это будет на Посвяте!
              </div>
            </div>
          </div>
          <div class="photo row" style="margin-top: 300px; padding-bottom: 350px">
            <div class="card-text">
              <div class="card-title">Фотозоны</div>
              <div class="card-description">Благодаря фотографиям ты сможешь освежить в памяти моменты вечера! Помогут
                в
                этом наши фотографы. А селфизоны созданы для того, чтобы ты точно подобрал нужный ракурс!
              </div>
            </div>
            <div class="picture-wrapper">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="end wrapper q-pt-lg q-pb-lg flex row flex-start">
        <div style="width:70%">
          <div class="footer-title q-pb-sm">Пока ты читал это сообщение, на Посвят зарегистрировались два человека</div>
          <div class="footer-text">Не отставай – бронируй место прямо сейчас!</div>
        </div>
        <div class="q-pt-xl q-pb-lg" style="width:30%">
          <q-btn no-caps label="Регистрация" class="btn btn-reg q-mr-md" />
        </div>
      </div>

      <div class="dec">

        <q-img src="src/assets/footer.png" class="lines" />
      </div>

    </div>



    <!-- <div class="lines" style="margin-top: 20px">
      <q-img src="src/assets/lines.png"/>

    </div> -->





  </q-page>
</template>

<script setup>

// import { dom } from 'quasar'
import { ref, onMounted, onUpdated } from 'vue'
// const { height, width } = dom
// const { ready } = dom
// const { css } = dom
const background = ref()
const intro = ref()
onUpdated(() => {
  console.log(background.value)
  console.log(background.value.clientHeight)
})
onMounted(() => {
  console.log(background.value)
  console.log(background.value.offsettHeight)
  // css(intro.value, {
  //   height: `${height(background.value.$el)}px`
  // })


})
// const
// import { scroll } from 'quasar'
// const { getScrollTarget, setVerticalScrollPosition } = scroll

// takes an element object
// function scrollToElement(el) {
//   const target = getScrollTarget(el)
//   const offset = el.offsetTop
//   const duration = 1000
//   setVerticalScrollPosition(target, offset, duration)
// }

</script>
<style lang="scss" scoped>
.wrapper {
  padding-left: 10%;
  padding-right: 10%;
}



.intro {
  width: 100%;

  //z-index: 1;
  //margin-top: 50px;
  &-wrapper {
    position: relative;
    width: 100%;
    height: 100vw * 0.68;

    .background {

      &-wrapper {
        display: block;
        position: absolute;
        pointer-events: none;
        z-index: -1;
        width: 100%;
        height: 100%;
      }
    }
  }
}

.suptitle {
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  text-transform: uppercase;
  font-feature-settings: 'pnum' on, 'lnum' on;
}

.subtitle {
  font-weight: 600;
  font-size: 30px;
  line-height: 100%;
  /* or 40px */

  text-align: center;
  font-feature-settings: 'pnum' on, 'lnum' on;
}

.btn {
  border-radius: 16px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  width: 40%;
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
  &-go {
    border: 4px solid #0F9F84;
    border-radius: 16px;
    color: #0F9F84;
    background: #212121;
  }

  &-go:hover {
    border: 4px solid #13E0B9;
    border-radius: 16px;
    color: #13E0B9;
    background: #212121;
  }
}

.whatIs {
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

  .description {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    /* or 32px */

    font-feature-settings: 'pnum' on, 'lnum' on;
    color: $accent;
  }

}

.partners {
  padding-top: 25px;
  background: #F1E0C6;
}

.slider_list-wrap {
  overflow: hidden;
}

.slider_list {
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.slider_item {
  flex-basis: 100%;
}

.no-js .prew,
.no-js .next {
  display: none;
}

.no-js .slider_list-wrap {
  overflow: initial;
}

.no-js .slider_list {
  overflow-x: auto;
}

/* Скрываем scrollbar для Chrome, Safari и Opera */
.slider_list::-webkit-scrollbar {
  display: none;
}

/* Скрываем scrollbar для IE, Edge и Firefox */
.slider_list {
  -ms-overflow-style: none;
  /* IE и Edge */
  scrollbar-width: none;
  /* Firefox */
}

.title {
  font-style: normal;
  font-weight: 900;
  font-size: 5.4vw;
  line-height: 100%;

  /* or 96px */

  text-transform: uppercase;
  font-feature-settings: 'pnum' on, 'lnum' on;

  color: #EFB515;

}

.cost {
  //
  position: relative;
  top: 0;
  background: #212121;

  &-wrapper {
    position: relative;
    height: 308vw;

    .title {
      background: #212121;
    }

  }

  &-background {
    z-index: 1;
  }

  &-text {
    position: absolute;
    top: 0;



  }


  .card {
    &-text {
      width: 50%;
      //float: right;
    }

    &-title {
      font-weight: 900;
      font-size: 100vw*0.023;
      line-height: 100%;
      margin-bottom: 20px;
      /* identical to box height, or 48px */

      font-feature-settings: 'pnum' on, 'lnum' on;
      color: $secondary;
    }

    &-description {
      font-style: normal;
      font-weight: 600;
      font-size: 100vw*0.017;
      line-height: 100%;
      /* or 32px */

      font-feature-settings: 'pnum' on, 'lnum' on;
      color: $accent;
    }
  }
}

.picture {
  &-wrapper {
    width: 50%;
  }
}

.line {
  width: 100%;
  position: absolute;
  top: 130px;
}

.accomodation {
  margin-top: 100vw * 0.0578;
}

.transfer {}

.food {}

.welcome {}

.programm {}

.show {}

.night {}

.photo {}

body.screen--xs {
  .btn {
    font-size: 10px;
  }

  .suptitle {
    font-size: 15px;
  }

  .subtitle {
    font-size: 15px;
  }
}

body.screen--sm {
  .btn {
    font-size: 10px;
  }

  .suptitle {
    font-size: 20px;
  }

  .subtitle {
    font-size: 20px;
  }
}

body.screen--md {
  .btn {
    font-size: 15px;
  }

  .suptitle {
    font-size: 25px;
  }

  .subtitle {
    font-size: 25px;
  }
}

body.screen--lg {
  .btn {
    font-size: 20px;
  }

  .suptitle {
    font-size: 30px;
  }

  .subtitle {
    font-size: 30px;
  }

}

body.screen--xl {
  .btn {
    font-size: 30px;
  }

  .suptitle {
    font-size: 40px;
  }

  .subtitle {
    font-size: 40px;
  }
}

.footer{
  &-title {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 105%;
    /* or 38px */

    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: #EE4D07;
  }
  &-text {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 100%;
    /* identical to box height, or 32px */

    font-feature-settings: 'pnum' on, 'lnum' on;

    color: #212121;
  }

}

.end{
  background: #F1E0C6;
}

.dec {
  height:389px;
  background: #212121;
}

.lines {
  width: 100%;
  position: absolute;
  top: 5930px;

}
</style>
