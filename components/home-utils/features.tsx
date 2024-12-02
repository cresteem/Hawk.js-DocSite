import { ReactElement } from "react";
import { FaCog, FaGithub, FaLinux, FaReact, FaSearch } from "react-icons/fa";

export default function Features() {
  const features: { icon: ReactElement; title: string; desc: string }[] = [
    {
      icon: <FaCog size={30} />,
      title: "Automated Sitemap Generation",
      desc: "Effortlessly generate comprehensive sitemaps for your entire website. Hawk.js automates the sitemap creation process, ensuring your site is properly indexed, driving better SEO performance without the manual hassle.",
    },
    {
      icon: <FaSearch size={30} />,
      title: "Multi-Engine Sitemap Submission",
      desc: "Automatically submit your sitemaps to popular search engines like Google, Bing, Yahoo, DuckDuckGo, and more. With support for IndexNow, Hawk.js ensures real-time submission and boosts your site’s visibility across the web.",
    },
    {
      icon: <FaGithub size={30} />,
      title: "Seamless CI/CD Integration",
      desc: "Integrate Hawk.js effortlessly into your Continuous Integration (CI) pipelines using GitHub Actions, GitLab CI, Jenkins, and more. Automate sitemap management as part of your deployment workflow to keep your SEO always up-to-date.",
    },
    {
      icon: <FaLinux size={30} />,
      title: "Cross-Platform Support",
      desc: "Hawk.js runs smoothly on major operating systems, including Linux, Windows, and macOS, ensuring flexibility in your development environment. Easily integrate with any system that supports Node.js.",
    },
    {
      icon: <FaReact size={30} />,
      title: "Open-Source and Free to Use",
      desc: "Licensed under the Apache 2.0 license, Hawk.js is completely open-source and free to use for personal and commercial projects. Contribute to the project and be part of a growing community of developers.",
    },
  ];

  return (
    <section className="py-14 leading-loose tracking-wide">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Key Features of <span className="text-primary">Hawk.js</span> -
            Boost Your <span className="text-primary">SEO with Automation</span>
          </h3>
          <p className="mt-3">
            From automatic sitemap generation and multi-engine submissions to
            seamless CI/CD integration, Hawk.js helps you save time, improve
            search engine visibility, and ensure your content is always
            up-to-date. Whether you’re a developer, SEO professional, or digital
            marketer, Hawk.js makes managing your website's SEO easier and more
            efficient.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="space-y-3 hover:bg-secondary/[2%] rounded-lg p-4 border border-transparent hover:border-primary/[60%]"
              >
                <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-primary bg-primary/[10%]">
                  {item.icon}
                </div>
                <h4 className="text-lg text-primary font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
