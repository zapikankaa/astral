<template>
  <div class="recording">
    <div class="wrapper">
      <img class="recording__mic" src="../assets/microphone.svg" alt="">
      <ProgressBar :progress="progress" class="recording__progress-bar"></ProgressBar>
      <p class="text_inaccent recording__progress-text">{{ progress }}%</p>
      <p class="text_inaccent recording__text">Запись сообщения</p>
    </div>
  </div>
</template>
<script>
import ProgressBar from '@/components/ProgressBar'

export default {
  components: {
    ProgressBar
  },
  data() {
    return {
      progress: 0
    }
  },
  mounted() {
    const timer = setInterval(() => {
      if (this.progress < 100) {
        const n = Math.round(Math.random() * 10)
        if (this.progress + n < 100) this.progress += n
        else if (this.progress + n === 100) {
          this.progress += n
          clearInterval(timer);
          this.$router.push('/prediction');
        }
      }
    }, 100)
  }
}
</script>
<style scoped>
.recording {
  z-index: 1000;
  background: var(--color_black);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  padding-top: 36vh;
  box-sizing: border-box;
}

.recording__mic {
  width: 146.5px;
  height: 69px;
  margin-bottom: 40px;
}

.recording__progress-bar {
  margin: 0 auto;
  margin-bottom: 24px;
}

.recording__progress-text {
  width: 100%;
  font-size: 20px;
  line-height: 23px;
  font-family: var(--font-family_basic);
  margin-bottom: 12px;
}

.recording__text {

}

</style>