<script setup>
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
</script>
<template>
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
</template>