<template>
	<div id="PickDay">
		<div class="today day" v-on:click="setDay(0)" :title="'Расписание кинотеатров сегодя'">
			<h3>Сегодня</h3>
			<hr class="dayLine today" />
		</div>
		<div class="tommorow day" v-on:click="setDay(1)" :title="'Расписание кинотеатров завтра'">
			<h3>Завтра</h3>
			<hr class="dayLine tommorow" />
		</div>
		<div class="AftTomm day" v-on:click="setDay(2)" :title="'Расписание кинотеатров послезавтра'">
			<h3>Послезавтра</h3>
			<hr class="dayLine aft" />
		</div>
	</div>
</template>
<script>
	export default {
		name: "PickDay",
		components: {},
		data: function () {
			return { day: 0 };
		},

		methods: {
			setLineVisible: function () {
				let lines = document.getElementsByClassName("dayLine");
				for (let i = 0; i < 3; i++) {
					lines[i].hidden = true;
				}
				lines[this.day].hidden = false;
			},
			setDay: async function (pickedDay) {
				await this.$store.dispatch("films/fetch", pickedDay);
				this.day = pickedDay;
				this.setLineVisible();
			},
		},
		mounted() {
			this.setLineVisible();
		},
	};
</script>
<style>
	.dayLine {
		width: 80%;
		color: #fe3f44;
		background-color: #fe3f44;
		border: 0px;
		height: 2px;
		align-self: center;
		margin-bottom: 0px;
		margin-top: 2px;
	}

	.day {
		grid-template-rows: 30px 5px;
		-webkit-transition: all 0.3s cubic-bezier(0.22, 0.84, 0.01, 1);
		transition: all 0.3s cubic-bezier(0.22, 0.84, 0.01, 1);
	}
	.day:hover {
		cursor: pointer;
		text-shadow: 2px 2px 22px #d9f734;
	}
	h3 {
		font-size: 24px;
		font-weight: 100;
		margin: 0;
		margin-bottom: 8px;
	}

	#PickDay {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		background-color: #82b5dd;
		font-size: 24px;
		grid-auto-flow: column;
		padding-top: 10px;
		position: sticky;
		top: 0px;
		z-index: 100;
	}
</style>