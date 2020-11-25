module.exports = () => {
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
