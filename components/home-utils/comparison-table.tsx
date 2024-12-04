export default function ComparisonTable() {
  return (
    <section className="py-5 leading-loose tracking-wide">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative z-10 max-w-2xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-bold sm:text-4xl text-center">
            Why Every <span className="text-primary">Website</span> Needs{" "}
            <span className="text-primary">Hawk.js</span>?
          </h3>
          <p className="mt-3 text-justify leading-loose">
            Submitting and keeping your website’s sitemap up-to-date is
            essential for SEO success, and Hawk.js makes this process
            effortless. From automating submissions to supporting multiple
            search engines, Hawk.js ensures your site stays indexed and visible.
            No matter the size of your project, Hawk.js is an indispensable tool
            that saves time, reduces errors, and boosts your SEO performance.
          </p>
        </div>

        <div className="border xl:w-[70%] my-10 rounded-xl overflow-scroll md:overflow-hidden mx-auto border-gray-300">
          <table
            id="compare"
            className="table-auto text-left text-[12.5px] md:text-md tracking-wider leading-loose"
          >
            <thead>
              <tr className="bg-gradient-to-r from-[#51c1b5] to-[#2d6a8a] text-white">
                <th className="border border-gray-300 px-4 py-2">Feature</th>
                <th className="border border-gray-300 px-4 py-2">
                  Traditional Sitemap Generation
                </th>
                <th className="border border-gray-300 px-4 py-2">Hawk.js</th>
              </tr>
            </thead>
            <tbody className="font-light">
              <tr>
                <td>Setup Time</td>
                <td>
                  <span>Long</span> - Manually creating sitemaps takes hours to
                  days, especially for large sites.
                </td>
                <td>
                  <span>Instant</span> - Hawk.js generates sitemaps in seconds
                  to minutes with minimal setup.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td>Error Risk</td>
                <td>
                  <span>High</span> - Mistakes in manual setup can break SEO,
                  leading to missed opportunities.
                </td>
                <td>
                  <span>Low</span> - Hawk.js ensures error-free, SEO-compliant
                  sitemaps with automated validation.
                </td>
              </tr>
              <tr>
                <td>Search Engine Integration</td>
                <td>
                  <span>Manual</span> - You need to submit and maintain sitemaps
                  manually for each search engine.
                </td>
                <td>
                  <span>Automated</span> - Hawk.js automates submission to major
                  search engines like Google, Bing, and Yahoo.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td>Real-Time Updates</td>
                <td>
                  <span>Manual</span> - Updating sitemaps after changes requires
                  submitting new versions.
                </td>
                <td>
                  <span>Automatic</span> - Hawk.js keeps your sitemap updated in
                  real time with site changes.
                </td>
              </tr>
              <tr>
                <td>Multi-Search Engine Support</td>
                <td>
                  <span>Limited</span> - Handling multiple search engines
                  requires extra configuration.
                </td>
                <td>
                  <span>Comprehensive</span> - Hawk.js supports all major search
                  engines, simplifying multi-platform SEO.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td>Time to Implement</td>
                <td>
                  <span>Long</span> - Each new page or feature demands manual
                  updates to the sitemap.
                </td>
                <td>
                  <span>Fast</span> - Hawk.js auto-generates your sitemap with
                  zero additional effort needed.
                </td>
              </tr>
              <tr>
                <td>Customization</td>
                <td>
                  <span>Limited</span> - Customization can require manual
                  adjustments and additional coding.
                </td>
                <td>
                  <span>Flexible</span> - Hawk.js is highly customizable to fit
                  diverse needs, from small blogs to large enterprises.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td>Impact on SEO</td>
                <td>
                  <span>Unpredictable</span> - SEO results depend on manual
                  accuracy and ongoing maintenance.
                </td>
                <td>
                  <span>Optimized</span> - Hawk.js ensures your sitemap is
                  SEO-ready, boosting visibility and rankings automatically.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
