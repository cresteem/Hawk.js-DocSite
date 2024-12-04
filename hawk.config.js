/** @type {import("@cresteem/hawk-js").hawkJsOptions} */
const config = {
  lookupPatterns: ["**/*.html", "**/*.htm"],
  ignorePattern: ["node_modules/**"],
  timeZone: "Asia/Kolkata",
  domainName: "hawkjs.cresteem.com",
  sitemapPath: "sitemap.xml",
  robotPath: "robot.txt",
  serviceAccountFile: "gserv.json",
  ftpCredential: {
    username: process.env.FTP_USER,
    password: process.env.FTP_PASS,
    hostname: process.env.FTP_HOST,
  },
};

exports.default = config;
