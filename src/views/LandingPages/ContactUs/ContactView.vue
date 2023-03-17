<script setup>
import { onMounted } from "vue";
//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
//images
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<script>
import axios from "axios";
export default {
  data() {
    return {
      response: [],
    };
  },
  methods: {
    showAll() {
      axios
        .get("http://localhost:8000/api/products/title?id=0")
        .then((response) => {
          console.log(response.data);
          this.response = response.data;
        });
    },
  },
  created: function () {
    this.showAll();
  },
};
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar
          :sticky="true"
          :action="{
            route: 'https://www.creative-tim.com/product/vue-material-kit-pro',
            color: 'bg-gradient-success',
            label: 'Buy Now',
          }"
        />
      </div>
    </div>
  </div>
  <Header>
    <div
      class="page-header min-vh-75"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
              Material Kit 2
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              Start the Development With Bootstrap 5 Design System inspired by
              Material Design.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>
  <div class="wrapper">
    <div class="container">
      <div class="row g-1">
        <div class="col-md-3" v-for="(item, index) in response" :key="index">
          <div class="card p-3">
            <div class="text-center">
              <img src="https://product.hstatic.net/1000160337/product/one_and_only__slam_dunk__hanamichi_sakuragi__2__e74fa9a1ff364a38aa375f30b73819d1_master.jpg" width="200" />
            </div>

            <div class="product-details">
              <span class="font-weight-bold d-block">{{ item.price }}</span>
              <span>{{ item.figure }}</span>

              <div class="buttons d-flex flex-row">
                <div class="cart"><i class="fa fa-shopping-cart"></i></div>
                <button class="btn btn-success cart-button btn-block">
                  <span class="dot">1</span>Add to cart
                </button>
              </div>

              <div class="weight">
                <small>1 piece 2.5kg</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>

<style>
body {
  background: #eee;
}

.wrapper {
  margin-top: 30px;
}

.card {
  border: 1px solid #eee;
  cursor: pointer;
}

.weight {
  margin-top: -65px;
  transition: all 0.5s;
}

.weight small {
  color: #e2dede;
}

.buttons {
  padding: 10px;
  background-color: #d6d4d44f;
  border-radius: 4px;
  position: relative;
  margin-top: 7px;
  opacity: 0;
  transition: all 0.8s;
}

.dot {
  height: 14px;
  width: 14px;
  background-color: green;
  border-radius: 50%;
  position: absolute;
  left: 27%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  color: #fff;
  opacity: 0;
}

.cart-button {
  height: 48px;
}

.cart-button:focus {
  box-shadow: none;
}

.cart {
  position: relative;
  height: 48px !important;
  width: 50px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 11px;
  border-radius: 5px;
  font-size: 14px;
  transition: 1s ease-in-out;
  overflow: hidden;
}

.cart-button.clicked span.dot {
  animation: item 0.3s ease-in forwards;
}

@keyframes item {
  0% {
    opacity: 1;
    top: 30%;
    left: 30%;
  }

  25% {
    opacity: 1;
    left: 26%;
    top: 0%;
  }

  50% {
    opacity: 1;
    left: 23%;
    top: -22%;
  }

  75% {
    opacity: 1;
    left: 19%;
    top: -18%;
  }

  100% {
    opacity: 1;
    left: 14%;
    top: 28%;
  }
}

.card:hover .buttons {
  opacity: 1;
}

.card:hover .weight {
  margin-top: 10px;
}

.card:hover {
  transform: scale(1.04);
  z-index: 2;
  overflow: hidden;
}
</style>

<script></script>
