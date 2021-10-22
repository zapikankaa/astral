<template>
  <Loading v-if="$store.state.isLoading"></Loading>
  <Recording v-if="$store.state.isRecording"></Recording>
  <router-view></router-view>
</template>

<script>
import Loading from '@/components/Loading'
import Recording from '@/components/Recording'

export default {
  name: 'App',
  components: {
    Loading,
    Recording
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&family=Roboto:wght@300;400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;

  --font-family_basic:                'Roboto', sans-serif;
  --font-family_additional:           'Bad Script', cursive;

  --font-weight_light:                300;
  --font-weight_regular:              400;
  --font-weight_medium:               500;
  --font-weight_bold:                 700;

  --color_black:                      #202024;
  --color_white:                      #FFFFFF;
  --color_inaccent:                   rgba(255, 255, 255, 0.6);
  --color_accent:                     #F6C866;
  --color_border:                     rgba(255, 255, 255, 0.2);
  --color_danger:                     #EE5353;
}

.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  font-family: var(--font-family_basic);
  color: var(--color_white);
  text-align: center;
}

.text_uppercase {
  text-transform: uppercase;
}

.text_inaccent {
  letter-spacing: 0.1em;
  font-weight: var(--font-weight_light);
  color: var(--color_inaccent);
  font-size: 12px;
  line-height: 14px;
}

.text_accent {
  color: var(--color_accent);
  font-weight: var(--font-weight_regular);
  font-size: 16px;
  line-height: 25px;
}

/* Eye */
.eye {
  position: absolute;

  width: 90px;
  height: auto;
}

.eye__img {
  position: absolute;
  right: -33%;

  width: 100%;

  opacity: 0.2;
}

/* Moon */
.moon {
  position: absolute;

  width: 51px; 
  height: auto;
}

.moon__img {
  position: absolute;
  left: -30%;

  width: 100%;

  opacity: 0.2;
}

@media screen and (min-width: 800px) {
  .text_inaccent {
    font-size: 16px;
    line-height: 19px;
  }

  .text_accent {
    font-size: 25px;
    line-height: 35px;
  }

  .eye {
    width: 319px;
  }

  .moon {
    width: 160px;
  }
}

</style>
