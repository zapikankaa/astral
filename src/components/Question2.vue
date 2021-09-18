<template>
  <QuestionTemplate 
    headerText="Мы расскажем Вам не только подробности вашей смерти, но также поможем Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы."
    :questionNum="questionNum"
    questionText="Когда Вы чувствуете себя наиболее комфортно?">
    <Button
      v-for="button in buttons"
      :key="button.text"
      class="button"
      :text="button.text"
      @click="nextQuestion(button.text)">
    </Button>
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
      questionNum: 2,
      buttons: [ { text: 'Утро' },
                 { text: 'День' },
                 { text: 'Вечер' },
                 { text: 'Ночь' } ]
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
        questionNum: this.questionNum,
        answer
      });
      this.$store.commit({
        type: 'setLoading',
        isLoading: true
      });
      this.$router.push(`/question/${ this.questionNum + 1 }`)
    }
  }
}
</script>
<style scoped>
.button {
  margin-bottom: 20px;
}
</style>