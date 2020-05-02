<template>
  <Layout>
    <div class="kankouji-s-application">
      <header class="header">
        <Hero
          title="1級•2級管工事施工管理技士<br>講習会お申し込み"
          color="#00a73c"
        />
      </header>
      <div class="contents">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeo3AHCF0MdxhWzov_LYtUsSZ-iG_eco0ppDIDQRsjCxcZJrg/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
      </div>
    </div>
  </Layout>
</template>


<script>
import Hero from '@/components/Hero.vue';
export default {
  name: "kankouji_s_application",
  components: {
    Hero,
  },
}
</script>

<style lang="scss" scoped>
// .kankouji-s-application {
  // padding-bottom: 100px;
// }
.contents {
  background-color: #f2f2f2;
  padding-top: 50px;
}
</style>