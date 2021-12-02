// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router" 

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
export default new VueRouter({
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      redirect:'/home/news',
      // 通过children配置子级路由
      children:[ 
        {
          path:'news', //此处一定不要写/news 底层已经处理好 子路由不要/
          component:News
        },
        {
          path:'message',
          component:Message,
          children:[
            {path: 'detail',component: Detail}
          ]
        }
      ]
    }
  ]
})
