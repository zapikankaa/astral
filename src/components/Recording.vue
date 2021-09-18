<template>
  <div class="recording">
    <div class="recording__content">
      <img class="recording__mic" src="../assets/microphone.svg" alt="">
    </div>
  </div>
</template>
<style scoped>
.recording {
  z-index: 1000;
  background: var(--color_black);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  padding-top: 36%;
  box-sizing: border-box;
}

.recording__content {
  margin: 0 auto;
  text-align: center;
}

.recording__mic {
  width: 146.5px;
  height: 69px;
  margin-bottom: 39px;
}

</style>