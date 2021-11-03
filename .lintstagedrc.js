module.exports = {
  '*.{ts,tsx}': [() => 'yarn tsc --noEmit'],
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --cache --fix'],
  '*.{json,md,mdx,yml,css}': ['prettier --write'],
}
