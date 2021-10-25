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
/* Select */
select {
  display: none;
}

.select {
  box-sizing: border-box;
  position: relative;

  width: 179px;
  height: 40px;
  
  background: linear-gradient(90deg, rgba(228, 228, 228, 0.9) -6.2%, rgba(203, 203, 203, 0.9) 100%);
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.4);

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

  background: no-repeat center center url('../assets/arrowDown.svg');
  background-size: contain;

  width: 13px;
  height: 5px;
}

/* Options */
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

  transition: .2s height ease;
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

@media screen and (min-width: 800px) {
  /* Select */
  .select {
    width: 311px;
    height: 70px;

    border-radius: 35px;
  }

  .select__selected {
    font-size: 20px;
    line-height: 70px;
  }

  .select__arrow {
    right: 15px;
    top: 30px;

    width: 22px;
    height: 8px;
  }

  /* Options */
  .options {
    top: 70px;

    height: 245px;

    border-radius: 35px;
  }

  .options__item {
    height: 70px;

    font-size: 20px;
    line-height: 70px;
  }
}
</style>