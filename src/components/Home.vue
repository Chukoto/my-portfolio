<template>
  <div id="homeWrapper">
    <div id="back">
      <div id="remoconBody">
        <div id="powerBtn">
          <v-list-item-icon>
            <v-icon :size="sizes['large']">mdi-power</v-icon>
          </v-list-item-icon>
        </div>
        <div id="incrBtn">
          <v-list-item-icon>
            <v-icon :size="sizes['large']">mdi-chevron-up</v-icon>
          </v-list-item-icon>
        </div>
        <div id="decrBtn">
          <v-list-item-icon>
            <v-icon :size="sizes['large']">mdi-chevron-down</v-icon>
          </v-list-item-icon>
        </div>
        <div id="incrMaxBtn">
          <v-list-item-icon>
            <v-icon :size="sizes['medium']">mdi-brightness-5</v-icon>
          </v-list-item-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
};
</script>

<style lang="scss" scoped>
#homeWrapper {
  margin-top: 3rem;
}

#back {
  width: 100%;
  height: 50rem;
  margin: 0 auto;
  padding-top: 10rem;
  background-color: aquamarine;
}

#remoconBody {
  width: 21rem;
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

#powerBtn {
  width: 6rem;
  height: 6rem;
  background-color: #c0f86a;
  -moz-border-radius: 20%;
  border-radius: 20%;
  position: absolute;
  top: 5rem;
  left: 3rem;
  padding-left: 8px;
  &:active {
    top: 5.2rem;
  }
}

#incrBtn,
#decrBtn {
  width: 8rem;
  height: 6rem;
  background-color: #f8f66a;
  -moz-border-radius: 20%;
  border-radius: 20%;
  padding-left: 24px;
}

#incrBtn {
  position: absolute;
  top: 11rem;
  right: 3rem;
  &:active {
    top: 11.2rem;
  }
}

#decrBtn {
  position: absolute;
  top: 19rem;
  right: 3rem;
  &:active {
    top: 19.2rem;
  }
}

#incrMaxBtn {
  width: 6rem;
  height: 6rem;
  background-color: #f8f66a;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  top: 15rem;
  left: 3rem;
  padding-left: 16px;
  &:active {
    top: 15.2rem;
  }
}

/* ========================
ボタンの影 まとめて管理
======================== */
#powerBtn,
#incrBtn,
#decrBtn,
#incrMaxBtn {
  -webkit-box-shadow: 8px 4px 3px gray, 1px 1px 1px #fff inset;
  -moz-box-shadow: 8px 4px 3px gray, 1px 1px 1px #fff inset;
  box-shadow: 8px 4px 3px gray, 1px 1px 1px #fff inset;
  cursor: pointer;
  &:active {
    box-shadow: 1px 1px 1px #fff, 4px 2px 3px gray inset;
  }
}
</style>
