import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// DATA AOS
// AOS.init();

// import 'vue-flagstrap/dist/vue-flagstrap.css';
// import Flagstrap from 'vue-flagstrap';


// import './css/main.css'

// import 'src/scss/main.scss'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
