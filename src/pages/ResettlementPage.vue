<template>
  <q-page class="page">
    <div class="title flex justify-center">
      Расселение
    </div>
    <q-form @submit="onSubmit()" class="wrapper">
      <q-input filled v-model="person.surname" label="Фамилия" class="q-mb-lg" bg-color="white" label-color="dark"
        :bottom-slots="true" :rules="[val => !!val || 'Обязательно поле']" :hide-bottom-space="true">
      </q-input>
      <q-input filled v-model="person.name" label="Имя" class="q-mb-lg" bg-color="white" label-color="dark"
        :rules="[val => !!val || 'Обязательно поле']" :hide-bottom-space="true" />
      <q-input filled v-model="person.patronymic" label="Отчество" class="q-mb-lg" bg-color="white" label-color="dark"
        :hide-bottom-space="true" />
      <q-input prefix="https://vk.com/" filled v-model="person.link_vk" label="Ссылка на ВК" class="q-mb-lg"
        bg-color="white" label-color="dark" :rules="[val => !!val || 'Обязательно поле']" :hide-bottom-space="true" />
      <q-input prefix="https://t.me/" filled v-model="person.link_tg" label="Ссылка на Телеграм" class="q-mb-lg"
        bg-color="white" label-color="dark" :rules="[val => !!val || 'Обязательно поле']" :hide-bottom-space="true" />
      <q-input filled v-model="person.program" label="Название ОП" class="q-mb-lg" bg-color="white" label-color="dark"
        :rules="[val => !!val || 'Обязательно поле']" :hide-bottom-space="true" />

      <q-select filled v-model="person.course" :options="year" label="Курс" class="q-mb-lg" bg-color="white"
        label-color="dark" :rules="[val => !!val || 'Обязательно поле']" :hide-bottom-space="true" />
      <q-input filled v-model="person.group" label="Номер группы" class="q-mb-lg" bg-color="white" label-color="dark"
        :rules="[val => !!val || 'Обязательно поле']" :hide-bottom-space="true" style="margin-bottom: 0;" />
      <div class="gender flex row items-center q-ml-lg">
        <div class="t">
          Пол
        </div>
        <q-radio name="shape" v-model="person.sex" val="Женский" label="Женский" class="radio" color="white"
          keep-color />
        <q-radio name="shape" v-model="person.sex" val="Мужской" label="Мужской" class="radio" color="white"
          keep-color />
      </div>
      <q-input filled v-model="person.wants" label="Хочешь с друзьями/без разницы" class="q-mb-lg" bg-color="white"
        label-color="dark" type="textarea" :hide-bottom-space="true" :rules="[val => !!val || 'Обязательно поле']" />

      <div class="btn-wrapper">
        <q-btn label="Отправить" type="submit" class="btn" />
      </div>
    </q-form>
    <q-img src="~assets/images/footer.png" class="lines" />
  </q-page>
</template>

<script setup>

import { ref } from 'vue'
import { resettlement } from 'src/api/resettlement'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
const router = useRouter()
const q = useQuasar()
const person = ref({})
const year = [
  '1 курс Бакалавриат/Специалитет',
  '2 курс Бакалавриат/Специалитет',
  '3 курс Бакалавриат/Специалитет',
  '4 курс Бакалавриат/Специалитет',
  '5 курс Бакалавриат/Специалитет',
  '6 курс Специалитет',
  'Магистратура',
  'Аспирантура',
  'Выпускник'
]


person.value = {
  surname: '',
  name: '',
  patronymic: '',
  link_vk: '',
  link_tg: '',
  wants: '',
  program: '',
  course: '',
  group: '',
  sex: '',
}

async function onSubmit() {
  // person.value.link_vk = 'vk.com/' + person.value.link_vk
  // person.value.link_tg = 't.me/' + person.value.link_tg
  // person.value.number = '+7' + person.value.number
  // if (uni.value != 'Другое') person.value.university = uni.value

  let data = {
    surname: person.value.surname,
    name: person.value.name,
    patronymic: person.value.patronymic,
    link_vk: 'vk.com/' + person.value.link_vk,
    link_tg: 't.me/' + person.value.link_tg,
    program: person.value.program,
    course: person.value.course,
    group: person.value.group,
    sex: person.value.sex,
    wants: person.value.wants
  }

  console.log(data)

  // person.value.submit = true


  let result = await resettlement(data)
  console.log(result)
  if (result.link_vk[0] === 'Вы не зарегистрированы или не оплатили') {
    q.notify({
      icon: "warning",
      type: "negative",
      multiLine: true,
      message: "Вы не зарегистрированы или не оплатили!",
    });
  } else {
    q.notify({
      type: "positive",
      message: "Форма отправлена!",
    });
    router.push({ path: '/' })

  }
}

</script>

<style scoped lang="scss">
.q-field :deep(.q-field__prefix) {
  padding-right: 0 !important;
}

.page {
  background: #212121;
}

.wrapper {

  padding-right: 23.13vw;
  padding-left: 23.13vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.title {
  padding-top: 2.9vw;
  padding-bottom: 3.2vw;
  font-style: normal;
  font-weight: 900;
  font-size: 5.4vw;
  line-height: 100%;


  /* or 96px */

  text-transform: uppercase;
  font-feature-settings: 'pnum' on, 'lnum' on;

  color: #EFB515;
}

// .input {
//   background: #fff;
//   color: #212121;
//   border-radius: 1.1vw;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 100%;
//   font-size: 1.85vw;
//   margin-bottom: 2.49vw;
// }
.q-checkbox :deep(.q-checkbox__bg) {
  border: 2px solid #fff;
}

.btn {
  background: #EE4D07;
  color: #fff;
  border-radius: 1.16vw;
  font-style: normal;
  font-weight: 600;
  font-size: 1.4vw;
  line-height: 100%;
  width: 20.37vw;


  /* identical to box height, or 32px */

  font-feature-settings: 'pnum' on, 'lnum' on;
}


.btn:hover {
  background: #F9824F;
}

.gender {

  height: 8.98vw;

  .radio {
    color: #fff;
  }

  .t {
    color: #fff;
    border-radius: 1.1vw;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    font-size: 1.85vw;
  }
}

.screen--xs {
  .wrapper {
    padding-right: 10.13vw;
    padding-left: 10.13vw;
  }

  .title {
    padding-top: 10vw;
    padding-bottom: 10vw;
    font-size: 8vw;
  }

  .gender {
    height: 25vw;

    .t {
      font-size: 4.5vw;
    }

    .r {
      font-size: 2.75vw;
    }
  }

  .btn {
    font-size: 5vw;
    width: 75.37vw;

    &-wrapper {
      display: flex;
      justify-content: center;
      padding-bottom: 20px;
    }
  }
}
</style>
