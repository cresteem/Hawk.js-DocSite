import { Stepper } from "@mantine/core";
import { RiDownloadLine, RiKeyFill, RiSettings2Fill } from "react-icons/ri";
import Logo from "../utils/hawk-logo";

export default function HowItWorks() {
  return (
    <section className="py-7 leading-loose tracking-wide">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-bold sm:text-4xl text-center">
            How to Get Started with Hawk.js 🚀
            <span className="text-primary font-semibold">
              Effortless Setup for Seamless SEO
            </span>
          </h3>
          <p className="mt-6 text-justify">
            Hawk.js simplifies sitemap generation and submission through
            automation to help your website get visibilty on search engines.
            With just a few steps, you can integrate powerful tools and
            strategies to enhance your website’s search engine visibility.
          </p>
        </div>
        <div className="relative mt-12 px-3 lg:w-[50%] mx-auto">
          <Stepper
            active={4}
            orientation="vertical"
            color="#008080"
            styles={{
              stepDescription: { lineHeight: "4ch", paddingBottom: "3em" },
            }}
            allowNextStepsSelect={false}
          >
            <Stepper.Step
              label="Step 1: Install Hawk.js"
              description="Use your favorite package manager to add Hawk.js to your project."
              completedIcon={<RiDownloadLine size={20} />}
              allowStepSelect={false}
            />

            <Stepper.Step
              label="Step 2: Configure Hawk.js"
              description="Generate a configuration file using CLI and configure in it."
              completedIcon={<RiSettings2Fill size={20} />}
              allowStepSelect={false}
            />
            <Stepper.Step
              label="Step 3: Set Up Credentials"
              description="Obtain a service account key file from Google Cloud Console and save the file as gserv.json. Add your FTP credentials to the configuration file."
              completedIcon={<RiKeyFill size={20} />}
              allowStepSelect={false}
            />
            <Stepper.Step
              label="Step 4: Trigger Hawk.js"
              description="Run Hawk.js via CLI or integrate it directly into your application using its API"
              completedIcon={<Logo className="w-[20px]" />}
              allowStepSelect={false}
            />
          </Stepper>
        </div>
      </div>
    </section>
  );
}
