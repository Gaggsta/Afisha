<template>
	<div class="container">
		<div id="leftAdd"></div>
		<div id="CntrFrame">
			<div id="headLine">
				<nuxt-link class="linkIndex" to="/"
					><h1 class="h1">{{ this.sitelabel }}</h1></nuxt-link
				>
			</div>
			<h1 class="errortext" v-if="error.statusCode === 404">
				Такой страницы нет 🙁
			</h1>
			<h1 class="errortext" v-else>
				Какая-то ошибка приключилась, вернемся-ка домой
			</h1>
			<a class="btmBack" href="/">Домой</a>
		</div>
		<div id="rightAdd"></div>
	</div>
</template>

<script>
	export default {
		props: ["error"],
		data: function () {
			return { sitelabel: "" };
		},
		methods: {
			updateWidth() {
				if (window.innerWidth < 1250) {
					this.sitelabel = "Кино.König".toUpperCase();
				} else {
					this.sitelabel = "КИНО КАЛИНИНГРАД";
				}
			},
		},
		computed: {},
		created() {
			if (process.browser) {
				window.addEventListener("resize", this.updateWidth);
				this.updateWidth();
			}
		},
	};
</script>

<style>
	html {
		font-family: "Russo one";
		font-size: 16px;
		word-spacing: 1px;
		letter-spacing: 1.2px;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		box-sizing: border-box;
		cursor: default;
	}
	.container {
		text-align: center;
		color: white;
		display: grid;
		grid-template-columns: minmax(150px, 1fr) minmax(max-content, 4fr) minmax(
				150px,
				1fr
			);
	}

	#leftAdd {
	}
	#rightAdd {
	}
	#CntrFrame {
		margin-block: 10%;
		background: rgba(117, 127, 131, 0.44);
		padding-block: 20px;
	}
	.errortext {
		margin-block: 5%;
		font-weight: 100;
	}
	.linkIndex {
		color: white;
		font-style: normal;
		text-decoration: none;
	}
	.btmBack {
		font-style: normal;
		text-decoration: none;
		font-size: 20px;
		margin-bottom: 20px;
		text-align: center;
		padding-inline: 8px;
		padding-block: 3px;
		background-color: #f2d32c;
		box-shadow: 4px 4px 2px -1px rgba(0, 0, 0, 0.5);
		color: black;
		border-radius: 4px;
	}
	body {
		margin: 0px;
		background: linear-gradient(132.41deg, #001d2d 18.16%, #002a4a 95.73%);
		background: linear-gradient(116.12deg, #001d2d 23.32%, #014274 79.96%);
	}
	@media (max-width: 850px) {
		.container {
			grid-template-columns: 0px minmax(640px, 1fr) 0px;
		}
		#mainFrame {
			padding-inline: 8px;
		}
	}
</style>