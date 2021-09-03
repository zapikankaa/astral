<template>
  <button class="button" @click="clickHandler()">
    {{ text }}
    <div class="gradient"></div>
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    text: String,
    linkTo: String
  },
  data() {
    return {

    }
  },
  methods: {
    clickHandler() {
      if (this.linkTo) {
        console.log(this.$router);
        console.log(this.$route);
        this.$route.push('/'+this.linkTo);
      }
    }
  }
}
</script>

<style scoped>
@keyframes shine {
  20% {
    opacity: 1;
  }
  80% {
    left: 89px;
  }
  100% {
    left: 89px;
    opacity: 0;
  }
}

.button {
  position: relative;
  width: 179px;
  height: 40px;
  color: var(--color_white);
  font-size: 14px;
  font-family: var(--font-family_basic);
  font-weight: var(--font-weight_regular);
  border-width: 0;
  border-radius: 20px;
  background: linear-gradient(90deg, rgba(246, 200, 102, 0.9) -6.2%, rgba(254, 173, 53, 0.9) 100%);
}

.gradient {
  position: absolute;
  top: 0;
  left: -3px;
  background: linear-gradient(248.67deg, rgba(255, 255, 255, 0) 30.84%, rgba(255, 255, 255, 0.29) 46.06%, rgba(255, 255, 255, 0) 64.04%);
  width: 87px;
  height: 100%;
  animation: shine 2s ease-in-out 1s infinite normal forwards running;
  opacity: 0;
}
</style>
