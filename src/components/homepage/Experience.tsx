import { useState } from "react";
import dynamic from "next/dynamic";
import cn from "classnames";

const NumberedHeader = dynamic(() => import("@/components/common/NumberedHeader"));

const jobTabs = [
  {
    employer: "IXOBIT LTD",
    dates: "September 2023 - March 2024",
    title: "Front-end Developer",
    details: [
      "Built ecommerce websites and landing pages for international and local companies using front-end technologies, built-in CMSs and Shopify.",
      "Implemented new features of older projects with React.js.",
      "Collaborated with designers to implement new features and incorporate fresh designs.",
    ],
  },

  {
    employer: "EBS Integrator",
    employerLink: "https://ebs-integrator.com/",
    dates: "May 2022 - May 2023",
    title: "Frontend Developer",
    details: [
      "Successfully built small and large-scale applications using frontend React.js and Next.js.",
      "Implemented new features and modules, enhancing the functionality and user engagement of web applications.",
      "Collaborated with a 5-member front-end team, back-end developers, web designers and project managers to deliver projects on time.",
      "Assisted in website optimization and performance tuning, ensuring fast load times and efficient user interactions.",
    ],
  },
  {
    employer: "BR Media Group",
    employerLink: "https://brmg.md/",
    dates: "July 2021 - Present",
    title: "Web Developer",
    details: [
      "Maintain and optimize all 6 websites of the media hub.",
      "Collaborated closely with designers to implement new features and incorporate fresh designs.",
      "Built 5 websites with portfolio and e-commerce functionalities.",
      "Implemented SEO best practices to improve search engine visibility and drive organic traffic.",
      "Conducted regular website audits and performance optimization to ensure optimal user experience.",
      "Troubleshooted and resolved frontend issues to enhance overall website functionality.",
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
