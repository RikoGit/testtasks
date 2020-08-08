<template>
  <li class="modes__item">
    <label class="modes__label" v-bind:for="timer.id">
      <input
        v-bind:id="timer.id"
        type="radio"
        name="test"
        :value="timer.value"
        v-on:input="$emit('input', $event.target.value)"
      />
      {{ timer.text }}
    </label>
  </li>
</template>

<script>
export default {
  props: { timer: Object },
};
</script>
