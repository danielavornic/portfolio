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
      "Maintaining and optimizing all 6 websites of the media hub.",
      "Collaborating closely with designers to implement new features and incorporate fresh designs.",
      "Successfully built 5 websites with portfolio and e-commerce functionalities.",
      "Implementing SEO best practices to improve search engine visibility and drive organic traffic.",
      "Conducting regular website audits and performance optimization to ensure optimal user experience.",
      "Troubleshooting and resolving frontend issues to enhance overall website functionality.",
    ],
  },
  {
    employer: "EBS Integrator",
    employerLink: "https://ebs-integrator.com/",
    dates: "May 2022 - May 2023",
    title: "Frontend Developer",
    details: [
      "Collaborated with back-end developers and web designers to enhance usability and create seamless user experiences.",
      "Successfully built small and large-scale applications using frontend technologies, adhering to best practices and coding standards.",
      "Implemented new features and modules, enhancing the functionality and user engagement of web applications.",
      "Actively participated in team discussions and brainstorming sessions to contribute ideas and strategies for improving product development processes.",
      "Assisted in website optimization and performance tuning, ensuring fast load times and efficient user interactions.",
      "Collaborated with project managers to ensure timely and successful project delivery.",
      "Stayed abreast of emerging technologies, industry trends, and best practices to ensure the adoption of innovative solutions.",
    ],
  },
  {
    employer: "Freelance",
    employerLink: "https://vornic.vercel.com/",
    dates: "2016 - 2017",
    title: "Frontend Developer",
    details: [
      "Created web applications and modules using frontend technologies.",
      "Maintained WordPress e-commerce websites for various companies, such as SRL Pur-Rosalya.",
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
