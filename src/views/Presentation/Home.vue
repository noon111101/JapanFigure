<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";

//Vue Material Kit 2 components

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationPages from "./Sections/PresentationPages.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
// import PresentationInformation from "./Sections/PresentationInformation.vue";
import PersentationScaleFigure from "./Sections/PersentationScaleFigure.vue";
import PersentationFooter from "./Sections/PersentationFooter.vue"
//images
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header style="z-index: 5;">
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
  <div style="background-color: white;">
    <PresentationCounter />
    <br>
    <br>
    <PresentationInformation />
    <PresentationExample :data="data" />
    <PresentationPages />
    <BuiltByDevelopers />
    <PersentationScaleFigure/>
    <PersentationFooter/>
    <br>
    <PresentationTestimonials />
  </div>

  <div class="row">
    <div class="d-flex flex-column w-100 text-center mt-5">
      <h3>Follow Japan Figure on Instagram</h3>
      <p>@Japanfigure.vn</p>
      <div class="row">
        <div class="col-md-2 p-0">
          <img
            src="https://theme.hstatic.net/1000160337/1000885200/14/gallery_item_1_img.jpg?v=298"
            alt=""
            class="w-100 h-auto"
          />
        </div>
        <div class="col-md-2 p-0">
          <img
            src="https://theme.hstatic.net/1000160337/1000885200/14/gallery_item_2_img.jpg?v=298"
            alt=""
            class="w-100 h-auto"
          />
        </div>
        <div class="col-md-2 p-0">
          <img
            src="https://theme.hstatic.net/1000160337/1000885200/14/gallery_item_3_img.jpg?v=298"
            alt=""
            class="w-100 h-auto"
          />
        </div>
        <div class="col-md-2 p-0">
          <img
            src="https://theme.hstatic.net/1000160337/1000885200/14/gallery_item_4_img.jpg?v=298"
            alt=""
            class="w-100 h-auto"
          />
        </div>
        <div class="col-md-2 p-0">
          <img
            src="https://theme.hstatic.net/1000160337/1000885200/14/gallery_item_5_img.jpg?v=298"
            alt=""
            class="w-100 h-auto"
          />
        </div>
        <div class="col-md-2 p-0">
          <img
            src="https://theme.hstatic.net/1000160337/1000885200/14/gallery_item_6_img.jpg?v=298"
            alt=""
            class="w-100 h-auto"
          />
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
