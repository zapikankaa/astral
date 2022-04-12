<template>
  <div class="prediction">
    <div class="wrapper">
      <div class="cloud">
        <p class="cloud__text">Спасибо за ваши ответы!</p>
        <p class="cloud__text cloud__text_bold">Мы подготовили для вас персональную аудиозапись с вашим прогнозом.</p>
        <div class="cloud__corner"></div>
      </div>
      <p class="prediction__text">
        Вы можете узнать, как повлиять на события, которые ожидают вас в ближайшем будущем.
      </p>
      <div class="prediction__block">
        <div class="text_accent">
          <span class="text_uppercase">Первое значимое событие может произойти уже {{ tomorrow }},</span>
           Вам надо быть готовым, чтобы последствия не оказались необратимыми.
        </div>
      </div>
      <p class="prediction__text">
        Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона. Прослушайте важную информацию!
      </p>
      <Button
        @click="listen"
        class="prediction__button"
        text="Позвонить и прослушать"
        type="green">
      </Button>
      <div class="result">
        <p
          v-for="value, key in result"
          :key="value"
          class="result__item">
          <span class="text_uppercase">{{ key }}:</span> 
          <span class="text_accent">{{ value }}</span>
        </p>
      </div>
    </div>
    <footer class="footer" @click="isTermsHidden = !isTermsHidden">
      <div class="wrapper">
        <p class="terms text_inaccent" :class="{ hidden: isTermsHidden }">TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, </p>
      </div>
    </footer>
  </div>
</template>
<script>
import Button from '@/components/Button'

export default {
  components: {
    Button
  },
  data() {
    return {
      isTermsHidden: true,
      result: {}
    }
  },
  mounted() {
    this.$store.commit({
      type: 'setRecording',
      isRecording: false
    });
  },
  beforeUpdate() {
    this.$store.commit({
      type: 'setLoading',
      isLoading: false
    });
  },
  methods: {
    async listen() {
      this.$store.commit({
        type: 'setLoading',
        isLoading: true
      });
      await fetch('https://swapi.dev/api/people/1/')
        .then(response => response.json())
        .then(result => { 
          this.result = result
        })
        .catch(err => console.log(err));
    }
  },
  computed: {
    tomorrow() {
      const tomorrow = new Date(this.$store.state.today.getTime() + 24 * 60 * 60 * 1000);
      const day = tomorrow.getDate();
      const month = tomorrow.getMonth() + 1 > 9 ? tomorrow.getMonth() + 1 : `0${ tomorrow.getMonth() + 1 }`;
      const year = tomorrow.getFullYear();
      return `${ day }.${ month }.${ year }`
    }
  },
  watch: {
    isTermsHidden(hidden) {
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
.prediction {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: var(--color_black);

  min-height: 100vh;
}

/* Cloud */
.cloud {
  position: relative;
  box-sizing: border-box;
  
  width: 259px;
  height: 84px;
  margin-top: 24px;
  margin-bottom: 28px;
  padding: 6px 13px;

  background-color: var(--color_white);

  border-radius: 5px;
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

.cloud__text {
  font-size: 14px;
  line-height: 18px;
  color: var(--color_black);
}

.cloud__text_bold {
  font-weight: var(--font-weight_bold);
}

/* Prediction elements */
.prediction__text {
  width: 220px;

  font-size: 14px;
  line-height: 16px;
  font-weight: var(--font-weight_light);
}

.prediction__block {
  box-sizing: border-box;

  width: 259px;
  margin-top: 19px;
  margin-bottom: 19px;
  padding: 13px 15px 8px;

  border: 1px solid var(--color_white);
  border-radius: 3px;  
}

.prediction__block .text_uppercase {
  font-weight: var(--font-weight_bold);
}

.prediction__button {
  margin-top: 21px;
  margin-bottom: 23px;
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

.result {
  width: 100%;
  padding: 0 10px;
}

@media screen and (min-width: 800px) {
  /* Cloud */
  .cloud {
    width: 480px;
    height: 164px;
    margin-top: 54px;
    margin-bottom: 36px;
    padding: 6px 8px;
  }

  .cloud__corner {
    bottom: -19px;
    
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-top: 25px solid var(--color_white);
  }

  .cloud__text {
    font-size: 25px;
    line-height: 35px;
  }

  /* Prediction */
  .prediction__text {
    width: 469px;

    font-size: 25px;
    line-height: 35px;
  }

  .prediction__block {
    width: 480px;
    margin-top: 31px;
    margin-bottom: 31px;
    padding: 64px 42px 48px;
  }

  .prediction__button {
    margin-top: 35px;
    margin-bottom: 53px;
  }

  /* Terms */
  .terms {
    width: 488px;

    font-size: 12px;
    line-height: 18px;
  }

  .terms.hidden {
    height: 36px;
  }
}
</style>
