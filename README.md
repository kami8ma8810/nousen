
## 能セン開発環境構築
サーバーはNetlifyです。<br>
テストアップ：ブランチを作ってプルリク作成<br>
本番アップ：masterにプッシュ

### githubからクローン
```
$ git clone https://github.com/on-01/nousen.git
```

### npmインストール
```
$ npm install
```

### gitでブランチ作成
```
$ git checkout -b ブランチ名
```
参考
[ブランチの切り方](https://github.com/mikutaniguchi/portfolio_site/wiki/%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E3%81%AE%E5%88%87%E3%82%8A%E6%96%B9)

### プロジェクトルートに.env ファイルを作成して SPACE_ID と ACCESS_TOKEN を記載。(記載済みのファイルあり)
Contentfulとつなげるための準備。.envファイルの中身は引継ぎ資料の中にあります。<br>
.env ファイル内
```
SPACE_ID="~SPACE_ID~"
ACCESS_TOKEN="~ACCESS_TOKEN~"
```

### 開発開始
```
$ npm run develop
```


## テストアップ方法


### ブランチでgithubにプルリク作成
参考
[PR作成までの手順](https://github.com/mikutaniguchi/portfolio_site/wiki/PR%E4%BD%9C%E6%88%90%E3%81%BE%E3%81%A7%E3%81%AE%E6%89%8B%E9%A0%86)

### githubのプルリクページでテストアップURL確認
赤矢印の場所をクリックすると、プルリクでアップした内容のサイトが見れます。テストアップURLはこれを使ってください。<br>
URLが複雑なのでベーシック認証は必要ないです。
![URLの場所]](readme_description.png "readme_description")


## 本番アップ方法

### github内でプルリクをマージ
masterのデータがそのまま本番にアップされます。<br>
なので、マージした段階で本番アップ完了です。<br>
※反映までに数分かかります。

## 補足
一度マージされたブランチはもう使えないので、deleteして、ローカルのブランチも削除して大丈夫です。ローカルではmasterをプルしてください。
