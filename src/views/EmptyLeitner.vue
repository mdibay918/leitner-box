<template>
	<div class="view-container">
		<form @submit.prevent="onSubmit" 
			v-on:keydown="form.errors.clear($event.target.name)"
			class="leitner-form">
		<div class="leitner-canvas">
			<div class="empty-deck-view">
				<div class="deck-name-row">
					<div>
						<p>Deck name</p>
					</div>
					<div>
						<input class="input is-small" 
							type="text" 
							placeholder="e.x: Math Deck"
							v-model="form.deckName">		
						<span class="help is-danger" v-if="form.errors.has('deckName')" v-text="form.errors.get('deckName')"></span>
					</div>
				</div>
				<div class="empty-cards-row">
					<div class="card-columns">
						<div class="card-row">
							<div class="new-card-adder" 
								@click="addNewCard">
								<div><i class="fas fa-plus-circle"></i></div>
								<div>Add Card</div>
							</div>
							<clean-card 
								v-for="(card, index) in form.cards"
								:key="index"
								:id="index+1"
								v-on:UpdateCard="updateCard"
								v-on:RemoveCard="removeCard"></clean-card>
						</div>
					</div> 	
				</div>
			</div>
		</div>
		<div class="leitner-controller">
			<a class="button is-light is-small" 
				@click="cancel">Cancel
			</a>
			<a class="button is-link is-small" 
				:disabled="form.errors.hasError()"
				@click="onSubmit">Save
			</a>
		</div>
	</form>
	</div>
</template>
<script>
import CleanCard from '@/components/CleanCard'
import EmptyLeitnerForm from '@/assets/EmptyLeitnerForm.js'

export default {
	name: 'leitnerbox', 
	components: {
		"clean-card": CleanCard
	},
	data() {
		return {
			form: new EmptyLeitnerForm({
				cards: [], 
				deckName: ''
			})
		}
	}, 
	methods: {
		cancel: function() {
			this.form.cards.splice(0, this.form.cards.length);
		}, 
		addNewCard: function() {
			this.form.cards.push({
				question: '', 
				answer: ''
			});
		},
		updateCard: function(data) {
			if (data.hasOwnProperty('_id')) {
				this.form.cards[data._id-1]	
					.question = data._question; 
				this.form.cards[data._id-1] 
					.answer = data._answer;
			}
		}, 
		removeCard: function(data) {
			if (data.hasOwnProperty('_id') && this.form.cards.length-1 >= data._id-1) {
				this.form.cards.splice(data._id-1, 1);
			}
		},
		onSubmit: function() {
				this.form.submit("post", "http://localhost:3000/decks")
				.then(resp => {
					console.log("Post promise resp.");
					console.log(resp);
				})
				.catch(error => {
					console.log("Post promise error resp.");
					console.log(error);
				});
		},
	},
	computed: {
		hasDecks() {
			return this.form.cards.length > 0;
		}
	}
}
</script>