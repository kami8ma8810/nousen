<template>
  <Layout>
    <div class="denken3-application">
      <header class="header">
        <Hero
          title="第三種電気主任技術者<br>講習会お申し込み"
          color="#e60039"
        />
      </header>
      <div class="contents">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf0yJEv3gFnvg7Irw92c-w0vQGoM9z1fgDpKfMDiAWSDfYEKA/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
      </div>
    </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Hero from '@/components/Hero.vue';
export default {
  name: "denken3_application",
  metaInfo() {
    return {
      title: '第三種電気主任技術者講習会お申し込み',
      meta: [
        {
          key: `og:title`,
          property: `og:title`,
          content: `第三種電気主任技術者講習会お申し込み | ${this.$static.metadata.siteName}`,
        },
      ]
    }
  },
  components: {
    Hero,
  },
}
</script>

<style lang="scss" scoped>
// .denken3-application {
  // padding-bottom: 100px;
// }
.contents {
  background-color: #f2f2f2;
  padding-top: 50px;
}
</style>