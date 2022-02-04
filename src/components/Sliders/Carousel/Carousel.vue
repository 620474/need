<template>
  <div class="carousel">
    <slot></slot>
    <div class="carousel__pagination">
      <button
        v-for="n in slidesCount"
        :key="n"
        @click="goto(n - 1)"
        :class="{ active: slideNumber === n - 1 }"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: ['slideNumber', 'selectImg'],
  data: () => {
    return {
      slides: [],
      index: 0,
      direction: null,
      number: 0
    };
  },

  mounted() {
    this.slides = this.$children;
    this.index = this.slideNumber;
    this.slides.forEach((slide, i) => {
      slide.index = i;
    });
  },
  computed: {
    slidesCount() {
      return this.slides.length;
    }
  },
  methods: {
    goto(index) {
      this.direction = index > this.index ? 'right' : 'left';
      this.selectImg(index);
    }
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
}

.carousel__pagination {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
}

.carousel__pagination button {
  width: 15px;
  height: 15px;
  border: none;
  background: rgba(230, 230, 230, 0.63);
  opacity: 0.5;
  margin: 0.2em;
  border-radius: 50%;
  cursor: pointer;
}

.carousel__pagination button.active {
  opacity: 1;
  background: rgb(44, 93, 243);
}
</style>
