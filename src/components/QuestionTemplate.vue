<template>
  <div class="question">
    <header v-if="cloudedHeader" class="header header_clouded">
      <div class="wrapper">
        <div class="cloud">
          <p class="header__text">{{ headerText }}</p>
          <div class="cloud__corner"></div>
        </div>
        <div class="eye question-section__eye">
          <img class="eye__img" src="../assets/eye.svg"/>
        </div>
      </div>
    </header>
    <header v-else class="header">
      <div class="wrapper">
        <p class="header__text">{{ headerText }}</p>
        <div class="eye question-section__eye">
          <img class="eye__img" src="../assets/eye.svg"/>
        </div>
      </div>
    </header>
    <main class="main" :class="{ padding_10: wideHeader }">
      <div class="wrapper">
        <div class="question__text text_accent text_uppercase">{{ questionText }}</div>
        <slot></slot>
      </div>
    </main>
    <footer class="footer">
      <div class="wrapper">
        <p class="question__title text_inaccent">Вопрос {{ questionNum }}-5</p>
        <div class="moon question-section__moon">
          <img class="moon__img" src="../assets/moon.svg" alt="">
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'Question',
  props: {
    headerText: String,
    questionNum: Number,
    questionText: String,
    wideHeader: {
      type: Boolean,
      required: false
    },
    cloudedHeader: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      questions: {
        question2: {
          headerText: 'Мы расскажем Вам не только подробности вашей смерти, но также поможем Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы.',
          questionText: 'Когда Вы чувствуете себя наиболее комфортно?'
        },
        question3: {
          headerText: 'Уже совсем скоро Вы узнаете много интересного о своем будущем!',
          questionText: 'Укажите свою дату рождения:'
        },
        question4: {
          headerText: 'Смерть родного человека – одно из тяжелейших испытаний в жизни каждого из нас!',
          questionText: 'Снятся ли Вам умершие люди?'
        },
        question5: {
          headerText: '',
          questionText: 'Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?'
        }
      }
    }
  }
}
</script>
<style scoped>
.question {
  background: var(--color_black);

  height: 100vh;
  overflow: hidden;
}

.question .wrapper {
  max-width: 556px;
  height: 100%;
}

.header {
  position: relative;
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 1440px;
  height: 22%;
  margin: 0 auto;
  
  border-bottom: 1px solid var(--color_border);
}

.header_clouded {
  display: block;
}

@keyframes appear {
  100% {
    opacity: 1;
  }
}

.cloud {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color_white);

  width: 259px;
  height: 84px;

  border-radius: 5px;
  
  animation: appear 5s ease-in-out 0s 1 normal forwards running;
  opacity: 0;
}

.cloud__corner {
  position: absolute;
  bottom: -10px;
  right: 18px;

  width: 0;
  height: 0;

  border-left: 7.5px solid transparent;
  border-right: 7.5px solid transparent;
  border-top: 13px solid var(--color_white);
}

.header__text {
  width: 235px;

  font-family: var(--font-family_additional);
  font-size: 14px;
  line-height: 20px;
  font-weight: var(--font-weight_regular);
  color: var(--color_white);

  opacity: 0.6;
}

.cloud .header__text {
  color: var(--color_black);

  opacity: 1;
}

.question .eye {
  right: 0;
  bottom: 0;
}

.question .moon {
  left: 0;
  bottom: 6vh;
}

.main {
  padding-top: 36px;
  padding-left: 40px;
  padding-right: 40px;
}

.main.padding_10 {
  padding-left: 10px;
  padding-right: 10px;
}

.question__text {
  margin-bottom: 40px;
}

.content__item {
  margin-bottom: 20px;
}

.footer {
  position: absolute;
  bottom: 0;

  height: 62px;
  width: 100%;
}

@media screen and (min-width: 800px) {
  .header__text {
    width: 412px;

    font-size: 25px;
    line-height: 35px;
  }

  .question__text {
    width: 503px;
  }

  .eye {
    width: 157px;
  }

  .moon {
    width: 89px;
  }

  .cloud {
    width: 480px;
    height: 164px;
  }

  .cloud__corner {
    bottom: -19px;
    
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-top: 25px solid var(--color_white);
  }

}

@media screen and (min-width: 800px) and (min-height: 800px) {
  .main {
    padding-top: 74px;
  }
}

</style>