<template>
  <b-navbar class="header" type="dark" variant="white" fixed="top">
    <b-navbar-brand>
      <div class="wrap-logo" itemtype="http://schema.org/Organization">
        <a href="https://japanfigure.vn" itemprop="url">
          <img
            style="width: 60%; margin-left: 3%"
            itemprop="logo"
            src="//theme.hstatic.net/1000160337/1000885200/14/logo.png?v=299"
            alt="Japan Figure"
            class="img-responsive logoimg ls-is-cached lazyloaded"
          />
        </a>
        <h1 style="display: none">
          <a href="https://japanfigure.vn" itemprop="url">Japan Figure</a>
        </h1>
      </div>
    </b-navbar-brand>
    <div class="proloop-actions">
      <div class="proloop-actions__inner">
        <div class="actions-primary">
          <b-navbar-brand>
            <a href="#"> Trang chủ </a>
          </b-navbar-brand>
        </div>
      </div>
    </div>
    <b-navbar-brand>
      <div class="dropdown">
        <div class="dropbtn">
          <a href="">Giới thiệu</a>
        </div>
      </div>
    </b-navbar-brand>
    <b-navbar-brand>
      <div class="dropdown">
        <button class="dropbtn">
          <a href="">Hướng dẫn</a>
        </button>
        <div class="dropdown-content">
          <a href="#">Figure là gì?</a>
          <div class="hr"></div>
          <a href="#">Các chủng loại Figure</a>
          <div class="hr"></div>
          <a href="#">Phân biệt thật / giả</a>
          <div class="hr"></div>
          <a href="#">Hỏi và đáp</a>
          <div class="hr"></div>
          <a href="#">Cách sửa chữa figure</a>
          <div class="hr"></div>
          <a href="#">Phân biệt thật / giả</a>
          <div class="hr"></div>
          <a href="#">Đặt mua và thanh toán</a>
          <div class="hr"></div>
          <a href="#">Các chính sách</a>
          <br />
        </div>
      </div>
    </b-navbar-brand>
    <b-navbar-brand>
      <div class="dropdown">
        <button class="dropbtn">
          <a href="http://127.0.0.1:5173/collections/hang-co-san">Sản phẩm</a>
        </button>
        <div class="dropdown-content">
          <a href="http://127.0.0.1:5173/collections/hang-co-san">Hàng có sẵn</a>
          <div class="hr"></div>
          <a href="#">Hàng oder</a>
          <div class="hr"></div>
          <a href="#">Scale figure</a>
          <div class="hr"></div>
          <a href="#">Pop up parade</a>
          <br />
        </div>
      </div>
    </b-navbar-brand>
    <b-navbar-brand>
      <a href="#"> Review </a>
    </b-navbar-brand>
    <b-navbar-brand>
      <div>
        <a href="#"> Ưu đãi </a>
      </div>
    </b-navbar-brand>
    <b-navbar-brand>
      <div class="dropdown">
        <div class="dropbtn">
          <a href="">Kết nối</a>
        </div>
        <div class="dropdown-content">
          <a href="#">Japan figure traning</a>
          <div class="hr"></div>
          <a href="#">Facebook</a>
          <div class="hr"></div>
          <a href="#">Scale figure</a>
          <div class="hr"></div>
          <a href="#">Youtobe</a>
          <br />
        </div>
      </div>
    </b-navbar-brand>
    <b-navbar-brand>
      <div class="dropdown">
        <button class="dropbtn">
          <a href="">Liên hệ</a>
        </button>
        <div class="dropdown-content">
          <a href="#">Địa chỉ</a>
          <div class="hr"></div>
          <a href="#">Số tài khoản</a>
          <br />
        </div>
      </div>
    </b-navbar-brand>
    <b-navbar-brand class="trash" style="visibility: hidden ;">
      <a href="">1312</a>
      /
      <a href="">3123</a>
    </b-navbar-brand>
    <b-navbar-brand class="icons">
      <a href="">
        <i class="bi bi-search"></i>
      </a>
      <a href="">
        <i class="bi bi-person"></i>
      </a>
      <a href="">
        <el-badge :value="0" class="item">
          <i class="bi bi-cart"></i>
        </el-badge>
      </a>
    </b-navbar-brand>
  </b-navbar>
</template>

<script>
export default {};
</script>
<style>
.icons a{
    font-size: 20px;
    margin-right: 10px;
}
.hr {
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-right: auto;
  border-style: inset;
  margin-left: 0;
  border-width: 1px;
}
.dropbtn {
  background-color: white;
  color: #252a2b;
  padding: 0px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  background-color: #fff;
}

.dropdown-content a {
  color: #252a2b;
  padding: 8px 16px;
  max-height: 30px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: ;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  color: black;
}
/* .item:hover .wrapper,
.item:hover ~ .wrapper */
</style>
