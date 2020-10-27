import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import { getSidebarsFun } from '@/utils/getSidebars'
import getPageTitle from '@/utils/get-page-title'

// import { getAsyncRoutes } from '@/utils/asyncRouter'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist
let registerRouteFresh = true;

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title);
  getSidebarsFun();
  // const localRouters = JSON.parse(localStorage.ts_sidebar_router)
  // store.dispatch("app/setRouters", localRouters);
  // router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
  // router.options.routes=store.getters.addRouters;
  // determine whether the user has logged in
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.name;

      if (hasGetUserInfo) {
        next()
      } else {
        try {
          if (registerRouteFresh) {

            router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
            router.options.routes=store.getters.addRouters;
          //   // return false;
            registerRouteFresh = false;

            next({ ...to, replace: false });// hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
              // next()

          }else {
            next();
            // next({path:'',query:{redirect:to.path}});
          }
        } catch (error) {
          console.log(error)
          console.log(router.options.routes)
          console.log('catch')
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    console.log(';123')
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
