<template>
	<v-app>
		<router-view></router-view>
	</v-app>
</template>

<style lang="scss">
/* 
# BREAKPOINTS:
    $sm: 576px;
    $md: 768px;
    $lg: 992px;
    $xl: 1200px;
*/
.noselect {
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
}
@import url("https://fonts.googleapis.com/css?family=Chivo:300,400,700|Fredoka+One");
html {
	@extend .noselect;
	overflow-y: hidden !important;
}
a {
	text-decoration: none !important;
}
button {
	outline: none !important;
}
</style>

<script>
export default {};
</script>
