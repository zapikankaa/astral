<template>
  <QuestionTemplate
    headerText="Уже совсем скоро Вы узнаете много интересного о своем будущем!"
    :questionNum="questionNum"
    questionText="Укажите свою дату рождения:">
    <Dropdown
      v-for="dd, key in dropdowns"
      :key="key"
      class="item"
      @dropdown-selected="dropdownSelect($event)"
      @click="dropdownFocus(key)"
      :values="dd.values"
      :placeholder="dd.placeholder"
      :focused="activeDropdown === key"
      :isIncorrect="dd.isIncorrect"></Dropdown>
    <Button class="item" text="Далее" @click="nextQuestion"></Button>
  </QuestionTemplate>
</template>
<script>
import QuestionTemplate from '@/components/QuestionTemplate';
import Dropdown from '@/components/Dropdown';
import Button from '@/components/Button';

export default {
  components: {
    QuestionTemplate,
    Dropdown,
    Button
  },
  data() {
    return {
      questionNum: 3,
      activeDropdown: 'day',
      birthday: {
        day: '',
        month: '',
        year: ''
      },
      dropdowns: {
        day: {
          values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31 ],
          placeholder: 'День',
          focused: this.activeDropdown === 'day',
          isIncorrect: 'init'
        },
        month: {
          // поменять values на цифры
          values: [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ],
          placeholder: 'Месяц',
          focused: this.activeDropdown === 'month',
          isIncorrect: 'init'
        },
        year: {
          values: [],
          placeholder: 'Год',
          focused: this.activeDropdown === 'year',
          isIncorrect: 'init'
        }
      }
    }
  },
  beforeMount() {
    const currentYear = this.$store.state.today.getFullYear();
    for (let i = currentYear; i > 1900; i--) {
      this.dropdowns.year.values.push(i);
    }
  },
  mounted() {
    this.$store.commit({
      type: 'setLoading',
      isLoading: false
    });
  },
  methods: {
    nextQuestion() {
      if (!this.birthdayFormatted) return;
      this.$store.commit({
        type: 'setAnswer',
        questionNum: this.questionNum,
        answer: this.birthdayFormatted
      });
      this.$store.commit({
        type: 'setLoading',
        isLoading: true
      });
      this.$router.push(`/question/${ this.questionNum + 1 }`)
    },
    dropdownSelect(e) {
      switch (this.activeDropdown) {
        case 'day':
          this.birthday.day = e.selectedValue;
          break;
        case 'month':
          this.birthday.month = e.selectedValue;
          break;
        case 'year':
          this.birthday.year = e.selectedValue;
      }
    },
    dropdownFocus(dropdown) {
      this.activeDropdown = dropdown;
      this.dropdowns[dropdown].isIncorrect = false;
    },
    checkBirthdaySelect() {
      let allSelected = true;
      for (let value in this.birthday) {
        if (this.birthday[value] === '') {
          this.dropdowns[value].isIncorrect = true
          allSelected = false;
        }
      }
      return allSelected;
    },
    validateBirthday() {
      if (!this.checkBirthdaySelect()) return false;

      const month = this.dropdowns.month.values.indexOf(this.birthday.month) + 1,
            isYearLeap = this.birthday.year % 4 === 0 ? true : false;

      switch (month) {
        case 1:
          return this.validateDay(31)
        case 2:
          if (isYearLeap) {
            return this.validateDay(29)
          } else {
            return this.validateDay(28)
          }
        case 3:
          return this.validateDay(31)
        case 4:
          return this.validateDay(30)
        case 5:
          return this.validateDay(31)
        case 6:
          return this.validateDay(30)
        case 7:
          return this.validateDay(31)
        case 8:
          return this.validateDay(31)
        case 9:
          return this.validateDay(30)
        case 10:
          return this.validateDay(31)
        case 11:
          return this.validateDay(30)
        case 12:
          return this.validateDay(31)
      }
    },
    validateDay(monthDays) {
      if (this.birthday.day > monthDays) {
        this.dropdowns.day.isIncorrect = true;
        this.dropdowns.month.isIncorrect = true;
        return false;
      }
      return true;
    }
  },
  computed: {
    birthdayFormatted() {
      if (!this.validateBirthday()) {
        return false;
      }
      
      let month = this.dropdowns.month.values.indexOf(this.birthday.month) + 1;
      month = month > 9 ? month : `0${ month }`;
      return `${ this.birthday.year }-${ month }-${ this.birthday.day }`;
    }
  }
}
</script>
<style scoped>
.item {
  margin-bottom: 20px;
}
</style>