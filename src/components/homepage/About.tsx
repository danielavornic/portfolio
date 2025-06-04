import dynamic from "next/dynamic";
import Image from "next/image";

const NumberedHeader = dynamic(() => import("@/components/common/NumberedHeader"));
const TechList = dynamic(() => import("@/components/homepage/TechList"));

const About = () => {
  return (
    <section id="about">
      <NumberedHeader number={0} heading="About me" />

      <div className="flex flex-col items-center space-y-6 sm:space-y-10 lg:flex-row lg:space-y-0 lg:justify-between lg:space-x-10 xl:space-x-12 lg:items-start w-full">
        <div className="text-subtext0 space-y-4">
          <p>
            I&apos;m in my final year of Software Engineering, splitting my time between classes and
            development work. The past three years have been a mix of personal projects,
            freelancing, and working with local companies, each one teaching me something new.
          </p>
          <p>
            While I enjoy coding on my own, my best work and the most effective learning happens
            when working around with other developers and designers. There&apos;s always a new
            problem to solve or a better way to build something, and that&apos;s what keeps me
            engaged.
          </p>
          <p>Here are a few technologies I&apos;m currently working with:</p>
          <TechList />
        </div>
        <div>
          <div className="about-img-wrapper mt-4 relative transition w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]">
            <Image
              src="/images/profile.png"
              alt="Daniela Vornic"
              className="rounded-lg -translate-y-4 transition duration-300"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
