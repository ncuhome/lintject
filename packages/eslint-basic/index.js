module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'standard',
  ],
  rules: {
    'multiline-comment-style': ['error', 'separate-lines'],
    'space-before-function-paren': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  ignorePatterns: ['**/dist/*', '**/build/*']
}
