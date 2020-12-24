import Launcher from './Launcher.vue'
import MessageList from './MessageList.vue'
import UserInput from './UserInput.vue'
import VTooltip from 'v-tooltip'

const defaultComponentName = 'beautiful-chat'
const messageListComponentName = 'beautiful-chat-message-list'
const userInputComponentName = 'beautiful-chat-user-input'

const Plugin = {
  install (Vue, options = {}) {
    /**
     * Makes sure that plugin can be installed only once
     */
    if (this.installed) {
      return
    }

    this.installed = true
    this.event = new Vue()
    this.dynamicContainer = null
    this.componentName = options.componentName || defaultComponentName
    /**
     * Plugin API
     */
    Vue.prototype.$chat = {
      _setDynamicContainer (dynamicContainer) {
        Plugin.dynamicContainer = dynamicContainer
      }
    }
    /**
     * Sets custom component name (if provided)
     */
    Vue.component(this.componentName, Launcher)
    Vue.component(messageListComponentName, MessageList)
    Vue.component(userInputComponentName, UserInput)
    Vue.use(VTooltip)
  }
}

export default Plugin
