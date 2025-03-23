import { ensureStartingSlash } from 'vitepress/dist/client/theme-default/support/utils.js'
import { NavBarTitleTheme } from '../nav-bar-title-theme'
import { isType } from './util'

type NavBarTitleItem = NavBarTitleTheme.NavBarTitleItem

/**
 * Get the `NavBarTitle` from navBarTitle option. This method will ensure to get correct
 * navBarTitle config from `NavBarTitleConfig` with various path combinations such
 * as matching `guide/` and `/guide/`. If no matching config was found, it will
 * return empty object.
 */
export function getNavBarTitle(
  _navbar_title: NavBarTitleTheme.NavBarTitle | undefined,
  path: string
): NavBarTitleItem {
  if (_navbar_title == null) return {};
  if (!isType<NavBarTitleTheme.NavBarTitleMulti>(_navbar_title)) return _navbar_title;

  path = ensureStartingSlash(path)

  const dir = Object.keys(_navbar_title)
    .sort((a, b) => {
      return b.split('/').length - a.split('/').length
    })
    .find((dir) => {
      // make sure the multi navbar-title key starts with slash too
      return path.startsWith(ensureStartingSlash(dir))
    })

  const navbar_title = dir ? _navbar_title[dir] : {}
  return navbar_title
}