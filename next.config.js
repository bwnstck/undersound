// eslint-disable-next-line @typescript-eslint/no-var-requires

// next.config.js
module.exports = {
  // exportPathMap: async function (defaultPathMap) {
  //   return {
  //     defaultPathMap,
  //   }
  // },
  pageExtensions: ['tsx'],
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
  },
  // images: {
  // Fix for using Next image API
  // disableStaticImages: true,
  // },
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
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
      ]
    )
    return config
  },
}
