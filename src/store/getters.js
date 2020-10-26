const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  appsCenterShow: state => state.app.appsCenterShow,
  appsList: state => state.app.appsList,
  addRouters: state => state.app.addRouters,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name
}
export default getters
