<template>
  <Layout>
    <div class="doboku-s-application">
      <header class="header">
        <Hero
          title="1級•2級土木施工管理技士<br>講習会お申し込み"
          color="#00a73c"
        />
      </header>
      <div class="contents">
        <iframe class="google_form" src="https://docs.google.com/forms/d/e/1FAIpQLSefXj4nrsS9Odlgz2A7ghinnMV7SsfNSS5xehqWlUw1VPWY5A/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
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
  name: "doboku_s_application",
  metaInfo() {
    return {
      title: '1・2級 土木施工管理技士講習お申し込み',
      meta: [
        {
          key: `og:title`,
          property: `og:title`,
          content: `1・2級 土木施工管理技士講習お申し込み | ${this.$static.metadata.siteName}`,
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
// .doboku-s-application {
  // padding-bottom: 100px;
// }
.contents {
  background-color: #f2f2f2;
  padding-top: 50px;
}
</style>