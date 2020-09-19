<template>
	<div id="PopUpOverlay" @click="closePopUp">
		<div />
		<div id="popUpText">
			<slot></slot>
		</div>
		<div />
	</div>
</template>
<script>
	export default {
		name: "PopUpFilmInfo",
		components: {},
		props: [],
		methods: {
			closePopUp() {
				this.$emit("closePopUp");
			},
		},
	};
</script>
<style>
	#PopUpOverlay {
		position: fixed;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		z-index: 1000;
		display: grid;
		transform: all 0.3s cubic-bezier(0.22, 0.84, 0.01, 1);
		grid-template-columns: minmax(150px, 1fr) minmax(640px, 4fr) minmax(
				150px,
				1fr
			);
	}
	@media (max-width: 850px) {
		#PopUpOverlay {
			grid-template-columns: 0px minmax(640px, 1fr) 0px;
		}
	}
	#popUpText {
		display: block;
		height: auto;
		font-size: 15px;
		background-color: cornsilk;
		align-self: center;
		padding: 2%;
		text-align: start;
		color: black;
	}
</style>