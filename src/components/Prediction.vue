<template>
  <div class="prediction">
    <div class="wrapper">
      <div class="prediction__cloud cloud">
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
  background: var(--color_black);
  min-height: 100vh;
}

.prediction__cloud {
  margin-bottom: 28px ;
}

.cloud {
  margin-top: 24px;
  width: 259px;
  height: 84px;
  background-color: var(--color_white);
  border-radius: 5px;
  position: relative;
  padding: 6px 13px;
  box-sizing: border-box;
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
  color: var(--color_black);
  font-size: 14px;
  line-height: 18px;
}

.cloud__text_bold {
  font-weight: var(--font-weight_bold);
}

.prediction__text {
  font-size: 14px;
  line-height: 16px;
  font-weight: var(--font-weight_light);
  width: 220px;
}

.prediction__block {
  width: 259px;
  border: 1px solid var(--color_white);
  border-radius: 3px;
  padding: 13px 15px 8px;
  box-sizing: border-box;
  margin-top: 19px;
  margin-bottom: 19px;
}

.prediction__block .text_uppercase {
  font-weight: var(--font-weight_bold);
}

.prediction__button {
  margin-top: 21px;
  margin-bottom: 23px;
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

.result {
  width: 100%;
  padding: 0 10px;
}

</style>
