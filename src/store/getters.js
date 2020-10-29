const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  appsCenterShow: state => state.app.appsCenterShow,
  highLevelOpenStatus: state => state.app.highLevelOpenStatus,
  navMenuData: state => state.app.navMenuData,
  menuRouteLoaded: state => state.app.menuRouteLoaded,
  appsList: state => state.app.appsList,
  addRouters: state => state.app.addRouters,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name
}
export default getters
