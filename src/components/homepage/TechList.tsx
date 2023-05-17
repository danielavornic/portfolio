const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "SCSS"];
const firstColumnSkills = skills.slice(0, 3);
const secondColumnSkills = skills.slice(3);

const TechList = () => {
  return (
    <div className="flex flex-col font-mono text-subtext0 md:flex-row md:space-x-8">
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
