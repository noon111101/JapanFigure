<template>
  <div>
    <h4 style="color: black; margin-left: 5%; margin-top: 2%;">
      3One and Only " SLAM DUNK " Hanamichi Sakuragi
    </h4>
    <h4 style="color: #ff0000; margin-left: 5%; margin-top: 2%">2,100,000đ</h4>
    <div class="row" style="margin-left: 4%; margin-top: 2%">
      <div class="col-4" style=" padding-top: 2%">Tiêu đề:</div>
      <div class="col-8" style="border-style:groove; width: 10%; height: 40px;">
        <div
          style="
            background-color: black;
            color: white;
            text-align: center;
            height: 80%;
            width: 140%;
            padding-top: 15%;
            margin-top: 10%;
            margin-left: -20%;
            font-size: 10px;
          "
        >
          <strong>Có sẵn</strong>
        </div>
      </div>
    </div>
    <hr />
    <div class="hr"></div>
    <div class="row" style="height: 50px; margin-left: 4%">
      <div class="col-3">
        <el-input-number
          v-model="num"
          @change="handleChange"
          :min="1"
          :max="10"
          size="large"
          style="width: 110%; height: 50px; font-weight: 600"
        ></el-input-number>
      </div>
      <div
        class="col-3"
        style="
          background-color: #ecebe8a6;
          text-align: center;
          color: #ff0000;
          padding-top: 2%;
          margin-left: 5%;
        "
      >
        <img
          src="//theme.hstatic.net/1000160337/1000885200/14/icon_chat_desktop.png?v=299"
          alt="chat"
          class="message"
        />
        Chat ngay
      </div>
      <div
        class="col-4 text button-effect"
      >
        THÊM VÀO GIỎ HÀNG
      </div>
    </div>
    <h5 style="color: #DEA554; margin-left: 5%; margin-top: 2%">Đã bán gần hết</h5>
    <br>
    <div class="product-deliverly">
      <ul class="infoList-deliverly">
        <li class="row">
          <span class="col-1">
            <img
              class="ls-is-cached img"
              data-src="//theme.hstatic.net/1000160337/1000885200/14/product_deliverly_1_ico.png?v=299"
              src="//theme.hstatic.net/1000160337/1000885200/14/product_deliverly_1_ico.png?v=299"
              alt="Sản phẩm chính hãng từ Nhật Bản.
 Trước khi bạn đặt mua: vui lòng check lại giá hiện tại với admin, vì khả năng giá đã thay đổi so với lần cập nhật gần nhất, hoặc hết hàng, hết suất order. Do giới hạn số lượng, figure Nhật sẽ hiếm dần theo thời gian, dẫn tới giá tăng."
            />
          </span>
          <span class="col-11">
            <i class="fa fa-check"></i>
            <strong> Sản phẩm chính hãng từ Nhật Bản.</strong><br />
            <i class="fa fa-check"></i>
            <strong> Trước khi bạn đặt mua:</strong> vui lòng check lại giá hiện
            tại với admin, vì khả năng giá đã thay đổi so với lần cập nhật gần
            nhất, hoặc hết hàng, hết suất order. Do giới hạn số lượng, figure
            Nhật sẽ hiếm dần theo thời gian, dẫn tới giá tăng.
          </span>
        </li>
        <br />
        <li class="row">
          <span class="col-1">
            <img
              class="ls-is-cached img"
              data-src="//theme.hstatic.net/1000160337/1000885200/14/product_deliverly_2_ico.png?v=299"
              src="//theme.hstatic.net/1000160337/1000885200/14/product_deliverly_2_ico.png?v=299"
              alt="Với sản phẩm CÓ SẴN, bạn sẽ được giao ngay.
 Với sản phẩm ĐẶT TRƯỚC, bạn cần cọc 50% giá trị sản phẩm. Hàng về VN khoảng 2-3 tuần sau khi phát hành. Lịch phát hành dự kiến như thông tin chi tiết bên dưới."
            />
          </span>
          <span class="col-11">
            <i class="fa fa-check"></i> Với sản phẩm
            <strong>CÓ SẴN, bạn sẽ được giao ngay.</strong><br />
            <i class="fa fa-check"></i> Với sản phẩm
            <strong>ĐẶT TRƯỚC, bạn cần cọc 50% giá trị sản phẩm.</strong> Hàng
            về VN khoảng 2-3 tuần sau khi phát hành. Lịch phát hành dự kiến như
            thông tin chi tiết bên dưới.
          </span>
        </li>
        <br />
        <li class="row">
          <span class="col-1">
            <img
              class="ls-is-cached img"
              data-src="//theme.hstatic.net/1000160337/1000885200/14/product_deliverly_3_ico.png?v=299"
              src="//theme.hstatic.net/1000160337/1000885200/14/product_deliverly_3_ico.png?v=299"
              alt="Giao hàng tận nơi
 Miễn phí ship với các đơn hàng >1000K
 Vui lòng kiểm tra sản phẩm khi nhận bưu kiện"
            />
          </span>
          <span class="col-11">
            <i class="fa fa-check"></i> Giao hàng tận nơi<br />
            <i class="fa fa-check"></i> Miễn phí ship với các đơn hàng &gt;1000K
            <br />
            <i class="fa fa-check"></i> Vui lòng kiểm tra sản phẩm khi nhận bưu
            kiện
          </span>
        </li>
      </ul>
    </div>
    <div class="hr"/>
    <div class="" style="margin-left: 4%">
      <div class="panel-group opened">
        <div @click="showInfor" class="panel-title" id="select1">
          <h4 class="def" id="info-title">Thông tin sản phẩm</h4>
          <div class="icon-plus">
            <i class="bi bi-dash-lg"></i>
          </div>
          <div id="plus1" class="icon-plus open">
            <i class="bi bi-plus-lg"></i>
          </div>
        </div>
        <div id="info1" class="panel-description open">
          <div class="description-productdetail">
            <p class="item-detailsection-title">
              <span style="font-size: 12pt"
                ><span
                  ><span style="font-family: 'Times New Roman', serif">
                    <strong
                      ><span style="font-size: 11pt"
                        ><span style="font-family: 'Arial', sans-serif"
                          ><span style="color: #339966"
                            >Giá&nbsp;cập nhật tháng 8/2022: 2.100.000đ</span
                          ></span
                        ></span
                      ></strong
                    ></span
                  ></span
                ></span
              >
            </p>
            <p class="item-detailsection-title">
              <span style="font-size: 12pt"
                ><span
                  ><span style="font-family: 'Times New Roman', serif"
                    ><span style="font-size: 11pt"
                      ><span style="font-family: 'Arial', sans-serif"
                        ><span style="color: #333333"
                          >One and Only " SLAM DUNK " Hanamichi Sakuragi</span
                        ></span
                      ></span
                    ></span
                  ></span
                ></span
              >
            </p>
            <p>
              <span style="font-size: 12pt"
                ><span
                  ><span style="font-family: 'Times New Roman', serif"
                    ><span style="font-size: 11pt"
                      ><span style="font-family: 'Arial', sans-serif"
                        ><span style="color: #333333"
                          >Nhân vật: Hanamichi Sakuragi</span
                        ></span
                      ></span
                    ></span
                  ></span
                ></span
              >
            </p>
            <p>
              <span style="font-size: 12pt"
                ><span
                  ><span style="font-family: 'Times New Roman', serif"
                    ><span style="font-size: 11pt"
                      ><span style="font-family: 'Arial', sans-serif"
                        ><span style="color: #333333"
                          >Series: SLAM DUNK</span
                        ></span
                      ></span
                    ></span
                  ></span
                ></span
              >
            </p>
            <p>
              <span style="font-size: 12pt"
                ><span
                  ><span style="font-family: 'Times New Roman', serif"
                    ><span style="font-size: 11pt"
                      ><span style="font-family: 'Arial', sans-serif"
                        ><span style="color: #333333"
                          >Hãng sản xuất: M.I.C</span
                        ></span
                      ></span
                    ></span
                  ></span
                ></span
              >
            </p>
            <p>
              <span style="font-size: 12pt"
                ><span
                  ><span style="font-family: 'Times New Roman', serif"
                    ><span style="font-size: 11pt"
                      ><span style="font-family: 'Arial', sans-serif"
                        ><span style="color: #333333"
                          >Kích thước: 16.5cm</span
                        ></span
                      ></span
                    ></span
                  ></span
                ></span
              >
            </p>
            <p>
              <span style="font-size: 12pt"
                ><span
                  ><span style="font-family: 'Times New Roman', serif"
                    ><span style="font-size: 11pt"
                      ><span style="font-family: 'Arial', sans-serif"
                        ><span style="color: #333333"
                          >Phát hành: 12/2022</span
                        ></span
                      ></span
                    ></span
                  ></span
                ></span
              >
            </p>
          </div>
        </div>
      </div>
      <!-- TAB 1-->
      <!-- TAB 2-->
      <!-- TAB 3-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      num: 1,
    };
  },
  methods: {
    showInfor() {
      if (document.getElementById("plus1").classList.contains("open")) {
        document.getElementById("plus1").classList.remove("open");
        document.getElementById("plus1").classList.add("closs");
      } else {
        document.getElementById("plus1").classList.add("open");
        document.getElementById("plus1").classList.remove("closs");
      }

      if (document.getElementById("info1").classList.contains("open")) {
        document.getElementById("info1").classList.remove("open");
        document.getElementById("info1").classList.add("closs");
      } else {
        document.getElementById("info1").classList.add("open");
        document.getElementById("info1").classList.remove("closs");
      }
      if (document.getElementById("info-title").classList.contains("def")) {
        document.getElementById("info-title").classList.remove("def");
        document.getElementById("info-title").classList.add("strong");
      } else {
        document.getElementById("info-title").classList.add("def");
        document.getElementById("info-title").classList.remove("strong");
      }
    },
  },
};
</script>

