const { fixupConfigRules } = require('@eslint/compat')
const { FlatCompat } = require('@eslint/eslintrc')
const prettier = require('eslint-config-prettier')

const flatCompat = new FlatCompat()

module.exports = [
  ...fixupConfigRules(
    flatCompat.extends('next/core-web-vitals'),
    flatCompat.extends('next/typescript')
  ),
  prettier
]

