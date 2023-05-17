import { useState } from "react";
import dynamic from "next/dynamic";
import cn from "classnames";

const NumberedHeader = dynamic(() => import("@/components/common/NumberedHeader"));

const jobTabs = [
  {
    employer: "BR Media Group",
    employerLink: "https://brmg.md/",
    dates: "July 2021 - Present",
    title: "Web Developer",
    details: [
      "Developed and maintained a React Native application for a client in the food industry.",
      "Built modern, scalable, and maintainable web applications using React, Redux, and TypeScript.",
      "Developed and maintained a React Native application for a client in the food industry.",
    ],
  },
  {
    employer: "EBS Integrator",
    employerLink: "https://ebs-integrator.com/",
    dates: "2019 - 2020",
    title: "Frontend Developer",
    details: [
      "Developed and maintained a React Native application for a client in the food industry.",
      "Developed and maintained a React Native application for a client in the food industry.",
      "Developed and maintained a React Native application for a client in the food industry.",
    ],
  },
  {
    employer: "Freelance",
    employerLink: "https://mysite.com/",
    dates: "2016 - 2017",
    title: "Frontend Developer",
    details: [
      "Developed and maintained a React Native application for a client in the food industry.",
      "Developed and maintained a React Native application for a client in the food industry.",
      "Developed and maintained a React Native application for a client in the food industry.",
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
            <h4 className="text-lg sm:text-xl font-semibold mb-2 space-x-2">
              <span className="text-text">{title}</span>
              <a
                className="text-lavender hover:underline hover:underline-offset-3 transition"
                href={employerLink}
                target="_blank"
              >
                @ {employer}
              </a>
            </h4>
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
