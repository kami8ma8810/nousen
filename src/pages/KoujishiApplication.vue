<template>
  <Layout>
    <div class="koujishi-application">
      <header class="header">
        <Hero
          title="第一種・第二種電気工事士<br>講習会お申し込み"
          color="#b60081"
        />
      </header>
      <div class="contents">
        <iframe class="google_form" src="https://docs.google.com/forms/d/e/1FAIpQLScDShJwfcDFbsAJ_vcyOa2cKHUBQvlErE2oQIQ-xlASpgh4HQ/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
      </div>
    </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>

<script>
import Hero from '@/components/Hero.vue';
export default {
  name: "koujishi_application",
  metaInfo() {
    return {
      title: '第一種・第二種電気工事士講習会お申し込み',
      meta: [
        {
          key: `og:title`,
          property: `og:title`,
          content: `第一種・第二種電気工事士講習会お申し込み | ${this.$static.metadata.siteName}`,
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: `${this.$static.metadata.siteUrl}/koujishi-application`,
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
// .koujishi-application {
  // padding-bottom: 100px;
// }
.contents {
  background-color: #f2f2f2;
  padding-top: 50px;
}
</style>