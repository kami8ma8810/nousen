module.exports = {
  siteName: `一般社団法人 能力開発研修センター 能セン`,
  titleTemplate: `%s | 能セン`,
  siteUrl: `https://nouryoku.com/`,
  siteDescription: `
  能セン(能力開発研修センター)では、電気、建築、設備関連を中心とした講習会を各地で開催しております。経験豊富な専門の講師が資格合格のサポートを致します。`,
  metadata: {
    siteOgImage: `/ogp.png`,
  },
  templates: {
    // Add templates for content types here.
    // Read more: https://gridsome.org/docs/templates/
  },
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.SPACE_ID, // required
        accessToken: process.env.ACCESS_TOKEN, // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ]
}
