<template>
  <q-page class="full-height page" color="primary">
    <div class="intro-wrapper" ref="intro">
      <q-img src="~assets/images/background-1.png" class="no-copy background" />
      <div class="intro text-accent wrapper flex justify-center items-center" ref="intro">
        <div class="intro-text ">
          <div class="suptitle text-center">
            1-2 Октября
          </div>
          <q-img src="~assets/images/title.png" class="no-copy title " />
          <div class="subtitle flex flex-center column">
            Скорее регистрируйся и проведи <br> лучшую ночь этой осени вместе с нами!
          </div>
          <div class="buttons flex justify-center">
            <q-btn no-caps label="Регистрация" class="btn btn-reg" @click="goTo" />
            <q-btn no-caps label="Узнать больше" class="btn btn-more" @click="go('https://vk.com/miemposvyat')" />
          </div>
        </div>
      </div>

    </div>



    <div class="whatIs wrapper flex row items-center q-pb-xl" id="about">
      <div style="width:50%" class="whatIs-text">
        <div class="title q-pt-xl q-pb-md">
          что такое посвят?
        </div>
        <div class="description">
          Посвят — это, первое яркое событие в жизни каждого студента!
          Тебя ждут и диалоги тет-а-тет с одногруппниками, и нон-стоп танцы до утра, и даже highway to hell,
          если ты сильно захочешь победить в конкурсах.<br><br>
          В Telegram-канале Посвята ты увидишь закулисье подготовки, а всю важную информацию найдешь в группе ВКонтакте
          и боте.
          Пропустить событие, которое бывает раз в жизни, — преступление. Скорее садись на поезд в студенчество!
        </div>
        <q-btn no-caps label="Поехали!" class="btn btn-go q-mt-lg q-mr-md" @click="go('https://t.me/miemposvyat')" />
      </div>
      <div class="whatIs-picture" style="width:50%; height: 100%;">
        <!-- <q-img :src="whatIsHover ? '~assets/images/des-1.png' : '~assets/images/des.png'" class="picture"
          @mouseover="whatIsHover = true" @mouseleave="whatIsHover = false" /> -->
        <q-img src="~assets/images/des.png" class="no-copy picture" />
      </div>
    </div>

    <div class="partners" id="partner">
      <Swiper :modules="swiper_modules" :slides-per-view="5" :rewind="true" :autoplay="{ delay: 0 }" :speed="2000"
        ref="swiper2">
        <SwiperSlide>
          <q-img src="~assets/images/partners1.png" class="no-copy picture " />
        </SwiperSlide>
        <SwiperSlide>
          <q-img src="~assets/images/partners2.png" class="no-copy picture " />
        </SwiperSlide>
        <SwiperSlide>
          <q-img src="~assets/images/partners3.png" class="no-copy picture " />
        </SwiperSlide>
        <SwiperSlide>
          <q-img src="~assets/images/partners4.png" class="no-copy picture " />
        </SwiperSlide>
        <SwiperSlide>
          <q-img src="~assets/images/partners5.png" class="no-copy picture " />
        </SwiperSlide>
        <SwiperSlide>
          <q-img src="~assets/images/partners6.png" class="no-copy picture " />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="cost-wrapper" id="cost">
      <div class="title flex flex-center wrapper q-pt-xl">
        Что входит в стоимость?
      </div>
      <div class="cost flex flex-center column">
        <q-img src="~assets/images/cost.png" class="no-copy cost-background" />
        <div class="cost-text wrapper column">
          <div class=" accomodation row ">
            <div class="picture-wrapper">

            </div>
            <div class="card-text ">
              <div class="card-title">Проживание</div>
              <div class="card-description">Мы знаем, как важен здоровый сон для студентов, поэтому тебя ждёт уютная
                комната и спальное место.</div>
            </div>
          </div>
          <div class="transfer row">

            <div class="card-text">
              <div class="card-title">Трансфер туда и обратно</div>
              <div class="card-description">Тебе не придётся думать о том, как доехать до места проведения или
                добраться
                домой после Посвята.
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
                утра? Тогда шведский стол со вкусной едой – то, что нужно!
              </div>
            </div>
          </div>
          <div class="welcome row">

            <div class="card-text">
              <div class="card-title">Welcome-программа</div>
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
                всё больше? Необычный поворот событий? На Посвяте возможно всё и сразу!</div>
            </div>
          </div>
          <div class="show row">
            <div class="card-text">
              <div class="card-title">Шоу</div>
              <div class="card-description">Тебя ждут и концертная программа, и даже ритуал посвящения в студенты. Прочувствуй дух времени!
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
              <div class="card-description">Дискотека, гитарники, неповторимые задания и ночные точки для тех, кто любит
                давать волю эмоциям, — выбирай, что душе угодно.

              </div>
            </div>
          </div>
          <div class="photo row">
            <div class="card-text">
              <div class="card-title">Фотозоны</div>
              <div class="card-description">Благодаря нашим фотографам получится освежить в памяти моменты вечера. А
                селфизоны созданы для того, чтобы ты точно подобрал нужный ракурс!

              </div>
            </div>
            <div class="picture-wrapper">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pictures" id="picture">
      <div class="title  wrapper">
        В подарок идут...
      </div>
      <Swiper :modules="swiper_modules" :rewind="true" :autoplay="{ delay: 0 }" :speed="10000" class="swipe"
        ref="swiper2">
        <SwiperSlide>
          <q-img src="~assets/images/picture-1.png" class="no-copy" />
        </SwiperSlide>
        <SwiperSlide>
          <q-img src="~assets/images/picture-2.png" class="no-copy" />
        </SwiperSlide>
      </Swiper>
      <div class="subtitle text-accent wrapper">
        Больше фото с Посвятов можно найти
        <a @click="go('https://vk.com/albums-128408160')" class="pictures-link">здесь</a>
      </div>
    </div>
    <div class="footer">
      <div class="end wrapper row">
        <div class="flex align-center" style="width:70%">
          <div class="footer-title">Пока ты читал это сообщение, на Посвят зарегистрировались два человека</div>
          <div class="footer-text">Не отставай – бронируй место прямо сейчас!</div>
        </div>
        <div class="column justify-center items-end" style="width:30%">
          <q-btn no-caps label="Регистрация" class="btn btn-reg q-mr-md" @click="goTo()" />
        </div>
      </div>
      <q-img src="~assets/images/footer.png" class="no-copy lines" />
    </div>

  </q-page>
