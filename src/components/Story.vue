<template>
	<b-container>
		<h1 class="section-title col-12">My Story</h1>
		<b-row align-h="center">
			<b-col cols="12" md="4">
				<!-- <div class="m-avatar img-fluid">
					<img src="/img/me.png" class="w-100" />
				</div>-->
			</b-col>
		</b-row>
		<img class="img-fluid p-5" src="img/working.gif" alt />
	</b-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
.m-avatar {
	position: relative;

	&:before {
		content: "";
		position: absolute;
		bottom: 2%;
		z-index: -1;
		left: -10px;
		right: -10px;
		border-radius: 200px 200px 300px 300px;
		height: 80px;
		background: gray;
	}
}
</style>
   