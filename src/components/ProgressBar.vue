<template>
  <div class="progress-bar">
    <div class="progress-bar__progress" :style="style"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      maxProgress: 100,
      minProgress: 0
    }
  },
  props: {
    progress: {
      type: Number,
      required: true
    }
  },
  computed: {
    style() {
      return `width: ${ this.progress }%`
    }
  }
}
</script>
<style scoped>
.progress-bar {
  width: 259px;
  height: 4px;
  background: var(--color_white);
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
}

.progress-bar__progress {
  height: 100%;
  box-sizing: border-box;
  background: var(--color_accent);
  border: 1px solid var(--color_accent);
  border-radius: 5px;
}

</style>