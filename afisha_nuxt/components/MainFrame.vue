<template>
	<div id="mainFrame">
		<div id="topAdd"></div>
		<div id="headLine">
			<div id="textName" :title="origLoc">
				<a class="linkIndex" href="/"
					><h1 class="h1">{{ this.sitelabel }}</h1></a
				>
			</div>
			<div id="cinemaPool">
				<div
					class="cinemaPic"
					v-for="cinema in cinemas"
					:key="cinema.name"
					:class="cinema.name"
					)
				>
					<CinemaLabel :cinema="cinema" />
				</div>
			</div>
		</div>
		<PickDay />
		<div id="scheduleFrame">
			<div v-if="films.length < 1" id="noFilms">
				<div></div>
				<div>
					<p id="noFilmsText">К сожалению, сеансов на этот день я не знаю 🙁</p>
				</div>
				<div></div>
			</div>
			<div v-else v-for="film in films" :key="film.name">
				<Film :film="film" />
			</div>
			<hr id="filmLine" v-if="films.length < 1" />
		</div>
		<Footer :cinemas="cinemas" />
	</div>
</template>
<script>
	import Film from "@/components/FilmFrame";
	import CinemaLabel from "@/components/CinemaLabel";
	import PickDay from "@/components/PickDay";
	import CinemaSchedule from "@/components/CinemaSchedule";
	import Footer from "@/components/Footer";
	export default {
		name: "Main",
		components: {
			Film,
			CinemaLabel,
			PickDay,
		},
		data: function () {
			return { sitelabel: "", origLoc: "kino-39.ru" };
		},
		props: ["films", "cinemas"],
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

		created() {
			if (process.browser) {
				//document.body.style.margin = 0;
				window.addEventListener("resize", this.updateWidth);
				this.updateWidth();
			}
		},
	};
</script>
<style>
	#mainFrame {
		display: grid;
		grid-template-rows: 0px 55px 55px 1fr auto;
		margin-top: 15px;
		background: rgba(117, 127, 131, 0.44);
	}
	#scheduleFrame {
		padding: 2%;
		display: grid;
		grid-gap: 15px;
	}
	#noFilms {
		display: grid;
		grid-template-columns: minmax(0, 1fr) 600px minmax(0, 1fr);
	}
	#noFilmsText {
		text-align: center;
		font-size: 40px;
		letter-spacing: 1.2pt;
		font-weight: 200;
		margin-top: 15px;
		margin-bottom: 0px;
	}
	#topAdd {
		height: auto;
	}
	.cinemaPic {
		height: 40px;
		width: 40px;
	}
	#filmLine {
		width: 85%;
		color: #f2d32c;
		background-color: #f2d32c;
		border: 0px;
		height: 4px;
		align-self: center;
		margin-bottom: 5px;
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

	#textName {
		text-align: left;
	}
	.h1 {
		font-size: 45px;
		margin: 0px;
		font-weight: normal;
	}
	#cinemaPool {
		display: grid;
		grid-auto-flow: column;
		grid-template-columns: repeat(auti-fil, 1fr);
		justify-content: right;
		grid-gap: 10px;
		padding: 6px;
		padding-right: 0px;
	}
	.linkIndex {
		color: white;
		font-style: normal;
		text-decoration: none;
	}
</style>


