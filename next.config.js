// next.config.js

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
})

module.exports = {
  async redirects() {
    return [
      {
        source: "/dotfiles",
        destination:
          "https://raw.githubusercontent.com/WTFox/dotfiles/main/bootstrap.sh",
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(svg|png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    })
    return config
  },
  ...withMDX({
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  }),
}
