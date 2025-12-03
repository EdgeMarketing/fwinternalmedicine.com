import antfu from '@antfu/eslint-config'

// Handle CJS interop for Nuxt plugin
const nuxtPluginModule = await import('eslint-plugin-nuxt')
const nuxtPlugin = nuxtPluginModule.default ?? nuxtPluginModule

export default [
  // Antfu base config
  ...await antfu(),

  // Nuxt recommended rules
  {
    name: 'nuxt',
    plugins: {
      nuxt: nuxtPlugin,
    },
    rules: {
      ...(nuxtPlugin.configs?.recommended?.rules ?? {}),
    },
  },

  // Explicit globals (add any other auto-imported composables here)
  {
    name: 'globals',
    languageOptions: {
      globals: {
        globalState: 'readonly',
        $fetch: 'readonly',
        queryCollection: 'readonly',
      },
    },
  },

  // Your custom rule overrides
  {
    rules: {
      'vue/no-deprecated-slot-attribute': 'off',
      'curly': 'off',
      'no-console': 'off',
      'antfu/top-level-function': 'off',
      'style/eol-last': 'off',
    },
  },
]