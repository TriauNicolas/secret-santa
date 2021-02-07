<template>
  <div class="container is-max-desktop">
    <home-page
    v-if="people.length === 0"
    @data="people = $event"
    ></home-page>
    <draw
    v-if="people.length > 0"
    :people="(people)"
    ></draw>
  </div>
</template>

<script>
import homepage from './components/HomePage'
import draw from './components/Draw'

export default {
  components: {
    homePage: homepage,
    draw: draw,
  },

  data () {
    return {
      people: [],
    }
  },
};
</script>

<style>

.container {
  height: 100vh;
}

</style>
