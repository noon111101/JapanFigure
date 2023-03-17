<script setup>
import { onMounted, onUnmounted } from "vue";

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

  <div class="container my-3">
    <div class="row px-xl-5">
      <div class="col-lg-7">
        <h5 class="section-title position-relative text-uppercase mb-3">
          <span class="bg-secondary pr-3">Billing Address</span>
        </h5>
        <div class="bg-white p-30 mb-5">
          <div class="row">
            <div class="col-md-12 form-group">
              <input
                class="form-control border border-1 py-3"
                type="text"
                placeholder=" Họ tên"
              />
            </div>
            <div class="col-md-8 form-group">
              <input
                class="form-control border border-1 py-3"
                type="text"
                placeholder=" Email"
              />
            </div>
            <div class="col-md-4 form-group">
              <input
                class="form-control border border-1 py-3"
                type="text"
                placeholder=" Số điện thoại"
              />
            </div>
            <div class="col-md-12 form-group">
              <input
                class="form-control border border-1 py-3"
                type="text"
                placeholder=" Địa chỉ"
              />
            </div>

            <div class="col-md-4 form-group">
              <label for="my-select">Tỉnh/ Thành phố</label>
              <select
                class="form-select border border-1 text-sm-start"
                placeholder="Tỉnh / Thành phố"
                v-model="selectedCity"
                id="city"
                @change="getDistricts(selectedCity)"
              >
                <option selected></option>
                <option
                  v-for="city in cities"
                  :value="city.ProvinceID"
                  :key="city.ProvinceID"
                >
                  {{ city.ProvinceName }}
                </option>
              </select>
            </div>
            <div class="col-md-4 form-group">
              <label for="my-select"> Quận/ Huyện</label>
              <select
                class="form-select border border-1"
                placeholder="Quận / Huyện"
                v-model="selectedDistrict"
                id="district"
                @change="getWards(selectedDistrict)"
              >
                <option selected></option>
                <option
                  v-for="district in districts"
                  :value="district.DistrictID"
                  :key="district.DistrictID"
                >
                  {{ district.DistrictName }}
                </option>
              </select>
            </div>
            <div class="col-md-4 form-group">
              <label for="my-select">Xã / Phường</label>
              <select
                class="form-select border border-1 align-middle"
                placeholder="Phường / Xã"
                v-model="selectedWard"
                id="ward"
              >
                <option selected></option>
                <option
                  v-for="ward in wards"
                  :value="ward.WardCode"
                  :key="ward.WardCode"
                >
                  {{ ward.WardName }}
                </option>
              </select>
            </div>
            <div class="col-md-12 form-group">
              <label>Ghi chú</label>
              <textarea
                class="form-control border border-1"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="col-md-12 form-group">
              <label>Phương thức thanh toán</label>
              <div class="input-group mb-3 border border-1">
                <div class="input-group-text">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioOption"
                      id="option1"
                      value="option1"
                    />
                  </div>
                </div>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Text input with radio button"
                />
              </div>
            </div>
            <div class="col-md-12 form-group">
              <label>Phương thức thanh toán</label>
              <div class="input-group mb-3 border border-1">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <div class="input-group-text">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioOption"
                      id="option1"
                      value="option1"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 form-group">
              <label>ZIP Code</label>
              <input class="form-control" type="text" placeholder="123" />
            </div>
            <div class="col-md-12 form-group">
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="newaccount"
                />
                <label class="custom-control-label" for="newaccount"
                  >Create an account</label
                >
              </div>
            </div>
            <div class="col-md-12">
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="shipto"
                />
                <label
                  class="custom-control-label"
                  for="shipto"
                  data-toggle="collapse"
                  data-target="#shipping-address"
                  >Ship to different address</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="collapse mb-5" id="shipping-address">
          <h5 class="section-title position-relative text-uppercase mb-3">
            <span class="bg-secondary pr-3">Shipping Address</span>
          </h5>
          <div class="bg-light p-30">
            <div class="row">
              <div class="col-md-6 form-group">
                <label>First Name</label>
                <input class="form-control" type="text" placeholder="John" />
              </div>
              <div class="col-md-6 form-group">
                <label>Last Name</label>
                <input class="form-control" type="text" placeholder="Doe" />
              </div>
              <div class="col-md-6 form-group">
                <label>E-mail</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="example@email.com"
                />
              </div>
              <div class="col-md-6 form-group">
                <label>Mobile No</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="+123 456 789"
                />
              </div>
              <div class="col-md-6 form-group">
                <label>Address Line 1</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="123 Street"
                />
              </div>
              <div class="col-md-6 form-group">
                <label>Address Line 2</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="123 Street"
                />
              </div>
              <div class="col-md-6 form-group">
                <label>Country</label>
                <select class="custom-select">
                  <option selected>United States</option>
                  <option>Afghanistan</option>
                  <option>Albania</option>
                  <option>Algeria</option>
                </select>
              </div>
              <div class="col-md-6 form-group">
                <label>City</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="New York"
                />
              </div>
              <div class="col-md-6 form-group">
                <label>State</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="New York"
                />
              </div>
              <div class="col-md-6 form-group">
                <label>ZIP Code</label>
                <input class="form-control" type="text" placeholder="123" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <h5 class="section-title position-relative text-uppercase mb-3">
          <span class="bg-secondary pr-3">Order Total</span>
        </h5>
        <div class="bg-light p-30 mb-5">
          <div class="border-bottom">
            <h6 class="mb-3">Products</h6>
            <div class="d-flex justify-content-between">
              <p>Product Name 1</p>
              <p>$150</p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Product Name 2</p>
              <p>$150</p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Product Name 3</p>
              <p>$150</p>
            </div>
          </div>
          <div class="border-bottom pt-3 pb-2">
            <div class="d-flex justify-content-between mb-3">
              <h6>Subtotal</h6>
              <h6>$150</h6>
            </div>
            <div class="d-flex justify-content-between">
              <h6 class="font-weight-medium">Shipping</h6>
              <h6 class="font-weight-medium">$10</h6>
            </div>
          </div>
          <div class="pt-2">
            <div class="d-flex justify-content-between mt-2">
              <h5>Total</h5>
              <h5>$160</h5>
            </div>
          </div>
        </div>
        <div class="mb-5">
          <h5 class="section-title position-relative text-uppercase mb-3">
            <span class="bg-secondary pr-3">Payment</span>
          </h5>
          <div class="bg-light p-30">
            <div class="form-group">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  class="custom-control-input"
                  name="payment"
                  id="paypal"
                />
                <label class="custom-control-label" for="paypal">Paypal</label>
              </div>
            </div>
            <div class="form-group">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  class="custom-control-input"
                  name="payment"
                  id="directcheck"
                />
                <label class="custom-control-label" for="directcheck"
                  >Direct Check</label
                >
              </div>
            </div>
            <div class="form-group mb-4">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  class="custom-control-input"
                  name="payment"
                  id="banktransfer"
                />
                <label class="custom-control-label" for="banktransfer"
                  >Bank Transfer</label
                >
              </div>
            </div>
            <button class="btn btn-block btn-primary font-weight-bold py-3">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <DefaultFooter />
