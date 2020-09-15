<template>
	<div id="g">
		<PopUpFilmInfo v-if="isFilmInfoVisible" @closePopUp="closePopUp">
			<h3 class="popUpName">{{film.name}}</h3>
			<p class="popUpInfo">{{film.info}}</p>
		</PopUpFilmInfo>
		<div id="Film_frame">
			<div id="image_field" v-on:click="showPopUpFilmInfo()">
				<div id="image">
					<img
						id="img"
						:src="film.afisha_picture"
						:alt="film.name+' постер'"
						:title="'Фильм '+ film.name"
					/>
					<div class="rating" v-if="film.mark_kp">{{film.mark_kp}}</div>
					<div class="age">{{film.age_allowed}}</div>
				</div>
				<div id="filmTitle">{{film.name}}</div>
			</div>
			<div id="schedule">
				<div v-for="cinema in chosedCinema" :key="cinema.name" v-if="cinema.sessions.length >0">
					<CinemaSchedule :cinema="cinema" />
				</div>
			</div>
		</div>
		<hr id="filmLine" />
	</div>
</template>
<script>
	import CinemaSchedule from "@/components/CinemaSchedule";
	import PopUpFilmInfo from "@/components/PopUpFilmInfo";
	export default {
		name: "Film",
		components: { CinemaSchedule, PopUpFilmInfo },
		props: ["film"],
		data: function () {
			return {
				isFilmInfoVisible: false,
			};
		},
		methods: {
			showPopUpFilmInfo() {
				this.isFilmInfoVisible = true;
			},
			closePopUp() {
				this.isFilmInfoVisible = false;
			},
			hideEmptyFilms() {
				if (this.$children.length < 1) {
					this.$el.style.display = "none";
				} else {
					this.$el.style.display = "block";
				}
			},
		},
		mounted() {
			this.hideEmptyFilms();
		},
		updated() {
			this.hideEmptyFilms();
		},
		computed: {
			chosedCinema() {
				let chosedCinema = [];
				let cinemas = [...this.film.cinemas];
				let pickedCinema = this.$store.getters["films/pickedCinema"];
				if (pickedCinema == "all") {
					return cinemas;
				} else {
					for (const cinema of cinemas) {
						if (cinema.name == pickedCinema) {
							chosedCinema.push(cinema);
						}
					}
					return chosedCinema;
				}
			},
		},
	};
</script>
<style>
	#Film_frame {
		display: grid;
		grid-template-columns: minmax(200px, 230px) minmax(270px, 1fr);
		grid-auto-flow: column;
	}
	#image_field {
		width: 180px;
		margin-top: 10%;
		margin-left: 10%;
	}
	.rating {
		position: absolute;
		z-index: 3;
		font-size: 22px;
		height: 30px;
		width: 45px;
		background-color: rgba(230, 251, 113, 1);
		left: 133px;
		top: 200px;
		padding-top: 5px;
		box-shadow: 2px 5px 2px -2px rgba(0, 0, 0, 0.5);
		text-align: center;
		padding-left: 2px;
	}
	.age {
		position: absolute;
		z-index: 3;
		font-size: 22px;
		height: 30px;
		width: 45px;
		background-color: rgba(230, 251, 113, 1);
		left: 133px;
		top: 245px;
		padding-top: 5px;
		box-shadow: 2px 5px 2px -2px rgba(0, 0, 0, 0.5);
		text-align: center;
		padding-left: 2px;
	}
	#image {
		width: 180px;
		height: 270px;
		border: 2px solid #fe3f44;
		box-shadow: 5px 5px 2px -2px rgba(0, 0, 0, 0.5);
		margin-bottom: 7px;
		position: sticky;
		top: 4em;
		cursor: pointer;
	}
	#img {
		height: 100%;
		width: 100%;
	}
	#filmTitle {
		font-size: 18px;
		width: 180px;
		letter-spacing: 1.2pt;
	}
	#schedule {
		display: grid;
		grid-template-columns: repeat(auto-fill, 272px);
		grid-gap: 20px;
		margin-left: 20px;
	}
	#filmLine {
		width: 85%;
		color: #fe3f44;
		background-color: #fe3f44;
		border: 0px;
		height: 4px;
		align-self: center;
		margin-bottom: 5px;
		margin-top: 25px;
	}
	.popUpName {
		font-weight: 100;
		font-size: 25px;
		letter-spacing: 1.2pt;
		text-align: start;
	}
	.popUpInfo {
		font-family: Ubuntu;
		font-size: 18px;
		margin: 0;
		text-indent: 3ch;
	}
	@media (max-width: 850px) {
		#schedule {
			grid-template-columns: repeat(auto-fill, 272px);
			justify-content: center;
		}
	}
</style>