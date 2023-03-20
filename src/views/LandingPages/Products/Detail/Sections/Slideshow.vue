<template>
  <div class="row" style="margin-top: 2%">
    <div class="col-2 list-img" style="margin-left: 2%; margin-top: 1%">
      <div v-for="(x, index) in imgs" :key="index">
        <img
          :src="x.src"
          alt=' One and Only " SLAM DUNK " Hanamichi Sakuragi '
          :width="60"
          data-bs-target="#carouselExample"
          :data-bs-slide-to="index"
        />
      </div>

      <!-- <img
        src="//product.hstatic.net/1000160337/product/one_and_only__slam_dunk__hanamichi_sakuragi__3__d8e8b1b0bb8549daa87ba49c1d8a405c_master.jpg"
        alt=' One and Only " SLAM DUNK " Hanamichi Sakuragi '
        :width="60"
        data-bs-target="#carouselExample"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      /> -->
    </div>
    <div class="col-9">
      <header class="header-2">
        <div id="carouselExample" class="page-header carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div class="carousel-inner">
            <!-- <div class="carousel-item" @click="show(1)">
              <img
                src="//product.hstatic.net/1000160337/product/one_and_only__slam_dunk__hanamichi_sakuragi__3__d8e8b1b0bb8549daa87ba49c1d8a405c_master.jpg"
                alt=' One and Only " SLAM DUNK " Hanamichi Sakuragi '
              />
            </div> -->
            <div
              class="carousel-item active"
              v-for="(x, index) in imgs"
              :key="index"
              @click="show(index)"
            >
              <img
                :src="x.src"
                alt=' One and Only " SLAM DUNK " Hanamichi Sakuragi '
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        {
          src: "//product.hstatic.net/1000160337/product/one_and_only__slam_dunk__hanamichi_sakuragi__2__e74fa9a1ff364a38aa375f30b73819d1_master.jpg",
        },
        {
          src: "//product.hstatic.net/1000160337/product/one_and_only__slam_dunk__hanamichi_sakuragi__3__d8e8b1b0bb8549daa87ba49c1d8a405c_master.jpg",
        },
      ],
      imgs1: [
        {
          src: "//product.hstatic.net/1000160337/product/one_and_only__slam_dunk__hanamichi_sakuragi__3__d8e8b1b0bb8549daa87ba49c1d8a405c_master.jpg",
        },
        {
          src: "//product.hstatic.net/1000160337/product/one_and_only__slam_dunk__hanamichi_sakuragi__2__e74fa9a1ff364a38aa375f30b73819d1_master.jpg",
        },
      ],
    };
  },
  methods: {
    show(index) {
      if (index === 0) {
        this.$viewerApi({
          images: this.imgs,
        });
      } else if (index === 1) {
        this.$viewerApi({
          images: this.imgs1,
        });
      }
    },
    getIndex() {
      var myCarousel = document.getElementById("myCarousel");
      myCarousel.click();
      myCarousel.addEventListener("slide.bs.carousel", function () {
        // do something...
      });
    },
  },
};
</script>

<style>
img {
}
.list-img img {
  margin-bottom: 9%;
}
</style>
