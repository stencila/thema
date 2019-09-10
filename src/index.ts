export const themes = {
  elife: 'eLife' as const,
  nature: 'nature' as const,
  plos: 'plos' as const,
  stencila: 'stencila' as const
}

type Themes = typeof themes
export type ThemeNames = Themes[keyof Themes]

export const modules: {[key in keyof Themes]: Promise<any>} = {
  elife: import('./themes/eLife'),
  nature: import('./themes/nature') ,
  plos: import('./themes/plos'),
  stencila: import('./themes/stencila')
}

export const themePath = 'dist/themes'

const themeNameGuard = (s: string): s is keyof Themes => s in themes

/**
 * Given a string, will attempt to return a matching Thema theme, falling back to Stencila in case none is found
 * @param {string} name Name of the theme to look for
 */
export const getTheme = (name?: string): ThemeNames => {
  const theme = name === undefined ? '' : name.toLowerCase().trim()
  return themeNameGuard(theme) ? themes[theme] : themes.stencila
}