<template>
	<div>
		<main>
			<div class="container">
				<div id="leftAdd"></div>
				<div id="mainFrame">
					<div id="topAdd"></div>
					<div id="headLine">
						<div id="textName" :title="origLoc">
							<a class="linkIndex" href="/"
								><h1 class="h1">{{ this.sitelabel }}</h1></a
							>
						</div>
					</div>
					<div>
						<div id="cinemasField">
							<div id="cinema" v-for="cinema in cinemas" :key="cinema">
								<a class="linkIndex" :href="'cinema/' + cinema.slug">
									<h4>{{ cinema.name }}</h4>
									<p class="text">
										{{ cinema.info.substr(0, 50) + "..." }}
									</p>
								</a>
							</div>
						</div>
					</div>
					<hr id="filmLine" />
					<Footer :cinemas="cinemas" />
				</div>
				<div id="rightAdd"></div>
				<Nuxt />
			</div>
		</main>
	</div>
</template>
<script >
	import Footer from "@/components/Footer";
	export default {
		data: function () {
			return { cinema: {}, sitelabel: "", origLoc: "kino-39.ru" };
		},
		head() {
			return {
				title:
					"Кинотеатры Калининграда. Киноафиша Синема Парк Европа, Киносфера, Каро 7 Калининград-плаза, Эпицентр",
				meta: [
					{
						hid: "4",
						name: "keywords",
						content:
							"Синема Парк Европа, Киносфера, Каро 7 Калининград-плаза, Эпицентр, кинотеатр, киноафиша, расписание кинотеатров, афиша кинотеатров, кинотеатры открыты, кинотеатр цены, кинотеатры работают, Калининград",
					},
					{
						hid: "5",
						name: "description",
						content:
							"Кинотеатры Калиниграда в одном месте.\nРасписание 📆, анонсы 🎥, киноафиша 🎞, Синема Парк Европа, Киносфера, Каро 7 Калининград-плаза, Эпицентр, 📽 кинотеатров Калининграда",
					},
				],
			};
		},
		mounted() {},
		async fetch({ store }) {
			if (store.getters["cinemas/cinemas"].length === 0) {
				await store.dispatch("cinemas/fetch");
			}
		},
		methods: {
			updateWidth() {
				if (window.innerWidth < 1250) {
					this.sitelabel = "Кино.König".toUpperCase();
				} else {
					this.sitelabel = "КИНО КАЛИНИНГРАД";
				}
			},

			gotosite() {
				window.location.href = window.location.origin;
			},
		},
		computed: {
			cinemas() {
				return this.$store.getters["cinemas/cinemas"];
			},
		},
		created() {
			if (process.browser) {
				window.addEventListener("resize", this.updateWidth);
				this.updateWidth();
			}
		},
		destroyed() {},
		components: {},
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
	#topAdd {
	}
	#textName {
		text-align: center;
		font-size: 45px;
		margin: 0px;
		font-weight: normal;
		cursor: pointer;
	}
	.h1 {
		font-size: 45px;
		margin: 0px;
		font-weight: normal;
	}
	#leftAdd {
	}
	#rightAdd {
	}

	.text {
		max-width: 500px;
		font-family: Ubuntu;
		margin-top: 0.13em;
	}
	#cinema {
		width: fit-content;
		color: white;
		font-style: normal;
		text-decoration: none;
		max-width: 500px;
		margin-inline: 5%;
	}
	.linkIndex {
		color: white;
		font-style: normal;
		text-decoration: none;
	}
	h4 {
		font-size: 20px;
		margin-block-start: 0.33em;
		margin-block-end: 0.33em;
		font-weight: 100;
	}
	#cinemasField {
		display: grid;
		height: max-content;
		text-align: left;
		grid-template-columns: repeat(auto-fill, 475px);
		grid-gap: 1%;
		justify-content: center;
		padding-block: 5%;
	}
	#mainFrame {
		display: grid;
		grid-template-rows: 0px 55px 1fr auto;
		margin-top: 15px;
		background: rgba(117, 127, 131, 0.44);
	}
	#url {
		color: white;
	}
	#filmLine {
		width: 85%;
		color: #f2d32c;
		background-color: #f2d32c;
		border: 0px;
		height: 4px;
		align-self: center;
		margin-bottom: 20px;
		margin-top: 25px;
	}
	#headLine {
		height: 50px;
		display: grid;
		grid-template-columns: minmax(300px 3fr) 2fr;
		grid-auto-flow: column;
		padding-inline: 10px;
		-webkit-box-shadow: 0px 9px 10px -8px rgba(255, 255, 255, 1);
		-moz-box-shadow: 0px 9px 10px -8px rgba(255, 255, 255, 1);
		box-shadow: 0px 9px 10px -8px rgba(255, 255, 255, 1);
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