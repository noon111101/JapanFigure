<script setup>
defineProps({
  data: {
    type: Array,
    required: true,
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        required: true,
      },
    },
  },
  col1: {
    type: String,
    default: "col-lg-3",
  },
  col2: {
    type: String,
    default: "col-lg-9",
  },
});
</script>
<script>
import axios from "axios";
import { RouterLink } from "vue-router";
import PresentationProductsNew from "./PresentationProductsNew.vue";
export default {
  data() {
    return {
      response: [],
    };
  },
  methods: {
    showAll() {
      axios
        .get("http://localhost:8000/api/products/title?id=1")
        .then((response) => {
          console.log(response.data);
          this.response = response.data;
        });
    },
  },
  created: function () {
    this.showAll();
  },
  components: { RouterLink, PresentationProductsNew },
};
</script>
<template>
  <section class=" ">
    <div class="container">
      <div class="row">
        <div class="row justify-content-center text-center my-sm-2">
          <div class="col-lg-6">
            <h2 class="text-dark mb-0">Sản phẩm Order</h2>
            <p class="lead">
              Những sản phẩm đã hoặc sắp phát hành & cần đặt trước
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-sm-3 mt-3">
      <div class="p-3">
        <div class="row">
          <!-- <div class="col-md-6">
            <RouterLink
              :to="{ name: 'Order' }"
              class="dropdown-item border-radius-md groupbanner-hover"
            >
              <img
                src="https://theme.hstatic.net/1000160337/1000885200/14/home_collection_1_banner.jpg?v=298"
                alt=""
                class="w-100 h-100 lazyloaded"
              />
            </RouterLink>
          </div> -->
          <div class="col-md-6">
            <RouterLink :to="{ path: '/collections/hang-order' }" class="dropdown-item border-radius-md groupbanner-hover">
              <img src="https://theme.hstatic.net/1000160337/1000885200/14/home_collection_1_banner.jpg?v=298" alt=""
                class="w-100 h-100 lazyloaded" />
            </RouterLink>
          </div>
          <div class="col-md-6">
            <PresentationProductsNew/>
          </div>
          <!-- <div class="col-md-6">
            <div class="row mb-4">
              <div class="col-md-4" v-for="(item, index) in response" :key="index">
                <RouterLink :to="{ name: 'about' }" class="dropdown-item border-radius-md ">
                  <img
                    src="https://product.hstatic.net/1000160337/product/nendoroid_saint_tail__1__d143ab1502bf4b3a8af312a18a61c43e_medium.jpg"
                    class="card-img-top  " alt="..." />
                  <div class="card-body">
                    <p class="card-text">
                      {{ item.figure }}
                    </p>
                    <h5 class="card-title">{{ item.price }}đ</h5>
                    <p class="card-text">
                      <button type="button" class="btn btn-dark">
                        Go somewhere
                      </button>
                    </p>
                    <a href="#" class="btn btn-primary d-none">Go somewhere</a>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>
