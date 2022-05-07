import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import MarketierUI from 'marketier-ui'
import 'marketier-ui/dist/style.css'

import zxcvbn from 'zxcvbn'
window.zxcvbn = zxcvbn

const app = createApp(App)

app.use(router)
app.use(MarketierUI)

app.mount('#app')
