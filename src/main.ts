import { createApp } from 'vue'
import App from './App.vue'
import MPanel from './components/MPanel.vue'

createApp(App).component(MPanel.name, MPanel).mount('#app')
