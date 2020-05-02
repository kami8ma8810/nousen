<template>
  <Layout>
    <div class="goods-sales">
      <header class="header">
        <Hero
          title="テキスト・工具販売"
          color="#999"
        />
      </header>
      <div class="contents">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfVCJuPrC8B-EJ-LmBgoQTZuRM7xEj3Pm-ogyjZyL5o0bphCA/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
      </div>
    </div>
  </Layout>
</template>


<script>
import Hero from '@/components/Hero.vue';
export default {
  name: "goods-sales",
  components: {
    Hero,
  },
}
</script>

<style lang="scss" scoped>
// .goods-sales {
  // padding-bottom: 100px;
// }
.contents {
  background-color: #f2f2f2;
  padding-top: 50px;
}
</style>