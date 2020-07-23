import polyglotI18nProvider from 'ra-i18n-polyglot'
import localeMessages from './ko'

export default polyglotI18nProvider((locale) => {
  if (locale === 'ko') {
    return localeMessages
  }
  return localeMessages
}, 'en')
