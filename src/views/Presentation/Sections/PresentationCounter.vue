<script setup>
// import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>
<template>
  <section class="pt-3 pb-3" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3 w-100">
          <div class="row">
            <div class="col-md-6 position-relative groupbanner-hover-home">
              <div class="mb-3 lazyloaded-home">
                <div class="row g-0 card-info ">
                  <div class="card-body info ">
                    <br />
                    <p>Bộ sưu tập</p>
                    <h5 class="card-title">Nendoroid</h5>
                    <p class="card-text" style="max-width: 45%">
                      Dòng chibi figure được yêu thích nhất, nhiều gương mặt,
                      thoả sức tạo dáng
                    </p>
                    <p class="card-text">
                      <button type="button" class=" button-effect-home">
                        XEM NGAY >
                      </button>
                    </p>
                  </div>
                  <div class="img">
                    <img
                      class=" rounded-start w-100"
                      src="//theme.hstatic.net/1000160337/1000885200/14/categorybanner_1_img.jpg?v=298"
                      alt="Nendoroid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 position-relative groupbanner-hover-home">
              <div class="mb-3 lazyloaded-home">
                <div class="row g-0 card-info">
                  <div class="card-body info">
                    <br>
                    <p>Bộ sưu tập</p>
                    <h5 class="card-title">Nendoroid</h5>
                    <p class="card-text" style="max-width: 45%">
                      Dòng chibi figure được yêu thích nhất, nhiều gương mặt,
                      thoả sức tạo dáng
                    </p>
                    <p class="card-text">
                      <button type="button " class=" button-effect-home">
                        XEM NGAY >
                      </button>
                    </p>
                  </div>
                  <div class="img">
                    <img
                      class="lazyloaded w-100 rounded-start"
                      src="https://theme.hstatic.net/1000160337/1000885200/14/categorybanner_2_img.jpg?v=298"
                      alt="Nendoroid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.card-info {
  position: relative;
}
.img {
  position: absolute;
  /* z-index: 2; */
  top: 0%;
  bottom: 0;
  left: 0%;
  z-index: 0;
}
.info {
  z-index: 2;
}
.groupbanner-hover-home {
  display: block;
  position: relative;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
.groupbanner-hover-home:hover:before {
  background: rgba(255, 255, 255, 0.5) none repeat scroll 0 0;
  bottom: 50%;
  top: 50%;
}
.groupbanner-hover-home:after, .groupbanner-hover-home:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.5s ease-out 0s;
  -webkit-transition: all 0.5s ease-in-out 0s;
  -ms-transition: all 0.5s ease-in-out 0s;
}
.groupbanner-hover-home:hover:after {
  background: rgba(255, 255, 255, 0.5) none repeat scroll 0 0;
  left: 51%;
  right: 50%;
}
.groupbanner-hover-home:hover img:not(.lazyloaded-home) {
  -ms-transform: scale(1.08);
  -webkit-transform: scale(1.08);
  transform: scale(1.08);
}

.groupbanner-hover-home img:not(.lazyloaded-home) {
  transition: opacity 0.3s, transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  -webkit-transition: opacity 0.3s, transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  -ms-transition: opacity 0.3s, transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.lazyloaded-home {
  opacity: 1;
  -webkit-filter: blur(0);
  filter: blur(0);
}
.button-effect-home{
  position: relative;
  display: inline-block;
  z-index: 1;
  overflow: hidden;
  padding: 12px 28px;
  line-height: normal;
  margin-left: 5%;
  color: #fff;
  padding-top: 2%;
  background-color: #ed1c24;
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
.button-effect-home:before {
  content: '';
  display: block;
  background-color: black;
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
.button-effect-home:hover{
  border-color: #ed1c24;
  color: #FFFFFF;
}
.button-effect-home:hover:before{
  -webkit-transform-origin: right center;
  transform-origin: right center;
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
}
</style>
