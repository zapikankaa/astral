<template>
  <div class="main">
    <header class="header">
      <div class="wrapper">
        <h1 class="text_inaccent">Лучшие астрологи и экстрасенсы Румынии</h1>
      </div>
    </header>
    <section class="intro-section visible" id="intro">
      <div class="wrapper">
        <p class="text_inaccent intro-section__accuracy">Точность прогноза: 97%</p>
        <div class="intro-section__picture">
          <img class="intro-section__eye-img" src="../assets/icon1.svg" alt="">
          <img class="intro-section__woman-img" src="../assets/woman1.png" alt="">
        </div>
        <p class="text_accent intro-section__question">
          Вас беспокоит вопрос о том, <br/>
          <span class="text_uppercase">когда Вы покинете этот Мир и при каких обстоятельствах?</span>
        </p>
        <a href="#offer" class="intro-section__button">
          <Button text="Да"></Button>
        </a>
        <a href="#prove" class="intro-section__button">
          <Button text="Нет"></Button>
        </a>
        <h2 class="text_inaccent" @click="clickHandler">Онлайн предсказание</h2>
      </div>
    </section>
    <section class="offer-section" id="offer">
      <div class="wrapper">
        <div class="offer">
          <img class="offer__img" src="../assets/hands.png" />
          <p class="offer__text">
            Позвольте нам раскрыть эту волнующую тайну и <br/>
            <span class="text_accent">с точностью определить дату и время вашей смерти,</span> 
            а также предшествующую этому событию причину
          </p>
        </div>
      </div>
    </section>
    <section class="prove-section" id="prove">
      <div class="prove-section__cover">
        <div class="wrapper">
          <p class="prove-section__text">
            Многие не верят предсказаниям и мы решили доказать каждому, <br>
            <span class="text_accent">что прогноз может изменить жизнь любого человека!</span>
          </p>
        </div>
      </div>
    </section>
    <section class="question-section" id="question">
      <div class="wrapper">
        <p class="question-section__question text_accent text_uppercase">
          Боитесь ли вы умереть?
        </p>
        <Button class="question-section__button" text="Да" @click="nextQuestion('Да')"></Button>
        <Button class="question-section__button" text="Нет" @click="nextQuestion('Нет')"></Button>
        <p class="question-section__text text_inaccent">Вопрос 1-5</p>
        <div class="runes">
          <img class="runes__img" src="../assets/rune1.svg" />
          <p class="runes__text">Вы, конечно, умрете. <br> И все, с кем вы знакомы, тоже однажды умрут.</p>
          <img class="runes__img" src="../assets/rune2.svg">
        </div>

        <div class="eye question-section__eye">
          <img class="eye__img" src="../assets/eye.svg"/>
        </div>
        <div class="moon question-section__moon">
          <img class="moon__img" src="../assets/moon.svg" alt="">
        </div>
      </div>
    </section>
    <footer class="footer" @click="isTermsHidden = !isTermsHidden">
      <div class="wrapper">
        <p class="terms text_inaccent" :class="{ hidden: isTermsHidden }">TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, </p>
      </div>
    </footer>
  </div>
</template>
<script>
import Button from '@/components/Button';

export default {
  components: {
    Button
  },
  data() {
    return {
      isTermsHidden: true,
      isScrolling: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler);

    this.$store.commit({
      type: 'setLoading',
      isLoading: false
    });
  },
  methods: {
    nextQuestion(answer) {
      this.$store.commit({
        type: 'setAnswer',
        questionNum: 1,
        answer
      });
      this.$store.commit({
        type: 'setLoading',
        isLoading: true
      });
      this.$router.push('/question/2');
    },
    scrollHandler() {
      if (!this.isScrolling) {
        window.requestAnimationFrame(() => {
          this.useAnimation();
          this.isScrolling = false;
        });
      }
      this.isScrolling = true;
    },
    useAnimation() {
      const intro = document.querySelector('#intro'),
            offer = document.querySelector('#offer'),
            prove = document.querySelector('#prove'),
            question = document.querySelector('#question');

      if (this.isPartiallyVisible(intro)) {
        intro.classList.add('visible');
      } else {
        intro.classList.remove('visible');
      }
      if (this.isPartiallyVisible(offer)) {
        offer.classList.add('visible');
      } else {
        offer.classList.remove('visible');
      }
      if (this.isPartiallyVisible(prove)) {
        prove.classList.add('visible');
      } else {
        prove.classList.remove('visible');
      }
      if (this.isPartiallyVisible(question)) {
        question.classList.add('visible');
      } else {
        question.classList.remove('visible');
      }
    },
    isPartiallyVisible(element) {
      const boundingRect = element.getBoundingClientRect(),
            top = boundingRect.top,
            bottom = boundingRect.bottom,
            height = boundingRect.height;
            console.log('rect', boundingRect);
            console.log(window.innerHeight);
      return (top + height >= 0) && (height + window.innerHeight >= bottom);
    }
  },
  watch: {
    isTermsHidden: function(hidden) {
      setTimeout(() => {
        if (!hidden) {
          const termsElement = this.$el.querySelector('.terms');
          termsElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      }, 100);
    }
  }
}
</script>
<style scoped>

#intro,
#offer,
#prove,
#question {
  opacity: 0;
  transition: opacity 2s ease;
}

#intro.visible,
#offer.visible,
#prove.visible,
#question.visible {
  opacity: 1;
}

