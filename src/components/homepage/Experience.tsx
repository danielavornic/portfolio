import cn from "classnames";
import dynamic from "next/dynamic";
import { useState } from "react";

const NumberedHeader = dynamic(() => import("@/components/common/NumberedHeader"));

const jobTabs = [
  {
    employer: "Lixium",
    dates: "May 2024 - Present",
    employerLink: "https://lixium.dev",
    title: "Frontend Developer",
    details: [
      "Currently developing an ecosystem of Next.js web platforms, including interactive dashboards and workflows, for logistics and truck repair operations.",
      "Working closely with project managers and developers to design the most fitting and efficient solutions for the client's needs.",
    ],
  },
  {
    employer: "BR Media Group",
    employerLink: "https://brmg.md/",
    dates: "July 2021 - Present",
    title: "Web Developer",
    details: [
      "Maintaining all 5 websites of the media hub. This covers portfolio sites with headless CMS libraries in Next.js, e-commerce platforms, inventory dashboards, and landing pages.",
      "Implemented SEO best practices to improve search engine visibility and drive organic traffic.",
      "Collaborated closely with designers to implement new features and incorporate fresh designs.",
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
    title: "Frontend Developer",
    details: [
      "Contributed to the development of 2 small and 3 large-scale applications, including CMS and CRM systems.",
      "Contributed to the team's internal React UI library using Storybook.",
      "Assisted in website optimization and tuning.",
      "Collaborated with a 5-member front-end team, back-end developers, web designers and project managers to deliver projects on time.",
    ],
  },

  {
    employer: "Freelance",
    employerLink: "https://danielavornic.com/",
    dates: "2018 - 2020",
    title: "Frontend Developer",
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
