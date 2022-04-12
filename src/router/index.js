import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main'
import Question2 from '../views/Question2'
import Question3 from '../views/Question3'
import Question4 from '../views/Question4'
import Question5 from '../views/Question5'
import Prediction from '../views/Prediction'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/question/2',
    component: Question2
  },
  {
    path: '/question/3',
    component: Question3
  },
  {
    path: '/question/4',
    component: Question4
  },
  {
    path: '/question/5',
    component: Question5
  },
  {
    path: '/prediction',
    component: Prediction
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
