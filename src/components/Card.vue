<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{header}}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <p>{{content}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'card',
  data () {
    return {
    }
  }, 
  props:{
    "content": {
      required: true
    }, 
    "header": {
      required: true
    }
  }
}
</script>