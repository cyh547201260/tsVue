import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import { getApps,getMenusList } from '@/api/nav'
import getPageTitle from '@/utils/get-page-title'
import page404 from '@/views/404'

// import { getAsyncRoutes } from '@/utils/asyncRouter'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist
let registerRouteFresh = true;

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title);
  // const localRouters = JSON.parse(localStorage.ts_sidebar_router)
  // store.dispatch("app/setRouters", localRouters);
  // router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
  // router.options.routes=store.getters.addRouters;
  // determine whether the user has logged in
  const hasToken = getToken()

  if (to.path === "/login") {
      // 如果是访问登录界面，如果token存在，代表已登录过，跳转到主页
      if (hasToken) {
        next({ path: "/" });
      } else {
        // 否则，跳转到登录页面
        next();
      }
  } else {

    if (hasToken) {
      // if (to.path === '/login') {
      //   // if is logged in, redirect to the home page
      //   next({ path: '/' })
      //   NProgress.done()
      // } else {
      //   const hasGetUserInfo = store.getters.name;

      //   if (hasGetUserInfo) {
      //     next()
      //   } else {
      //     try {
      //       if (registerRouteFresh) {

      //         router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
      //         router.options.routes=store.getters.addRouters;
      //       //   // return false;
      //         registerRouteFresh = false;

      //         next({ ...to, replace: false });// hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
      //           // next()

      //       }else {
      //         next();
      //         // next({path:'',query:{redirect:to.path}});
      //       }
      //     } catch (error) {
      //       console.log(error)
      //       console.log(router.options.routes)
      //       console.log('catch')
      //       // remove token and go to login page to re-login
      //       await store.dispatch('user/resetToken')
      //       Message.error(error || 'Has Error')
      //       next(`/login?redirect=${to.path}`)
      //       NProgress.done()
      //     }
      //   }
      // }

      // 用户已登录，添加动态菜单和路由后直接跳转

      // addDynamicMenuAndRoutes(to, from, next);

    } else {
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


  }


})


/**
 * 加载动态菜单和路由
 */
function addDynamicMenuAndRoutes(userName, to, from, next) {

  if (store.state.app.menuRouteLoaded) {

    console.log("动态菜单和路由已经存在.");

    next();

    return;

  }



  //优先从本地sessionStorage获取

  let navMenuData = sessionStorage.getItem("navMenuData");

  if (navMenuData) {

    navMenuData = JSON.parse(navMenuData);

    // 获取动态路由

    let dynamicRoutes = getDynamicRoutes(navMenuData);



    // 设置获取的路由全部为根路由(path值为 "/")下的子路由

    // 这里，根据静态路由配置可知router.options.routes[0]为根路由

    router.options.routes[0].children = [].concat(dynamicRoutes);

    // 这里为啥不把 * 匹配放到静态路由的最后面，是因为如果放置在静态路由最后面，作为一级路由，当url同前面的路由都不匹配时，会匹配到 *，这样一来，刷新页面时，由于还没加载动态路由，预期和动态路由匹配的url，会匹配到静态路由的 *，然后跳转404页面。

    if (router.options.routes[router.options.routes.length - 1].path != "*") {

      router.options.routes = router.options.routes.concat([

        {

          path: "*",

          name: "notFound",

          component: page404

        }

      ]);

    }



    // 添加路由，让路由生效

    router.addRoutes(router.options.routes);



    // 存储导航菜单list数据

    store.commit("setNavMenu", navMenuData);



    // 设置菜单为已加载状态

    store.commit("setMenuRouteLoadStatus", true);

    next();

    if (to.matched.length == 0) {

      router.push(to.path);

    }

  } else {
    // 本地sessionStorage获取不到，从服务器端读取
      getMenusList()
      .then(res => {
        // 获取动态路由
        let dynamicRoutes = getDynamicRoutes(res.data);



        // 添加路由

        router.options.routes[0].children = [].concat(dynamicRoutes);



        // 如果要添加为一级路由，则按如下方式拼接路由

        // router.options.routes = staticRoute.concat(dynamicRoutes)



        // 注意，以下写法会导致添加的路由不起作用，为错误的写法

        // let otherVar=staticRoute.concat(dynamicRoutes)

        // router.addRoutes(otherVar); //添加的路由不起作用



        if (

          router.options.routes[router.options.routes.length - 1].path != "*"

        ) {

          router.options.routes = router.options.routes.concat([

            {

              path: "*",

              name: "notFound",

              component: page404

            }

          ]);

        }



        router.addRoutes(router.options.routes); //会产生重复路由，控制台会有warn提示，但是不影响，vue-router会自动去重，



        // 存储导航菜单list数据

        sessionStorage.setItem("navMenuData", JSON.stringify(res.data));

        store.commit("setNavMenu", res.data);



        // 设置菜单为已加载状态

        store.commit("setMenuRouteLoadStatus", true);



        next(); /* 注意:路由匹配是在router.addRoutes之前完成的，所以，即便使用router.addRoutes添加动态路由，也会出现to.matched.length也会等于0的情况，即没匹配到路由，所以to.matched.length等于0的情况下，再次执行router.push(to.path)，这样，再次触发beforeEach函数调用)*/

        if (to.matched.length == 0) {

          router.push(to.path);

        }

      })

      .then(res => {

        // 保存用户权限标识集合

      })

      .catch(function(res) {

        console.log(res);

      });

  }

}



/**
 * 获取动态(菜单)路由配置
 * @param {*} menuList菜单列表
 * @param {*} routes递归创建的动态(菜单)路由
 */
function getDynamicRoutes(menuList = [], parentRoute = []) {
  for (var i = 0; i < menuList.length; i++) {
    var route = {}; // 存放路由配置
    if (menuList[i].url && /\S/.test(menuList[i].url)) {
      // url不为空，且包含任何非空白字符
      route = {
        path: menuList[i].url,
        component: resolve => require([`@/views/${menuList[i].url}`], resolve),
        name: menuList[i].name,
        children: [],
        meta: {
          icon: menuList[i].icon,
          index: menuList[i].id,
        }
      };
      if (menuList[i].children && menuList[i].children.length >= 1) {
        getDynamicRoutes(menuList[i].children, route["children"]);
      }
    } else {
      if (menuList[i].children && menuList[i].children.length >= 1) {
        getDynamicRoutes(menuList[i].children, parentRoute);
      }
    }
    if (JSON.stringify(route) != "{}") {
      parentRoute.push(route);
    }
  }
  return parentRoute;
}






router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
