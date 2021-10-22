<template>
  <button class="button" :class="{ button__green: type === 'green' }">
    {{ text }}
    <div class="gradient"></div>
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    text: String,
    type: {
      type: String,
      default: 'base'
    }
  },
  data() {
    return {

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
    left: 50%;
  }
  100% {
    left: 50%;
    opacity: 0;
  }
}

.button {
  position: relative;
  width: 179px;
  height: 40px;

  background: linear-gradient(90deg, rgba(246, 200, 102, 0.9) -6.2%, rgba(254, 173, 53, 0.9) 100%);

  font-family: var(--font-family_basic);
  font-size: 14px;
  font-weight: var(--font-weight_regular);
  color: var(--color_white);

  border-width: 0;
  border-radius: 20px;
}

.gradient {
  position: absolute;
  top: 0;
  left: -3px;
  width: 55%;
  height: 100%;

  background: linear-gradient(230deg, rgba(255, 255, 255, 0) 30.84%, rgba(255, 255, 255, 0.29) 46.06%, rgba(255, 255, 255, 0) 64.04%);
  opacity: 0;

  animation: shine 2s ease-in-out 0s infinite normal forwards running;
}

.button__green {
  width: 238px;
  height: 48px;

  background: linear-gradient(90deg, rgba(76, 217, 100, 0.9) -6.2%, rgba(50, 185, 73, 0.9) 100%);

  border-radius: 24px;
}

@media screen and (min-width: 800px) {
  .button {
    width: 311px;
    height: 70px;

    font-size: 20px;

    border-radius: 35px;
  }
}
</style>
