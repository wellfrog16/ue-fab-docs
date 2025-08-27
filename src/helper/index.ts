import { useCookies } from '@vueuse/integrations/useCookies'

export function setLanguage(lang: string) {
    const cookies = useCookies(['locale'])
    cookies.set('locale', lang)
}

export function getLanguage() {
    const cookies = useCookies(['locale'])
    return cookies.get('locale') || 'en'
}
