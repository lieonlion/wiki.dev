import { DefaultTheme } from "vitepress";

export namespace NavBarTitleTheme {
  export interface Config extends DefaultTheme.Config {
    navBarTitle?: NavBarTitle
  }

  // navbar title -------------------------------------------------------------------

  export type NavBarTitle = NavBarTitleItem | NavBarTitleMulti

  export type NavBarTitleMulti = { [path: string]: NavBarTitleItem }

  export type NavBarTitleItem = {
    /**
     * The text label of the item.
     */
    text?: string

    /**
     * The link of the item.
     */
    link?: string

    /**
     * The logo file of the site.
     *
     * @example '/logo.svg'
     */
    logo?: DefaultTheme.ThemeableImage
  }
}