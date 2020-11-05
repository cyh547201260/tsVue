const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  appsCenterShow: state => state.app.appsCenterShow,
  highLevelOpenStatus: state => state.app.highLevelOpenStatus,
  caseDetailNavIndex: state => state.app.caseDetailNavIndex,
  navMenuData: state => state.app.navMenuData,
  menuRouteLoaded: state => state.app.menuRouteLoaded,
  appsList: state => state.app.appsList,
  addRouters: state => state.app.addRouters,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  filterOptions: state => state.data.filterOptions,
  tableDataList: state => state.data.tableDataList,
  pageData: state => state.data.pageData,

  pageTotal: state => state.page.pageTotal,
  pageNum: state => state.page.pageNum,
  pageSize: state => state.page.pageSize,
  currentPage: state => state.page.currentPage,
}
export default getters
