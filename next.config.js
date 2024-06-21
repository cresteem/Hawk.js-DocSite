const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
});

console.log(
  "\n###################################################\n",
  "Localhost: http://localhost:3000/opensource/enhancing-seo-with-hawk-js",
  "\n####################################################\n"
);
module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
  basePath: "/opensource/enhancing-seo-with-hawk-js",
  output: "export",
  distDir: "opensource/enhancing-seo-with-hawk-js",
};
