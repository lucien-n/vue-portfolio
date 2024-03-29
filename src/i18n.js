import { createI18n } from 'vue-i18n'

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
function loadLocaleMessages() {
  /**
   * 
   * !↓↓↓ This method doesn't work ↓↓↓
   * 
   */

  // const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  // const messages = {}
  // locales.keys().forEach(key => {
  //   const matched = key.match(/([A-Za-z0-9-_]+)\./i)
  //   if (matched && matched.length > 1) {
  //     const locale = matched[1]
  //     messages[locale] = locales(key).default
  //   }
  // })

  /**
   * 
   * *↓↓↓ This method DOES work ↓↓↓
   * 
   */
  const messages = {
    'en' : require('./locales/en.json'),
    'fr' : require('./locales/fr.json')
  }

  return messages
}

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
})
