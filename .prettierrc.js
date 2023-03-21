// NOTE: pnpm で prettier のプラグインが解決できないため、暫定的に js で設定を書いてる
// ref: https://zenn.dev/convcha/articles/6aa3dc18158a41
module.exports = {
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParens: 'always',
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^components/atoms/(.*)$',
    '^components/molecules/(.*)$',
    '^components/organisms/(.*)$',
    '^components/templates/(.*)$',
    '^hooks/(.*)$',
    '^data/(.*)$',
    '^types/(.*)$',
    '^styles/(.*)$',
    '^[./]'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
