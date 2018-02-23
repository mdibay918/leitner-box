<template>
  <div class="leitner-card">
    <header>
      <span class="text">Card {{id}}</span>
      <span class="close-icon" @click="removeCard">
        <i class="fas fa-times-circle red"></i>
      </span>
    </header>
    <div class="content">
        <div class="questoin">
            <div>
              <p>Question</p>
            </div>
            <div>
              <input class="input is-small" 
                type="text" 
                placeholder="e.x: When is 4th of July?!"
                :value="question"
                @input="updateQuestion($event.target.value)">   
            </div>
        </div>
        <div class="answer">
            <div>
              <p>Answer</p>
            </div>
            <div class="text-area">
               <textarea class="textarea is-small" 
                  type="text" 
                  placeholder="e.x: 4th of July!" 
                  :value="answer"
                  @input="updateAnswer($event.target.value)"></textarea>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'clean-card',
  data() {
    return {
        _id: '', 
        _question: '', 
        _answer: ''
    }
  }, 
  props: {
    "id": {
      required: true,
      default: 1
    }, 
    "question": {
      required: false, 
      default: ''
    }, 
    "answer": {
      required: false, 
      default: ''
    }
  },
  created() {
    this._data._id = this.id;
  }, 
  methods: {
    emitNewdata: function() {

      this.$emit('UpdateCard', {
        _id: this._data._id,
        _question: this._data._question, 
        _answer: this._data._answer
      });
    },
    updateAnswer: function(value) {
      this._data._answer = value;
      this.emitNewdata();
    },
    updateQuestion: function(value) {
      this._data._question = value;
      this.emitNewdata();
    },
    removeCard: function() {
      this.$emit('RemoveCard', {
        _id: this._data._id
      });
    }
  }
}
</script>