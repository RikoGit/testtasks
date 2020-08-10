<template>
  <audio autoplay>
    <source :src="`sounds/${sound}.ogg`" type="audio/ogg" />
    <source :src="`sounds/${sound}.mp3`" type="audio/mp3" />
  </audio>
</template>

<script>
export default {
  props: { sound: String },
};
</script>
