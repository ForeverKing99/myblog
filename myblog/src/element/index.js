import { container, header, menu, submenu, menuItem, main, footer, card, button, aside, tabs, tabPane, backtop, icon, dialog, form, formItem, input, select, option, } from 'element-ui'
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
    Vue.use(button)
    Vue.use(aside)
    Vue.use(tabs)
    Vue.use(tabPane)
    Vue.use(backtop)
    Vue.use(icon)
    Vue.use(dialog)
    Vue.use(form)
    Vue.use(formItem)
    Vue.use(input)
    Vue.use(select)
    Vue.use(option)
  }
}
export default element