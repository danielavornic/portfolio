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
            I recently graduated in Software Engineering, currently building web products
            independently for clients and organizations. The past several years have been a mix of
            part-time roles, freelancing, and personal projects, also mostly around the web.
          </p>
          <p>
            Outside of work, I enjoy tinkering while homelabbing, self-hosting, and going down
            rabbit holes. Curiosity and self-efficacy are what drive me, so I&apos;m always eager to
            know more and do better, whether in my career or in my personal endeavours.
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
