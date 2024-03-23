const skills = [
  "Next.js",
  "React.js",
  "TypeScript",
  "React Query",
  "Redux",
  "Tailwind CSS",
  "SCSS",
  "Wordpress",
];
const firstColumnSkills = skills.slice(0, 4);
const secondColumnSkills = skills.slice(4);

const TechList = () => {
  return (
    <div className="flex flex-col font-mono text-subtext0 sm:flex-row sm:space-x-8">
      <ul className="list-disc list-inside marker:text-lavender space-y-3 mb-3 md:mb-0">
        {firstColumnSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <ul className="list-disc list-inside marker:text-lavender space-y-3">
        {secondColumnSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;
