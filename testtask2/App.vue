<template>
  <div class="game" :class="{ game_need_click: this.isNeedClickHandler }">
    <div class="game__container">
      <Box
        v-for="box in boxes"
        class="box"
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
      <h2 class="info__header">Game mode:</h2>
      <ul class="modes">
        <Mode
          v-model="timer"
          v-for="mode in modes"
          :timer="mode"
          :key="mode.id"
        />
      </ul>
      <p class="info__message">{{ this.message }}</p>
    </section>
    <button class="game__start" @click="start">Start</button>
  </div>
</template>

<script>
import Box from "../components/Box.vue";
import Mode from "../components/Mode.vue";

export default {
  props: {
    box: Object,
  },
  components: {
    Box,
    Mode,
  },
  data() {
    return {
      boxes: [
        {
          id: 0,
          isActive: false,
          type: "green",
        },
        {
          id: 1,
          isActive: false,
          type: "red",
        },
        {
          id: 2,
          isActive: false,
          type: "yellow",
        },
        {
          id: 3,
          isActive: false,
          type: "blue",
        },
      ],
      modes: [
        { id: "mode1", value: "1500", text: "easy" },
        { id: "mode2", value: "1000", text: "middle" },
        { id: "mode3", value: "400", text: "hard" },
      ],
      boxIdsInTheRound: [],
      round: 0,
      isNeedClickHandler: false,
      timer: "1000",
      message: "",
      clickNumberInTheRound: 0,
    };
  },
  methods: {
    setActiveBox(id, istest) {
      let boxActive = this.boxes.filter((box) => box.id === id)[0];
      boxActive.isActive = true;
      setTimeout(() => {
        boxActive.isActive = false;
      }, this.timer - 100); // ???
    },
    startRound() {
      this.strict = "show";
      this.isNeedClickHandler = false;
      this.clickNumberInTheRound = 0;
      const randomNumber = Math.floor(Math.random() * this.boxes.length);
      this.boxIdsInTheRound.push(this.boxes[randomNumber].id);
      this.round = this.boxIdsInTheRound.length;
      setTimeout(
        () =>
          this.boxIdsInTheRound.forEach((id, index) =>
            setTimeout(() => this.setActiveBox(id), this.timer * index)
          ),
        600
      );
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

      this.boxes.filter((box) => box.id === id)[0].isActive = true;
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
