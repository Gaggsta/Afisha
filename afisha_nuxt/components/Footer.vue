<template>
	<div id="Footer">
		<div class="topline">
			<a class="linkfooter" href="/cinema">Кинотеатры Калининграда</a>
			<div v-for="cinema in cinemas" v-bind:key="cinema.name">
				<a class="linkfooter" v-bind:href="'/cinema/' + cinema.slug">{{
					cinema.name
				}}</a>
			</div>
		</div>
		<div class="botomline">
			<div class="clickabletext" v-on:click="openFeedBack">Обратная связь</div>

			<div class="clickabletext" v-on:click="setUsrSugested">
				Пользовательское соглашение
			</div>

			<div v-if="!usrSugested" id="usrSgstLayOut">
				<div id="usrSgstText">
					<h3>Пользовательское соглашение</h3>
					<hr />
					<p class="txtUserAccpting">
						Принимая данное соглашение или продолжая использование сайта
						пользователь соглашается с условиями использования сайта.
					</p>
					<p class="txtUserAccpting">
						Сайт kino-39.ru предоставляет лишь собранную информацию,
						опубликованную в открытом доступе на других сайтах в сети Интернет.
						Информация предоставляется по принципу "как есть" и не подразумевает
						под собой ответственности за ее неточность.
					</p>
					<p class="txtUserAccpting">
						Для приобретения билетов сайт перенаправляет пользователя на другой
						интернет ресурс, непосредственного продавца билетов. Пользователь
						должен самостоятельно удостовериться в правильности
						перенаправления(соответствие фильма, кинотеатра и времени сеанса)
						перед тем как совершить покупку.
					</p>
					<p class="txtUserAccpting">
						Сайт не собирает, не получает никаких данных от пользователя и не
						проводит никаких операций, будь то денежные переводы или продажа.
					</p>
					<div id="accept" v-on:click="destroyUsrSugested">Принять</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "Footer",
		props: ["cinemas"],
		components: {},
		data: function () {
			return { usrSugested: true };
		},

		methods: {
			setTopUsrSug() {
				setTimeout(() => {
					var el = document.getElementById("usrSgstLayOut");
					if (el) {
						el.style.top = window.scrollY + "px";
						el.style.width = window.innerWidth + "px";
						el.style.height = window.innerHeight + "px";
					}
				}, 1);
			},
			setTopModal() {
				document.getElementById("modalFrame").style.top = window.scrollY + "px";
			},
			setUsrSugested() {
				this.usrSugested = localStorage.usrSugested = false;
				setTimeout(() => {
					var el = document.getElementById("usrSgstLayOut");
					if (el) {
						el.style.top = window.scrollY + "px";
						el.style.width = window.innerWidth + "px";
						el.style.height = window.innerHeight + "px";
					}
				}, 10);
				if (process.browser) {
					window.addEventListener("scroll", this.setTopUsrSug);
				}
			},
			destroyUsrSugested() {
				window.removeEventListener("scroll", this.setTopUsrSug);
				this.usrSugested = localStorage.usrSugested = true;
				document.cookie = "usrSugested=true";
			},
			openFeedBack() {
				if (window.innerWidth > 850) {
					var createdEl = document.createElement("div");
					var doc = document.getElementById("__nuxt");
					createdEl.setAttribute("id", "modalFrame");
					createdEl.style =
						"width:100%; height: 100%; background-color:RGBA(0, 0, 0,0.68); position: absolute; z-index:900; left: 0; " +
						"display: grid; justify-items: center; align-items: center;";
					createdEl.style.top = window.scrollY + "px";
					createdEl.onclick = this.destroyModal;
					doc.appendChild(createdEl);
					var frame = document.createElement("iframe");
					frame.src = "https://forms.gle/RD4qkudo39xgCHdd8";
					frame.border = 0;
					frame.style =
						"position: absolute; z-index:1000; width:980px; height: 620px; opacity:1.0;";
					frame.style.height = window.innerHeight - 100 + "px";
					createdEl.insertBefore(frame, createdEl.firstChild);
					window.addEventListener("scroll", this.setTopModal);
				} else {
					window.location.href = "https://forms.gle/RD4qkudo39xgCHdd8";
				}
			},
			destroyModal() {
				var createdEl = document.getElementById("modalFrame");
				if (createdEl) {
					createdEl.remove();
				}
				window.removeEventListener("scroll", this.setTopModal);
			},
		},
		created() {
			if (process.browser) {
				window.addEventListener("scroll", this.setTopUsrSug);
				this.setTopUsrSug();
			}
		},
		destroyed() {
			if (process.browser) {
				window.removeEventListener("scroll", this.setTopUsrSug);
			}
		},
		mounted() {
			if (localStorage.usrSugested) {
				this.usrSugested = localStorage.usrSugested;
			} else {
				this.usrSugested = false;
			}
		},
	};
</script>
<style>
	#Footer {
		font-family: "Ubuntu";
		display: grid;
		grid-row: 1fr 1fr;
		grid-gap: 10px;
		justify-items: left;
		height: fit-content;
		color: black;
		width: auto;
		padding-bottom: 20px;
		padding-left: 4%;
	}
	.topline {
		display: flex;
		gap: 15px;
		width: 100%;
	}
	.botomline {
		display: flex;
		gap: 10px;
		justify-items: left;
		height: fit-content;
		width: 100%;
	}
	.clickabletext {
		cursor: pointer;
		color: white;
	}

	#usrSgstLayOut {
		background-color: RGBA(0, 0, 0, 0.68);
		position: absolute;
		z-index: 900;
		left: 0;
		top: 0;
		display: grid;
		grid-template-columns: minmax(150px, 1fr) minmax(640px, 4fr) minmax(
				150px,
				1fr
			);
		justify-items: center;
		align-items: center;
	}
	@media (max-width: 850px) {
		#usrSgstLayOut {
			grid-template-columns: 0px minmax(640px, 4fr) 0px;
		}
	}
	h3 {
		font-family: "Russo one";
		font-size: 20px;
	}
	hr {
		width: 80%;
		background-color: black;
		border: 0px;
		height: 2px;
		align-self: center;
		margin-bottom: 0px;
		margin-top: 2px;
	}
	#usrSgstText {
		display: block;
		grid-column: 2;
		height: auto;
		width-max: 60%;
		font-size: 15px;
		background-color: cornsilk;
		align-self: center;
		padding: 2%;
		text-align: start;
		z-index: 1000;
	}
	.txtUserAccpting {
		text-align: left;
		font-size: 18px;
	}
	#accept {
		cursor: pointer;
		border: 1px solid #f2d32c;
		background-color: #82b5dd;
		width: 100px;
		height: 35px;
		font-family: Russo One;
		font-style: normal;
		font-weight: normal;
		font-size: 15px;
		line-height: 18px;
		display: flex;
		align-items: center;
		margin-inline: auto;
		justify-content: center;
	}
	.linkfooter {
		color: white;
		font-style: normal;
		text-decoration: none;
	}
</style>