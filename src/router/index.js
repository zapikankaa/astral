import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../views/Main'
import Question2 from '../components/Question2'
import Question3 from '../components/Question3'
import Question4 from '../components/Question4'
import Question5 from '../components/Question5'
import Prediction from '../components/Prediction'

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
  history: createWebHashHistory(),
  routes
})

export default router
