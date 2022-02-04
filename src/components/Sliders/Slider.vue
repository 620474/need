<template>
  <div>
    <div class="slider">
      <div class="minigallery">
        <mini-gallery
          v-for="(slide, i) in slides"
          :key="i"
          :img="slide.img"
          :id="slide.id"
          :class="{ active: slideNumber === i }"
          @clicked="selectImg"
        >

        </mini-gallery>
        <button class="button-down">Down</button>
      </div>
      <div class="sliders">
        <carousel :slideNumber="slideNumber" :selectImg="selectImg">
          <carousel-slide v-for="(slide, i) in slides" :key="i">
            <img :src="slide.img" @click="selectImg(i)" class="imgsize" v-show="slideNumber===i"/>
          </carousel-slide>
        </carousel>
      </div>
      <div class="info">

      </div>
    </div>
    <div class="description">
      <h2>Description</h2>
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel/Carousel';
import CarouselSlide from './Carousel/CarouselSlide';
import MiniGallery from './MiniGallery/MiniGallery';

export default {
  name: 'Slider',
  components: { CarouselSlide, Carousel, MiniGallery },
  data: () => ({
    slides: [
      {
        id: 0,
        img: 'https://picsum.photos/id/1032/900/700'
      },
      {
        id: 1,
        img: 'https://picsum.photos/id/1037/900/600'
      },
      {
        id: 2,
        img: 'https://picsum.photos/id/1035/900/500'
      },
      {
        id: 3,
        img: 'https://picsum.photos/id/1036/900/700'
      }
    ],
    slideNumber: 0
  }),
  methods: {
    selectImg(i) {
      this.slideNumber = i;
    },
    sayhi(i) {
      console.log(i)
    }
  }
};
</script>

<style scoped>
.slider {
  display: flex;
  width: 80%;
}
.minigallery {
  flex-direction: column;
  height: 80%;
  margin-top: 1%;
  margin-right: 2%;
  margin-bottom: 10%;
  width: 25%;
  float: left;
}
.minigallery img {
  position: relative;
}
.active {
  border: 3px solid #00a8e1;
}
.info {
  width: 15.5%;
}
.button-down {
  height: 15%;
}
.imgsize {
  max-height: 100%;
  max-width: 100%;
}
</style>
