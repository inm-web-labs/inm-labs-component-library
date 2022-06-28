import componentsList from'./components'

const plugin = {
    install (Vue) {
        for (const entry in componentsList) {
            const component = componentsList[entry]
            Vue.component(component.name, component.component)
        }
    }
}

export default plugin
