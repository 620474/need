<template>
  <div>
    <slot>
    </slot>
    <img :src="img" @click="clickOn" />
  </div>
</template>

<script>
export default {
  name: 'MiniGallery',
  props:['id','img'],
  methods: {
    clickOn() {
      this.$emit('clicked', this.id);
    }
  }
}
</script>

<style scoped>

</style>
