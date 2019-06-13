<template></template>

<style>
</style>

<script>
export default {
	props: {
		value: { type: String, default: this.items[0] },
		items: { type: Array, default: [""] }
	}
};
</script>
