<template>
  <q-page class="page">
    <div class="title flex justify-center">
      Регистрация
    </div>
    <q-form @submit="onSubmit" class="wrapper">
      <q-input filled v-model="person.surname" label="Фамилия" class="input"
        :rules="[val => !!val || 'Обязательно поле']" :bottom-slots='false' />
      <q-input filled v-model="person.name" label="Имя" class="input" :rules="[val => !!val || 'Обязательно поле']" />
      <q-input filled v-model="person.patronymic" label="Отчество" class="input" />
      <q-input prefix="https://vk.com/" filled v-model="person.vk" label="Ссылка на ВК" class="input" type="url"
        :rules="[val => !!val || 'Обязательно поле']" />
      <q-input prefix="https://t.me/" filled v-model="person.telegram" label="Ссылка на Телеграм" class="input"
        type="url" :rules="[val => !!val || 'Обязательно поле']" />
      <q-input prefix="+7" filled v-model="person.phone" label="Номер телефона" class="input" type="tel"
        :rules="[val => !!val || 'Обязательно поле']" />
      <q-input filled v-model="person.uni" label="Название ВУЗа" class="input"
        :rules="[val => !!val || 'Обязательно поле']" />
      <q-input filled v-model="person.program" label="Название ОП" class="input"
        :rules="[val => !!val || 'Обязательно поле']" />
      <q-input filled v-model="person.year" label="Курс" class="input" style="margin-bottom: 0;"
        :rules="[val => !!val || 'Обязательно поле']" />
      <div class="gender flex row items-center q-ml-md">
        <div class="t">
          Пол
        </div>
        <q-radio name="shape" v-model="person.gender" val="Женский" label="Женский" class="radio" color="white" />
        <q-radio name="shape" v-model="person.gender" val="Мужской" label="Мужской" class="radio" color="white" />
      </div>
      <q-input filled v-model="person.date_of_birth" label="Дата рождения" class="input"
        :rules="[val => !!val || 'Обязательно поле']" />
      <q-select filled v-model="person.transfer" :options="tr" label="Нужен ли трансфер?" class="input"
        :rules="[val => !!val || 'Обязательно поле']" />
      <q-input filled v-model="person.peculiarities" label="Аллергия, особенности организма" class="input" />


      <div>
        <q-btn label="Зарегистрироваться" type="submit" class="btn" />

      </div>
    </q-form>
    <q-img src="src/assets/footer.png" class="lines" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const person = ref({})
const tr = [
  'Да, из Одинцово',
  'Да, с Площади Победы',
  'Нет'
]
person.value = {
  surname: '',
  name: '',
  patronymic: '',
  vk: '',
  telegram: '',
  phone: '',
  uni: '',
  program: '',
  year: '',
  group: '',
  gender: '',
  date_of_birth: '',
  transfer: '',
  peculiarities: '',
  agreement: false
}
function onSubmit() {

}
</script>
<style scoped lang="scss">
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

.input {
  background: #fff;
  color: #212121;
  border-radius: 1.1vw;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  font-size: 1.85vw;
  margin-bottom: 2.49vw;
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
</style>
