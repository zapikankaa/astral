<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Button text="Button"></Button>
  <Main></Main>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Button from '@/components/Button';
import Main from '@/components/Main'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Button,
    Main
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

</style>
