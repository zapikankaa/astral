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
        <figure class="picture-section">
          <img class="picture-section__img" src="../assets/woman1.png" />
        </figure>
        <p class="text_accent main-section__question">
          Вас беспокоит вопрос о том, <br/>
          <span class="text_uppercase">когда Вы покинете этот Мир и при каких обстоятельствах?</span>
        </p>
        <Button class="main-section__button" text="Да" linkTo="#offer"></Button>
        <Button class="main-section__button" text="Нет"></Button>
        <p class="text_inaccent">Онлайн предсказание</p>
      </div>
    </section>
    <section class="offer-section" id="offer">
      <div class="offer">
        <img class="offer__img" src="../assets/hands.png" />
        <p class="offer__text">
          Позвольте нам раскрыть эту волнующую тайну и <br/>
          <span class="offer__text_accent">с точностью определить дату и время вашей смерти,</span> 
          а также предшествующую этому событию причину
        </p>
      </div>
    </section>
  </div>
</template>
<script>
import Button from '@/components/Button';

export default {
  components: {
    Button
  }
}
</script>
<style scoped>
.wrapper {
  margin: 0 auto;
  text-align: center;
}

.text_uppercase {
  text-transform: uppercase;
}

.text_inaccent {
  letter-spacing: 0.1em;
  font-weight: var(--font-weight_light);
  color: var(--color_inaccent);
  font-size: 12px;
  line-height: 14px;
}

.text_accent {
  color: var(--color_accent);
  font-weight: var(--font-weight_regular);
  font-size: 16px;
  line-height: 25px;
}

.main {
  /* height: 300px;  */
  background-color: var(--color_black);
  /* background-image: url('../assets/blik.png'); */
  background-size: cover;
  font-family: var(--font-family_basic);
  color: var(--color_white);
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
  margin-bottom: 37px;
}

.accuracy {
  font-size: 20px;
  line-height: 23px;
}

.picture-section {
  background: no-repeat center center url('../assets/icon1.svg');
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 14px;
}

.picture-section__img {
  display: block;
  height: 138px;
}

.main-section__question {
  width: 280px;
  margin: 0 auto;
  margin-bottom: 23px;
}

.main-section__button {
  margin-bottom: 20px;
}

.offer-section {
  padding-top: 75px;
}

.offer {
  position: relative;
  margin: 0 auto;
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
  text-align: center;
  font-size: 16px;
  line-height: 25px;
}

.offer__text_accent {
  color: var(--color_accent);
  font-weight: var(--font-weight_medium);
  font-size: 20px;
}

</style>