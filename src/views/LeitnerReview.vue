<template>
	<div class="columns is-centered cart-view" >
		<div class="column is-one-third prev" @click="prev">
			<i class="fas fa-angle-left"></i>
		</div>
		<div class="column" @click="flip">
			<transition name="flip" mode="out-in">
				<dirty-card 
					:header="showQuestion ? 'Question' : 'Answer'" 
					:content="showQuestion ? question : answer" 
					:key="showQuestion"/>
			</transition>
		</div>
		<div class="column is-one-third next" @click="next">
			<i class="fas fa-angle-right"></i>
		</div>
	</div> 
</template>
<script>

import DirtyCard from '@/components/DirtyCard'
export default {
	name: 'leitnerbox', 
	components: {
		"dirty-card": DirtyCard
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
		},
		next() {
			alert("NEXT");
		}, 
		prev() {
			alert("PREV");
		}
	}
}
</script>
<style>

.flip-enter-active {
  transition: all .2s cubic-bezier(0.55, 0.085, 0.68, 0.53); 
}
.flip-leave-active {
  transition: all .25s cubic-bezier(0.25, 0.46, 0.45, 0.94); 
}

.flip-enter, .flip-leave-to {
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}
.next {
	padding-top: 50px;
}
.prev {
	text-align: right;
	padding-top: 50px;
}
</style>