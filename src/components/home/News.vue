<template>
  <div class="news-wrapper">
    <h3 class="section-title">
      センターからのお知らせ
    </h3>
    <article class="news-article" v-for="(item,index) in $static.allContentfulNewsPost.edges" :key="index">
      <span class="news-date">{{item.node.date}}<br>
        </span>
      <div class="news-content" v-html="richtextToHTML(item.node.article)" />
    </article>
  </div>
</template>

<static-query>
query News {
  allContentfulNewsPost(limit:5) {
    edges {
      node {
        title
        date(format: "Y.M.D")
        createdAt(format: "Y.M.D")
        updatedAt(format: "Y.M.D")
        article
      }
    }
  }
}
</static-query>

<script>
import { documentToHtmlString } from '../../../node_modules/@contentful/rich-text-html-renderer';
export default {
  name: 'news',
  methods: {
   richtextToHTML(content) {
    const richtextString = documentToHtmlString(content).replace(/\n/g, `</br>`);
    return richtextString
   }
 }
}
</script>
<style lang="scss" scoped>
.news-wrapper {
  max-width: 860px;
  border-top: 5px solid #3b241a;
  border-bottom: 5px solid #3b241a;
  height: 336px;
  overflow-y: scroll;
  margin: 0 auto;
  position: relative;
}
.section-title {
  text-align: center;
  margin-top: 50px;
}
.news-article {
  margin: 30px;
}
.news-date {
  font-weight: bold;
  color: #f4891e;
  font-style: italic;
  font-size: 25px;
  @media print, screen and (max-width: 1000px) {
    font-size: 20px;
  }
}
.news-content /deep/ p:first-child {
  margin-top: 0;
}
</style>
