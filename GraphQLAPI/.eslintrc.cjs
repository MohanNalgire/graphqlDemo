module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', '@stylistic/js'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['*.{js,cjs}', '.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  root: true,
  rules: {
    '@stylistic/js/indent': ['error', 2],
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1 }],
    'no-use-before-define': ['error', { functions: false }],
    'no-param-reassign': ['error', { props: false }],
    'prettier/prettier': ['error', { singleQuote: true }],
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'class-methods-use-this': ['warn'],
  },
};
