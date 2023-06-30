import dynamic from "next/dynamic";

const NumberedHeader = dynamic(() => import("@/components/common/NumberedHeader"));
const FeaturedProject = dynamic(() => import("@/components/homepage/FeaturedProject"));

const projects = [
  {
    title: "BR Equipment Rental",
    description:
      "A multilingual website for BR Rental, subsidiary of BR Media Group, which features an e-commerce product catalog. The platform includes essential functionalities such as a shopping cart and email integration. To facilitate seamless updates to the product catalog, I also built a dashboard using React and Firebase.",
    image: "/images/brrental.webp",
    link: "https://rental.brmg.md/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Google Scripts", "i18n"],
  },
  {
    title: "CAMA",
    description: "A business website for Chisinau Academy of Media Arts, part of BRMG. It includes the necessary information about the academy, such as courses and mentors, along with an application form. A blog section is also included, which is updated via a content management system.",
    image: "/images/cama.webp",
    link: "https://versusartist.com/",
    tech: ["Next.js", "TypeScript", "Google Scripts", "i18n", "Contentful"],
  },
  {
    title: "Versus Artist",
    description: "A multilingual business website for the Versus Artist music label, part of BRMG. It features a custom-built music player and information regarding artists and producers.",
    image: "/images/versusartist.webp",
    link: "https://versusartist.com/",
    tech: ["HTML", "SCSS", "jQuery"],
  },
  {
    title: "Romanian Wordle",
    description: "A minimalist Romanian-language Wordle clone, inspired by the popular game. The app features a word generator, a word checker algorithm and a virtual keyboard.",
    image: "images/wordle.webp",
    github: "https://github.com/danielavornic/wordle-ro",
    link: "https://wordle-ro.netlify.app/",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vitest"],
  },
  {
    title: "TopTrip",
    description: "A web platform for planning trips, developed for a university course. It features routes search with map integration, tickets and hotels recommendations and user authentication.",
    image: "/images/toptrip.webp",
    link: "https://top-trip.vercel.app/",
    tech: ["React", "TypeScript", "Tailwind CSS", "mapbox", "Supabase"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mt-28 md:mt-32 lg:mt-40 xl:mt-52">
      <NumberedHeader number={2} heading="Projects" />

      <div className="space-y-8 md:space-y-10 lg:space-y-16 xl:space-y-20">
        {projects.map((project, index) => (
          <FeaturedProject key={index} project={project} dir={index % 2 ? "right" : "left"} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
