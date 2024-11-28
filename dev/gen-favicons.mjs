import { favicons } from "favicons";
import { mkdirSync, writeFileSync } from "fs";
import { basename, join } from "path";

export async function generateFavicons(
  metaDesc,
  version,
  baseImage = "./dev/fav.webp",
  appName = basename(process.cwd()),
  basepath = join(process.cwd(), "public"),
  faviconsPath = "favicons",
  devName = "Darsan",
  devWebsite = "https://darsan.in"
) {
  const options = {
    path: faviconsPath,

    appName: appName,
    appDescription: metaDesc,
    version: version,

    developerName: devName,
    developerURL: devWebsite,

    background: "#fff",
    theme_color: "#fff",
    appleStatusBarStyle: "black-translucent",

    display: "fullscreen",
    orientation: "natural",

    start_url: "/",

    manifestMaskable: true,

    icons: {
      android: true,
      appleIcon: true,
      favicons: true,
      yandex: true,
      appleStartup: false,
      windows: false,
    },

    shortcuts: {},
  };

  try {
    const { images, files, html } = await favicons(baseImage, options);

    const rootPath = join(basepath, faviconsPath);
    mkdirSync(rootPath, { recursive: true });

    /* write images */
    images.forEach((image) => {
      writeFileSync(join(rootPath, image.name), image.contents, {
        encoding: "binary",
      });
    });

    /* write config files */
    files.forEach((file) => {
      writeFileSync(join(rootPath, file.name), file.contents, {
        encoding: "utf8",
      });
    });

    const faviconsHtmlLinks = html.join("");
    writeFileSync(join(basepath, "links.html"), faviconsHtmlLinks);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

generateFavicons(
  "Hawk JS is the ultimate tool for web developers and SEO enthusiasts. Find out how it can streamline your SEO efforts, ensuring your website gains visibility and improves its search engine ranking.",
  "1.5.0"
);
