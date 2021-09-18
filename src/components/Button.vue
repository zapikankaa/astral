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
  background: linear-gradient(230deg, rgba(255, 255, 255, 0) 30.84%, rgba(255, 255, 255, 0.29) 46.06%, rgba(255, 255, 255, 0) 64.04%);
  width: 55%;
  height: 100%;
  animation: shine 2s ease-in-out 0s infinite normal forwards running;
  opacity: 0;
}

.button__green {
  width: 238px;
  height: 48px;
  border-radius: 24px;
  background: linear-gradient(90deg, rgba(76, 217, 100, 0.9) -6.2%, rgba(50, 185, 73, 0.9) 100%);
}
</style>
