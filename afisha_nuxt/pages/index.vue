<template>
	<div>
		<main>
			<div class="container">
				<div id="leftAdd"></div>
				<MainFrame :films="films" :cinemas="cinemas" />
				<div id="rightAdd"></div>
				<div id="scrollToTop" v-on:click="goUp">ВВЕРХ</div>
				<Nuxt />
			</div>
		</main>
	</div>
</template>
<script >
	import MainFrame from "@/components/MainFrame";
	export default {
		head() {
			return {
				title:
					"Афиша Кино Калининград. Киноафиша Синема Парк Европа, Киносфера, Каро 7 Калининград-плаза, Эпицентр ",
				meta: [
					// hid is used as unique identifier. Do not use `vmid` for it as it will not work
					{
						hid: "1",
						name: "keywords",
						content:
							"Синема Парк Европа, Киносфера, Каро 7 Калининград-плаза, Эпицентр, кинотеатр, кино афиша, расписание кинотеатров, афиша кинотеатров, кинотеатры открыты, кинотеатр цены, кинотеатры работают, Калининград",
					},
					{
						hid: "2",
						name: "description",
						content:
							"Кино39 - Узнать расписание кинотеатров, что идет в кино сейчас, в удобном формате! \nРасписание 📆, анонсы 🎥, киноафиша 🎞, Синема Парк Европа, Киносфера, Каро 7 Калининград-плаза, Эпицентр, 📽 кинотеатров Калининграда",
					},
					{
						hid: "3",
						name: "yandex-verification",
						content: "82f916d3b1843847",
					},
				],
			};
		},
		async fetch({ store }) {
			if (store.getters["films/films"].length === 0) {
				await store.dispatch("films/fetch", 0);
			}
			if (store.getters["cinemas/cinemas"].length === 0) {
				await store.dispatch("cinemas/fetch");
			}
		},
		methods: {
			goUp() {
				if (window.scrollY > 0) {
					window.scrollBy({
						top: -window.scrollY,
						behavior: "smooth",
					});
				}
			},

			hideToTop() {
				var scrollElem = document.getElementById("scrollToTop");
				if (window.scrollY > 0) {
					scrollElem.style.opacity = "1";
				} else {
					scrollElem.style.opacity = "0";
				}
			},
		},
		computed: {
			films() {
				return this.$store.getters["films/films"];
			},
			cinemas() {
				return this.$store.getters["cinemas/cinemas"];
			},
		},
		created() {
			if (process.browser) {
				window.addEventListener("scroll", this.hideToTop);
			}
		},
		destroyed() {
			if (process.browser) {
				window.removeEventListener("scroll", this.hideToTop);
			}
		},
		components: {
			MainFrame,
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
	#scrollToTop {
		position: fixed;
		bottom: 100px;
		right: 20px;
		font-weight: bold;
		cursor: pointer;

		padding: 10px;
		opacity: 0;
		transition: all 0.3s cubic-bezier(0.22, 0.84, 0.01, 1);
		z-index: 20;
		border-radius: 5px;
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

