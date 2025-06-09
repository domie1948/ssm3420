import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import ceshibaogao from '@/views/modules/ceshibaogao/list'
    import news from '@/views/modules/news/list'
    import jiankangceping from '@/views/modules/jiankangceping/list'
    import jiankangxiaotieshi from '@/views/modules/jiankangxiaotieshi/list'
    import taocanxiangmu from '@/views/modules/taocanxiangmu/list'
    import yuyuetijian from '@/views/modules/yuyuetijian/list'
    import quxiaoyuyue from '@/views/modules/quxiaoyuyue/list'
    import yonghu from '@/views/modules/yonghu/list'
    import tijiantaocan from '@/views/modules/tijiantaocan/list'
    import tijianbaogao from '@/views/modules/tijianbaogao/list'
    import config from '@/views/modules/config/list'
    import yonghuceping from '@/views/modules/yonghuceping/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/ceshibaogao',
        name: '测试报告',
        component: ceshibaogao
      }
      ,{
	path: '/news',
        name: '健康资讯',
        component: news
      }
      ,{
	path: '/jiankangceping',
        name: '健康测评',
        component: jiankangceping
      }
      ,{
	path: '/jiankangxiaotieshi',
        name: '健康小贴士',
        component: jiankangxiaotieshi
      }
      ,{
	path: '/taocanxiangmu',
        name: '套餐项目',
        component: taocanxiangmu
      }
      ,{
	path: '/yuyuetijian',
        name: '预约体检',
        component: yuyuetijian
      }
      ,{
	path: '/quxiaoyuyue',
        name: '取消预约',
        component: quxiaoyuyue
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/tijiantaocan',
        name: '体检套餐',
        component: tijiantaocan
      }
      ,{
	path: '/tijianbaogao',
        name: '体检报告',
        component: tijianbaogao
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/yonghuceping',
        name: '用户测评',
        component: yonghuceping
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
