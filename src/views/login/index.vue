<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>

      <el-form-item prop="user_name">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="user_name"
          v-model="loginForm.user_name"
          placeholder="user_name"
          name="user_name"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="Password"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button>

      <div class="tips">
        <span style="margin-right:20px;">user_name: admin</span>
        <span> password: any</span>
      </div>

    </el-form>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import qs from 'qs'
  import Layout from '@/layout'
  import { getApps,getMenusList } from '@/api/nav'
  import { login, logout, getInfo } from '@/api/user'
  import {setToken,setTokenType} from '../../utils/auth.js'
  import dashboradIndex from '@/views/dashboard/index'
  import page404 from '@/views/404'

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        user_name: '152244650634142239',
        password: 'insgeek123456'
      },
      loginRules: {
        user_name: [{ required: true, trigger: 'blur'}],
        password: [{ required: true, trigger: 'blur'}]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    formatSidebarsMenu() {

    },
    getSidebars() {
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
                    component:dashboradIndex,
                    meta: { title: inObj[j]['name'], icon: 'dashboard' }
                  }
                  fatherLevel.children.push(childObj);
                }
              }else{
                console.log(obj[i]['component'])
                var childObj = {
                  path: obj[i]['redirect'],
                  name: obj[i]['name'],
                  component:  dashboradIndex,
                  meta: { title: obj[i]['name'], icon: 'dashboard' }
                }
                fatherLevel.name = '';
                fatherLevel.children.push(childObj);
              }
              newRouters.push(fatherLevel);
            }



            resultRouters = newRouters.concat(initRouters);
            resultRouters.push({ path: '*', redirect: '/404', hidden: true },{path: '/404',component: page404,hidden: true});
            this.$store.dispatch("app/setRouters", resultRouters);
            var _this = this;
            setTimeout(() => {
              var rot = _this.redirect || '/'
              console.log(rot)
             _this.$router.push({ path: rot})
            },1000)
             this.loading = false
      })
    },
    handleLogin() {
      login(qs.stringify({ user_name: this.loginForm.user_name.trim(), password: this.loginForm.password ,saveLogin: true})).then(response => {
        console.log(response.data)
        localStorage.setItem('loginUserInfo', JSON.stringify(response.data))
        // const { data } = response
        // commit('SET_TOKEN', data.token)
        setToken(response.data.access_token)
        console.log(response.data.access_token)
        setTokenType(response.data.token_type)
        this.getSidebars()

      }).catch(error => {
        // reject(error)
      })


      // this.$refs.loginForm.validate(valid => {
      //   if (true) {
      // console.log(this.loginForm)
      //     this.loading = true
      //     this.$store.dispatch('user/login', qs.stringify({user_name:'123123',passowrd:'3123123'})).then(() => {
      //       this.$router.push({ path: this.redirect || '/' })
      //       this.loading = false
      //     }).catch(() => {
      //       this.loading = false
      //     })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
