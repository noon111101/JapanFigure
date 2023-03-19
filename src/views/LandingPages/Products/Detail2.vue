<template>
  <div>
    <b-row class="Sobre" id="sobre">
      <b-row>
        <b-col md="12">
          <h1 class="titulo">SOBRE O SITE</h1>
          <hr id="linhadotitulo" />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-row>
            <b-col md="2">
              <div class="textModelo">
                <div v-for="(x, index) in imgs" :key="index">
                  <img
                    @click="onSlideStart(index)"
                    :src="x.src"
                    id="imgList"
                    alt="sdd"
                  />
                </div>
              </div>
            </b-col>
            <b-col md="10">
              <div style="width: 100%; margin-top: 8%">
                <b-carousel
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  ref="myCarousel"
                  background="#ababab"
                  id="carousel-no-animation"
                  style="text-shadow: 0px 0px 2px #000"
                  no-animation
                >
                  <viewer>
                    <template
                    >
                      <b-carousel-slide
                        v-for="(photo, index) in imgs"
                        :key="index"
                        :img-src="photo.src"
                        img-width="200px"
                        style="height: 400px"
                      >
                      </b-carousel-slide>
                    </template>
                  </viewer>
                </b-carousel>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <div style="margin-top: 20px"><hr /></div>
    </b-row>
  </div>
</template>

<script>
import 'viewerjs/dist/viewer.css'
import { component as Viewer } from "v-viewer"
export default {
  components: {
    Viewer,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      imgs: [
        {
          src: "https://antimatter.vn/wp-content/uploads/2022/05/hinh-anh-gai-xinh-cap-2-3.jpg",
        },
        {
          src: "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-anh-meo-cute-1.jpg",
        },
      ],
    };
  },
  methods: {
    onSlideStart(index) {
      this.$refs.myCarousel.setSlide(index);
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style>
.sr-only {
  display: none;
}

.Sobre {
  margin: 150px 40px 0 40px !important;
  display: flex;
  text-align: center;
}

.carousel-fade img {
  height: 350px !important;
  height: 350px;
}

.textModelo {
  margin-top: 30px !important;
  text-align: left;
}

.titulo {
  text-align: center;
  color: burlywood;
}
#linhadotitulo {
  margin-bottom: 50px;
  margin-top: 0;
  margin-left: 35%;
  width: 30%;
  height: 4px;
  color: burlywood;
}

#img {
  height: 100%;
  width: 100%;
  margin: 10px;
}
#imgList {
  width: 80%;
  margin: 10%;
}

/* #album {
  display: contents;
} */
</style>
