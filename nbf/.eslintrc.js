module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'vuetify',
    './.eslintrc-auto-import.json',
  ],
  plugins: [
    '@typescript-eslint', // Uses the @typescript-eslint/eslint-plugin
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    // Add more custom rules here
  },
}
