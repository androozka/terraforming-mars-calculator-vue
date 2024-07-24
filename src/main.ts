import './assets/main.css'

// Vue app
import { createApp } from 'vue'
import App from '@/App.vue'

const app = createApp(App)

// Router
import router from '@/router'
app.use(router)

// Pinia
import { createPinia } from 'pinia'

const pinia = createPinia()
app.use(pinia)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi }
  }
})

app.use(vuetify)

// Mount app
app.mount('#app')
