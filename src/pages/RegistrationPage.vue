<template>
  <q-page class="page">
    <div class="title flex justify-center">
      Регистрация
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
      <q-input prefix="+7" filled v-model="person.number" label="Номер телефона" class="q-mb-lg" bg-color="white"
        label-color="dark" type="tel" :rules="[val => !!val || 'Обязательно поле']" :hide-bottom-space="true"
        mask="(###)###-##-##" />

      <q-select filled v-model="uni" :options="university" label="Название ВУЗа" class="q-mb-lg" bg-color="white"
        label-color="dark" :rules="[val => !!val || 'Обязательно поле']" :hide-bottom-space="true" />
      <q-input filled v-model="person.university" label="ВУЗ" class="q-mb-lg" bg-color="white" label-color="dark"
        :rules="[val => !!val || 'Обязательно поле']" :hide-bottom-space="true" v-if="uni === 'Другое'" />
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

      <q-input filled v-model="person.date" label="Дата рождения" class="q-mb-lg" bg-color="white" label-color="dark"
        :hide-bottom-space="true">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date v-model="person.date" mask="DD.MM.YYYY">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-select filled v-model="person.transfer" :options="tr" label="Нужен ли трансфер?" class="q-mb-lg"
        bg-color="white" label-color="dark" :rules="[val => !!val || 'Обязательно поле']" :hide-bottom-space="true" />
      <q-input filled v-model="person.alergic" label="Аллергии, особенности организма" class="q-mb-lg" bg-color="white"
        label-color="dark" type="textarea" :hide-bottom-space="true" :rules="[val => !!val || 'Обязательно поле']" />
      <div class="gender flex row items-center">
        <q-checkbox keep-color v-model="person.submit" color="white" />
        <div class="t">
          Даю согласие на обработку персональных данных
        </div>
        <!-- <q-radio name="shape" v-model="person.submit" val="true" class="radio" color="white" /> -->
      </div>

      <div>
        <q-btn label="Зарегистрироваться" type="submit" class="btn" />

      </div>
    </q-form>
    <q-img src="~assets/images/footer.png" class="lines" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { register } from 'src/api/registration'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
const router = useRouter()
const q = useQuasar()
const person = ref({})
const tr = [
  'Нет, поеду сам',
  'Да, поехал бы с Одинцово',
  'Да, поехал бы с Парка Победы'
]
const uni = ref('')
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
const university = [
  'ВШЭ',
  'Другое'
]
person.value = {
  surname: '',
  name: '',
  patronymic: '',
  link_vk: '',
  link_tg: '',
  number: '',
  university: '',
  program: '',
  course: '',
  group: '',
  sex: '',
  date: '',
  transfer: '',
  alergic: '',
  submit: false
}
const t = {
  "surname": "1",
  "name": "1",
  "patronymic": "1",
  "link_vk": "vk",
  "link_tg": "1",
  "number": "1",
  "university": "1",
  "program": "1",
  "course": "1Б/С",
  "group": "1",
  "sex": "Мужской",
  "date": "2022-08-04",
  "transfer": "Одинцово",
  "alergic": "Аллергии",
  "submit": true
}
async function onSubmit() {
  person.value.link_vk = 'vk.com/' + person.value.link_vk
  person.value.link_tg = 't.me/' + person.value.link_tg
  person.value.number = '+7' + person.value.number
  if (uni.value != 'Другое') person.value.university = uni.value
  console.log(person.value)

  // person.value.submit = true


  let result = await register(person.value)
  if (!result) {
    q.notify({
      icon: "warning",
      type: "negative",
      multiLine: true,
      message: "Возникла ошибка!",
    });
  } else {
    q.notify({
      type: "positive",
      message: "Вы зарегистрированы!",
    });
    router.push({ path: '/' })

  }
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
