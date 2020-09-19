<template>
	<div id="mainFrame">
		<div id="topAdd"></div>
		<div id="headLine">
			<div id="textName" v-on:click="gotosite">{{this.sitelabel}}</div>
			<div id="cinemaPool">
				<div class="cinemaPic" v-for="cinema in cinemas" :key="cinema.name" :class="cinema.name" )>
					<CinemaLabel :cinema="cinema" />
				</div>
			</div>
		</div>
		<PickDay />
		<div id="scheduleFrame">
			<div v-if="films.length<1" id="noFilms">
				<div></div>
				<div>
					<p>К сожалению, сеансов на этот день я не знаю 🙁</p>
				</div>
				<div></div>
			</div>
			<div v-else v-for="film in films" :key="film.name">
				<Film :film="film" />
			</div>
			<div></div>
		</div>
		<Footer />
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
			return { sitelabel: "" };
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
				window.location.href = "/";
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
		grid-template-rows: 0px 55px 55px 1fr 70px;
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
		grid-template-columns: 1fr 600px 1fr;
		font-size: 45px;
		letter-spacing: 1.2pt;
	}
	#topAdd {
		height: auto;
	}
	.cinemaPic {
		height: 40px;
		width: 40px;
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
		font-size: 45px;
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
</style>


