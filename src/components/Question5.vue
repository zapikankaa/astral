<template>
  <QuestionTemplate
    :headerText="headerTextFull"
    :questionNum="questionNum"
    :wideHeader="true"
    :cloudedHeader="true"
    questionText="Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?">
    <Button
      class="button"
      v-for="button in buttons"
      :key="button.text"
      :text="button.text"
      @click="next(button.text)"></Button>
  </QuestionTemplate>
</template>
<script>
import QuestionTemplate from '@/components/QuestionTemplate';
import Button from '@/components/Button';

export default {
  components: {
    QuestionTemplate,
    Button
  },
  data() {
    return {
      questionNum: 5,
      headerTextBase: 'По вам скучает очень близкий человек, которого больше нет в мире живых.',
      buttons: [ { text: 'Да' },
                 { text: 'Затрудняюсь ответить' } ]
    }
  },
  mounted() {
    this.$store.commit({
      type: 'setLoading',
      isLoading: false
    });
  },
  methods: {
    next(answer) {
      this.$store.commit({
        type: 'setAnswer',
        questionNum: this.questionNum,
        answer
      });
      this.$store.commit({
        type: 'setRecording',
        isRecording: true
      });
    }
  },
  computed: {
    age() {
      const birthday = new Date(Date.parse(this.$store.state.answers.question3));
      const today = this.$store.state.today;
      let age = today.getFullYear() - birthday.getFullYear();
      if (today.getMonth() == birthday.getMonth()) {
        if (today.getDate() < birthday.getDate()) {
          age--;
        }
      } else if (today.getMonth() < birthday.getMonth()) {
        age--;
      }
      return age;
    },
    headerTextFull() {
      if (this.age <= 35) return this.headerTextBase;
      else if (this.age >= 36 && this.age <= 45) return `${ this.headerTextBase } Возможно это дедушка или бабушка`;
      else return `${ this.headerTextBase } Возможно это кто-то из Ваших родителей`
    }
  }
}
</script>
<style scoped>
.button {
  margin-bottom: 20px;
}
</style>