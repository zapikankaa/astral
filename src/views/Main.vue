<template>
  <div class="main">
    <header class="header">
      <div class="wrapper">
        <p class="text_inaccent">Лучшие астрологи и экстрасенсы Румынии</p>
      </div>
    </header>
    <section class="main-section">
      <div class="wrapper">
        <p class="text_inaccent main-section__accuracy accuracy">Точность прогноза: 97%</p>
        <div class="big-eye"></div>
        <div class="flare"></div>
        <div class="woman"></div>
        <p class="text_accent main-section__question">
          Вас беспокоит вопрос о том, <br/>
          <span class="text_uppercase">когда Вы покинете этот Мир и при каких обстоятельствах?</span>
        </p>
        <Dropdown
          @dropdown-selected="dropdownSelect($event, 'day')"
          class="dropdown"
          :values="dropdownValues"
          :placeholder="dropdownPlaceholder"
          :isEmpty="dropdownEmpty"
          @click="dropdownFocus('day')"
          :focused="activeDropdown === 'day'">
        </Dropdown>
        <Dropdown
          @dropdown-selected="dropdownSelect($event, 'month')"
          class="dropdown"
          :values="dropdown1Values"
          :placeholder="dropdown1Placeholder"
          :isEmpty="dropdown1Empty"
          @click="dropdownFocus('month')"
          :focused="activeDropdown === 'month'">
        </Dropdown>
        <a href="#offer">
          <Button class="main-section__button" text="Да" linkTo=""></Button>
        </a>
        <a href="#prove">
          <Button class="main-section__button" text="Нет"></Button>
        </a>
        <p class="text_inaccent" @click="clickHandler">Онлайн предсказание</p>
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
            Многие не верят предсказаниям и мы решили доказать каждому, 
            <span class="text_accent">что прогноз может изменить жизнь любого человека!</span>
          </p>
        </div>
      </div>
    </section>
    <section class="question-section">
      <div class="wrapper">
        <p class="question-section__text text_accent text_uppercase">
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
      </div>
      <div class="eye"></div>
      <div class="moon"></div>
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
import Dropdown from '@/components/Dropdown';

export default {
  components: {
    Button,
    Dropdown
  },
  data() {
    return {
      isTermsHidden: true,
      dropdownValues: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
      dropdownPlaceholder: 'День',
      dropdown1Values: [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ],
      dropdown1Placeholder: 'Месяц',
      dropdownEmpty: false,
      dropdown1Empty: false,
      activeDropdown: 'day',
      selectedDay: '',
      selectedMonth: ''
    }
  },
  mounted() {
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
    dropdownSelect(e, dropdown) {
      if (dropdown === 'day') this.selectedDay = e.selectedValue
      else if (dropdown === 'month') this.selectedMonth = e.selectedValue
    },
    clickHandler() {
      if (this.selectedDay === '') this.dropdownEmpty = true 
      if (this.selectedMonth === '') this.dropdown1Empty = true 
    },
    dropdownFocus(dropdown) {
      this.activeDropdown = dropdown;
      if (dropdown === 'day') this.dropdownEmpty = false
      if (dropdown === 'month') this.dropdown1Empty = false
    }
  },
  created() {
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
.main {
  background-color: var(--color_black);
  background-size: cover;
  font-family: var(--font-family_basic);
  color: var(--color_white);
}

.flare {
  position: absolute;
  width: 382px;
  height: 402px;
  top: -7px;
  left: -17px;
  background: no-repeat center center url('../assets/blik.png');
  background-size: cover;
}

.big-eye {
  position: absolute;
  width: 198.59px;
  height: 198.51px;
  left: calc(50% - 99.3px);
  top: 94px;
  opacity: 0.2;
  background: no-repeat center center url('../assets/icon1.svg');
}

.woman {
  position: absolute;
  width: 138px;
  height: 138px;
  left: calc(50% - 69px);
  top: 125px;
  background: no-repeat center center url(../assets/woman1.png);
  background-size: contain;
}

.header {
  padding-top: 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color_border);
}

.header__text {
  text-align: center;
}

.main-section {
  padding-top: 7px;
}

.main-section__accuracy {
  margin-bottom: 239px;
}

.accuracy {
  font-size: 20px;
  line-height: 23px;
}

.main-section__question {
  width: 280px;
  margin-bottom: 23px;
}

.main-section__button {
  margin-bottom: 20px;
}

.offer-section {
  padding-top: 75px;
  padding-bottom: 40px;
}

.offer {
  position: relative;
  padding: 58px 23px 20px;
  box-sizing: border-box;
  width: 255px;
  border: 1px solid var(--color_white);
  border-radius: 3px;
}

.offer__img {
  width: 80px;
  height: 80px;
  position: absolute;
  top: -40px;
  left: calc(50% - 40px);
}

.offer__text {
  font-size: 16px;
  line-height: 25px;
}

.offer__text .text_accent {
  font-weight: var(--font-weight_medium);
  font-size: 20px;
}

.prove-section {
  height: 331px;
  background: no-repeat center center url('../assets/image7.jpg');
  background-size: cover;
}

.prove-section__cover {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: rgba(32, 32, 36, 0.8);
  padding-top: 102px;
}

.prove-section__text {
  width: 220px;
  font-size: 16px;
  line-height: 25px;
}

.prove-section__text .text_accent {
  font-size: 20px;
}

.question-section {
  padding-top: 53px;
  position: relative;
}

.question-section__text {
  margin-bottom: 27px;
  width: 100%;
}

.question-section__button {
  margin-bottom: 20px;
}

.runes {
  padding-top: 44px;
  margin-bottom: 33px;
}

.runes__img {
  margin-bottom: 37px;
}

.runes__text {
  font-family: var(--font-family_additional);
  font-size: 20px;
  line-height: 28px;
  width: 210px;
  margin-bottom: 33px;
}

.terms {
  font-size: 7px;
  line-height: 9px;
  letter-spacing: 3px;
  width: 294px;
}

.terms.hidden {
  height: 18px;
  overflow: hidden;
}

.question-section .eye {
  top: 280px;
  right: -30px;
}

.question-section .moon {
  top: 465px;
  left: -15px;
}

.dropdown {
  margin-bottom: 20px;
}
</style>