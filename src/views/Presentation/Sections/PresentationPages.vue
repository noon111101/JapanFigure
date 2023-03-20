<style scoped>

img {
  width: 100%;
  height: 100%;
}
</style>
<script>
import axios from 'axios';
import { RouterLink } from "vue-router";
import PresentationProductsAvailable from './PresentationProductsAvailable.vue';
// images

export default {
  data() {
    return {
      response: [],
    };
  },
  methods: {
    showAll() {
      axios.get('http://localhost:8000/api/products/title?id=0').then((response) => {
        console.log(response.data);
        this.response = response.data
      })
    },
  },
  created: function () {
    this.showAll()
  },
  components: { RouterLink, PresentationProductsAvailable },
};
</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="row text-center my-sm-5 mt-5">
          <div class="col-lg-6 mx-auto">
            <h2 class="">Sản phẩm có sẵn</h2>
            <p class="lead">Sản phẩm đang có sẵn, bạn có thể mua ngay</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-2">
      <div class=" p-3">
        <div class="row">
          <div class="col-md-6">
            <PresentationProductsAvailable/>
          </div>
          <div class="col-md-6">
            <RouterLink :to="{ path: '/collections/hang-co-san' }" class="dropdown-item border-radius-md groupbanner-hover">
              <img src="https://theme.hstatic.net/1000160337/1000885200/14/home_collection_2_banner.jpg?v=298" alt=""
                class="w-100 h-100 lazyloaded" />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
