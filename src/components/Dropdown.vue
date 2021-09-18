<template>
  <div
    class="select"
    @click="expand()"
    :class="{ focused: focused, incorrect: isIncorrect === true }">
    <div class="select__selected">{{ selected }}</div>
    <div class="select__arrow"></div>
    <div class="options" :class="{ hidden: optionsHidden | !focused }">
      <div
        class="options__item"
        v-for="value, key in values"
        :key="key"
        :value="'value' + key "
        @click="select(value)">{{ value }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: this.placeholder,
      optionsHidden: true
    }
  },
  props: {
    values: Array,
    placeholder: String,
    focused: {
      type: Boolean,
      default: false
    },
    isIncorrect: [ Boolean, String ]
  },
  methods: {
    // выпилить??? управление фокусом снаружи
    // при фокусировке(клике) на дропдауне открывается выпадающий список
    expand() {
      document.querySelector('.select').focus();
      this.optionsHidden = !this.optionsHidden;
    },
    select(value) {
      this.selected = value;
      this.$emit('dropdown-selected', { selectedValue: this.selected });
    }
  }
}
</script>
<style scoped>
select {
  display: none;
}

.select {
  position: relative;
  width: 179px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  background: linear-gradient(90deg, rgba(228, 228, 228, 0.9) -6.2%, rgba(203, 203, 203, 0.9) 100%);
  color: var(--color_black);
}

.select.focused {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4) inset;
}

.select.incorrect {
  border: 1px solid var(--color_danger);
}

.select__selected {
  font-size: 14px;
  line-height: 40px;
}

.select__arrow {
  position: absolute;
  right: 10px;
  top: 18px;
  width: 16px;
  height: 6px;
  background: no-repeat center center url('../assets/arrowDown.svg');
}

.options {
  z-index: 5;
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 140px;
  overflow: auto;
  border-radius: 20px;
  border: 1px solid var(--color_border);
  background: linear-gradient(90deg, rgba(228, 228, 228, 1) -6.2%, rgba(203, 203, 203, 1) 100%);
}

.options::-webkit-scrollbar {
  width: 0;
}

.options__item {
  width: 100%;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  border-bottom: 1px solid var(--color_border);
}

.options__item:hover {
  background-color: var(--color_border);
}

.options.hidden {
  height: 0;
  border: none;
}
</style>