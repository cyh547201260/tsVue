<template>
  <div class="dashboard-container">
    <div class="main-body-cont-box-card">
      <search-menu></search-menu>
    </div>
    <div class="main-body-cont-box-card">
      <data-table :tablecellwidth="tableCellWidth"></data-table>
    </div>
    <div class="main-body-cont-box-card">
      <table-pagination :tablecellwidth="tableCellWidth"></table-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getApps,getMenusList } from '@/api/nav'
import { getInfo } from '@/api/user'

  import Layout from '@/layout'
import qs from 'qs'
import SearchMenu from '../../components/Searchmenu/SearchMenu.vue'
import DataTable from '../../components/DataTable/DataTable.vue'
import TablePagination from '../../components/DataTable/TablePagination.vue'

export default {
  name: 'Dashboard',
  data(){
    return{
      tableCellWidth:[70,70,110,155,220,210,80,120,100,85,160,160,80]
    }
  },
  components: {
    SearchMenu,DataTable,TablePagination
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  created() {
    console.log('bbbbbbbbbb')
    this.getMenuLists()
  },
  methods: {
    getMenuLists(){
      getApps().then(response => {
        // this.list = response.data.items
        this.$store.dispatch('app/setAppsList',response.data)

        console.log(this.$store)
      })

    },
    getSidebars() {
      getMenusList().then((res) => {

        console.log(res)
        var rut = [
            {
              path: '/login',
              component: () => import('@/views/login/index'),
              hidden: true
            },

            {
              path: '/404',
              component: () => import('@/views/404'),
              hidden: true
            },

            {
              path: '/',
              component: Layout,
              redirect: '/dashboard大师的index',
              children: [{
                path: 'dashboard123',
                name: 'Dashboard大师的Indexx',
                component: () => import('@/views/dashboard/index'),
                meta: { title: 'Dashboard', icon: 'dashboard' }
              }]
            },

            {
              path: '/example',
              component: Layout,
              redirect: '/example/table',
              name: 'Example',
              meta: { title: 'Example', icon: 'el-icon-s-help' },
              children: [
                {
                  path: 'table',
                  name: 'Table',
                  component: () => import('@/views/table/index'),
                  meta: { title: 'Table', icon: 'table' }
                },
                {
                  path: 'tree',
                  name: 'Tree',
                  component: () => import('@/views/tree/index'),
                  meta: { title: 'Tree', icon: 'tree' }
                }
              ]
            },

            {
              path: '/form',
              component: Layout,
              children: [
                {
                  path: 'index',
                  name: 'Form',
                  component: () => import('@/views/form/index'),
                  meta: { title: 'Form', icon: 'form' }
                }
              ]
            },

            {
              path: '/nested',
              component: Layout,
              redirect: '/nested/menu1',
              name: 'Nested',
              meta: {
                title: 'Nested',
                icon: 'nested'
              },
              children: [
                {
                  path: 'menu1',
                  component: () => import('@/views/nested/menu1/index'), // Parent router-view
                  name: 'Menu1',
                  meta: { title: 'Menu1' },
                  children: [
                    {
                      path: 'menu1-1',
                      component: () => import('@/views/nested/menu1/menu1-1'),
                      name: 'Menu1-1',
                      meta: { title: 'Menu1-1' }
                    },
                    {
                      path: 'menu1-2',
                      component: () => import('@/views/nested/menu1/menu1-2'),
                      name: 'Menu1-2',
                      meta: { title: 'Menu1-2' },
                      children: [
                        {
                          path: 'menu1-2-1',
                          component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                          name: 'Menu1-2-1',
                          meta: { title: 'Menu1-2-1' }
                        },
                        {
                          path: 'menu1-2-2',
                          component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                          name: 'Menu1-2-2',
                          meta: { title: 'Menu1-2-2' }
                        }
                      ]
                    },
                    {
                      path: 'menu1-3',
                      component: () => import('@/views/nested/menu1/menu1-3'),
                      name: 'Menu1-3',
                      meta: { title: 'Menu1-3' }
                    }
                  ]
                },
                {
                  path: 'menu2',
                  component: () => import('@/views/nested/menu2/index'),
                  name: 'Menu2',
                  meta: { title: 'menu2' }
                }
              ]
            },

            {
              path: 'external-link',
              component: Layout,
              children: [
                {
                  path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
                  meta: { title: 'External Link', icon: 'link' }
                }
              ]
            },

            // 404 page must be placed at the end !!!
            { path: '*', redirect: '/404', hidden: true }
]

  console.log(rut)
        this.$store.dispatch("app/setRouters", rut);

      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 16px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.main-body-cont-box-card{
  background: white;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
}
</style>
