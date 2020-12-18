import { container, header, menu, submenu, menuItem, main, footer, card} from 'element-ui'
const element = {
  install(Vue) {
    Vue.use(container)
      Vue.use(header)
      Vue.use(menu)
      Vue.use(menuItem)
      Vue.use(main)
      Vue.use(submenu)
      Vue.use(footer)
      Vue.use(card)
  }
}
export default element