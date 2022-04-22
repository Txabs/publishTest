module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ['ts-mailonline'],
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  rules: {}
}