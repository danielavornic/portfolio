import dynamic from "next/dynamic";

const NumberedHeader = dynamic(() => import("@/components/common/NumberedHeader"));
const FeaturedProject = dynamic(() => import("@/components/homepage/FeaturedProject"));

const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.\n Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.",
    image: "https://placekitten.com/g/500/500",
    github: "",
    link: "",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://placekitten.com/g/500/500",
    github: "",
    link: "",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://placekitten.com/g/500/500",
    github: "",
    link: "",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mt-28 md:mt-32 lg:mt-40 xl:mt-52">
      <NumberedHeader number={2} heading="Projects" />

      <div className="space-y-8 md:space-y-14 xl:space-y-20">
        {projects.map((project, index) => (
          <FeaturedProject key={index} project={project} dir={index % 2 ? "right" : "left"} />
        ))}
      </div>
    </section>
  );
};

export default Projects;