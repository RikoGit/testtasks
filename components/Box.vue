<template>
  <div
    :id="box.id"
    :class="{ box_type_active: box.isActive }"
    @mousedown="$emit('mousedown', box.id)"
    @mouseup="$emit('mouseup', box.id)"
  />
</template>

<script>
export default {
  props: { box: Object },
};
</script>
