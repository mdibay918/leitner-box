import Vue from 'vue'
import Router from 'vue-router'
import LitnerReview from '@/views/LitnerReview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LitnerReview',
      component: LitnerReview
    }
  ]
})
