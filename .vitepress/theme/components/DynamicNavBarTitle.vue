<!-- 
  This code belongs to Void(0) - https://voidzero.dev/
  (they are very cool people).

  It was taken from the VitePress project and is NOT my own work.
  Very small changes have been made.
-->
<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { useLangs } from 'vitepress/dist/client/theme-default/composables/langs.js'
import { useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar.js'
import { normalizeLink } from 'vitepress/dist/client/theme-default/support/utils.js'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'
import { NavBarTitleTheme } from '../nav-bar-title-theme'
import { useNavBarTitle } from '../composables/navbar-title'

const { site, theme, frontmatter: fm } = useData<NavBarTitleTheme.Config>()
const { hasSidebar } = useSidebar()
const { currentLang } = useLangs()

const { navbar_title } = useNavBarTitle()

const link = computed(() =>
  typeof theme.value.logoLink === 'string'
    ? theme.value.logoLink
    : theme.value.logoLink?.link
)

const rel = computed(() =>
  typeof theme.value.logoLink === 'string'
    ? undefined
    : theme.value.logoLink?.rel
)

const target = computed(() =>
  typeof theme.value.logoLink === 'string'
    ? undefined
    : theme.value.logoLink?.target
)
</script>

<template>
  <div class="VPNavBarTitle" :class="{ 'has-sidebar': hasSidebar }">
    <a
      class="title"
      :href="navbar_title.link ? normalizeLink(navbar_title.link) : link ?? normalizeLink(currentLang.link)"
      :rel="rel"
      :target="target"
    >
      <slot name="nav-bar-title-before" />
      <VPImage v-if="navbar_title.logo" class="logo" :image="navbar_title.logo" />
      <VPImage v-else-if="theme.logo" class="logo" :image="theme.logo" />
      <span v-if="navbar_title.text" v-html="navbar_title.text"></span>
      <span v-else-if="theme.siteTitle" v-html="theme.siteTitle"></span>
      <span v-else-if="theme.siteTitle === undefined">{{ site.title }}</span>
      <slot name="nav-bar-title-after" />
    </a>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  width: 100%;
  height: var(--vp-nav-height);
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  transition: opacity 0.25s;
}

@media (min-width: 960px) {
  .title {
    flex-shrink: 0;
  }

  .VPNavBarTitle.has-sidebar .title {
    border-bottom-color: var(--vp-c-divider);
  }
}

:deep(.logo) {
  margin-right: 8px;
  height: var(--vp-nav-logo-height);
}
</style>
