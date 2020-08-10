<template>
  <div
    class="box"
    :id="box.id"
    :class="{ box_state_active: box.isActive }"
    @mousedown="$emit('mousedown', box.id)"
    @mouseup="$emit('mouseup', box.id)"
    @click="$emit('click', box.id)"
  />
</template>

<script>
export default {
  props: { box: Object },
};
</script>
