import {getMenusList } from '@/api/nav'
import page404 from '@/views/404'
import Layout from '@/layout'
import store from '@/store'

function getComponent(path) {
  console.log((resolve) => require(['@/views' + path], resolve))
  return (resolve) => require(['@/views' + path], resolve)
}

export function getSidebarsFun() {
  getMenusList().then((res) => {
            var obj = res.data;
            var newRouters = [];
            var resultRouters = [];
            var initRouters = [
              {
                path: '/login',
                component: () => import('@/views/login/index'),
                hidden: true
              },

            ];
            for(var i in obj){
              var fatherLevel = {
                path: obj[i]['path'],
                component: Layout,
                children: []
              }
              if(obj[i]['path'] == '/'){
                fatherLevel.redirect =  '/'+obj[i]['redirect']
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
                    component:getComponent(inObj[j]['component']),
                    meta: { title: inObj[j]['name'], icon: 'dashboard' }
                  }
                  fatherLevel.children.push(childObj);
                }
              }else{
                var childObj = {
                  path: obj[i]['redirect'],
                  name: obj[i]['name'],
                  component:  getComponent(obj[i]['component']),
                  meta: { title: obj[i]['name'], icon: 'dashboard' }
                }
                fatherLevel.name = '';
                fatherLevel.children.push(childObj);
              }
              newRouters.push(fatherLevel);
            }



            resultRouters = newRouters.concat(initRouters);
            resultRouters.push({ path: '*', redirect: '/404', hidden: true },{path: '/404',component: page404,hidden: true});
            store.dispatch("app/setRouters", resultRouters);
            localStorage.setItem('ts_sidebar_router',JSON.stringify(resultRouters));
            var _this = this;
            console.log(resultRouters)
            // setTimeout(() => {
            //   var rot = _this.redirect || '/'
            //   console.log(rot)
            //  _this.$router.push({ path: rot})
            // },1000)
            //  this.loading = false
      })
}
