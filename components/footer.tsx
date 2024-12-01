import Link from "next/link";
import { RiGithubFill, RiNpmjsFill, RiTelegramFill } from "react-icons/ri";
import CresteemBrandMark from "./utils/cresteem-logo";
import Logo from "./utils/hawk-logo";

export default function Footer() {
  const footerNavs = [
    {
      href: "/docs",
      name: "Documentation",
    },
    {
      href: "/about",
      name: "About",
    },
    {
      href: "/blogs",
      name: "Blogs",
    },
    {
      href: "/sponsors",
      name: "Sponsors",
    },
  ];

  return (
    <footer
      className="text-gray-500 px-4 pb-5 pt-[10%] md:pt-[3%] w-full md:px-8 border-t"
      style={{ margin: 0 }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-lg mx-auto text-center">
          <div className="">
            <Logo className="w-20 mx-auto text-primary" />
            <p className="font-bold ml-2 text-xl text-primary tracking-widest text-center">
              Hawk.js
            </p>
          </div>

          <p className="leading-relaxed mt-2 text-[15px] text-justify">
            Hawk.js is an advanced, open-source sitemap generator and SEO
            automation tool designed to enhance your website's search engine
            visibility. It automates the creation of comprehensive sitemaps and
            simplifies their submission to major search engines such as Google,
            Bing, Yahoo, Yandex, and more. With support for multiple indexing
            strategies like IndexNow and Google Webmaster Tools, Hawk.js ensures
            your website is indexed accurately and quickly, driving better SEO
            performance.
          </p>
        </div>
        <ul className="text-center items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
          {footerNavs.map((item, idx) => (
            <li className=" hover:text-gray-800" key={idx}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 items-center justify-between flex flex-col lg:flex-row gap-y-5">
          <div className="mt-4 sm:mt-0 text-center">
            <Link
              href="https://github.com/cresteem/Hawk.js/blob/main/LICENSE"
              target="_blank"
            >
              &copy; 2024 Hawk.js licensed under Apache-2.0.
            </Link>
          </div>
          <Link
            href="https://cresteem.com/"
            target="_blank"
            about="blank"
            aria-label="This website is built by cresteem.com"
            style={{ zIndex: 200 }}
            className="flex justify-center items-center gap-x-2 relative text-gray-600"
          >
            {" "}
            Powered By
            <CresteemBrandMark classNames="h-4" />
          </Link>
          <Link
            href="https://darsan.in/"
            target="_blank"
            about="blank"
            aria-label="This website is designed & built by darsan.in"
            className="flex justify-center items-center gap-x-2 relative text-gray-600"
          >
            Built By{" "}
            <span className="font-semibold text-green-500 underline">
              DARSAN✅
            </span>
          </Link>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4 justify-center">
              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <Link
                  href="https://github.com/cresteem/Hawk.js"
                  target="_blank"
                >
                  <RiGithubFill className="w-6 h-6 text-black" />
                </Link>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <Link
                  href="https://www.npmjs.com/package/@cresteem/hawk-js"
                  target="_blank"
                >
                  <RiNpmjsFill className="w-6 h-6 text-red-500" />
                </Link>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <Link href="https://t.me/cresteem/6" target="_blank">
                  <RiTelegramFill className="w-6 h-6 text-[#0088cc]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
