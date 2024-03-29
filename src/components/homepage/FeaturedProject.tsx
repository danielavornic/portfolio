import cn from "classnames";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  link: string;
  tech: string[];
}

interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
  project: Project;
  dir?: "left" | "right";
}

const FeaturedProject = ({ project, dir = "left", className, ...props }: ProjectProps) => {
  const { title, description, image, github, link, tech } = project;

  return (
    <div
      className={cn(
        "relative h-[460px] md:h-96 flex shadow-menu justify-between lg:shadow-none group",
        className,
        {
          "lg:justify-end": dir === "right",
        },
      )}
      {...props}
    >
      <div
        className={cn(
          "flex flex-col items-center text-text text-center p-10 relative z-10 lg:p-0 lg:absolute lg:top-0 lg:bottom-0 justify-center lg:max-w-md xl:max-w-lg 2xl:max-w-xl",
          {
            "lg:right-0": dir === "left",
            "lg:left-0": dir === "right",
          },
        )}
      >
        <div className={cn("w-full text-left", { "lg:text-right": dir === "left" })}>
          <p className="text-lavender text-sm font-mono mb-2">Featured Project</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lavender transition"
            aria-label={title}
          >
            <h3 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-10 lg:inline-block">{title}</h3>
          </a>
          <p className="mb-10 lg:p-4 xl:p-6 lg:bg-[#28283e] lg:shadow-sm lg:hover:shadow-lg transition whitespace-pre-line">
            {description}
          </p>

          <ul
            className={cn("flex flex-wrap", {
              "lg:justify-end": dir === "left",
            })}
          >
            {tech.map((t, i) => (
              <li key={i} className="text-sm font-mono mr-4">
                {t}
              </li>
            ))}
          </ul>

          <div
            className={cn("flex flex-wrap space-x-6 mt-6 text-2xl", {
              "lg:justify-end": dir === "left",
            })}
          >
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lavender transition"
                aria-label="GitHub Link"
              >
                <FiGithub className="text-xl" />
              </a>
            )}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lavender transition"
              aria-label="Live Link"
            >
              <FiExternalLink className="text-xl" />
            </a>
          </div>
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={title}
        className="cursor-pointer shadow-md lg:shadow-none group-hover:shadow-lg lg:hover:shadow-none absolute top-[50%] -translate-y-[50%] h-full md:h-96 w-full z-0 lg:block lg:relative lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
      >
        <div
          className="bg-cover bg-center bg-no-repeat h-full md:h-96 w-full lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl opacity-10 lg:opacity-100 featured-project-image transition"
          style={{ backgroundImage: `url(${image})` }}
        />
      </a>
    </div>
  );
};

export default FeaturedProject;
