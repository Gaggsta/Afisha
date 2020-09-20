<template>
	<div id="cinemaSchedule">
		<div id="cinema" :title="'Сеансы кинотеатра'+ cinema.name">
			<h2 id="cinemaName" v-on:click="setPickedCinema(cinema.name)">{{cinema.name}}</h2>
			<hr id="cinemaLine" />
		</div>
		<div id="sessions">
			<div v-for="session in cinema.sessions" :key="session.time">
				<div
					id="session"
					v-on:click="createModal(session.external_id)"
					:title="'Купить билет в '+ cinema.name"
				>
					<div id="typeSession" v-if="Math.floor(session.price)>0">
						{{session.session_format.slice(0,7)}}
						<br />
						от {{Math.floor(session.price)}}р.
					</div>
					<div
						v-else
						id="typeSession"
						style="padding-left: 10px; font-size: 15px;"
					>{{session.session_format.slice(0,7)}}</div>
					<div id="timeSession">{{session.time}}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "CinemaSchedule",
		components: {},
		props: ["cinema"],
		methods: {
			createModal(sesionId) {
				if (this.cinema.name == "КАРО 7 Плаза") {
					if (window.innerWidth > 850) {
						var createdEl = document.createElement("div");
						var doc = document.getElementById("__nuxt");
						createdEl.setAttribute("id", "modalFrame");
						createdEl.style =
							"width:100%; height: 100%; background-color:RGBA(0, 0, 0,0.68); position: absolute; z-index:900; left: 0; top:" +
							window.scrollY +
							"px;" +
							"display: grid; justify-items: center; align-items: center;";
						createdEl.onclick = this.destroyModal;
						doc.appendChild(createdEl);
						var frame = document.createElement("iframe");
						frame.src = "https://bettakassa.karofilm.ru/session/" + sesionId;
						frame.border = 0;
						frame.style =
							"position: absolute; z-index:1000; width:980px; height: 620px; opacity:1.0;";
						createdEl.insertBefore(frame, createdEl.firstChild);
						window.addEventListener("scroll", () => {
							document.getElementById("modalFrame").style.top =
								window.scrollY + "px";
						});
					} else {
						window.location.href =
							"https://bettakassa.karofilm.ru/session/" + sesionId;
					}
				} else {
					ticketManager.richSession(sesionId);
					setTimeout(() => {
						var backLay = document.getElementById("afishaOverlay");
						//place to add an adv
					}, 550);
				}
			},
			destroyModal() {
				var createdEl = document.getElementById("modalFrame");
				if (createdEl) {
					createdEl.remove();
				}
				window.removeEventListener("scroll", () => {
					document.getElementById("modalFrame").style.top = window.scrollY + "px";
				});
			},
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
	#cinemaSchedule {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: minmax(30px 1fr) 4fr;
		grid-gap: 10px;
		max-width: 272px;
	}
	#cinemaName {
		width: 255px;
		word-wrap: break-word;
		text-align: left;
		font-weight: 100;
		font-size: 18px;
		margin: 0;
		margin-bottom: 3px;
		letter-spacing: 1.2pt;
		-webkit-transition: all 0.3s cubic-bezier(0.22, 0.84, 0.01, 1);
		transition: all 0.3s cubic-bezier(0.22, 0.84, 0.01, 1);
	}
	#cinemaName:hover {
		cursor: pointer;
		text-shadow: 2px 2px 10px #d9f734;
	}
	#cinemaLine {
		width: 65%;
		margin: 0px;
		color: #f2d32c;
		background-color: #f2d32c;
		border: 0px;
		height: 2px;
		align-self: left;
	}
	#sessions {
		display: grid;
		grid-template-columns: repeat(auto-fit, 130px);
		grid-gap: 12px;
	}
	#session {
		text-align: center;
		width: 130px;
		height: 35px;
		background-color: #f2d32c;
		display: flex;
		font-family: Russo One;
		font-size: 15px;
		box-shadow: 4px 4px 2px -1px rgba(0, 0, 0, 0.5);
		cursor: pointer;
		color: black;
		border-radius: 4px;
	}
	#typeSession {
		width: 70px;
		height: 35px;
		padding-left: 10px;
		font-family: Ubuntu;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: 11px;
		display: flex;
		align-items: center;
		text-align: left;
	}
	#timeSession {
		width: 50px;
		height: 35px;
		font-family: Russo One;
		font-style: normal;
		font-weight: normal;
		font-size: 15px;
		line-height: 18px;
		display: flex;
		align-items: center;
		text-align: right;
	}
	@media (max-width: 850px) {
		#cinema {
			text-align: left;
			font-size: 22px;
			margin: 0px;
		}
		#sessions {
			grid-template-columns: repeat(auto-fit, 130px);
			grid-gap: 10px;
		}
		#session {
			width: 130px;
			height: 45px;
			text-align: center;
			align-items: center;
		}
		#cinemaSchedule {
			max-width: 410px;
		}
		#typeSession {
			width: 70px;
			height: 35px;
			padding-left: 8px;
			font-family: Ubuntu;
			font-style: normal;
			font-weight: normal;
			font-size: 12px;
			line-height: 12px;
		}
		#timeSession {
			width: 50px;
			height: 35px;
			font-family: Russo One;
			font-style: normal;
			font-weight: normal;
			font-size: 18px;
			line-height: 22px;
			padding-right: 8px;
		}
	}
</style>