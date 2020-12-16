<template>
  <Layout>
    <div class="home">
      <section class="section01 hero-inner">
        <div class="qualification-list-wrapper">
          <transition-group
            v-if="afterImgLoad"
            appear
            name="appear-animation"
            tag="div"
            class="qualification-list-wrap"
          >
            <div class="item item01 denken" key="item01">
              <g-link to="/denken3">
                <span>電験</span><br />
                第三種<br />
                電気主任技術者
              </g-link>
            </div>
            <div class="item item02 denkikouji" key="item02">
              <g-link to="/koujishi1">
                <span>電気工事士</span><br />
                第一種<br />
                電気工事士
              </g-link>
            </div>
            <div class="item item03 denkikouji" key="item03">
              <g-link to="/koujishi2">
                <span>電気工事士</span><br />
                第二種<br />
                電気工事士
              </g-link>
            </div>
            <div class="item item04 denkikoujisekou" key="item04">
              <g-link to="/denkikouji-s">
                <span>施工管理技士</span><br />
                1・2級<br />
                電気工事施工管理技士
              </g-link>
            </div>
            <div class="item item05 kenchiku" key="item05">
              <g-link to="/kenchiku-s">
                <span>施工管理技士</span><br />
                1・2級<br />
                建築施工管理技士
              </g-link>
            </div>
            <div class="item item06 kankouji" key="item06">
              <g-link to="/kankouji-s">
                <span>施工管理技士</span><br />
                1・2級<br />
                管工事施工管理技士
              </g-link>
            </div>
            <div class="item item07 doboku" key="item07">
              <g-link to="/doboku-s">
                <span>施工管理技士</span><br />
                1・2級<br />
                土木施工管理技士
              </g-link>
            </div>
            <div class="item item08 kyuusui" key="item08">
              <g-link to="/kyuusui">
                <span>給水装置工事</span><br />
                給水装置工事<br />
                主任技術者
              </g-link>
            </div>
            <div class="item item09" key="item09">
              <picture>
                <source
                  media="(min-width: 1001px)"
                  srcset="../assets/img/front/section01/main_catch.svg"
                  alt="「勉強の時間がない」という問題を解決しよう。"
                />
                <source
                  media="(max-width: 1000px)"
                  srcset="../assets/img/front/section01/main_catch_sp.svg"
                  alt="「勉強の時間がない」という問題を解決しよう。"
                />
                <img
                  src="../assets/img/front/section01/main_catch.svg"
                  alt="「勉強の時間がない」という問題を解決しよう。"
                />
              </picture>
            </div>
          </transition-group>
        </div>
        <div class="scroll_top" id="js-scroll_top">
          <img src="../assets/img/front/scroll.svg" alt="scroll" />
        </div>
        <div class="more_qualification">
          <g-link to="/licenses">
            資格一覧はこちら<IconBase class="icon"
              ><IconDoubleArrowRight
            /></IconBase>
          </g-link>
        </div>
      </section>
      <section class="section02">
        <p class="section-name">
          News
        </p>
        <News />
      </section>
      <section class="section03">
        <h3 class="section-title">
          <img
            src="../assets/img/front/reason_main_headline.svg"
            alt="能センが選ばれる4つの理由"
          />
        </h3>
        <div class="reason-wrapper">
          <Reason
            reasonNumber="1"
            myTitle="わかりやすい講習"
            :myImage="'front/section01_background.jpg'"
            :myImageSp="'front/section01_background_sp.jpg'"
            myCatch="必要なことだけ、<br>
              「学び方」を学べます。"
            :explanation="[
              '講師の多くが、建設・電気・設備等さまざまな現場で<i class=scroll-animation-item>長いキャリアをもつ元技術者</i>です。<br>豊富な現場経験のもと、みなさんが<i class=scroll-animation-item>共感できるエピソード</i>を盛り込んだ熱い講習が特徴。<br>難しい話も興味をもって理解できる！',
              '近年の出題傾向、関連業種の現況、法制度の変更などもしっかりサポート。<br>「試験までに特に学習すべき項目」「捨てるべき項目」を明確にお伝えします。<br>だから、<i class=scroll-animation-item>効率的な学習方法を</i>学べる！',
              'ご質問があれば、講義中はもちろん、<i class=scroll-animation-item>休憩時間や終了後も</i>快く対応します。',
            ]"
            moreLink="/teachers"
            moreText="詳しい講師紹介はこちら"
          />
          <Reason
            reasonNumber="2"
            myTitle="他にないテキスト"
            :myImage="'front/section02_background.jpg'"
            :myImageSp="'front/section02_background_sp.jpg'"
            myCatch="教科書の作者が<br>
              解説するから的確です。"
            :explanation="[
              'ほとんどの講習で、<i class=scroll-animation-item>担当講師が執筆したテキスト</i>（教科書）を使用。<br>作者本人が説明するから、<i class=scroll-animation-item>受験対策に必要な箇所を的確に解説</i>できます。',
              '限られた時間でも知識が身につく、<i class=scroll-animation-item>受験対策に適したテキスト</i>を厳選。',
              '最新の情報や臨時の対策などは、<i class=scroll-animation-item>補足資料でサポート</i>します。',
              'テキストは申込時に<i class=scroll-animation-item>事前送付</i>するので、<i class=scroll-animation-item>予習に活用</i>できます。',
            ]"
            moreLink="/goods-sales"
            moreText="テキスト販売・工具販売"
          />
          <Reason
            reasonNumber="3"
            myTitle="信頼の実績と歴史"
            :myImage="'front/section03_background.jpg'"
            :myImageSp="'front/section03_background_sp.jpg'"
            myCatch="2万名から支持されています。"
            :explanation="[
              '私たち能センの正式名称は、「<i class=scroll-animation-item>一般社団法人 能力開発研修センター</i>」です。',
              '<i>設立は1983年</i>。資格取得を目指す方々に長年支持され続けています。<br><span>（受講生：約2万2000名以上、参加企業：約1万2000社以上）</span>',
              '10年以上にわたって指名をいただく企業も多数。<i class=scroll-animation-item>業界から高い信頼</i>をいただいています。',
            ]"
          />
          <Reason
            reasonNumber="4"
            myTitle="常識破りのサービス"
            :myImage="'front/section04_background.jpg'"
            :myImageSp="'front/section04_background_sp.jpg'"
            myCatch="「あればいいな」を<br>ご提供しています。"
            :explanation="[
              '受講費は、<br><i class=scroll-animation-item>リーズナブルでシンプル。</i><br><span>教材・添削費用などすべて含んでわかりやすく設定</span>',
              '他校では<i class=scroll-animation-item>受講費と教材費</i>が<br>別のケースもありますが、<br>能センはそんな常識を破ります。',
              '<i class=scroll-animation-item>会場変更が自由。</i><br>直前にご都合が悪くなった、<br>という場合も大丈夫！<br>別日程の会場や他地域の会場など、<br>希望によっていつでも変更が可能です。',
              '面倒で忘れがちな<br><i class=scroll-animation-item>願書の取り寄せサービス</i>もご用意。<br><span>インターネット申込ができる資格など、<br>対応していない願書もあり</span>',
              '<i class=scroll-animation-item>再受講</i>する場合には割引制度が使えます。<br><span>（受講科目と一部関連科目について次年度以降、受講費を最大4割程度オフ）</span>',
            ]"
          />
        </div>
        <div class="last-message">
          <p>
            学び方から学べる。<br
              class="under_display"
            />サービスが受講者目線。<br />それが能センです。
          </p>
          <img
            src="../assets/img/common/main_logo.svg"
            alt="能セン 学び方を学ぶ"
            class="last-message-logo"
          />
        </div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query Index {
  allContentfulNewsPost(limit:5) {
    edges {
      node {
        title
        date
        createdAt
        updatedAt
        article
      }
    }
  }
}
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>

