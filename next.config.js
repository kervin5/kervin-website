const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

const withPWA = require("next-pwa");

const withTwinMacro = (config) => {
  return {
    future: { webpack5: true },
    webpack: (config) => {
      // Unset client-side javascript that only works server-side
      config.resolve.fallback = { fs: false, module: false };

      return config;
    },
  };
};

module.exports = withPWA(
  withMDX({
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  })
);
