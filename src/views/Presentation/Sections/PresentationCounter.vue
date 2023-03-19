<script setup>
// import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>
<template>
  <section class="pt-3 pb-3" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3 w-100">
          <div class="row">
            <div class="col-md-6 position-relative">
              <div class="mb-3">
                <div class="row g-0 card-info">
                  <div class="card-body info">
                    <br />
                    <p>Bộ sưu tập</p>
                    <h5 class="card-title">Nendoroid</h5>
                    <p class="card-text" style="max-width: 45%">
                      Dòng chibi figure được yêu thích nhất, nhiều gương mặt,
                      thoả sức tạo dáng
                    </p>
                    <p class="card-text">
                      <button type="button" class="btn btn-dark">
                        XEM NGAY >
                      </button>
                    </p>
                  </div>
                  <div class="img">
                    <img
                      class="lazyloaded rounded-start w-100"
                      src="//theme.hstatic.net/1000160337/1000885200/14/categorybanner_1_img.jpg?v=298"
                      alt="Nendoroid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 position-relative">
              <div class="mb-3">
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
                      <button type="button" class="btn btn-dark">
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
  top: -115%;
  bottom: 0;
  left: 0%;
  z-index: 0;
}
.info {
  z-index: 2;
}
</style>
