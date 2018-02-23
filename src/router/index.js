import Vue from 'vue'
import Router from 'vue-router'
import LeitnerReview from '@/views/LeitnerReview'
import EmptyLeitner from '@/views/EmptyLeitner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EmptyLeitner',
      component: EmptyLeitner
    }
  ]
})
