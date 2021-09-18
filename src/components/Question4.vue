<template>
  <QuestionTemplate
    headerText="Смерть родного человека – одно из тяжелейших испытаний в жизни каждого из нас!"
    :questionNum="questionNum"
    questionText="Снятся ли Вам умершие люди?">
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
      questionNum: 4,
      buttons: [ { text: 'Да' },
                 { text: 'Нет' },
                 { text: 'Иногда' } ]
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