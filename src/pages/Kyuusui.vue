<template>
  <Layout>
    <div class="kyuusui">
      <header class="header">
        <Hero
          :backImgOver="require('../assets/img/license_page/kyuusui/kyuusui_hero.jpg')"
          :backImgUnder="require('../assets/img/license_page/kyuusui/kyuusui_hero_sp.jpg')"
          title="給水装置工事主任技術者<br>合格のための受験指導"
          color="#00afcc"
          :icon="require('../assets/img/icon/qualification/kyuusui.svg')"
        />
        <Point
          :points='["＜学科＞1級、2級ともに、合格点獲得に必要な学習項目を解説。","＜学科＞選択問題のある科目はより効率的な学習方法を伝授します。記憶が重要な試験なので、「どこを優先的に覚え、なにを関連付けて理解すべきか」を指導します。","＜実地＞多くの方が苦労される「経験記述問題」をしっかり対策します。","＜実地＞工事件名の記述方法から使うべき言葉、専門用語、文章の簡潔なまとめ方、得点アップ方法など、オリジナルのテキストで記述のテクニックを徹底解説。","＜実地＞個別のご質問にも極力対応します。","＜実地＞講習後に提出いただく経験記述の課題は講師自ら個別に添削。高得点となるように直し、助言を入れてお返しします。"]'
        />
        <div class="exam-link-wrapper">
          <g-link to="/licenses/#kyuusui" class="exam-link">
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
          <Venue v-for="(items,index) in $static.allContentfulKyuusuiVenue.edges" :key="index"
            :city="items.node.city"
            :period="items.node.period"
            :hall="items.node.hall"
            :details="items.node.details"
            :address="items.node.address"
            :map="items.node.map"
          />
          <Application
            formLink="/kyuusui-application"
            faxLink="/kyuusui_FAX_31year.pdf"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<static-query>
  query Kyuusui {
    contentfulQualification(id:"5rxFD2VOiMRvqB8cnIpIYK") {
      tuitionFee
      capacity
      benefits
    }
    allContentfulKyuusuiVenue {
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
  name: "kyuusui",
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
.kyuusui {
  padding-bottom: 100px;
}
.header {
  background-color: #f2f2f2;
  border-bottom: 5px solid #00afcc;
}
.exam-link-wrapper {
  text-align: center;
  padding: 80px 0 200px 0;
  @media print, screen and (max-width: 1000px) {
    padding: 60px 0 150px 0;
  }
}
.exam-link {
  background-color: #00afcc;
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
    border: 5px solid #00afcc;
    border-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 10px 0 10px 0;
    margin: 0 10px;
    &.active {
      border-bottom: none;
      background-color: #fff;
      color: #00afcc;
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
    font-size: 30px;
    @media print, screen and (max-width: 1000px) {
      font-size: 20px;
    }
    &:after {
      content: "";
      width: 70px;
      border-bottom: 5px solid #00afcc;
      display: block;
      margin: 0 auto;
      margin-top: 10px;
    }
  }
}
</style>