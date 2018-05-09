import Vue from 'vue'
import Router from 'vue-router'
import PaginatedTable from '@/components/PaginatedTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PaginatedTable',
      component: PaginatedTable
    }
  ]
})
