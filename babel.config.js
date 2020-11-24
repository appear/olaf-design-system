module.exports = (api) => {
  const babelEnv = api.env()
  const babelVer = api.version
  console.log(` -- 바벨(${babelVer})모드 : ${babelEnv} --`)
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
