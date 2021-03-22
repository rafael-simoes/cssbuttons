module.exports = {
  env: {
    GA_ENV: process.env.REACT_APP_GA_ENV,
  },

  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    require("./scripts/generate-sitemap");
    return config;
  },
};
