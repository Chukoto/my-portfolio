<template>
  <div id="home-wrapper">
    <div>
      <transition>
        <div id="bright-switcher" v-if="show"></div>
      </transition>
      <div id="bright-adjuster" :style="{ opacity: opacity }"></div>
    </div>
    <div id="back">
      <div id="remocon-body">
        <button id="power-btn" @click="show = !show">
          <v-list-item-icon>
            <v-icon :size="sizes['large']">mdi-power</v-icon>
          </v-list-item-icon>
        </button>
        <button id="incr-btn" @click="increaseBrightness">
          <v-list-item-icon>
            <v-icon :size="sizes['large']">mdi-chevron-up</v-icon>
          </v-list-item-icon>
        </button>
        <button id="decr-btn" @click="decreaseBrightness">
          <v-list-item-icon>
            <v-icon :size="sizes['large']">mdi-chevron-down</v-icon>
          </v-list-item-icon>
        </button>
        <button id="incr-max-btn" @click="increaseMaxBrightness">
          <v-list-item-icon>
            <v-icon :size="sizes['medium']">mdi-brightness-5</v-icon>
          </v-list-item-icon>
        </button>
      </div>
    </div>
    <div>
      テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      opacity: 0,
      sizes: {
        'x-small': '1rem',
        small: '2rem',
        default: '3rem',
        medium: '4rem',
        large: '5rem',
        'x-large': '6rem',
      },
    };
  },
  methods: {
    increaseBrightness() {
      if (this.opacity >= 0.1 && this.show === false) {
        this.opacity -= 0.1;
        console.log(this.opacity);
      }
    },
    decreaseBrightness() {
      if (this.opacity < 0.7 && this.show === false) {
        this.opacity += 0.1;
        console.log(this.opacity);
      }
    },
    increaseMaxBrightness() {
      if (this.opacity > 0 && this.show === false) {
        this.opacity = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#home-wrapper {
  margin-top: 3rem;
  position: relative;
}

#bright-switcher,
#bright-adjuster {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  pointer-events: none;
}

.v-leave-active,
.v-enter-active {
  transition: opacity 0.5s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

#back {
  width: 100%;
  height: 50rem;
  margin: 0 auto;
  padding-top: 10rem;
  background-color: aquamarine;
}

#remocon-body {
  width: 18rem;
  height: 30rem;
  background-color: #eee;
  position: relative;
  -webkit-border-radius: 10%;
  -moz-border-radius: 10%;
  border-radius: 10%;
  margin: 0 auto;
  -webkit-box-shadow: 8px 16px 16px gray, 24px 24px 16px #fff inset;
  -moz-box-shadow: 8px 16px 16px gray, 24px 24px 16px #fff inset;
  box-shadow: 8px 16px 16px gray, 24px 24px 16px #fff inset;
}

#power-btn {
  width: 6rem;
  height: 6rem;
  background-color: #c0f86a;
  -moz-border-radius: 20%;
  border-radius: 20%;
  position: absolute;
  top: 4rem;
  left: 2rem;
  padding-left: 10px;
  &:active {
    top: 4.2rem;
  }
}

#incr-btn,
#decr-btn {
  width: 8rem;
  height: 6rem;
  background-color: #f8f66a;
  -moz-border-radius: 20%;
  border-radius: 20%;
  padding-left: 24px;
}

#incr-btn {
  position: absolute;
  top: 11rem;
  right: 2rem;
  &:active {
    top: 11.2rem;
  }
}

#decr-btn {
  position: absolute;
  top: 21rem;
  right: 2rem;
  &:active {
    top: 21.2rem;
  }
}

#incr-max-btn {
  width: 6rem;
  height: 6rem;
  background-color: #f8f66a;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  top: 16rem;
  left: 2rem;
  padding-left: 18px;
  &:active {
    top: 16.2rem;
  }
}

/* ========================
ボタンの影 まとめて管理
======================== */
#power-btn,
#incr-btn,
#decr-btn,
#incr-max-btn {
  -webkit-box-shadow: 8px 4px 3px gray, 1px 1px 1px #fff inset;
  -moz-box-shadow: 8px 4px 3px gray, 1px 1px 1px #fff inset;
  box-shadow: 8px 4px 3px gray, 1px 1px 1px #fff inset;
  cursor: pointer;
  &:active {
    box-shadow: 1px 1px 1px #fff, 4px 2px 3px gray inset;
  }
}
</style>
