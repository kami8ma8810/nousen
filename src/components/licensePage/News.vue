<template>
  <div class="news">
    <section class="news-inner" v-if="contents">
      <div v-html="contents">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    contents: String,
  }
}
</script>

<style lang="scss" scoped>
.news {
    max-width: 970px;
    width: 100%;
    margin: 0 auto;
    margin-top: -20px;
    z-index: 0;
    position: relative;
}
.news-inner {
  padding: 50px;
}
</style>