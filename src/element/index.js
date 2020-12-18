import { container, header, menu, menuItem, main} from 'element-ui'
const element = {
  install(Vue) {
    Vue.use(container)
      Vue.use(header)
      Vue.use(menu)
      Vue.use(menuItem)
      Vue.use(main)
  }
}
export default element