<script setup>
import { onMounted, onUnmounted } from "vue";

//Vue Material Kit 2 components

// sections
import PresentationCounter from "../../Sections/PresentationCounter.vue";

//images
import HeaderView from "../../../HeaderView.vue";
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
  <HeaderView />
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <PresentationCounter />
    <div class="container">
      <div class="row">
        <div class="col-lg-8 table-responsive mb-5">
          <table class="table table-hover text-center mb-0">
            <thead class="thead-dark">
              <tr>
                <th>Img</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody class="align-middle">
              <tr v-for="(item, index) in cart" :key="index">
                <td class="align-middle">
                  <!-- <img :src="getImageUrl(item.url)" alt="" style="width: 50px;" > -->
                  <!-- <img :src="'../../../../assets/img/'+item.url" alt="" style="width: 50px;"> -->
                </td>
                <td class="align-middle">{{ item.productName }}</td>
                <td class="align-middle">
                  <div
                    class="input-group quantity mx-auto"
                    style="width: 100px"
                  >
                    <div class="input-group-btn">
                      <button
                        class="btn btn-sm btn-warning btn-minus"
                        @click="decrement(index)"
                      >
                        <i class="fa fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      :value="item.amount"
                    />
                    <div class="input-group-btn">
                      <button
                        class="btn btn-sm btn-warning btn-plus"
                        @click="increment(index)"
                      >
                        <i class="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td class="align-middle">{{ formatPrice(item.price) }} VND</td>
                <td class="align-middle">
                  {{ formatPrice(item.price * item.amount) }} VND
                </td>
                <td class="align-middle">
                  <button
                    class="btn btn-sm btn-danger"
                    @click="deleteCart(item.id)"
                  >
                    <i class="fa fa-times"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-lg-4">
          <form class="mb-30" action="">
            <div class="input-group">
              <input
                type="text"
                class="form-control border-0 p-4 gray"
                placeholder="Coupon Code"
              />
              <div class="input-group-append">
                <button class="btn btn-warning">Apply Coupon</button>
              </div>
            </div>
          </form>
          <h5 class="section-title position-relative text-uppercase mb-3">
            <span class="bg-secondary pr-3">Cart Summary</span>
          </h5>
          <div class="bg-light p-30 mb-5">
            <div class="border-bottom pb-2">
              <div class="d-flex justify-content-between mb-3">
                <h6>Subtotal</h6>
                <h6>{{ formatPrice(total) }}</h6>
              </div>
            </div>
            <div class="border-bottom pb-2">
              <div class="d-flex justify-content-between mb-3">
                <h6>Discount</h6>
                <!-- <h6>{{ discount }}</h6> -->
              </div>
            </div>
            <div class="pt-2">
              <div class="d-flex justify-content-between mt-2">
                <h5>Total</h5>
                <h5>{{ formatPrice(total) }}</h5>
              </div>
              <button
                class="btn btn-block btn-primary font-weight-bold my-3 py-3"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>

<script>
import cart_service from "../../../common/service/cart_service";
export default {
  data() {
    return {
      discount: 0,
      total: 0,
      count: 0,
      cart: [],
      detailCart: [],
    };
  },

  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(price);
    },

    increment(index) {
      this.cart[index].amount++;
      this.updateCart(this.cart[index].id, this.cart[index].amount);
    },

    decrement(index) {
      if (this.cart[index].amount > 0) {
        this.cart[index].amount--;
        this.updateCart(this.cart[index].id, this.cart[index].amount);
      }
    },

    getImageUrl(url) {
      console.log(`../../../../assets/img/${url}`);
      return `../../../../assets/img/${url}`;
    },

    imageHtml(url) {
      return `<img src="../../../../assets/img/${url}" alt="" style="width: 50px;">`;
    },

    loadCart() {
      cart_service
        .getCart("lienpt")
        .then((response) => {
          this.cart = response.data.data.items;
          this.cart.amount = this.count;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getTotal() {
      cart_service
        .getCart("lienpt")
        .then((response) => {
          for (
            let index = 0;
            index < response.data.data.items.length;
            index++
          ) {
            this.total +=
              response.data.data.items[index].amount *
              response.data.data.items[index].price;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    deleteCart(id) {
      cart_service
        .deleteCart(id)
        .then((response) => {
          this.detailCart = response.data;
          this.loadCart();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    updateCart(id, amount) {
      cart_service
        .updateCart(id, amount)
        .then((response) => {
          this.detailCart = response.data;
          this.loadCart();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    
  },
  created() {
    this.loadCart();
    this.getTotal();
  },
};
</script>
