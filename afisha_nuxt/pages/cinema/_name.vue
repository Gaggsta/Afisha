<template>
	<div>
		<main>
			<div class="container">
				<div id="leftAdd"></div>

				<div id="mainFrame">
					<div id="topAdd"></div>
					<div id="headLine">
						<div id="textName" v-on:click="gotosite" :title="origLoc">
							<h1>{{ this.sitelabel }}</h1>
						</div>
					</div>
					<div id="infoCinema">
						<h2 class="headers">Кинотеатр {{ cinema.name }}</h2>
						<h4 class="headers">Описание:</h4>
						<p>
							{{ cinema.info }}
						</p>
						<h4 class="headers">Телефоны:</h4>
						<p v-for="phone in cinema.phones">{{ phone }}</p>
						<h4 class="headers">Адрес кинозалов:</h4>
						<p>{{ cinema.address }}</p>
						<a
							id="url"
							:href="cinema.url"
							:title="'Посетить сайт ' + cinema.name"
							>Сайт {{ cinema.name }} >></a
						>
						<hr id="filmLine" />
					</div>
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
		validate({ params }) {
			var cinemasSlug = [
				"pop",
				"pop-a",
				"epitsentr",
				"sinema-park-evropa",
				"karo-7-plaza",
				"kinosfera",
			];
			return cinemasSlug.some((el) => el === params.name);
		},
		data: function () {
			return { cinema: {}, sitelabel: "", origLoc: "kino-39.ru" };
		},
		head() {
			return {
				title:
					"Киноафиша Синема Парк Европа, Киносфера, Каро 7 Калининград-плаза, Эпицентр ",
				meta: [
					// hid is used as unique identifier. Do not use `vmid` for it as it will not work
					{
						hid: "4",
						name: "keywords",
						content:
							"Синема Парк Европа, Киносфера, Каро 7 Калининград-плаза, Эпицентр, кинотеатр, кино афиша, расписание кинотеатров, афиша кинотеатров, кинотеатры открыты, кинотеатр цены, кинотеатры работают, Калининград",
					},
					{
						hid: "5",
						name: "description",
						content:
							"Кино39 - Узнать расписание кинотеатров, что идет в кино сейчас, в удобном формате! \nРасписание 📆, анонсы 🎥, киноафиша 🎞, Синема Парк Европа, Киносфера, Каро 7 Калининград-плаза, Эпицентр, 📽 кинотеатров Калининграда",
					},
				],
			};
		},
		mounted() {
			if (Object.keys(this.cinema).length == 0) {
				this.cinema = this.getCinema(this.$nuxt._route.params.name);
			}
			document.title =
				"Кинотеатр " + this.cinema.name + " Калининград. " + document.title;
		},
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
			getCinema(nameSlug) {
				return this.cinemas.filter((e) => e.slug === nameSlug)[0];
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
	.headers {
		font-weight: 100;
	}
	#topAdd {
		height: auto;
	}
	#textName {
		text-align: center;
		font-size: 45px;
		margin: 0px;
		font-weight: normal;
		cursor: pointer;
	}
	h1 {
		font-size: 45px;
		margin: 0px;
		font-weight: normal;
	}
	p {
		max-width: 500px;
		font-family: Ubuntu;
	}
	a {
		text-decoration: none;
		font-weight: 100;
	}
	#leftAdd {
	}
	#rightAdd {
	}
	#infoCinema {
		height: auto;
		padding-inline: 10%;
		text-align: left;
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
