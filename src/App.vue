<template>
	<section id="app" class="leitner-app">
		<div class="leitner-head">
			<img src="./assets/icon.png">
		</div>
		<div class="leitner-main-container"> 
			<nav class="leitner-side-nav">
				<div class="leitner-side-nav-controller">
					<a class="button is-primary" :disabled="!hasDecks">New deck</a>
				</div>
				<div class="leitner-side-nav-items-list">
				</div>
			</nav>
			<main class="leitner-content-area">
				<router-view/>
			</main>
		</div>
	</section>
</template>
<script>
export default {
	name: 'App', 
	data() {
		return {
			decks: []	
		}
	}, 
	computed: {
		hasDecks() {
			return this.decks.length > 0;
		}
	},
	methods: {
		cancel() {
			this.decks.splice(0, this.decks.length);
		}
	}
}
</script>