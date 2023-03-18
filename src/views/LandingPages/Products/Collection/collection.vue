<template>
  <div>
    <div class="container">
      <navbar-default />
      <el-breadcrumb
        class="mt-3 mb-3"
        style="background: transparent"
        separator="/"
      >
        <el-breadcrumb-item :to="{ path: '/' }">Trang chủ</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/collections/all' }"
          >Danh mục</el-breadcrumb-item
        >
        <el-breadcrumb-item>{{ type }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="mb-4">
      <img v-bind:src="'/src/assets/img/' + type + '.jpg'" />
    </div>
    <div class="filter container mb-5">
      <div class="row">
        <div class="col-md-9 col-sm-12 col-xs-12">
          <h1 class="title mb-5" style="margin: 0; font-size: 30px">
            {{ type }}
          </h1>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12">
          <el-dropdown>
            <div class="dropdownbox el-dropdown-link">
              <p class="title_filter  mt-1 fw-bold" >
                <span class="icon-filter fw-bold me-1"
                  ><i class="fa fa-sort-alpha-asc" aria-hidden="true"></i
                ></span>
                Sắp xếp
                <span class="float-end fw-bold "
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bababa" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
                </span>
              </p>
            </div>
            <template #dropdown>
              <div  class="dropdownitem">
                <ul class="item-sort" @click="handleClickSort(1)"><i v-if="sort==1" class="bi bi-check2 iconsort "></i>Sản phẩm nổi bật</ul>
                <ul class="item-sort" @click="handleClickSort(2)"><i v-if="sort==2" class="bi bi-check2 iconsort"></i>Giá: Tăng dần</ul>
                <ul class="item-sort" @click="handleClickSort(3)"><i v-if="sort==3" class="bi bi-check2 iconsort"></i>Giá: Giảm dần</ul>
                <ul class="item-sort" @click="handleClickSort(4)"><i v-if="sort==4" class="bi bi-check2 iconsort"></i>Tên: A-Z</ul>
                <ul class="item-sort" @click="handleClickSort(5)"><i v-if="sort==5" class="bi bi-check2 iconsort"></i>Tên: Z-A</ul>
                <ul class="item-sort" @click="handleClickSort(6)"><i v-if="sort==6" class="bi bi-check2 iconsort"></i>Cũ nhất</ul>
                <ul class="item-sort" @click="handleClickSort(7)"><i v-if="sort==7" class="bi bi-check2 iconsort"></i>Mới nhất</ul>
                <ul class="item-sort" @click="handleClickSort(8)"><i v-if="sort==8" class="bi bi-check2 iconsort"></i>Bán chạy nhất</ul>
              </div>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-sm-12 col-xs-12 filter-box">
          <p class="title fw-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="#909097" class="bi bi-funnel" viewBox="0 0 16 16">
              <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
            </svg>
            PHÂN LOẠI
          </p>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12 ">
          <el-dropdown>
            <div class="dropdownbox el-dropdown-link">
              <div class="filter_group-subtitle">
                <span>Thương hiệu</span>
                <span class="icon-control float-end"><i class="fa fa-chevron-down" aria-hidden="true"></i></span></div>
            </div>
            <template #dropdown>
              <div  class="dropdownitem">
                <ul class="item-sort">MegaHouse_Kakashi Hatake</ul>
                <ul class="item-sort">Square Enix</ul>
                <ul class="item-sort">Capcom</ul>
                <ul class="item-sort">Daiki kogyo</ul>
                <ul class="item-sort">Sentinel</ul>
                <ul class="item-sort">Cospa</ul>
                <ul class="item-sort">FREEing</ul>
                <ul class="item-sort">Aspire</ul>
                <ul class="item-sort">Good Smile Company Shanghai</ul>
                <ul class="item-sort">Plex</ul>
                <ul class="item-sort">NetEase Games</ul>
                <ul class="item-sort">Toy's Works</ul>
                <ul class="item-sort">Play Future</ul>
                <ul class="item-sort">Hot Toys</ul>
                <ul class="item-sort">Hobby Max</ul>
                <ul class="item-sort">Tomytec</ul>
              </div>
            </template>
          </el-dropdown>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12 ">
          <el-dropdown>
            <div class="dropdownbox el-dropdown-link">
              <div class="filter_group-subtitle">
                <span>Lọc giá</span>
                <span class="icon-control float-end"><i class="fa fa-chevron-down" aria-hidden="true"></i></span></div>
            </div>
            <template #dropdown>
              <div  class="dropdownitem">
                <ul class="item-sort">Dưới 1.000.000₫</ul>
                <ul class="item-sort">1.000.000₫ - 2.000.000₫</ul>
                <ul class="item-sort">2.000.000₫ - 3.000.000₫</ul>
                <ul class="item-sort">3.000.000₫ - 4.000.000₫</ul>
                <ul class="item-sort">Trên 4.000.000₫</ul>
              </div>
            </template>
          </el-dropdown>
        </div>
        <div class="col-md-3 col-sm-12 col-xs-12 ">
          <el-dropdown>
            <div class="dropdownbox el-dropdown-link">
              <div class="filter_group-subtitle">
                <span>Tỉ lệ</span>
                <span class="icon-control float-end"><i class="fa fa-chevron-down" aria-hidden="true"></i></span></div>
            </div>
            <template #dropdown>
              <div  class="dropdownitem">
                <ul class="item-sort">1/12</ul>
                <ul class="item-sort">1/10</ul>
                <ul class="item-sort">1/8</ul>
                <ul class="item-sort">1/7</ul>
                <ul class="item-sort">1/6</ul>
                <ul class="item-sort">1/5</ul>
                <ul class="item-sort">1/4</ul>
                <ul class="item-sort">1/3</ul>
                <ul class="item-sort">non-scale</ul>
              </div>
            </template>
          </el-dropdown>
        </div>
        </div>
    </div>
    <div class="collection-listproduct" id="collection-body">
      <div class="container">
        <div class="wraplist-collection">
          <div
            class="row listProduct-row listProduct-resize listProduct-filter"
          >
            <div
              class="col-md-3 col-sm-4 col-xs-6 product-loop"
              v-for="n in 30"
              :key="n"
            >
              <div class="product-inner" style="height: 420px">
                <div class="proloop-image">
                  <div class="product--image" style="height: 344px">
                    <div class="prod-img first-image">
                      <picture>
                        <source
                          media="(max-width: 480px)"
                          data-srcset="//product.hstatic.net/1000160337/product/one_and_only__slam_dunk__hanamichi_sakuragi__2__e74fa9a1ff364a38aa375f30b73819d1_medium.jpg"
                          srcset="
                            //product.hstatic.net/1000160337/product/one_and_only__slam_dunk__hanamichi_sakuragi__2__e74fa9a1ff364a38aa375f30b73819d1_medium.jpg
                          "
                        />
                        <source
                          media="(min-width: 481px)"
                          data-srcset="//product.hstatic.net/1000160337/product/one_and_only__slam_dunk__hanamichi_sakuragi__2__e74fa9a1ff364a38aa375f30b73819d1_large.jpg"
                          srcset="
                            //product.hstatic.net/1000160337/product/one_and_only__slam_dunk__hanamichi_sakuragi__2__e74fa9a1ff364a38aa375f30b73819d1_large.jpg
                          "
                        />
                        <img
                          class="img-loop lazyloaded"
                          data-src="//product.hstatic.net/1000160337/product/one_and_only__slam_dunk__hanamichi_sakuragi__2__e74fa9a1ff364a38aa375f30b73819d1_large.jpg"
                          src="//product.hstatic.net/1000160337/product/one_and_only__slam_dunk__hanamichi_sakuragi__2__e74fa9a1ff364a38aa375f30b73819d1_large.jpg"
                          alt=' One and Only " SLAM DUNK " Hanamichi Sakuragi '
                        />
                      </picture>
                    </div>
                    <div class="prod-img second-image hovered-img">
                      <picture>
                        <source
                          media="(max-width: 480px)"
                          data-srcset="//product.hstatic.net/1000160337/product/one_and_only__slam_dunk__hanamichi_sakuragi__3__d8e8b1b0bb8549daa87ba49c1d8a405c_small.jpg"
                          srcset="
                            //product.hstatic.net/1000160337/product/one_and_only__slam_dunk__hanamichi_sakuragi__3__d8e8b1b0bb8549daa87ba49c1d8a405c_small.jpg
                          "
                        />
                        <source
                          media="(min-width: 481px)"
                          data-srcset="//product.hstatic.net/1000160337/product/one_and_only__slam_dunk__hanamichi_sakuragi__3__d8e8b1b0bb8549daa87ba49c1d8a405c_large.jpg"
                          srcset="
                            //product.hstatic.net/1000160337/product/one_and_only__slam_dunk__hanamichi_sakuragi__3__d8e8b1b0bb8549daa87ba49c1d8a405c_large.jpg
                          "
                        />
                        <img
                          class="img-loop lazyloaded"
                          data-src="//product.hstatic.net/1000160337/product/one_and_only__slam_dunk__hanamichi_sakuragi__3__d8e8b1b0bb8549daa87ba49c1d8a405c_large.jpg"
                          src="//product.hstatic.net/1000160337/product/one_and_only__slam_dunk__hanamichi_sakuragi__3__d8e8b1b0bb8549daa87ba49c1d8a405c_large.jpg"
                          alt=' One and Only " SLAM DUNK " Hanamichi Sakuragi '
                        />
                      </picture>
                    </div>
                  </div>
                  <a
                    href="/products/one-and-only-slam-dunk-hanamichi-sakuragi"
                    class="proloop-link quickview-product"
                    data-handle="/products/one-and-only-slam-dunk-hanamichi-sakuragi"
                    title="One and Only "
                  ></a>
                </div>

                <div class="proloop-detail">
                  <h3>
                    <a
                      class="title title-detail"
                      href="/products/one-and-only-slam-dunk-hanamichi-sakuragi"
                      >One and Only " SLAM DUNK " Hanamichi Sakuragi</a
                    >
                  </h3>
                  <p class="proloop--price">
                    <span class="price fw-bold title">2,100,000₫</span>
                  </p>
                </div>

                <div class="proloop-actions">
                  <div class="proloop-actions__inner">
                    <div class="actions-primary">
                      <button
                        type="submit"
                        class="button btn-proloop-cart add-to-cart"
                        onclick="HRT.All.addCartProdItem('1089834681')"
                        title="Thêm vào giỏ"
                      >
                        <span class="btnico me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -13 456.75885 456"
                          >
                            <path
                              d="m150.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0"
                            ></path>
                            <path
                              d="m446.855469 94.035156h-353.101563l-7.199218-40.300781c-4.4375-24.808594-23.882813-44.214844-48.699219-48.601563l-26.101563-4.597656c-5.441406-.96875-10.632812 2.660156-11.601562 8.097656-.964844 5.441407 2.660156 10.632813 8.101562 11.601563l26.199219 4.597656c16.53125 2.929688 29.472656 15.871094 32.402344 32.402344l35.398437 199.699219c4.179688 23.894531 24.941406 41.324218 49.199219 41.300781h210c22.0625.066406 41.546875-14.375 47.902344-35.5l47-155.800781c.871093-3.039063.320312-6.3125-1.5-8.898438-1.902344-2.503906-4.859375-3.980468-8-4zm-56.601563 162.796875c-3.773437 12.6875-15.464844 21.367188-28.699218 21.300781h-210c-14.566407.039063-27.035157-10.441406-29.5-24.800781l-24.699219-139.398437h336.097656zm0 0"
                            ></path>
                            <path
                              d="m360.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0"
                            ></path>
                          </svg>
                        </span>
                        <span>Thêm vào giỏ</span>
                      </button>
                    </div>

                    <div class="actions-secondary">
                      <button
                        type="submit"
                        class="button btn-proloop-checkout"
                        onclick="HRT.All.buyNowProdItem('1089834681')"
                        title="Mua ngay"
                      >
                        <span class="btnico me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 321.2 321.2"
                            style="enable-background: new 0 0 321.2 321.2"
                            xml:space="preserve"
                          >
                            <g>
                              <g>
                                <path
                                  d="M306.4,313.2l-24-223.6c-0.4-3.6-3.6-6.4-7.2-6.4h-44.4V69.6c0-38.4-31.2-69.6-69.6-69.6c-38.4,0-69.6,31.2-69.6,69.6 v13.6H46c-3.6,0-6.8,2.8-7.2,6.4l-24,223.6c-0.4,2,0.4,4,1.6,5.6c1.2,1.6,3.2,2.4,5.2,2.4h278c2,0,4-0.8,5.2-2.4 C306,317.2,306.8,315.2,306.4,313.2z M223.6,123.6c3.6,0,6.4,2.8,6.4,6.4c0,3.6-2.8,6.4-6.4,6.4c-3.6,0-6.4-2.8-6.4-6.4 C217.2,126.4,220,123.6,223.6,123.6z M106,69.6c0-30.4,24.8-55.2,55.2-55.2c30.4,0,55.2,24.8,55.2,55.2v13.6H106V69.6z M98.8,123.6c3.6,0,6.4,2.8,6.4,6.4c0,3.6-2.8,6.4-6.4,6.4c-3.6,0-6.4-2.8-6.4-6.4C92.4,126.4,95.2,123.6,98.8,123.6z M30,306.4 L52.4,97.2h39.2v13.2c-8,2.8-13.6,10.4-13.6,19.2c0,11.2,9.2,20.4,20.4,20.4c11.2,0,20.4-9.2,20.4-20.4c0-8.8-5.6-16.4-13.6-19.2 V97.2h110.4v13.2c-8,2.8-13.6,10.4-13.6,19.2c0,11.2,9.2,20.4,20.4,20.4c11.2,0,20.4-9.2,20.4-20.4c0-8.8-5.6-16.4-13.6-19.2V97.2 H270l22.4,209.2H30z"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                        <span>Mua ngay</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue";
import { ref } from "vue";

export default {
  name: "collection",
  components: { NavbarDefault },
  data() {
    return {
      type: null,
      sort: 10,
    };
  },
  methods: {
    handleClickSort(sort) {
      this.sort = sort;
      console.log(this.sort)
    }
  },
  updated() {
    this.type = this.$route.params.type;
    console.log(this.type);
  },
  mounted() {
    this.type = this.$route.params.type;
    console.log(this.type);
  }
};
</script>

<style scoped>
@import "../../../../assets/css/collection.css";
</style>
