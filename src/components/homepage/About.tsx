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
            Hi! I am Daniela Vornic and I am a dedicated frontend developer with a passion for
            creating user interfaces. As a current student pursuing a Bachelor of Science in
            Software Engineering, I bring a fresh perspective and a hunger for continuous learning
            to every project I undertake. With over three years of experience in web development, I
            have refined my skills in designing captivating websites and applications.
          </p>
          <p>
            I constantly stay abreast of the latest industry trends and emerging technologies, as I
            believe in the power of continuous learning and growth. I am a firm believer in the
            power of teamwork and collaboration, and I am always looking for opportunities to
            collaborate with other developers and designers.
          </p>
          <p>Here are a few technologies I&apos;m working with:</p>
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
