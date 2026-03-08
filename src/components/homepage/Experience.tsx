import cn from "classnames";
import dynamic from "next/dynamic";
import { useState } from "react";

const NumberedHeader = dynamic(() => import("@/components/common/NumberedHeader"));

const jobTabs = [
  {
    employer: "Lixium",
    dates: "May 2024 - October 2025",
    employerLink: "https://lixium.dev",
    title: "Front-end Developer",
    details: [
      "Owned front-end of 2 production B2B SaaS platforms for logistics fleet management and truck repair operations serving multi-shop operators. Shaped architecture decisions and drove refactoring efforts.",
      "Designed and built a dental tourism platform in Next.js (patient-facing and doctor-facing) with interactive components.",
    ],
  },
  {
    employer: "IXOBIT LTD",
    dates: "September 2023 - March 2024",
    title: "Front-end Developer",
    details: [
      "Built ecommerce websites and landing pages for international and local companies using front-end technologies, built-in CMSs and Shopify.",
      "Implemented new features for older projects with React.js.",
    ],
  },

  {
    employer: "EBS Integrator",
    employerLink: "https://ebs-integrator.com/",
    dates: "May 2022 - May 2023",
    title: "Front-end Developer",
    details: [
      "Developed and shipped features across 4 production applications, including large-scale CMS and CRM systems, focusing on improving user experience and accessibility.",
      "Audited and improved Lighthouse performance and SEO scores across marketing pages.",
      "Built reusable Storybook components for the internal React UI library shared across 2 production applications.",
    ],
  },
  {
    employer: "BR Media Group",
    employerLink: "https://brmg.md/",
    dates: "Jun 2021 - Present",
    title: "Freelance Web Developer",
    details: [
      "Designed and managed over 5 web properties for a Moldovan media group, selecting technologies and infrastructure based on project requirements.",
      "Integrated local payment gateways and shipping providers into 2 e-commerce platforms.",
      "Drove 140k impressions and 48.6k clicks on the Născut în Moldova festival site via an SEO-optimized Next.js build.",
    ],
  },

  {
    employer: "Freelance",
    employerLink: "https://danielavornic.com/",
    dates: "2018 - 2020",
    title: "Front-end Developer",
    details: [
      "Created web applications and modules using front-end technologies, including HTML5, CSS3, and jQuery.",
      "Collaborated closely with local companies, such as SRL Pur-Rosalya, to maintain e-commerce WordPress websites.",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { title, employer, employerLink, dates, details } = jobTabs[activeTab];

  return (
    <section
      id="experience"
      className="mt-28 md:mt-32 lg:mt-40 xl:mt-52 xl:px-20 2xl:px-40 mx-auto"
    >
      <NumberedHeader number={1} heading="Experience" />

      <div className="w-full flex flex-col lg:flex-row lg:space-x-16">
        <div className="overflow-x-auto whitespace-nowrap lg:whitespace-normal lg:min-w-[200px] lg:overflow-x-hidden lg:flex lg:flex-col">
          {jobTabs.map(({ employer }, index) => (
            <button
              key={employer}
              className={cn(
                "px-4 py-2 font-mono lg:inline-block lg:text-left hover:text-lavender hover:bg-[#222234] transition mb-0.5 lg:mb-0 border-b lg:border-l lg:border-b-0 min-w-[120px] lg:min-w-full",
                {
                  "text-lavender border-lavender bg-[#222234]": activeTab === index,
                  "text-subtext0 border-subtext0 bg-transparent": activeTab !== index,
                },
              )}
              onClick={() => setActiveTab(index)}
            >
              {employer}
            </button>
          ))}
        </div>
        <div>
          <div className="px-6 py-4 md:py-8 lg:px-0 lg:py-0">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 space-x-2">
              <span className="text-text">{title}</span>
              <a
                className="text-lavender hover:underline hover:underline-offset-3 transition"
                href={employerLink}
                target="_blank"
              >
                @ {employer}
              </a>
            </h3>
            <p className="text-subtext0 font-mono mb-6 text-sm">{dates}</p>
            <ul className="list-disc marker:text-lavender list-outside">
              {details.map((detail, index) => (
                <li key={index} className="text-subtext0 mb-2">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
