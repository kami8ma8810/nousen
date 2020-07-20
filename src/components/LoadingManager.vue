<template>
	<div class="loading_manager-wrapper" >
		<transition-group v-show="this.loading" class="loading" tag="div">
			<div class="white-back" :key="1"></div>
			<div class="icon" :key="2">
				<img src="../assets/img/common/loading.svg" width="100%">
			</div>
		</transition-group>
		<slot>
		</slot>
	</div>
</template>
<script>


let timerId = 0;
const FORCE_LOADIN_TIME = 500;

export default {
  name: 'Loading',
	data() {
		return {
			loading: true,
			routePath: "",
		}
	},
	methods: {
    loadCompleteHandler: function() {
			this.loading = false;
		},
		loadStartHandler: function() {

			//ページのヘッダ
			const heroImage = document.querySelector('.hero-inner');

			//hero（ページのヘッダの画像）のタグやcssのbackground-image取得
			const heroImageBackground = heroImage.style.backgroundImage ? heroImage.style.backgroundImage : getComputedStyle( heroImage, '' ).getPropertyValue( "background-image" ) ? getComputedStyle( heroImage, '' ).getPropertyValue( "background-image" ) : undefined;

			//background-imageのurl取得
			const heroImagePath = heroImageBackground.replace(/^url\(\"|\"\)/g, '')

			//templateのDOMをコピーして保持
			const domCopyPutWapper = document.createElement('div');
			domCopyPutWapper.innerHTML = this.$el;

			//heroの画像URLがあれば
			if(heroImagePath !== undefined) {
				//imgDOMを作ってurlに追加
				const heroElement = document.createElement("img");
				heroElement.src = heroImagePath;
				//templateのコピーに追加
				domCopyPutWapper.appendChild(heroElement);
			}

			//imgタグ取得
			const jumbotronImgs = domCopyPutWapper.querySelectorAll('img');
			
			//画像がなければ一定時間ローディング出して終了
			if(jumbotronImgs.length === 0) {
				timerId = setTimeout(() => {
					this.loadCompleteHandler();
				}, FORCE_LOADIN_TIME);
				return;
			}
			
			//画像を読み込んだらローディング終了
			const jumbotronImgsArray = Array.from(jumbotronImgs);
			const imagePromiseArray = jumbotronImgsArray.map((imgUrl) => {
				return new Promise((resolve) => {
					const img = document.createElement("img");
					img.src = imgUrl.src;
					if(img.complete) {
						resolve();
					}else {
						img.addEventListener('load', () => {
							resolve();
						}, {
							once: true
						});
					}
				});
			});

			Promise.all(imagePromiseArray).then(() => {
				this.loadCompleteHandler();
			});
		}
  },
	mounted() {
		this.loadStartHandler();
		// if(this.routePath !== this.$route.path || this.routePath === "") {
		// 	this.loadStartHandler();
		// }
		// this.routePath = this.$route.path;
	},
	updated: function() {
	},
	destroyed: function() {
		clearTimeout(timerId);
		// this.routePath = "";
		// this.loading = true;
	},
}
</script>
<style scoped lang="scss">
// .v-enter-active, .v-leave-active {
//   transition: opacity .5s;
// }
// .v-enter, .v-leave-to {
//   opacity: 0;
// }
.loading {
	position: fixed;
	z-index: 102;
	top: 0;
  left: 0;
	width: 100%;
	height: 100%;
	.icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		img {
			vertical-align: middle;
		}
	}	
}
.white-back {
	width: 100vw;
	height: 100vh;
	background-color: #fff;
	position: absolute;
	top: 0;
	left: 0;
}
</style>