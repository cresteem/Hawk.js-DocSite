import CresteemBrandMark from "../utils/cresteem-logo";
import NPMInstall from "../utils/npm-install";
import GetStarted from "./get-started";
import Universe from "./universe";

export default function Hero() {
  return (
    <section className="py-[5%] xl:py-8 mt-6 sm:mt-0 w-[100%]">
      <div className="w-full max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden flex md:px-8 flex-col lg:flex-row">
        <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
          <h1 className="text-sm text-primary font-medium">
            One Tool, All Search Engines.
          </h1>
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            <span className="text-primary">Hawk.js:</span> Let Search Engines
            Finally Notice You –{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#51c1b5] to-[#2d6a8a]">
              No More Hiding!
            </span>
          </h2>
          <p>
            Automates your SEO process by effortlessly submitting your sitemap,
            ensuring search engines like{" "}
            <a href="https://google.com/">Google</a>,{" "}
            <a href="https://bing.com/">Bing</a>,{" "}
            <a href="https://www.yahoo.com/">Yahoo</a>,{" "}
            <a href="https://duckduckgo.com/">DuckDuckGo</a>,{" "}
            <a href="https://yandex.com/">Yandex</a>,{" "}
            <a href="https://www.naver.com/">Naver</a>,{" "}
            <a href="https://www.seznam.cz/">Seznam.cz</a>, and{" "}
            <a href="https://yep.com/">Yep</a> stay updated with your latest
            content.
          </p>
          <div className="sm:items-center sm:justify-center gap-x-3 space-y-3 flex flex-col sm:flex-row sm:space-y-0 pb-7 mx-auto">
            <NPMInstall className="relative sm:w-[50%]" />
            <GetStarted className="sm:w-[50%] bg-primary px-[10%] py-[6px] text-white font-semibold tracking-wider  rounded-lg text-center border-[2px] hover:bg-primary/[80%] border-primary" />
          </div>
        </div>
        <div className="w-[66vw] h-[67vw] lg:w-[20rem] lg:h-[20rem] xl:w-[25rem] xl:h-[25rem] relative my-8 px-4 sm:my-0 lg:px-0 mx-auto">
          <Universe className="flex m-auto h-full w-full lg:mt-5" />
        </div>
      </div>
      <div className="lg:mt-8 px-4 md:px-8">
        <p className="text-center text-sm text-gray-700 font-semibold">
          Sponsor by the best companies
        </p>
        <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6 text-primary">
          <a href="https://cresteem.com/" target="_blank">
            <CresteemBrandMark classNames="w-[190px]" />
          </a>
          <a className="bl" href="/sponsors">
            Your Logo can be Here
          </a>
        </div>
      </div>
    </section>
  );
}
