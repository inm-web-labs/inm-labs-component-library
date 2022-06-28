import components from '@/components'

const plugin = {
    install (Vue) {
        for (const prop in components) {
            if(components.hasOwnProperty(prop)) {
                const component = component[prop]
                Vue.component(component.name, component)
            }
        }
    }
}

export default plugin
