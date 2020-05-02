import DefaultLayout from '~/layouts/Default.vue'
import * as VueGoogleMaps from 'vue2-google-maps'


export default function (Vue) {
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueGoogleMaps, {
    load: {
      key: "AIzaSyDTSYvCN8-k3Wngk12Ga_Ourc23d0nmobM",
      libraries: 'places',
      region: 'JP',
      language: 'ja'
    }
  })
}
