import dynamic from "next/dynamic";

const Button = dynamic(() => import("@/components/common/Button"), { ssr: false });

const Hero = () => {
  return (
    <section className="flex flex-col justify-center container min-h-screen h-screen -mt-[88px]">
      <h2 className="sm:text-lg text-lavender font-mono mb-4 lg:mb-8">Hi, my name is</h2>
      <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-text mb-4 lg:mb-6">
        Daniela Vornic.
      </h1>
      <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-subtext0">
        I build things for the web.
      </h2>

      <p className="text-subtext0 mt-10 md:mt-12 max-w-md text-justify">
        I&apos;m a frontend developer based in Chișinău, Moldova. I enjoy creating user interfaces
        that are both functional and easy to use.
      </p>

      <Button as="scrollLink" href="about" className="mt-12 md:mt-14 w-fit" aria-label="View more">
        View more
      </Button>
    </section>
  );
};

export default Hero;
