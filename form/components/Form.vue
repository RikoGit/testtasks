<template>
  <form class="form" @submit.prevent="submit">
    <fieldset class="form__fieldset">
      <legend class="form__legend">Атрибуты формы</legend>
      <ul class="form__list">
        <li class="form__item" :class="{ 'form__item_state_error': $v.form.surname.$error }">
          <label class="form__label">
            Фамилия
            <span class="form__required">*</span>
            <input class="form__input" v-model.trim="$v.form.surname.$model" />
          </label>
          <span
            class="form__error"
            v-if="!$v.form.surname.alpha"
          >Только буквы (русские или английские)</span>
        </li>
        <li class="form__item" :class="{ 'form__item_state_error': $v.form.name.$error }">
          <label class="form__label">
            Имя
            <span class="form__required">*</span>
            <input class="form__input" v-model.trim="$v.form.name.$model" />
          </label>
          <span class="form__error" v-if="!$v.form.name.alpha">Только буквы (русские или английские)</span>
        </li>
        <li class="form__item" :class="{ 'form__item_state_error': $v.form.patronymic.$error }">
          <label class="form__label">
            Отчество
            <input class="form__input" v-model.trim="$v.form.patronymic.$model" />
          </label>
          <span
            class="form__error"
            v-if="!$v.form.patronymic.alpha"
          >Только буквы (русские или английские)</span>
        </li>
        <li class="form__item" :class="{ 'form__item_state_error': $v.form.birthday.$error }">
          <label class="form__label">
            Дата рождения
            <span class="form__required">*</span>
            <input class="form__input" v-model.trim="$v.form.birthday.$model" type="date" />
          </label>
        </li>
        <li class="form__item" :class="{ 'form__item_state_error': $v.form.phonenumber.$error }">
          <label class="form__label">
            Номер телефона
            <span class="form__required">*</span>
            <input class="form__input" v-model.trim="$v.form.phonenumber.$model" />
          </label>
          <span class="form__error" v-if="$v.form.phonenumber.$invalid">В формате 71234567890</span>
        </li>
        <li class="form__item" :class="{ 'form__item_state_error': $v.form.gender.$error }">
          <label class="form__label">
            Пол
            <select class="form__select" v-model.trim="$v.form.gender.$model">
              <option selected>женский</option>
              <option>мужской</option>
            </select>
          </label>
        </li>
        <li class="form__item" :class="{ 'form__item_state_error': $v.form.customergroup.$error }">
          <label class="form__label">
            Группа клиентов
            <span class="form__required">*</span>
            <select class="form__select" v-model.trim="$v.form.customergroup.$model" multiple>
              <option>VIP</option>
              <option>Проблемные</option>
              <option>ОМС</option>
            </select>
          </label>
        </li>
        <li class="form__item" :class="{ 'form__item_state_error': $v.form.doctor.$error }">
          <label class="form__label">
            Лечащий врач
            <select class="form__select" v-model.trim="$v.form.doctor.$model">
              <option>Иванов</option>
              <option>Захаров</option>
              <option>Чернышева</option>
            </select>
          </label>
        </li>
        <li class="form__item" :class="{ 'form__item_state_error': $v.form.name.$error }">
          <label class="form__label">
            Не отправлять СМС
            <input
              class="form__checkbox"
              v-model.trim="$v.form.name.$model"
              type="checkbox"
            />
          </label>
        </li>
      </ul>
    </fieldset>

    <fieldset class="form__fieldset">
      <legend class="form__legend">Адрес</legend>
      <ul class="form">
        <li class="form__item" :class="{ 'form__item_state_error': $v.form.postalCode.$error }">
          <label class="form__label">
            Индекс
            <input class="form__input" v-model.trim="$v.form.postalCode.$model" />
          </label>
        </li>
        <li class="form__item" :class="{ 'form__item_state_error': $v.form.country.$error }">
          <label class="form__label">
            Страна
            <input class="form__input" v-model.trim="$v.form.country.$model" />
          </label>
        </li>
        <li class="form__item" :class="{ 'form__item_state_error': $v.form.region.$error }">
          <label class="form__label">
            Область
            <input class="form__input" v-model.trim="$v.form.region.$model" />
          </label>
        </li>
        <li class="form__item" :class="{ 'form__item_state_error': $v.form.town.$error }">
          <label class="form__label">
            Город
            <span class="form__required">*</span>
            <input class="form__input" v-model.trim="$v.form.town.$model" />
          </label>
          <span class="form__error" v-if="!$v.form.town.alpha">Только буквы (русские или английские)</span>
        </li>
        <li class="form__item" :class="{ 'form__item_state_error': $v.form.street.$error }">
          <label class="form__label">
            Улица
            <input class="form__input" v-model.trim="$v.form.street.$model" />
          </label>
        </li>
        <li class="form__item" :class="{ 'form__item_state_error': $v.form.house.$error }">
          <label class="form__label">
            Дом
            <input class="form__input" v-model.trim="$v.form.house.$model" />
          </label>
        </li>
      </ul>
    </fieldset>
    <fieldset class="form__fieldset">
      <legend class="form__legend">Паспорт</legend>
      <ul class="form">
        <li class="form__item" :class="{ 'form__item_state_error': $v.form.passportType.$error }">
          <label class="form__label">
            Тип документа
            <span class="form__required">*</span>
            <select class="form__select" v-model.trim="$v.form.passportType.$model">
              <option selected>Паспорт</option>
              <option>Свидетельство о рождении</option>
              <option>Вод. удостоверение</option>
            </select>
          </label>
        </li>
        <li
          class="form__item"
          :class="{ 'form__item_state_error': $v.form.passportSerialNumber.$error }"
        >
          <label class="form__label">
            Серия
            <input class="form__input" v-model.trim="$v.form.passportSerialNumber.$model" />
          </label>
          <span
            class="form__error"
            v-if="$v.form.passportSerialNumber.$invalid"
          >Серия паспорта должна быть в формате 1234</span>
        </li>
        <li class="form__item" :class="{ 'form__item_state_error': $v.form.passportNumber.$error }">
          <label class="form__label">
            Номер
            <input class="form__input" v-model.trim="$v.form.passportNumber.$model" />
          </label>
          <span
            class="form__error"
            v-if="$v.form.passportNumber.$invalid"
          >Номер паспорта должен быть в формате 567890</span>
        </li>
        <li
          class="form__item"
          :class="{ 'form__item_state_error': $v.form.passportIssuedBy.$error }"
        >
          <label class="form__label">
            Кем выдан
            <input class="form__input" v-model.trim="$v.form.passportIssuedBy.$model" />
          </label>
          <div class="form__error" v-if="!$v.form.surname.alpha">Только буквы</div>
        </li>
        <li class="form__item" :class="{ 'form__item_state_error': $v.form.passportDate.$error }">
          <label class="form__label">
            Дата выдачи
            <span class="form__required">*</span>
            <input class="form__input" v-model.trim="$v.form.passportDate.$model" type="date" />
          </label>
        </li>
      </ul>
    </fieldset>
    <button type="submit" class="form__button">Отправить</button>
  </form>
