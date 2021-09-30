<template>
  <div id="home-wrapper">
    <div>
      <transition>
        <div id="bright-switcher" v-if="show"></div>
      </transition>
      <div id="bright-adjuster" :style="{ opacity: opacity }"></div>
    </div>
    <div id="back">
      <h1 class="text-center grey--text text--darken-5">
        <div id="first-text">Haruki's room</div>
      </h1>

      <div id="remocon-body">
        <button id="power-btn" @click="show = !show">
          <v-list-item-icon>
            <v-icon :size="sizes['default']">mdi-power</v-icon>
          </v-list-item-icon>
        </button>
        <button id="incr-btn" @click="increaseBrightness">
          <v-list-item-icon>
            <v-icon :size="sizes['default']">mdi-chevron-up</v-icon>
          </v-list-item-icon>
        </button>
        <button id="decr-btn" @click="decreaseBrightness">
          <v-list-item-icon>
            <v-icon :size="sizes['default']">mdi-chevron-down</v-icon>
          </v-list-item-icon>
        </button>
        <button id="incr-max-btn" @click="increaseMaxBrightness">
          <v-list-item-icon>
            <v-icon :size="sizes['small']">mdi-brightness-5</v-icon>
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
      }
    },
    decreaseBrightness() {
      if (this.opacity < 0.7 && this.show === false) {
        this.opacity += 0.1;
      }
    },
    increaseMaxBrightness() {
      if (this.opacity > 0 && this.show === false) {
        this.opacity = 0;
      }
    },
  },
  mounted: function() {
    const target = this.$el.querySelector('#first-text');
    let text = target.textContent;
    target.textContent = '';
    const words = text.split('');
    const textArray = [];

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word === ' ') {
        textArray.push(' ');
      } else {
        textArray.push(
          '<span style="animation-delay: ' + i * 0.1 + 's;">' + word + '</span>'
        );
      }
    }

    textArray.forEach((element) => {
      target.innerHTML += element;
    });
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 10vw;
}

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
  height: 100rem;
  margin: 0 auto;
  padding-top: 10rem;
  background-color: aquamarine;
}

#remocon-body {
  width: 13rem;
  height: 23rem;
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
  width: 4rem;
  height: 4rem;
  background-color: #c0f86a;
  -moz-border-radius: 20%;
  border-radius: 20%;
  position: absolute;
  top: 3.5rem;
  left: 1.5rem;
  padding-left: 10px;
  &:active {
    top: 3.7rem;
  }
}

#incr-btn,
#decr-btn {
  width: 6rem;
  height: 4rem;
  background-color: #f8f66a;
  -moz-border-radius: 20%;
  border-radius: 20%;
  padding-left: 24px;
}

#incr-btn {
  position: absolute;
  top: 8rem;
  right: 1.5rem;
  &:active {
    top: 8.2rem;
  }
}

#decr-btn {
  position: absolute;
  top: 15rem;
  right: 1.5rem;
  &:active {
    top: 15.2rem;
  }
}

#incr-max-btn {
  width: 4rem;
  height: 4rem;
  background-color: #f8f66a;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  top: 11.5rem;
  left: 1.5rem;
  padding-left: 18px;
  &:active {
    top: 11.7rem;
  }
}

/* ========================
ボタンの影 まとめて管理 ここから
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
/* ========================
ボタンの影 まとめて管理 ここまで
======================== */
</style>

<style lang="scss">
/* ========================
文字アニメ ここから
======================== */
@keyframes showText {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
  }
}

#first-text span {
  display: inline-block;
  animation: showText 3s backwards;
}
/* ========================
文字アニメ ここまで
======================== */
</style>
