module.exports = (api) => {
  /**
   * @show https://babeljs.io/docs/en/config-files#apicache
   */
  api.cache(true)
  const presets = [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ]

  return {
    presets,
  }
}
