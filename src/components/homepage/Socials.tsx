import { FiGithub, FiLinkedin } from "react-icons/fi";

const socials = [
  {
    name: "LinkedIn",
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/danielavornic/",
  },
  {
    name: "GitHub",
    icon: <FiGithub />,
    url: "https://github.com/danielavornic",
  },
];

const Socials = () => (
  <aside className="fixed bottom-0 left-6 sm:left-10 lg:left-12 hidden sm:flex flex-col justify-center items-center">
    <ul className="flex flex-col items-center justify-center space-y-6">
      {socials.map(({ name, icon, url }, index) => (
        <li
          key={index}
          className="text-2xl text-subtext0 hover:text-lavender hover:-translate-y-1 focus:text-mauve transition"
        >
          <a href={url} target="_blank" rel="noreferrer" aria-label={name} className="block">
            {icon}
          </a>
        </li>
      ))}
    </ul>
    <div className="mt-6 bg-subtext0 h-24 w-0.5" />
  </aside>
);
export default Socials;
