<template>
  <div class="main-footer">
    <div class="main-footer-inner">
      <div class="main-footer-top">
        <div class="main-footer-top-inner">
          <div class="logo">
            <a href="https://jeea.or.jp/" target="_blank" class="jeea-link">公益社団法人電気技術者協会 <br class="under_display">維持会員</a>
            <div class="logo-inner">
              <img src="../assets/img/common/main_logo.svg" alt="能セン 学び方を学ぶ">
            </div>
          </div>
          
          <div class="information">
            <p>
              <g-link to="/company">
                会社概要
              </g-link>
            </p>
            <p>
              <g-link to="/benefits">
                給付制度
              </g-link>
            </p>
            <p>
              <g-link to="/guide">
                特定商取引法に基づく表記
              </g-link>
            </p>
            <p>
              <g-link to="/privacy">
                プライバシーポリシー
              </g-link>
            </p>
            <div class="sns-link twitter-link">
              <a href="https://twitter.com/nouryoku1983" target="_blank">
                <p>公式ツイッター</p>
                <img src="../assets/img/common/twitter.svg" alt="twitter">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="main-footer-bottom">
        <div class="application">
          <p class="message">
            ご質問・ご相談など、お気軽にお問い合わせください
          </p>
          <a href="tel:0356316011" class="tel">
            <img src="../assets/img/common/tel.svg" alt="03-5631-6011 （平日9:00~18:00）">
          </a>
        </div>
        <div class="banner">
          <a href="https://www.tokyo-cci.or.jp/" target="_blank">
            <img src="../assets/img/common/banner1.jpg" alt="バナー 東京商工会議所" width="200px">
          </a>
          <a href="https://www.birumen-navi.com/" target="_blank">
            <img src="../assets/img/common/banner2.jpg" alt="バナー ビルメン転職ナビ 電験転職ナビ 施工管理転職ナビ" width="140px">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-footer {
  border-top: 2px solid #f4f0ed;
  margin-bottom: 20px;
}
.main-footer-inner {
  padding: 10px 0;
  max-width: 950px;
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  @media print,screen and(max-width: 1000px) {
    width: 90%;
  }
}
.main-footer-top {
  .logo {
    max-width: 240px;
    width: 100%;
  }
  .under_display {
    @media print,screen and(min-width: 1001px) {
      display: none;
    }
  }
  .jeea-link {
    font-size: 13px;
    line-height: 1.5em;
    display: block;
    @media print,screen and(max-width: 1000px) {
      font-size: 10px;
    }
  }
  .logo-inner {
    width: 100%;
    max-width: 100px;
    margin-top: 10px;
  }
  .information {
    font-weight: bold;
    max-width: 750px;
    width: 100%;
    @media print,screen and(min-width: 1001px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    p {
      margin: 0;
      @media print,screen and(max-width: 1000px) {
        display: block;
        text-align: right;
        font-size: 14px;
      }
    }
  }
}
.main-footer-top-inner {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media print,screen and(max-width: 1000px) {
    align-items: flex-start;
  }
}
.main-footer-bottom {
  margin-top: 20px;
  @media print,screen and(min-width: 1001px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .message {
    font-family: serif;
    font-size: 18px;
    margin-bottom: 0;
    @media print,screen and(max-width: 1000px) {
      font-size: 12px;
    }
  }
}

.sns-link {
  a {
    display: flex;
    justify-content: flex-end;
    img {
      width: 36px;
      margin-left: 10px;
      @media print,screen and(max-width: 1000px) {
        width: 20px;
      }
    }
  }
}
.application {
  position: relative;
  font-size: 20px;
  width: 100%;
  @media print,screen and(min-width: 1001px) {
    max-width: 60%;
  }
  @media print,screen and(max-width: 1000px) {
    text-align: center;
  }
  .tel {
    line-height: 1.2em;
  }
}
.banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media print,screen and(min-width: 1001px) {
    max-width: 40%;
  }
  @media print,screen and(max-width: 1000px) {
    margin-top: 30px;
  }
  a img {
    @media print,screen and(max-width: 1000px) {
      max-width: 160px;
    }
  }
}
</style>