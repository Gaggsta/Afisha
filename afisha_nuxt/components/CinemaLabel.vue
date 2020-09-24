<template>
	<div
		id="cinemaLabel"
		v-on:click="setPickedCinema(cinema.name)"
		:title="'Показать кино только ' + cinema.name"
	>
		<p style="z-index: -2000; color: transparent; font-size: 0px">
			{{ "Кинотеатр " + cinema.name }}
		</p>
		<img id="img" :src="cinema.cinema_icon" :alt="cinema.name.slice(0, 2)" />
	</div>
</template>
<script>
	export default {
		name: "CinemaLabel",
		components: {},
		props: ["cinema"],
		methods: {
			setPickedCinema: function (cinemaName) {
				let pickedCinema = this.$store.getters["films/pickedCinema"];
				if (cinemaName == pickedCinema) {
					document.getElementsByClassName(
						cinemaName
					)[0].children[0].style.borderLeft = "0px solid #F2D32C";
					document.getElementsByClassName(
						cinemaName
					)[0].children[0].style.borderTop = "0px solid #F2D32C";
					this.$store.commit("films/setpickedCinema", "all");
				} else {
					for (let i of document.getElementsByClassName("cinemaPic")) {
						i.children[0].style.border = "0px solid #F2D32C";
					}
					this.$store.commit("films/setpickedCinema", cinemaName);
					document.getElementsByClassName(
						cinemaName
					)[0].children[0].style.borderLeft = "2px solid #F2D32C";
					document.getElementsByClassName(
						cinemaName
					)[0].children[0].style.borderTop = "2px solid #F2D32C";
					//this.$el.style.outline = "2px solid #F2D32C";
				}
			},
		},
	};
</script>
<style>
	#cinemaLabel {
		width: 40px;
		height: 40px;
		background-color: #82b5dd;
		box-shadow: 4px 4px 2px -1px rgba(0, 0, 0, 0.5);
		-webkit-transition: all 0.3s cubic-bezier(0.22, 0.84, 0.01, 1);
		transition: all 0.3s cubic-bezier(0.22, 0.84, 0.01, 1);
	}
	#img {
		height: 100%;
		width: 100%;
	}
	#cinemaLabel:hover {
		cursor: pointer;
	}
	#cinemaLabel:active {
		-webkit-transform: translate(4px);
		transform: translate(4px);
		box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);
	}
</style>