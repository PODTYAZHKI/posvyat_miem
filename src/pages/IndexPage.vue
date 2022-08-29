<template>
  <q-page class="full-height page" color="primary">
    <div class="intro-wrapper" ref="intro">
      <q-img src="src/assets/background-1.png" class="background" />
      <div class="intro text-accent wrapper flex justify-center items-center" ref="intro">
        <div class="intro-text ">
          <div class="suptitle text-center">
            1-2 Октября
          </div>
          <q-img src="src/assets/title.png" class="title " />
          <div class="subtitle flex flex-center column">
            Скорее регистрируйся и проведи <br> лучшую ночь этой осени вместе с нами!
          </div>
          <div class="buttons flex justify-center">
            <q-btn no-caps label="Регистрация" class="btn btn-reg" />
            <q-btn no-caps label="Узнать больше" class="btn btn-more" />
          </div>
        </div>
      </div>

    </div>



    <div class="whatIs wrapper flex row items-center q-pb-xl">
      <div style="width:50%" class="whatIs-text">
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
      <div class="whatIs-picture" style="width:50%; height: 100%;">
        <q-img :src="whatIsHover ? 'src/assets/des-1.png' : 'src/assets/des.png'" class="picture"
          @mouseover="whatIsHover = true" @mouseleave="whatIsHover = false" />
      </div>
    </div>

    <div class="partners  ">
      <Swiper :modules="swiper_modules" :slides-per-view="5" :rewind="true" :autoplay="{ delay: 0 }" :speed="2000">
        <SwiperSlide v-for="partner of partners" :key="partner.src">
          <q-img :src="partner.src" class="picture " />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="cost-wrapper">
      <div class="title flex flex-center wrapper q-pt-xl">
        Что входит в стоимость?
      </div>
      <div class="cost flex flex-center column">
        <q-img src="src/assets/cost.png" class="cost-background" />
        <div class="cost-text wrapper column">
          <div class=" accomodation row ">
            <div class="picture-wrapper">

            </div>
            <div class="card-text ">
              <div class="card-title">Проживание</div>
              <div class="card-description">Мы знаем, как важен здоровый сон для студентов, поэтому тебя ждёт уютная
                комната и тёплое спальное место. Также в комнатах самые стойкие смогут продолжить вечер со своей
                компанией!</div>
            </div>
          </div>
          <div class="transfer row">

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
          <div class="food row">
            <div class="picture-wrapper">

            </div>
            <div class="card-text">
              <div class="card-title">Ужин и завтрак в формате шведского стола</div>
              <div class="card-description">Собираешься много общаться, петь и танцевать? Хочешь, чтобы сил хватило до
                утра? Тогда шведский стол со вкусной полезной едой – то, что нужно!
              </div>
            </div>
          </div>
          <div class="welcome row">

            <div class="card-text">
              <div class="card-title">Велком-программа</div>
              <div class="card-description">Первые знакомства, неповторимые задания и много-много сюрпризов помогут
                тебе
                собраться с мыслями и погрузиться в атмосферу американской ярмарки.</div>
            </div>
            <div class="picture-wrapper">

            </div>
          </div>
          <div class="program row">
            <div class="picture-wrapper">

            </div>
            <div class="card-text">
              <div class="card-title">Основная программа</div>
              <div class="card-description">Командная игра? Сюжетная линия, погружающая в атмосферу с каждой секундой
                всё больше? Изумительный поворот событий? На Посвяте возможно всё и сразу!</div>
            </div>
          </div>
          <div class="show row">
            <div class="card-text">
              <div class="card-title">Яркое шоу</div>
              <div class="card-description">Выступление музыкальной группы, тематический танец, ритуал посвящения в
                студенты — всё это организаторы подготовили для тебя!
              </div>
            </div>
            <div class="picture-wrapper">

            </div>
          </div>
          <div class="night row">
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
          <div class="photo row">
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
    <div class="pictures">
      <div class="title  wrapper">
        В подарок идут...
      </div>
      <Swiper :modules="swiper_modules" :rewind="true" :autoplay="{ delay: 0 }" :speed="5000" class="sipe">
        <SwiperSlide>
          <q-img src="src/assets/pictures/picture-1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <q-img src="src/assets/pictures/picture-2.png" />
        </SwiperSlide>
      </Swiper>
      <div class="subtitle text-accent wrapper">
        Больше фото с Посвята'21 можно найти
          <a href="#">здесь</a>
      </div>
    </div>
    <div class="footer">
      <div class="end wrapper row">
        <div class="flex align-center" style="width:70%">
          <div class="footer-title">Пока ты читал это сообщение, на Посвят зарегистрировались два человека</div>
          <div class="footer-text">Не отставай – бронируй место прямо сейчас!</div>
        </div>
        <div class="column justify-center items-end" style="width:30%">
          <q-btn no-caps label="Регистрация" class="btn btn-reg q-mr-md" />
        </div>
      </div>
      <q-img src="src/assets/footer.png" class="lines" />
    </div>

  </q-page>
</template>

<script setup>
import 'swiper/scss';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
import { ref, onMounted } from 'vue'
const swiper_modules = [Autoplay]
const partners = [
  {
    src: 'src/assets/partners1.png',
  },
  {
    src: 'src/assets/partners2.png',
  },
  {
    src: 'src/assets/partners3.png',
  },
  {
    src: 'src/assets/partners4.png',
  },
  {
    src: 'src/assets/partners5.png',
  },
  {
    src: 'src/assets/partners6.png',
  }
]
const whatIsHover = ref(false)
const width = ref(0)
function updateWidth() {
  width.value = window.innerWidth;
}
onMounted(() => {
  window.addEventListener('resize', updateWidth);
  console.log('mounted')
})