<script>
// @ is an alias to /src
import IconBase from "@/components/IconBase.vue";
import IconDoubleArrowRight from "@/components/icons/IconDoubleArrowRight.vue";
import Reason from "@/components/home/Reason.vue";
import News from "@/components/home/News.vue";

export default {
  name: "home",
  components: {
    IconBase,
    IconDoubleArrowRight,
    Reason,
    News,
  },
  metaInfo() {
    return {
      title: "TOP",
      meta: [
        {
          key: `og:title`,
          property: `og:title`,
          content: `TOP | ${this.$static.metadata.siteName}`,
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: this.$static.metadata.siteUrl,
        },
      ],
    };
  },
  data() {
    return {
      afterImgLoad: false,
    };
  },
  mounted() {
    //トップの背景の読み込みが終わってからアニメーションさせる
    var image = new Image();
    image.onload = () => {
      this.afterImgLoad = true;
    };
    image.src = require("../assets/img/front/section01/main_background.jpg");
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    //スクロールしたらスクロールimg非表示
    onScroll() {
      const moveScroll = window.pageYOffset;
      const target = document.getElementById("js-scroll_top");
      if (0 < moveScroll) {
        target.classList.add("display_none");
      } else {
        target.classList.remove("display_none");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 200px;
  @media print, screen and (max-width: 1000px) {
    padding-bottom: 100px;
  }
}
.section01 {
  background-image: url("../assets/img/front/section01/main_background.jpg");
  background-size: cover;
  @media print, screen and (min-width: 1001px) {
    padding-top: 160px;
  }
  @media print, screen and (max-width: 1000px) {
    padding-top: 110px;
  }
}
.qualification-list-wrap {
  display: grid;
  display: -ms-grid;
  margin: 0 auto;
  @media print, screen and (min-width: 1001px) {
    grid-template-columns: 150px 150px 120px 150px 150px;
    -ms-grid-columns: 150px 150px 100px 150px 150px;
    grid-template-rows: 200px 200px;
    -ms-grid-rows: 200px 200px;
    grid-gap: 50px;
    justify-content: center; /* 横方向は中央に */
    align-content: center; /* 縦方向は下端に */
    width: 900px;
  }
  @media print, screen and (max-width: 1000px) {
    grid-template-columns: 150px 150px;
    grid-template-rows: 150px 150px 150px 150px 150px;
    justify-content: center; /* 横方向は中央に */
  }
}
.item {
  font-weight: bold;
  font-size: 15px;
  line-height: 1.5em;
  @media print, screen and (max-width: 1000px) {
    text-align: center;
  }
  span {
    font-size: 13px;
    color: #fff;
    padding: 0px 2px;
  }
  a {
    display: block;
    &:before {
      height: 50px;
      width: 50px;
      display: block;
      margin-bottom: 10px;
      @media print, screen and (max-width: 1000px) {
        margin: 0 auto;
        margin-bottom: 10px;
      }
    }
  }
}
.item01 {
  @media print, screen and (min-width: 1001px) {
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: end;
    -ms-grid-column: 1;
    -ms-grid-row: 1;
  }
  @media print, screen and (max-width: 1000px) {
    grid-column: 1/2;
    grid-row: 2/3;
    -ms-grid-column: 1;
    -ms-grid-row: 2;
  }
}
.item02 {
  @media print, screen and (min-width: 1001px) {
    grid-column: 2/3;
    grid-row: 1/2;
    align-self: end;
    -ms-grid-column: 2;
    -ms-grid-row: 1;
  }
  @media print, screen and (max-width: 1000px) {
    grid-column: 2/3;
    grid-row: 2/3;
    -ms-grid-column: 2;
    -ms-grid-row: 2;
  }
}
.item03 {
  @media print, screen and (min-width: 1001px) {
    grid-column: 4/5;
    grid-row: 1/2;
    align-self: end;
    -ms-grid-column: 4;
    -ms-grid-row: 1;
  }
  @media print, screen and (max-width: 1000px) {
    grid-column: 1/2;
    grid-row: 3/4;
    -ms-grid-column: 1;
    -ms-grid-row: 3;
  }
}
.item04 {
  @media print, screen and (min-width: 1001px) {
    grid-column: 5/6;
    grid-row: 1/2;
    align-self: end;
    -ms-grid-column: 5;
    -ms-grid-row: 1;
  }
  @media print, screen and (max-width: 1000px) {
    grid-column: 2/3;
    grid-row: 3/4;
    -ms-grid-column: 2;
    -ms-grid-row: 3;
  }
}
.item05 {
  @media print, screen and (min-width: 1001px) {
    grid-column: 1/2;
    grid-row: 2/3;
    align-self: start;
    -ms-grid-column: 1;
    -ms-grid-row: 2;
  }
  @media print, screen and (max-width: 1000px) {
    grid-column: 1/2;
    grid-row: 4/5;
    -ms-grid-column: 1;
    -ms-grid-row: 4;
  }
}
.item06 {
  @media print, screen and (min-width: 1001px) {
    grid-column: 2/3;
    grid-row: 2/3;
    align-self: start;
    -ms-grid-column: 2;
    -ms-grid-row: 2;
  }
  @media print, screen and (max-width: 1000px) {
    grid-column: 2/3;
    grid-row: 4/5;
    -ms-grid-column: 2;
    -ms-grid-row: 4;
  }
}
.item07 {
  @media print, screen and (min-width: 1001px) {
    grid-column: 4/5;
    grid-row: 2/3;
    align-self: start;
    -ms-grid-column: 4;
    -ms-grid-row: 2;
  }
  @media print, screen and (max-width: 1000px) {
    grid-column: 1/2;
    grid-row: 5/6;
    -ms-grid-column: 1;
    -ms-grid-row: 5;
  }
}
.item08 {
  @media print, screen and (min-width: 1001px) {
    grid-column: 5/6;
    grid-row: 2/3;
    align-self: start;
    -ms-grid-column: 5;
    -ms-grid-row: 2;
  }
  @media print, screen and (max-width: 1000px) {
    grid-column: 2/3;
    grid-row: 5/6;
    -ms-grid-column: 2;
    -ms-grid-row: 5;
  }
}
.item09 {
  @media print, screen and (min-width: 1001px) {
    grid-column: 3/4;
    grid-row: 1/3;
    -ms-grid-column: 3;
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    padding-right: 20px;
  }
  @media print, screen and (max-width: 1000px) {
    grid-column: 1/3;
    grid-row: 1/2;
    align-self: center;
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    -ms-grid-row: 1;
  }
  img {
    @media print, screen and (min-width: 1001px) {
      max-height: 100%;
    }
  }
}
.denken {
  color: #e60039;
  span {
    background-color: #e60039;
  }
}
.denkikouji {
  color: #b60081;
  span {
    background-color: #b60081;
  }
}
.denkikoujisekou,
.kenchiku,
.kankouji,
.doboku {
  color: #00a73c;
  span {
    background-color: #00a73c;
  }
}
.kyuusui {
  color: #00afcc;
  span {
    background-color: #00afcc;
  }
}
.denken a:before {
  content: url("../assets/img/icon/qualification/denken.svg");
}
.denkikouji a:before {
  content: url("../assets/img/icon/qualification/denkikouji.svg");
}
.denkikoujisekou a:before {
  content: url("../assets/img/icon/qualification/denkikoujisekou.svg");
}
.doboku a:before {
  content: url("../assets/img/icon/qualification/doboku.svg");
}
.kankouji a:before {
  content: url("../assets/img/icon/qualification/kankouji.svg");
}
.kenchiku a:before {
  content: url("../assets/img/icon/qualification/kenchiku.svg");
}
.kyuusui a:before {
  content: url("../assets/img/icon/qualification/kyuusui.svg");
}
.more_qualification {
  font-weight: bold;
  text-align: center;
  margin-top: 80px;
  padding-bottom: 100px;
  a {
    border: 5px solid #000;
    padding: 10px 15px;
  }
  .icon {
    margin-left: 10px;
    vertical-align: text-bottom;
  }
}

.section02 {
  margin: 0 auto;
  @media print, screen and (max-width: 1000px) {
    max-width: 90%;
  }
  .section-name {
    color: #f4891e;
    font-weight: bold;
    position: relative;
    text-align: center;
    margin-top: -50px;
    margin-bottom: 0;
    &:after {
      content: "";
      height: 200px;
      width: 5px;
      background-color: #000;
      display: block;
      position: relative;
      top: 0px;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
}
.section03 {
  position: relative;
  &:before {
    content: "";
    height: 500px;
    width: 5px;
    background-color: #000;
    display: block;
    position: relative;
    top: 0px;
    left: 0;
    right: 0;
    margin: auto;
    @media print, screen and (max-width: 1000px) {
      height: 300px;
    }
  }
  &:after {
    content: "";
    height: 30px;
    width: 5px;
    background-color: #000;
    display: block;
    position: absolute;
    top: 473px;
    left: -20px;
    right: 0;
    margin: auto;
    transform: rotate(-45deg);
    @media print, screen and (max-width: 1000px) {
      top: 274px;
    }
  }
  .section-title {
    max-width: 330px;
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    position: absolute;
    top: 200px;
    left: 0;
    right: 0;
    padding: 50px 0;
    @media print, screen and (max-width: 1000px) {
      width: 90%;
      top: 30px;
      max-width: 250px;
      padding: 20px 0;
    }
    &:before {
      content: url("../assets/img/icon/finger_top_brown.svg");
      width: 30px;
      height: 50px;
      display: block;
      margin: 0 auto;
      background-color: #fff;
      padding: 10px;
    }
  }
  .reason-wrapper {
    margin-top: 100px;
  }
  .last-message {
    max-width: 90%;
    width: 100%;
    margin: 0 auto;
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    .under_display {
      @media print, screen and (min-width: 1001px) {
        display: none;
      }
    }
    @media print, screen and (max-width: 1000px) {
      font-size: 18px;
    }
    &:before {
      content: "";
      height: 200px;
      width: 5px;
      background-color: #000;
      display: block;
      position: relative;
      left: 0;
      right: 0;
      margin: auto;
      margin-top: 30px;
      @media print, screen and (max-width: 1000px) {
        height: 100px;
      }
    }
    .last-message-logo {
      max-width: 260px;
      width: 90%;
      @media print, screen and (max-width: 1000px) {
        max-width: 150px;
      }
    }
  }
}

// .appear-animation-enter-active {
//   opacity: 1;
//   transition: all 0.8s ease-out 1s;
// }
// // leave の継続状態。トランジションが終わるフェーズ中に適用
// // leave がトリガされるとき追加され、トランジション/アニメーションが終了すると削除
// // 削除シーンの期間、遅延、イージングを定義
// .appear-animation-leave-active {
// }

// //  enter の開始状態。
// //  要素が挿入される前に適用され、要素が挿入された 1 フレーム後に削除
// //  要素の登場シーンのスタイルがここ
// .appear-animation-enter {
//   opacity: 0;
//   transform: translateY(50px);
// }

// // leave の終了状態
// // トランジションの終了がトリガされた後に (同時に v-leave 削除) 1フレーム追加
// // トランジション/アニメーションが終了すると削除
// // 要素の削除シーンのスタイルがここ
// .appear-animation-leave-to {
//   transform: translateY(0px);
// }
@for $i from 1 through 9 {
  $enter-delay: 200ms;
  .appear-animation-enter-active {
    opacity: 0;
    animation: fade-in 1s;

    &.item0#{$i} {
      animation-delay: #{200ms * $i + $enter-delay};
    }
    @media print, screen and (max-width: 1000px) {
      &.item09 {
        //スマホのときは「勉強の時間がないという問題を~...を最初に出現させる」
        animation-delay: 200ms;
      }
    }
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll_top {
  transition: all 0.3s;
  @media print, screen and (min-width: 1000px) {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
  }
}
.display_none {
  transition: all 0.3s;
  display: none;
}
</style>
