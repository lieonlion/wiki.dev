import {
  computed,
  ref,
} from 'vue'
import { useData } from 'vitepress'
import { NavBarTitleTheme } from '../nav-bar-title-theme'
import { getNavBarTitle } from '../support/navbar-title'

export function useNavBarTitle() {
  const { page, theme } = useData<NavBarTitleTheme.Config>()

  const _navbar_title = computed(() => {
    const navBarTitleConfig = theme.value.navBarTitle
    const relativePath = page.value.relativePath

    return navBarTitleConfig ? getNavBarTitle(navBarTitleConfig, relativePath) : {}
  })

  const navbar_title = ref(_navbar_title)

  return {
    navbar_title
  }
}