.main {
  width: 100%;
  overflow: hidden;

  background: url('../assets/blik.png') no-repeat 0 25px / contain;
  background-color: var(--color_black);

  font-family: var(--font-family_basic);
  color: var(--color_white);
}

/* Header */
.header {
  padding-top: 15px;
  padding-bottom: 8px;
}

.header::after {
  content: '';
  display: block;

  width: 100%;
  max-width: 1440px;
  height: 1px;
  margin: 8px auto 0;

  background-color: var(--color_border);
}

.header__text {
  text-align: center;
}

/* Intro-section */
.intro-section {
  padding-top: 7px;
}

.intro-section__accuracy {
  margin-bottom: 15px;

  font-size: 20px;
  line-height: 23px;
}

.intro-section__picture {
  position: relative;
  width: 70%;
  max-width: 390px;
  height: auto;
  aspect-ratio: 1;

  display: flex;
  justify-content: center;
  align-items: center;
}

.intro-section__eye-img {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;

  opacity: 0.2;
}

.intro-section__woman-img {
  width: 61%;
  z-index: 1;
}

.intro-section__question {
  width: 280px;
  margin-bottom: 23px;
}

.intro-section__button {
  margin-bottom: 20px;
}

/* Offer-section */
.offer-section {
  padding-top: 75px;
  padding-bottom: 40px;
}

.offer {
  position: relative;
  box-sizing: border-box;

  width: 255px;
  padding: 58px 23px 20px;
  
  border: 1px solid var(--color_white);
  border-radius: 3px;
}

.offer__img {
  width: 80px;
  height: 80px;

  position: absolute;
  top: -40px;
  transform: translateX(-50%);
}

.offer__text {
  font-size: 16px;
  line-height: 25px;
}

.offer__text .text_accent {
  font-weight: var(--font-weight_medium);
  font-size: 20px;
}

/* Prove-section */
.prove-section {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background: no-repeat url('../assets/image7.jpg') center center / cover;
}

.prove-section__cover {
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  background: rgba(32, 32, 36, 0.8);
}

.prove-section__text {
  width: 220px;
  margin-top: 105px;
  margin-bottom: 80px;

  font-size: 16px;
  line-height: 25px;
}

.prove-section__text .text_accent {
  font-size: 20px;
}

/* Question-section */
.question-section {
  padding-top: 53px;
}

.question-section__question {
  margin-bottom: 27px;
}

.question-section__button {
  margin-bottom: 20px;
}

.question-section__text {
  margin-bottom: 71px;
}

.question-section__eye {
  top: 227px;
  right: 0;
}

.question-section__moon {
  top: 412px;
  left: 0;
}

/* Runes */
.runes {
  margin-bottom: 70px;
}

.runes__img {
  width: 33px;
  margin-bottom: 37px;
}

.runes__img:last-child {
  margin-bottom: 0;
}

.runes__text {
  width: 210px;
  margin-bottom: 33px;

  font-family: var(--font-family_additional);
  font-size: 20px;
  line-height: 28px;
}

/* Terms */
.terms {
  width: 294px;

  font-size: 7px;
  line-height: 9px;
  letter-spacing: 3px;
}

.terms.hidden {
  height: 18px;
  overflow: hidden;
}

/* width > 800px */
@media screen and (min-width: 800px) {
  .main {
    background-image: url('../assets/blik_large.png');
    background-position: 0 -80px;
  }

  /* Header */
  .header {
    padding-top: 36px;
    padding-bottom: 20px;
  }

  .header::after {
    margin-top: 20px;
  }

  /* Intro */
  .intro-section {
    padding-top: 12px;
  }

  .intro-section__accuracy {
    margin-bottom: 42px;

    font-size: 25px;
    line-height: 29px;
  }

  .intro-section__question {
    width: 500px;
    margin-bottom: 65px;
  }

  .intro-section__button {
    margin-bottom: 35px;
  }

  /* Offer-section */
  .offer-section {
    padding-top: 150px;
    padding-bottom: 70px;
  }

  .offer {
    width: 443px;
    padding: 128px 40px 100px;
  }

  .offer__img {
    width: 136px;
    height: 136px;

    top: -68px;
  }

  .offer__text {
    font-size: 25px;
    line-height: 35px;
  }

  .offer__text .text_accent {
    font-size: 25px;
  }

  /* Prove-section */
  .prove-section {
    background-image: url('../assets/image7_large.png');
  }

  .prove-section__cover {
    background: rgba(0, 0, 0, 0);
  }

  .prove-section__text {
    width: 370px;
    margin-top: 240px;
    margin-bottom: 183px;

    font-size: 25px;
    line-height: 35px;
  }

  .prove-section__text .text_accent {
    font-size: 25px;
  }

  /* Question-section */
  .question-section {
    padding-top: 133px;
  }

  .question-section__question {
    margin-bottom: 47px;
  }

  .question-section__button {
    margin-bottom: 35px;
  }

  .question-section__text {
    margin-bottom: 110px;
  }

  .question-section__eye {
    top: 317px;
  }

  .question-section__moon {
    top: 667px;
  }

  /* Runes */
  .runes {
    margin-bottom: 153px;
  }

  .runes__img {
    width: 57px;
    margin-bottom: 80px;
  }

  .runes__text {
    width: 260px;
    margin-bottom: 71px;

    font-size: 25px;
    line-height: 35px;
  }

  /* Terms */
  .terms {
    width: 488px;

    font-size: 12px;
    line-height: 18px;
  }

  .terms.hidden {
    height: 37px;
  }
}


</style>