<style>
.img {
  vertical-align: middle;
  border: 0;
  margin-left: 0;
  padding-top: 50%;
  margin-top: 30%;
}
.product-deliverly .infoList-deliverly li {
  list-style: none;
}
.message {
  width: 30px;
  margin-right: 5%;
}
.open {
  display: block;
}
.closs {
  display: none;
}
.panel-title {
  position: relative;
}
.icon-plus {
  position: absolute;
  /* z-index: 2; */
  top: 0px;
  left: 90%;
}
.hr {
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: 5%;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
}
.hr2 {
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
}
.def{
 font-weight: 600;
}
.strong{
  font-weight: 300;
}
.button-effect{
  position: relative;
  display: inline-block;
  z-index: 1;
  overflow: hidden;
  padding: 12px 28px;
  line-height: normal;
  margin-left: 5%;
  color: #fff;
  padding-top: 2%;
  background-color: #fff;
  border: 1px solid #ed1c24;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 1px;
  outline: none;
  border-radius: 10px;
  text-transform: uppercase;
  -webkit-transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86), border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86), border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}
.button-effect:before {
  content: '';
  display: block;
  background-color: #ed1c24;
  position: absolute;
  left: -2px;
  top: 0;
  right: -2px;
  bottom: 0;
  z-index: -1;
  -webkit-transform: scale(1, 1);
  transform: scale(1, 1);
  -webkit-transform-origin: left center;
  transform-origin: left center;
  -webkit-transition: -webkit-transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: -webkit-transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86), -webkit-transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}
.button-effect:hover{
  border-color: #ed1c24;
  color: #ed1c24;
}
.button-effect:hover:before{
  -webkit-transform-origin: right center;
  transform-origin: right center;
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
}

</style>
