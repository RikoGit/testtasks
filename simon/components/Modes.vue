<template>
  <div>
    <h2 class="info__header">Game mode:</h2>
    <ul class="modes">
      <li class="modes__item" v-for="mode in modes" :key="mode.value">
        <label class="modes__label">
          <input
            type="radio"
            name="test"
            :value="mode.value"
            :checked="timer === mode.value"
            v-on:input="$emit('input', $event.target.value)"
          />
          {{ mode.text }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: { mode: Object, timer: String },
  data() {
    return {
      modes: [
        { value: "1500", text: "easy" },
        { value: "1000", text: "middle" },
        { value: "400", text: "hard" },
      ],
    };
  },
};
</script>
