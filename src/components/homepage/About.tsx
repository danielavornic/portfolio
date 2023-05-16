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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iste tempore odio
            reprehenderit delectus dolores rerum! Omnis distinctio molestias, magnam repellendus
            doloribus nihil illum qui et aliquam id praesentium suscipit! Lorem ipsum dolor
            sit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iste tempore odio
            reprehenderit delectus dolores rerum! Omnis distinctio molestias, magnam repellendus
            doloribus nihil illum qui et aliquam id praesentium suscipit! Lorem ipsum dolor sit.
          </p>
          <p>Here are a few technologies I&apos;m working with:</p>
          <TechList />
        </div>
        <div>
          <div className="about-img-wrapper mt-4 relative transition w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]">
            <Image
              src="https://placekitten.com/g/500/500"
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
