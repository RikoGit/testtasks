<template></template>

<script>
import { alpha, required, minLength, between } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      surname: "",
      name: "",
      patronymic: "",
      birthday: 0,
      phonenumber: 0,
      gender: 1,
      customergroup: "",
      doctor: "",
      passportData: null,
      passportDate: null,
    };
  },
  validations: {
    surname: {
      alpha,
      required,
    },
    name: {
      alpha,
      required,
      minLength: minLength(4),
    },
    patronymic: { alpha },
    birthday: { required },
    phonenumber: { required, validatorPattern: "^\\+7\\d{10}$" },
    gender: {},
    customergroup: { required },
    doctor: {},
    passportType: {
      required,
    },
    passportSeries: {},
    passportNumber: {},
    passportData: {
      validFormat: (val) => /^\d{4} \d{6}$/.test(val),
    },
    passportDate: {
      required,
      validDate: (val) => moment(val, "DD.MM.YYYY", true).isValid(),
    },
  },
};
</script>