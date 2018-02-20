<template>
	<div class="columns is-centered" @click="flip">
		<div class="column is-one-third prev">
			<i class="fas fa-angle-left"></i>
		</div>
		<div class="column">
			<transition name="component-fade" mode="out-in">
				<card 
					:header="showQuestion ? 'Question' : 'Answer'" 
					:content="showQuestion ? question : answer" 
					:key="showQuestion"/>
			</transition>
		</div>
		<div class="column is-one-third next">
			<i class="fas fa-angle-right"></i>
		</div>
	</div> 
</template>
<script>
import card from '@/components/Card'
export default {
	name: 'leitnerbox', 
	components: {
		card: card
	},
	data() {
		return {
			question: 'What\'s your name?',
			answer: 'Foo!',
			showQuestion: true, 
			view: 'v-a'
		}
	}, 
	methods: {
		flip() {
			this.showQuestion =  !this.showQuestion;
		}
	}
}
</script>
<style>
.prev {
	text-align: right;
	padding-top: 50px;
}
.next {
	padding-top: 50px;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>