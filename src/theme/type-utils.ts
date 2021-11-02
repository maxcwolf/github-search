import type { Theme, ThemeStyles, ColorModesScale } from 'theme-ui'

export const makeTheme = <T extends Theme>(theme: T): T => theme

export const makeStyles = <T extends ThemeStyles>(styles: T): T => styles

export const makeColorsScale = <T extends ColorModesScale>(colors: T) => colors
