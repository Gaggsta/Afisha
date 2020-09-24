<template>
	<div id="g">
		<div id="Film_frame">
			<PopUpFilmInfo v-if="isFilmInfoVisible" @closePopUp="closePopUp">
				<h3 class="popUpName">{{ film.name }}</h3>
				<p class="popUpInfo">{{ film.info }}</p>
			</PopUpFilmInfo>
			<div id="image_field" v-on:click="showPopUpFilmInfo()">
				<div style="position: sticky; top: 4em">
					<div id="image">
						<p style="z-index: -2000; color: transparent; font-size: 0px">
							{{ "Кино " + film.name }}
						</p>
						<img
							id="img"
							:src="film.afisha_picture"
							:alt="film.name + ' постер'"
							:title="'Фильм ' + film.name"
						/>
						<div class="rating" v-if="film.mark_kp">
							<div style="font-family: Ubuntu; font-size: 16px">Кинопоиск:</div>
							<div>{{ film.mark_kp }}</div>
						</div>
						<div class="age">{{ film.age_allowed }}+</div>
					</div>
					<div id="filmTitle">{{ film.name }}</div>
				</div>
			</div>
			<div id="schedule">
				<div
					v-for="cinema in chosedCinema"
					:key="cinema.name"
					v-if="cinema.sessions.length > 0"
				>
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
		margin-top: 15px;
		margin-left: 10%;
	}
	.rating {
		position: absolute;
		z-index: 3;
		font-size: 20px;
		height: 30px;
		width: auto;
		background-color: #f2d32c;
		right: 0px;
		bottom: 0px;
		padding-top: 5px;
		text-align: center;
		padding-inline: 5px;
		color: black;
		border-radius: 4px 4px 4px 4px;
	}
	.rating div {
		display: inline-block;
	}
	.age {
		position: absolute;
		z-index: 3;
		font-size: 20px;
		height: 30px;
		width: 45px;
		background-color: #f2d32c;
		right: 0px;
		bottom: 30px;
		padding-top: 5px;
		text-align: center;
		padding-left: 2px;
		color: black;
		border-radius: 4px 4px 4px 4px;
	}
	#image {
		width: 180px;
		height: 270px;
		margin-bottom: 7px;
		cursor: pointer;
		position: relative;
		box-shadow: 0px 0px 10px 5px rgba(255, 254, 254, 0.25);
		border-radius: 5px;
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
		margin-top: 15px;
		margin-left: 20px;
	}
	#filmLine {
		width: 85%;
		color: #f2d32c;
		background-color: #f2d32c;
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