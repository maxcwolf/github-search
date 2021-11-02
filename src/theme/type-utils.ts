import type { Theme, ThemeStyles, ColorModesScale } from 'theme-ui'
export const makeTheme = <T extends Theme>(theme: T): T => theme

/**
 * Constrained identity function used to create a styles dictionary
 * assignable to ThemeStyles while preserving its exact type.
 */
export const makeStyles = <T extends ThemeStyles>(styles: T): T => styles

export const makeColorsScale = <T extends ColorModesScale>(colors: T) => colors
