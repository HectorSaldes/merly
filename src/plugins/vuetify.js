/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import '@/styles/main.scss'

// Composables
import { createVuetify } from 'vuetify'

const lightTheme = {
  dark: false,
  colors: {
    primary: '#FE40B4', // Morado oscuro
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: '#FE40B4', // Morado claro
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
})
