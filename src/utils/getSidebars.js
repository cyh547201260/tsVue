import {getMenusList } from '@/api/nav'

import Layout from '@/layout'

export function getSidebars() {
  getMenusList().then((res) => {
              console.log('------------------------')
              console.log(res)
              var obj = res.data;
              var newRouters = [];
              var resultRouters = [];
              var initRouters = [
                {
                  path: '/',
                  component: Layout,
                  redirect: '/dashboard',
                  children: [{
                    path: 'dashboard',
                    name: 'Dashboard123123',
                    component: () => import('@/views/dashboard/index'),
                    meta: { title: 'Dashboard', icon: 'dashboard' }
                  }]
                },
                {
                  path: '/login',
                  component: () => import('@/views/login/index'),
                  hidden: true
                },

                // {
                //   path: '/404',
                //   component: () => import('@/views/404'),
                //   hidden: true
                // },
                { path: '*', redirect: '/404', hidden: true },
              ];
              for(var i in obj){
                var fatherLevel = {
                  path: obj[i]['path'],
                  component: Layout,
                  children: []
                }
                if(obj[i]['path'] == '/'){
                  fatherLevel.redirect =  obj[i]['redirect']
                }
                // if( obj[i]['name'].length > 0){
                //   fatherLevel.name =  obj[i]['name']
                // }
                var inObj = obj[i]['children']
                if(inObj.length > 0){
                  for(var j in inObj){
                    var childObj = {
                      path: inObj[j]['path'],
                      name: inObj[j]['name'],
                      component: () => import('@/views/dashboard/index'),
                      meta: { title: inObj[j]['name'], icon: 'dashboard' }
                    }
                    fatherLevel.children.push(childObj);
                  }
                }else{
                  var childObj = {
                    path: obj[i]['redirect'],
                    name: obj[i]['name'],
                    component: () => import('@/views/dashboard/index'),
                    meta: { title: obj[i]['name'], icon: 'dashboard' }
                  }
                  fatherLevel.name = '';
                  fatherLevel.children.push(childObj);
                }
                newRouters.push(fatherLevel);
              }

              resultRouters = newRouters.concat(initRouters);
              this.$store.dispatch("app/setRouters", resultRouters);
        })
}
