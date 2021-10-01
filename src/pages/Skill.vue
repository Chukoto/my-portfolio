<template>
  <div>
    <h2 class="text-center my-5">
      Skill
    </h2>
    <div>
      <p><span class="green--text">●</span> = 実務経験あり</p>
    </div>
    <v-row>
      <v-col
        v-for="(skill, index) in skills"
        :key="index"
        cols="12"
        sm="6"
        class="mb-5"
      >
        <div class="d-flex">
          <p cols="12" sm="1" class="text-center hidden-sm-and-up">
            <img :src="skill.imageLink" :alt="skill.alt" />
          </p>
          <p cols="12" sm="1" class="hidden-xs-only">
            <img :src="skill.imageLink" :alt="skill.alt" />
          </p>
          <p v-if="skill.experience" class="green--text">
            ●
          </p>
        </div>
        <p class="ml-2 font-weight-bold">
          {{ skill.name }}
        </p>
        <p>
          {{ skill.description }}
        </p>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <!-- <div>
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
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Skill',
  data() {
    return {
      skills: [
        {
          name: 'HTML',
          imageLink:
            'https://img.icons8.com/color/48/000000/html-5--v1.png',
          alt: 'htmlのロゴ',
          description:
            'HTMLを使用して、スムーズに静的なWebサイトを構築できる。CSS3と組み合わせてコーディングすることができる。',
          experience: false,
        },
        {
          name: 'CSS',
          imageLink:
            'https://img.icons8.com/color/48/000000/css3.png',
          alt: 'cssのロゴ',
          description:
            'CSSを使用したアニメーションを実装することができる。HTML5と組み合わせてコーディングすることができる。',
          experience: false,
        },
        {
          name: 'JavaScript',
          imageLink:
            'https://img.icons8.com/color/48/000000/javascript--v1.png',
          alt: 'JavaScriptのロゴ',
          description:
            'JavaScriptと HTML/CSS を駆使して、動的なWebサイトを構築できる。Create.jsでゲーム開発ができる。',
          experience: true,
        },
        {
          name: 'Vue.js',
          imageLink:
            'https://img.icons8.com/color/48/000000/vue-js.png',
          alt: 'Vue.jsのロゴ',
          description:
            'VueCLI, VueRouter, Vuetify, Vuexを利用し、SFCを扱ったWebサイトを構築できる。',
          experience: false,
        },
        {
          name: 'Bootstrap',
          imageLink:
            'https://img.icons8.com/color/48/000000/bootstrap.png',
          alt: 'Bootstrapのロゴ',
          description:
            'Bootstrapを用いて、ブラウザ環境に最適なレスポンシブWebデザインのサイトを作ることができる。',
          experience: false,
        },
        {
          name: 'SQL',
          imageLink:
            'https://img.icons8.com/fluency/48/000000/database.png',
          alt: 'SQLのロゴ',
          description:
            'DDL, DMLを用いたデータの定義や顧客データなどを扱うSQL操作できる。',
          experience: true,
        },
        {
          name: 'mySQL',
          imageLink:
            'https://img.icons8.com/color/48/000000/mysql-logo.png',
          alt: 'mySQLのロゴ',
          description:
            'mySQL・PostgreSQLを用いた実際のDB管理及びCRUD処理操作などができる。',
          experience: true,
        },
        {
          name: 'Ruby',
          imageLink:
            'https://img.icons8.com/color/48/000000/ruby-programming-language.png',
          alt: 'Rubyのロゴ',
          description:
            '簡単なCRUD処理を用いたアプリケーションの作成ができる。人生で一番初めに勉強をしたプログラミング言語。',
          experience: false,
        },
        {
          name: 'PHP',
          imageLink:
            'https://img.icons8.com/dusk/48/000000/php-logo.png',
          alt: 'PHPのロゴ',
          description:
            'PHP（FuelPHP、Laravel）を用いたアプリケーションの作成・改修作業ができる。（建築業界向けの経験あり）',
          experience: true,
        },
        {
          name: 'Adobe Animate',
          imageLink:
            'https://img.icons8.com/color/48/000000/adobe-animate.png',
          alt: 'Adobe Animateのロゴ',
          description:
            'Animateと組み合わせて、作成されたイラストの細かい挙動の調整・データの可視化ができる。',
          experience: true,
        },
        {
          name: 'Adobe Illustrator',
          imageLink:
            'https://img.icons8.com/color/48/000000/adobe-illustrator--v1.png',
          alt: 'Adobe Illustratorのロゴ',
          description:
            'イラストのデザイン調整・修正・切り取り作業の実務経験あり。',
          experience: true,
        },
        {
          name: 'Docker',
          imageLink:
            'https://img.icons8.com/fluency/48/000000/docker.png',
          alt: 'Dockerのロゴ',
          description:
            'Dockerを用いた、コンテナ仮想化・アプリケーション開発ができる。CentOS Stream, Apache 2.4.48, PHP 8.0.8, Larvel 8 の構築経験あり',
          experience: true,
        },
      ],
    };
  },
};
</script>

<style></style>
