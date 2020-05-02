<template>
  <div class="info">
    <section class="tuition_fee info-section" v-if="tuitionFee">
      <div class="head">
        受講料（教材費・消費税等含む）
      </div>
      <div class="body">
        <div class="body-inner" v-html="tuitionFee">
        </div>
      </div>
    </section>
    <section class="capacity info-section" v-if="capacity">
      <div class="head">
        定員
      </div>
      <div class="body">
        <div class="body-inner" v-html="capacity">
        </div>
      </div>
    </section>
    <section class="benefits info-section" v-if="benefits">
      <div class="head">
        給付制度
      </div>
      <div class="body">
        <div class="body-inner" v-html="benefits">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    tuitionFee: String,
    capacity: String,
    benefits: String
  }
}
</script>

<style lang="scss" scoped>
.info {
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
}
.info-section {
  background-color: #f2f2f2;
  position: relative;
  margin-top: 50px;
  & /deep/ a {
    text-decoration: underline;
  }
}
.head {
  background-color: #000;
  position: absolute;
  top: -20px;
  color: #fff;
  padding: 5px 20px;
  font-weight: bold;
}
.body {
  padding: 50px;
  @media print, screen and (max-width: 1000px) {
    padding: 50px 5%;
  }
}

//個別のカラー
.denken3 {
  .head {
    background-color: #e60039;
  }
  .info-section /deep/ a {
    color: #e60039;
  }
}
.koujishi1,.koujishi2 {
  .head {
    background-color: #b60081;
  }
  .info-section /deep/ a {
    color: #b60081;
  }
}
.denkikoujisekou,.kenchiku,.kankouji,.doboku {
  .head {
    background-color: #00a73c;
  }
  .info-section /deep/ a {
    color: #00a73c;
  }
}
.kyuusui {
  .head {
    background-color: #00afcc;
  }
  .info-section /deep/ a {
    color: #00afcc;
  }
}
</style>