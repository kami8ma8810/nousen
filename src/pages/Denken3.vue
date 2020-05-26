<template>
  <Layout>
    <div class="denken3">
      <header class="header">
        <Hero
          :backImgOver="require('../assets/img/license_page/denken3/denken3_hero.jpg')"
          :backImgUnder="require('../assets/img/license_page/denken3/denken3_hero_sp.jpg')"
          title="第三種電気主任技術者<br>合格のための受験指導"
          color="#e60039"
          :icon="require('../assets/img/icon/qualification/denken.svg')"
        />
        <Point
          :points='["担当講師が執筆したオリジナルテキスト（教科書）を使用記載。項目を絞り、合格点の60点を超える力を的確に身に付けます（目標は70点前後）。","効果的な学習をサポートする副教材も特徴。講義の中での例題としての活用はもちろん、自宅学習にも使える解説付き問題集や4科目分の添削課題も付いています。","初めて受験する方には、おすすめの基礎講座もご用意しています。第三種電気主任技術者の学習をはじめる前に、押さえておくべき電気の法則や数学の公式を総ざらい。しばらく理系の学習から離れていた方は、ぜひご活用ください。"]'
        />
        <div class="exam-link-wrapper">
          <g-link to="/licenses/#denken" class="exam-link">
            受験資格や試験日の確認はこちら
            <IconBase class="icon"><IconDoubleArrowRight /></IconBase>
          </g-link>
        </div>
      </header>
      <section class="tab-wrapper">
        <div :class="['tab',{'active':isActive === 1}]" v-on:click="tabToggle(1)">
          通学講座
          <IconBase class="icon"><IconArrowRight /></IconBase>
        </div>
        <div :class="['tab',{'active':isActive === 2}]" v-on:click="tabToggle(2)">
          通信講座
          <IconBase class="icon"><IconArrowRight /></IconBase>
        </div>
      </section>
      <div class="body">
        <div v-show="isActive === 1">
          <h3 class="body-title">合格のための受験指導 通学講座</h3>
          <Info
            :tuitionFee="richtextToHTML($static.tuugaku.tuitionFee)"
            :capacity="$static.tuugaku.capacity"
            :benefits="richtextToHTML($static.tuugaku.benefits)"
          />
          <h3 class="body-title">各会場の開催日程</h3>
            <Venue v-for="(items,index) in $static.tuugakuVenue.edges" :key="index"
              :city="items.node.city"
              :period="items.node.period"
              :hall="items.node.hall"
              :details="items.node.details"
              :address="items.node.address"
              :map="items.node.map"
            />
          <Application
            formLink="/denken3-application"
            faxLink="/3_denken_tuugaku_FAX_31year.pdf"
          />
        </div>
        <div v-show="isActive === 2">
          <h3 class="body-title">合格のための受験指導 通信講座</h3>
          <Info
            :tuitionFee="richtextToHTML($static.tuushin.tuitionFee)"
            :capacity="$static.tuushin.capacity"
            :benefits="richtextToHTML($static.tuushin.benefits)"
          />
           <Application
            formLink="/denken3-application"
            faxLink="/3_denken_tuushin_FAX_31year.pdf"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<static-query>
  query Denken3 {
    tuugaku:contentfulQualification(id:"6VzS8vwSpwUI40fOLwAeNd") {
      tuitionFee
      capacity
      benefits
    }
    tuushin:contentfulQualification(id:"2ZbX0D7OZ3NaL5F058SAIr") {
      tuitionFee
      capacity
      benefits
    }
    tuugakuVenue:allContentfulDenken3Venue {
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
  name: "denken3",
  metaInfo() {
    return {
      title: '第三種電気主任技術者',
      meta: [
        {
          key: `og:title`,
          property: `og:title`,
          content: `第三種電気主任技術者 | ${this.$static.metadata.siteName}`,
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
  data() {
    return {
      isActive: 1
    }
  },
  methods: {
    richtextToHTML(content) {
      const richtextString = documentToHtmlString(content).replace(/\n/g, `</br>`);
      return richtextString
    },
    tabToggle: function(num) {
      this.isActive = num
    }
  }
}
</script>

<style lang="scss" scoped>
.denken3 {
  padding-bottom: 100px;
}
.header {
  background-color: #f2f2f2;
  border-bottom: 5px solid #e60039;
}
.exam-link-wrapper {
  text-align: center;
  padding: 80px 0 200px 0;
  @media print, screen and (max-width: 1000px) {
    padding: 60px 0 150px 0;
  }
}
.exam-link {
  background-color: #e60039;
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
  font-weight: bold;
  .tab {
    font-size: 20px;
    color: #666666;
    max-width: 280px;
    width: 100%;
    background-color: #f2f2f2;
    border: 5px solid #e60039;
    border-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 10px 0 10px 0;
    margin: 0 10px;
    .icon {
      vertical-align: middle;
    }
    &.active {
      border-bottom: none;
      background-color: #fff;
      color: #e60039;
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
      border-bottom: 5px solid #e60039;
      display: block;
      margin: 0 auto;
      margin-top: 10px;
    }
  }
}
</style>