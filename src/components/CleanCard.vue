<template>
  <div class="leitner-card">
    <header>
      <span class="text">Card {{number}}</span>
      <span class="close-icon">
        <i class="fas fa-times-circle red"></i>
      </span>
    </header>
    <div class="content">
        <div class="questoin">
            <div>
              <p>Question</p>
            </div>
            <div>
              <input class="input is-small" type="text" placeholder="e.x: When is 4th of July?!">   
            </div>
        </div>
        <div class="answer">
            <div>
              <p>Answer</p>
            </div>
            <div class="text-area">
               <textarea class="textarea is-small" type="text" placeholder="e.x: 4th of July!"></textarea>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'clean-card',
  data () {
    return {
    	questoin: "", 
    	answer: ""
    }
  }, 
  props: {
    "number": {
      default: 0
    }
  }
}
</script>