module.exports = {
  exportPathMap: async function (defaultPathMap) {
    return {
      defaultPathMap,
    }
  },
  pageExtensions: ['tsx'],
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: 'json',
          use: 'yaml-loader',
        },
        {
          test: /\.svg$/,
          use: '@svgr/webpack',
        },
      ]
    )
    return config
  },
}