</template>

<script setup>
import 'swiper/scss';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const swiper_modules = [Autoplay]
const swiper1 = ref()
const swiper2 = ref()

onMounted(() => {
  // window.addEventListener('resize', updateWidth);
  // console.log(swiper1.value)

  // Swiper.autoplay.stop()
  // Swiper.autoplay.start()
})
function goTo() {
  router.push({ path: '/registration' })
}
function go(link) {
  // window.location.href = 'https://vk.com/miemposvyat'
  // window.location.href = link
  window.open(link, '_blank');
}



</script>
<style lang="scss" scoped>
.no-copy {
  pointer-events: none;
}

.wrapper {
  padding-left: 10%;
  padding-right: 10%;
}

.page {
  background: #212121;
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
      color: #EFB515
    }
  }

  background: #212121;

  .swipe {
    // height: 50.16vw;
  }
}

.picture {
  &-wrapper {
    width: 50%;
  }
}

.pictures {
  &-link {
    text-decoration: underline;
    cursor: pointer;
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

.screen--sm {
  .btn {
    width: 25.37vw;
  }
}

.screen--xs {
  .wrapper {
    padding-left: 5%;
    padding-right: 5%;
  }

  .description {
    font-size: 2.5vw;
  }

  .cost {
    .card {
      &-text {
        width: 50%;
        //float: right;
      }

      &-title {
        font-weight: 900;
        font-size: 4vw;
        line-height: 100%;
        margin-bottom: 1.38vw;
        /* identical to box height, or 48px */

        font-feature-settings: 'pnum' on, 'lnum' on;
        color: $secondary;
      }

      &-description {
        font-style: normal;
        font-weight: 600;
        font-size: 2.5vw;
        line-height: 100%;
        /* or 32px */

        font-feature-settings: 'pnum' on, 'lnum' on;
        color: $accent;
      }
    }

    .accomodation {
      // margin-top: 160px;
      margin-top: 10.11vw;
    }

    .transfer {
      // margin-top: 420px;
      margin-top: 25.17vw;
    }

    .food {
      // margin-top: 300px;
      margin-top: 8.83vw;
    }

    .welcome {
      // margin-top: 300px;
      margin-top: 15.83vw;
    }

    .program {
      // margin-top: 350px;
      margin-top: 18.31vw;
    }

    .show {
      // margin-top: 450px;
      margin-top: 30.25vw;
    }

    .night {
      // margin-top: 400px;
      margin-top: 18.78vw;
    }

    .photo {
      .card-text {
        width: 45%;
      }

      // margin-top: 400px;
      margin-top: 15.78vw;
    }

  }

  .btn {
    width: 25.37vw;
  }
}
</style>
