<template>
  <Layout>
    <div class="koujishi1">
      <header class="header">
        <Hero
          :backImgOver="require('../assets/img/license_page/koujishi1/koujishi1_hero.jpg')"
          :backImgUnder="require('../assets/img/license_page/koujishi1/koujishi1_hero_sp.jpg')"
          title="第一種電気工事士<br>合格のための受験指導"
          color="#b60081"
          :icon="require('../assets/img/icon/qualification/denkikouji.svg')"
        />
        <Point
          :points='["＜筆記＞近年の出題傾向から分析した、頻繁に出題される項目をわかりやすく解説。","＜筆記＞「得意な分野を生かして合格点を獲得する」学習方法を指導します。","＜技能＞試験同様の電材をご用意。","＜技能＞ややハイレベルな作業になりますが、複数の講師がしっかり指導。最初から一種を受験する方も、丁寧にサポートします。"]'
        />
        <div class="exam-link-wrapper">
          <g-link to="/licenses/#koujishi1" class="exam-link">
            受験資格や試験日の確認はこちら
            <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
          </g-link>
        </div>
      </header>
      <div class="body">
        <div>
          <h3 class="body-title">合格のための受験指導 通学講座</h3>
          <Info
            :tuitionFee="richtextToHTML($static.contentfulQualification.tuitionFee)"
            :capacity="$static.contentfulQualification.capacity"
            :benefits="richtextToHTML($static.contentfulQualification.benefits)"
          />
          <h3 class="body-title">各会場の開催日程</h3>
          <Venue v-for="(items,index) in $static.allContentfulKoujishi1Venue.edges" :key="index"
            :city="items.node.city"
            :period="items.node.period"
            :hall="items.node.hall"
            :details="items.node.details"
            :address="items.node.address"
            :map="items.node.map"
          />
        
          <Application
            formLink="/koujishi-application"
            faxLink="/1_denki_FAX_31year.pdf"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<static-query>
  query Koujishi1 {
    contentfulQualification(id:"2tUPl86sWerPUqJi8Tgf6w") {
      tuitionFee
      capacity
      benefits
    }
    allContentfulKoujishi1Venue(order: ASC) {
      edges {
        node {
          city
          period
          hall
          details
          address
          map {
            lat
            lon
          }
        }
      }
    }
    metadata {
      siteName
    }
  }
</static-query>

<script>
import Hero from '@/components/Hero.vue';
import Point from '@/components/licensePage/Point.vue';
import Info from '@/components/licensePage/Info.vue';
import Venue from '@/components/licensePage/Venue.vue';
import Application from '@/components/licensePage/Application.vue';
import IconBase from '@/components/IconBase.vue'
import IconDoubleArrowRight from '@/components/icons/IconDoubleArrowRight.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import { documentToHtmlString } from '../../node_modules/@contentful/rich-text-html-renderer';
export default {
  name: "koujishi1",
  metaInfo() {
    return {
      title: '第一種電気工事士',
      meta: [
        {
          key: `og:title`,
          property: `og:title`,
          content: `第一種電気工事士 | ${this.$static.metadata.siteName}`,
        },
      ]
    }
  },
  components: {
    Hero,
    Point,
    Info,
    Venue,
    Application,
    IconBase,
    IconDoubleArrowRight,
    IconArrowRight
  },
  methods: {
    richtextToHTML(content) {
      const richtextString = documentToHtmlString(content).replace(/\n/g, `</br>`);
      return richtextString
    }
  }
}
</script>

<style lang="scss" scoped>
.koujishi1 {
  padding-bottom: 100px;
}
.header {
  background-color: #f2f2f2;
  border-bottom: 5px solid #b60081;
}
.exam-link-wrapper {
  text-align: center;
  padding: 80px 0 200px 0;
  @media print, screen and (max-width: 1000px) {
    padding: 60px 0 150px 0;
  }
}
.exam-link {
  background-color: #b60081;
  color: #fff;
  border-radius: 10px;
  padding: 14px 30px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  font-size: 17px;
}
.tab-wrapper {
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  display: flex;
  text-align: center;
  margin-top: -70px;
  .tab {
    font-size: 20px;
    color: #666666;
    max-width: 280px;
    width: 100%;
    background-color: #f2f2f2;
    border: 5px solid #b60081;
    border-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 10px 0 10px 0;
    margin: 0 10px;
    &.active {
      border-bottom: none;
      background-color: #fff;
      color: #b60081;
      .icon {
        transform: rotate(90deg);
      }
    }
  }
}
.body {
  width: 100%;
  margin: 0 auto;
  @media print, screen and (max-width: 1000px) {
    width: 90%;
  }
  .body-title {
    margin-top: 100px;
    text-align: center;
    font-size: 30px;
    @media print, screen and (max-width: 1000px) {
      font-size: 20px;
    }
    &:after {
      content: "";
      width: 70px;
      border-bottom: 5px solid #b60081;
      display: block;
      margin: 0 auto;
      margin-top: 10px;
    }
  }
}
</style>