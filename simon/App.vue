<template>
  <div class="game" :class="{ game_need_click: this.isNeedClickHandler }">
    <div class="game__container">
      <Boxes
        v-for="box in boxes"
        :class="'box_type_' + box.type"
        :timer="timer"
        :box="box"
        :key="box.id"
        @mousedown="mouseDownBoxHandler"
        @mouseup="mouseUpBoxHandler"
      />
    </div>
    <section class="round">
      <h2 class="round__header">{{ this.round }}</h2>
    </section>
    <section class="info">
      <Modes v-model="timer" :timer="timer" />
      <p class="info__message">{{ this.message }}</p>
    </section>
    <div class="game__sound">
      <Audio v-if="sound" v-model="sound" :sound="sound" />
    </div>
    <button class="game__start" @click="start">Start</button>
  </div>
</template>

<script>
import Audio from "./components/Audio.vue";
import Boxes from "./components/Boxes.vue";
import Modes from "./components/Modes.vue";

export default {
  props: {
    box: Object,
  },
  components: {
    Audio,
    Boxes,
    Modes,
  },
  data() {
    return {
      boxes: [
        {
          id: 0,
          sound: 4,
          isActive: false,
          type: "green",
        },
        {
          id: 1,
          sound: 1,
          isActive: false,
          type: "red",
        },
        {
          id: 2,
          sound: 3,
          isActive: false,
          type: "yellow",
        },
        {
          id: 3,
          sound: 2,
          isActive: false,
          type: "blue",
        },
      ],
      boxIdsInTheRound: [],
      round: 0,
      isNeedClickHandler: false,
      timer: "1000",
      sound: "",
      message: "",
      clickNumberInTheRound: 0,
    };
  },
  methods: {
    setActiveBox(id) {
      let boxActive = this.boxes.filter((box) => box.id === id)[0];
      boxActive.isActive = true;
      this.sound = boxActive.sound;

      setTimeout(() => {
        boxActive.isActive = false;
        this.sound = "";
      }, this.timer - 100);
    },
    startRound() {
      this.isNeedClickHandler = false;
      this.clickNumberInTheRound = 0;
      const randomNumber = Math.floor(Math.random() * this.boxes.length);
      this.boxIdsInTheRound.push(this.boxes[randomNumber].id);
      this.round = this.boxIdsInTheRound.length;
      setTimeout(() => {
        this.sound = "";
        this.boxIdsInTheRound.forEach((id, index) =>
          setTimeout(() => this.setActiveBox(id), this.timer * index)
        );
      }, 600);
      setTimeout(() => {
        this.isNeedClickHandler = true;
      }, this.timer * this.boxIdsInTheRound.length + 600);
    },
    start() {
      this.message = "";
      this.isNeedClickHandler = false;
      this.boxIdsInTheRound = [];
      this.round = 0;
      this.clickNumberInTheRound = 0;
      this.startRound();
    },
    end() {
      this.message = `Sorry, you lost after ${this.round} rounds!`;
      this.round = 0;
      this.isNeedClickHandler = false;
    },
    mouseDownBoxHandler(id) {
      if (!this.isNeedClickHandler) return;
      this.sound = "";

      let boxActive = this.boxes.filter((box) => box.id === id)[0];
      boxActive.isActive = true;
      setTimeout(() => (this.sound = boxActive.sound), 1);
    },
    mouseUpBoxHandler(id) {
      if (!this.isNeedClickHandler) return;

      this.boxes.filter((box) => box.id === id)[0].isActive = false;

      if (this.boxIdsInTheRound[this.clickNumberInTheRound] !== id) {
        this.end();
        return;
      }
      if (this.clickNumberInTheRound === this.round - 1) {
        this.startRound();
      } else this.clickNumberInTheRound++;
    },
  },
};
</script>