</template>

<script>
import cart_service from "../../../common/service/cart_service";
import axios from "axios";
export default {
  data() {
    return {
      discount: 0,
      total: 0,
      count: 0,
      cart: [],
      detailCart: [],
      cities: [],
      selectedCity: "",
      districts: [],
      selectedDistrict: "",
      wards: [],
      selectedWard: "",
      billRquest: {
        transportFee: 0,
        customerMoney: 0,
        discount: 0,
        note: "",
        fullName: "",
        address: "",
        phoneNumber: "",
        voucherId: 0,
        discountId: 0,
        username: "lienpt",
        total: 0,
      },
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
    getDistricts(cityId) {
      axios
        .get(
          `https://online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${cityId}`,
          {
            headers: {
              token: "c157a694-916b-11ed-9dc6-f64f768dbc22",
            },
          }
        )
        .then((response) => {
          this.districts = response.data.data;
          this.selectedDistrict = "";
          this.wards = [];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getWards(districtId) {
      axios
        .get(
          `https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${districtId}`,
          {
            headers: {
              token: "c157a694-916b-11ed-9dc6-f64f768dbc22",
            },
          }
        )
        .then((response) => {
          this.wards = response.data.data;
          this.selectedWard = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCities() {
      axios
        .get(
          "https://online-gateway.ghn.vn/shiip/public-api/master-data/province",
          {
            headers: {
              token: "c157a694-916b-11ed-9dc6-f64f768dbc22",
            },
          }
        )
        .then((response) => {
          this.cities = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getCities();
  },
  created() {
    this.loadCart();
    this.getTotal();
  },
};
</script>