</template>

<script>
import {
  alpha,
  between,
  minLength,
  maxLength,
  numeric,
  required,
} from "vuelidate/lib/validators";

const lettersReg = /^[а-яёА-ЯЁa-zA-Z]*$/;

export default {
  data() {
    return {
      form: {
        surname: "",
        name: "",
        patronymic: "",
        birthday: null,
        phonenumber: null,
        gender: 1,
        customergroup: "",
        doctor: "",
        postalCode: "",
        country: "",
        region: "",
        town: "",
        street: "",
        house: "",
        passportType: null,
        passportSerialNumber: null,
        passportNumber: null,
        passportIssuedBy: null,
        passportDate: null,
      },
    };
  },
  validations: {
    form: {
      surname: {
        alpha: (val) => lettersReg.test(val),
        required,
      },
      name: {
        alpha: (val) => lettersReg.test(val),
        required,
      },
      patronymic: { alpha: (val) => lettersReg.test(val) },
      birthday: { required },
      phonenumber: {
        required,
        between: between(70000000000, 79999999999),
      },
      gender: {},
      customergroup: { required },
      doctor: {},
      postalCode: {},
      country: {},
      region: {},
      town: { alpha: (val) => lettersReg.test(val), required },
      street: {},
      house: {},
      passportType: {
        required,
      },
      passportSerialNumber: {
        minLength: minLength(4),
        maxLength: maxLength(4),
        numeric,
      },
      passportNumber: {
        minLength: minLength(6),
        maxLength: maxLength(6),
        numeric,
      },
      passportIssuedBy: {},
      passportDate: {
        required,
      },
    },
  },
  methods: {
    submit() {
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      // to form submit after this
      alert("Form submitted");
    },
  },
};
</script>