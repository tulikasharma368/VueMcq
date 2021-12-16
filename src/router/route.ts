import Home from '../views/Home.vue';
import MCQComponent from '../components/mcqcomponent/mcqComponent.vue';
import Resultcomponent from '../components/mcqcomponent/resultcomponent/Resultcomponent.vue';
import Trial from '../components/trial/Trial.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      // component: Home
      component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/mcq',
      name: 'MCQ',
      component: MCQComponent
    },
    {
      path: '/trial',
      name: 'Trial',
      component: Trial
    },
    {
      path: '/result',
      name: 'Result',
      component: Resultcomponent
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
      children :[
        {
          name : 'About1',
          path : 'about1',
          component: () =>
          import(/* webpackChunkName: "about" */ "../views/About1Component.vue"),
        },
        {
          name : 'About2',
          path : 'about2',
          // component : About2Component,
          component: () =>
          import(/* webpackChunkName: "about" */ "../views/About2Component.vue"),
        }
      ]
    }
  ]

  export default routes;