<template>
  <div>
    <h2 class="info__header">Game mode:</h2>
    <ul class="modes">
      <li class="modes__item" v-for="mode in modes" :key="mode.id">
        <label class="modes__label" :for="mode.id">
          <input
            :id="mode.id"
            type="radio"
            name="test"
            :value="mode.value"
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
  props: { mode: Object },
  data() {
    return {
      modes: [
        { id: "mode1", value: "1500", text: "easy" },
        { id: "mode2", value: "1000", text: "middle" },
        { id: "mode3", value: "400", text: "hard" },
      ],
    };
  },
};
</script>
