<template>
  <div>
    <v-row>
      <v-col v-for="(url, index) in urls" :key="index">
        <p>
          <img :src="url.link" :alt="url.alt" />
        </p>
      </v-col>
    </v-row>
    <div>
      <a href="https://icons8.com/icon/20909/html-5"
        >Html 5 icon by Icons8
      </a>
      <br />
      <a href="https://icons8.com/icon/21278/css3"
        >CSS3 icon by Icons8
      </a>
      <br />
      <a href="https://icons8.com/icon/108784/javascript"
        >JavaScript icon by Icons8
      </a>
      <br />
      <a href="https://icons8.com/icon/rY6agKizO9eb/vue-js"
        >Vue Js icon by Icons8
      </a>
      <br />
      <a href="https://icons8.com/icon/84710/bootstrap"
        >Bootstrap icon by Icons8
      </a>
      <br />
      <a href="https://icons8.com/icon/KZHjwwenS7oK/database"
        >Database icon by Icons8
      </a>
      <br />
      <a href="https://icons8.com/icon/UFXRpPFebwa2/mysql-logo"
        >MySQL Logo icon by Icons8
      </a>
      <br />
      <a
        href="https://icons8.com/icon/22189/ruby-programming-language"
        >Ruby Programming Language icon by Icons8
      </a>
      <br />
      <a href="https://icons8.com/icon/121463/php-logo"
        >PHP Logo icon by Icons8
      </a>
      <br />
      <a href="https://icons8.com/icon/FK8AfMKCrwOU/adobe-animate"
        >Adobe Animate icon by Icons8
      </a>
      <br />
      <a href="https://icons8.com/icon/13631/adobe-illustrator"
        >Adobe Illustrator icon by Icons8
      </a>
      <a href="https://icons8.com/icon/cdYUlRaag9G9/docker"
        >Docker icon by Icons8
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  data() {
    return {
      urls: [
        {
          link:
            'https://img.icons8.com/color/48/000000/html-5--v1.png',
          alt: 'htmlのロゴ',
        },
        {
          link: 'https://img.icons8.com/color/48/000000/css3.png',
          alt: 'cssのロゴ',
        },
        {
          link:
            'https://img.icons8.com/color/48/000000/javascript--v1.png',
          alt: 'JavaScriptのロゴ',
        },
        {
          link: 'https://img.icons8.com/color/48/000000/vue-js.png',
          alt: 'Vue.jsのロゴ',
        },
        {
          link:
            'https://img.icons8.com/color/48/000000/bootstrap.png',
          alt: 'BootStrapのロゴ',
        },
        {
          link:
            'https://img.icons8.com/fluency/48/000000/database.png',
          alt: 'SQLのロゴ',
        },
        {
          link:
            'https://img.icons8.com/color/48/000000/mysql-logo.png',
          alt: 'mySQLのロゴ',
        },
        {
          link:
            'https://img.icons8.com/color/48/000000/ruby-programming-language.png',
          alt: 'Rubyのロゴ',
        },
        {
          link: 'https://img.icons8.com/dusk/48/000000/php-logo.png',
          alt: 'PHPのロゴ',
        },
        {
          link:
            'https://img.icons8.com/color/48/000000/adobe-animate.png',
          alt: 'Adobe Animateのロゴ',
        },
        {
          link:
            'https://img.icons8.com/color/48/000000/adobe-illustrator--v1.png',
          alt: 'Adobe Illustratorのロゴ',
        },
        {
          link: 'https://img.icons8.com/fluency/48/000000/docker.png',
          alt: 'Dockerのロゴ',
        },
      ],
    };
  },
};
</script>

<style></style>