</script>
<style lang="scss" scoped>

.wrapper {
  padding-left: 10%;
  padding-right: 10%;
}



.intro {
  position: absolute;
  top: 0;
  width: 100%;
  height: 52.75vw;

  &-text {
    width: 100%;
  }

  .suptitle {
    font-style: normal;
    font-weight: 800;
    font-size: 2.3vw;
    line-height: 2.3vw;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;
    // margin-bottom: 20px;
    margin-bottom: 1.39vw;
  }

  .subtitle {
    font-weight: 600;
    font-size: 2.3vw;
    line-height: 100%;
    /* or 40px */

    text-align: center;
    font-feature-settings: 'pnum' on, 'lnum' on;
    // margin-top: 40px;
    margin-top: 2.78vw;
    margin-bottom: 2.78vw;
  }

  //z-index: 1;
  //margin-top: 50px;
  &-wrapper {

    width: 100%;
    //height: 68vw;
    //background-color: #212121;

    .background {
      position: relative;

      // &-wrapper {
      //   //display: block;
      //   //position: absolute;
      //   pointer-events: none;
      //   width: 100%;
      //   height: 100%;
      // }
    }
  }
}


.buttons {
  &-wrapper {

    width: 600px;
  }
}

//vw - 1727
.btn {
  // border-radius: 20px;
  border-radius: 1.16vw;
  font-style: normal;
  font-weight: 600;
  font-size: 1.6vw;
  line-height: 100%;
  width: 17.37vw;


  /* identical to box height, or 32px */

  font-feature-settings: 'pnum' on, 'lnum' on;
  // padding-right: 2.9vw;
  // padding-left: 2.9vw;

  &-reg {
    background: #EE4D07;
    color: #fff;
    margin-right: 0.58vw;
  }

  &-reg:hover {
    background: #F9824F;
  }

  &-more {
    border: 0.23vw solid #EE4D07;
    color: #EE4D07;
    background: #212121;
    margin-left: 0.58vw;
  }

  &-more:hover {
    border: 0.23vw solid #F9824F;
    color: #F9824F;
    background: #212121;
  }

  &-go {
    border: 0.23vw solid #0F9F84;
    border-radius: 16px;
    color: #0F9F84;
    background: #212121;
  }

  &-go:hover {
    border: 0.23vw solid #13E0B9;
    border-radius: 16px;
    color: #13E0B9;
    background: #212121;
  }
}

.whatIs {
  background: #212121;
  height: 100%;

  &-text {}

  &-picture {
    .picture {}
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

  .description {
    font-style: normal;
    font-weight: 600;
    font-size: 1.9vw;
    line-height: 100%;
    /* or 32px */

    font-feature-settings: 'pnum' on, 'lnum' on;
    color: $accent;
  }

}

.partners {
  //padding-top: 25px;
  background: #F1E0C6;
  height: 12.15vw;

  .swiper {
    height: 100%;

    &-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      .picture {
        //object-fit: fill;
        width: 16.27vw;
      }
    }

  }

}

.title {
  font-style: normal;
  font-weight: 900;
  font-size: 5.4vw;
  line-height: 100%;
  //background: #212121;

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
    height: 302.49vw;
    z-index: 1;
  }


  .card {
    &-text {
      width: 50%;
      //float: right;
    }

    &-title {
      font-weight: 900;
      font-size: 2.3vw;
      line-height: 100%;
      margin-bottom: 1.38vw;
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

  .costs {
    width: 100%;
  }

  // vw - 1440
  .accomodation {
    // margin-top: 160px;
    margin-top: 11.11vw;
  }

  .transfer {
    // margin-top: 420px;
    margin-top: 29.17vw;
  }

  .food {
    // margin-top: 300px;
    margin-top: 20.83vw;
  }

  .welcome {
    // margin-top: 300px;
    margin-top: 20.83vw;
  }

  .program {
    // margin-top: 350px;
    margin-top: 25.31vw;
  }

  .show {
    // margin-top: 450px;
    margin-top: 31.25vw;
  }

  .night {
    // margin-top: 400px;
    margin-top: 27.78vw;
  }

  .photo {
    .card-text {
      width: 45%;
    }

    // margin-top: 400px;
    margin-top: 27.78vw;
  }
}
.pictures {
  .title {
    padding-top: 2.9vw;
    padding-bottom: 2.9vw;
  }
  .subtitle {
    font-weight: 600;
    font-size: 1.85vw;
    line-height: 100%;
    padding-top: 0.58vw;
    padding-bottom: 2.32vw;
    a {
      color:#EFB515
    }
  }
  background: #212121;
  .sipe {
    height: 53.16vw;
  }
}
.picture {
  &-wrapper {
    width: 50%;
  }
}
.footer {
  height: 41.67vw;
  position: relative;
  background: #212121;

  &-title {
    font-weight: 900;
    font-size: 2.08vw;
    line-height: 105%;
    display: flex;
    align-items: flex-end;
    /* or 38px */

    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: #EE4D07;
  }

  &-text {

    font-style: normal;
    font-weight: 600;
    font-size: 1.8vw;
    line-height: 100%;
    /* identical to box height, or 32px */

    font-feature-settings: 'pnum' on, 'lnum' on;

    color: #212121;
  }

}

.end {
  background: #F1E0C6;
  height: 12.5vw;

}

.lines {
  width: 100%;
  position: absolute;
  top: 8.98vw;

  //bottom: 0 //top: 5930px;

}
</style>
