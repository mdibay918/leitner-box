<template>
	<div class="view-container">
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
							v-model="deckName">		
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
								v-for="(card, index) in cards"
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
				:disabled="!hasDecks" 
				@click="cancel">Cancel
			</a>
			<a class="button is-link is-small" 
				:disabled="!hasDecks">Save
			</a>
		</div>
	</div>
</template>
<script>
import CleanCard from '@/components/CleanCard'
export default {
	name: 'leitnerbox', 
	components: {
		"clean-card": CleanCard
	},
	data() {
		return {
			cards: [], 
			deckName: ''
		}
	}, 
	methods: {
		cancel: function() {
			this.cards.splice(0, this.cards.length);
		}, 
		addNewCard: function() {
			this.cards.push({
				question: '', 
				answer: ''
			});
		},
		updateCard: function(data) {
			if (data.hasOwnProperty('_id')) {
				this.cards[data._id-1]	
					.question = data._question; 
				this.cards[data._id-1] 
					.answer = data._answer;
			}
		}, 
		removeCard: function(data) {
			if (data.hasOwnProperty('_id') && this.cards.length-1 >= data._id-1) {
				this.cards.splice(data._id-1, 1);
			}
		}
	},
	computed: {
		hasDecks() {
			return this.cards.length > 0;
		}
	}
}
</script>