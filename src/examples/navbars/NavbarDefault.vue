<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "../../assets/js/useWindowsWidth";

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import downArrow from "@/assets/img/down-arrow.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "https://www.creative-tim.com/product/vue-material-kit",
      color: "bg-gradient-success",
      label: "Free Download",
    }),
  },
  transparent: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  darkText: {
    type: Boolean,
    default: false,
  },
});

// set arrow  color
function getArrowColor() {
  if (props.transparent && textDark.value) {
    return ArrDark;
  } else if (props.transparent) {
    return DownArrWhite;
  } else {
    return ArrDark;
  }
}

// set text color
const getTextColor = () => {
  let color;
  if (props.transparent && textDark.value) {
    color = "text-dark";
  } else if (props.transparent) {
    color = "text-white";
  } else {
    color = "text-dark";
  }

  return color;
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>
<template>
  <nav
    class="navbar navbar-expand-lg top-0"
    :class="{
      'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
        props.transparent,
      'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
        props.sticky,
      'navbar-light bg-white py-3': props.light,
      ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark,
    }"
  >
    <div
      :class="
        props.transparent || props.light || props.dark
          ? 'container'
          : 'container-fluid px-0'
      "
    >
      <RouterLink
        class="navbar-brand d-none d-md-block"
        :class="[
          (props.transparent && textDark.value) || !props.transparent
            ? 'text-dark font-weight-bolder ms-sm-3'
            : 'text-white font-weight-bolder ms-sm-3',
        ]"
        :to="{ name: 'presentation' }"
        rel="tooltip"
        title="Designed and Coded by Creative Tim"
        data-placement="bottom"
      >
        <img
          src="https://theme.hstatic.net/1000160337/1000885200/14/logo.png?v=298"
          alt=""
          class="w-70"
        />
      </RouterLink>
      <!-- <RouterLink
        class="navbar-brand d-block d-md-none"
        :class="
          props.transparent || props.dark
            ? 'text-white'
            : 'font-weight-bolder ms-sm-3'
        "
        to="/"
        rel="tooltip"
        title="Designed and Coded by Creative Tim"
        data-placement="bottom"
      >
        Material Design
      </RouterLink> -->
      <!-- <a
        href="https://www.creative-tim.com/product/vue-material-kit-pro"
        class="btn btn-sm bg-gradient-success mb-0 ms-auto d-lg-none d-block"
        >Buy Now</a
      > -->
      <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div
        class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
        id="navigation"
      >
        <ul class="navbar-nav navbar-nav-hover ms-auto">
          <li class="nav-item dropdown dropdown-hover mx-2">
            <RouterLink
              class="nav-link d-flex cursor-pointer align-items-center"
              :to="{ name: 'presentation' }"
              rel="tooltip"
              title="Designed and Coded by Creative Tim"
              data-placement="bottom"
            >
              Trang chủ
            </RouterLink>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <RouterLink
              class="nav-link d-flex cursor-pointer align-items-center"
              :to="{ name: 'presentation' }"
              rel="tooltip"
              title="Designed and Coded by Creative Tim"
              data-placement="bottom"
            >
              Giới thiệu
            </RouterLink>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuPages"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Hướng dẫn
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="
                dropdown-menu dropdown-menu-animation
                ms-n3
                dropdown-md
                p-3
                border-radius-xl
                mt-0 mt-lg-3
              "
              aria-labelledby="dropdownMenuPages"
            >
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-2">
                  <div class="row">
                    <div class="position-relative">
                      <RouterLink
                        :to="{ name: 'about' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Figure là gì?</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'contactus' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Các chủng loại figure</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'author' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Phân biệt thật/giả</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'signin-basic' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Hỏi & đáp</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'signin-basic' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Cách sửa chữa figure</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'signin-basic' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Đặt mua & thanh toán</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'signin-basic' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Các chính sách</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-lg-none">
                <div
                  class="
                    dropdown-header
                    text-dark
                    font-weight-bolder
                    d-flex
                    align-items-center
                    px-0
                  "
                >
                  Landing Pages
                </div>
                <RouterLink
                  :to="{ name: 'about' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>About Us</span>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'contactus' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Contact Us</span>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'author' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Author</span>
                </RouterLink>
                <div
                  class="
                    dropdown-header
                    text-dark
                    font-weight-bolder
                    d-flex
                    align-items-center
                    px-0
                    mt-3
                  "
                >
                  Account
                </div>
                <RouterLink
                  :to="{ name: 'signin-basic' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Sign In</span>
                </RouterLink>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuBlocks"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sản phẩm
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="
                dropdown-menu dropdown-menu-animation
                ms-n3
                dropdown-md
                p-3
                border-radius-xl
                mt-0 mt-lg-3
              "
              aria-labelledby="dropdownMenuPages"
            >
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-2">
                  <div class="row">
                    <div class="position-relative">
                      <RouterLink
                        :to="{ path: '/collections/hang-co-san' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Hàng có sẵn</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ path: '/collections/hang-order' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Hàng order</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ path: '/collections/scale-figure' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Scale figure</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ path: '/collections/chibi-figure' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Nendoroid</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ path: '/collections/pop-up-parade' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Pop Up Parade</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ path: '/collections/action-figure' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Figma</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ path: '/collections/r18' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>R18</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ path: '/collections/cac-loai-figure-khac' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Các loại figure khác</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ path: '/collections/artbook' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Artbook</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ path: '/collections/fidget-spinner' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Fidget Spinner</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <RouterLink
              class="nav-link d-flex cursor-pointer align-items-center"
              :to="{ name: 'presentation' }"
              rel="tooltip"
              title="Designed and Coded by Creative Tim"
              data-placement="bottom"
            >
              Review
            </RouterLink>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <RouterLink
              class="nav-link d-flex cursor-pointer align-items-center"
              :to="{ name: 'presentation' }"
              rel="tooltip"
              title="Designed and Coded by Creative Tim"
              data-placement="bottom"
            >
              Ưu đãi
            </RouterLink>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuDocs"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Kết nối
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="
                dropdown-menu dropdown-menu-animation
                ms-n3
                dropdown-md
                p-3
                border-radius-xl
                mt-0 mt-lg-3
              "
              aria-labelledby="dropdownMenuPages"
            >
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-2">
                  <div class="row">
                    <div class="position-relative">
                      <RouterLink
                        :to="{ name: 'about' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Japan Figure Trading</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'contactus' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Facebook</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'author' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Youtube</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'signin-basic' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Instagram</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuDocs"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Liên hệ
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="
                dropdown-menu dropdown-menu-animation
                ms-n3
                dropdown-md
                p-3
                border-radius-xl
                mt-0 mt-lg-3
              "
              aria-labelledby="dropdownMenuPages"
            >
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-2">
                  <div class="row">
                    <div class="position-relative">
                      <RouterLink
                        :to="{ name: 'about' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Địa chỉ</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'contactus' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Số tài khoản</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
